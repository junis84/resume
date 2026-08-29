import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import chromium from "@sparticuz/chromium";
import puppeteer, { type Browser, type LaunchOptions } from "puppeteer-core";

export interface PDFGenerateOptions {
  url: string;
  outputPath?: string;
}

export interface PDFMergeOptions {
  urls: string[];
  outputPath?: string;
  pageNumberStart?: number;
  sectionLabels?: readonly string[];
  footerIdentity?: string | false;
  metadata?: {
    title?: string;
    author?: string;
    subject?: string;
  };
}

async function getBrowserLaunchOptions(): Promise<LaunchOptions> {
  const localExecutablePath =
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    (process.platform === "darwin"
      ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      : undefined);

  if (localExecutablePath) {
    return {
      headless: true,
      executablePath: localExecutablePath,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    };
  }

  chromium.setGraphicsMode = false;

  return {
    headless: "shell",
    executablePath: await chromium.executablePath(),
    args: await puppeteer.defaultArgs({
      args: chromium.args,
      headless: "shell",
    }),
  };
}

async function launchBrowser() {
  return puppeteer.launch(await getBrowserLaunchOptions());
}

async function renderPDF(browser: Browser, url: string, tagged = false): Promise<Buffer> {
  const page = await browser.newPage();

  try {
    // A4 크기로 뷰포트 설정 (210mm x 297mm at 96dpi)
    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 2,
    });

    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    await page.waitForFunction(
      () => document.fonts.ready.then(() => true),
      { timeout: 10000 }
    );

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      tagged,
      outline: tagged,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });

    return Buffer.from(pdfBuffer);
  } finally {
    await page.close();
  }
}

async function writeOutput(outputPath: string | undefined, pdfBuffer: Buffer) {
  if (!outputPath) return;

  const fs = await import("fs/promises");
  await fs.writeFile(outputPath, pdfBuffer);
}

async function applyMetadata(pdfBuffer: Buffer, metadata?: PDFMergeOptions["metadata"]): Promise<Buffer> {
  if (!metadata) return pdfBuffer;

  // Loading and saving the original Chromium document preserves its tagged
  // structure, unlike copying pages into a new document, while allowing us to
  // add recruiter-friendly document metadata.
  const document = await PDFDocument.load(pdfBuffer);
  if (metadata.title) document.setTitle(metadata.title);
  if (metadata.author) document.setAuthor(metadata.author);
  if (metadata.subject) document.setSubject(metadata.subject);
  document.setCreator("Junyeong Eom Resume");
  document.setProducer("Junyeong Eom Resume");
  return Buffer.from(await document.save());
}

export async function generatePDF({
  url,
  outputPath,
}: PDFGenerateOptions): Promise<Buffer> {
  const browser = await launchBrowser();

  try {
    const pdfBuffer = await renderPDF(browser, url);
    await writeOutput(outputPath, pdfBuffer);
    return pdfBuffer;
  } finally {
    await browser.close();
  }
}

export async function generateMergedPDF({
  urls,
  outputPath,
  metadata,
  pageNumberStart,
  sectionLabels,
  footerIdentity = "Junyeong Eom",
}: PDFMergeOptions): Promise<Buffer> {
  if (urls.length === 0) {
    throw new Error("병합할 PDF URL이 없습니다.");
  }

  const browser = await launchBrowser();

  try {
    if (urls.length === 1 && pageNumberStart === undefined) {
      // 한 DOM을 Chromium에서 직접 출력하면 구조 태그와 논리적 읽기 순서를
      // 페이지 복사 없이 그대로 보존할 수 있다.
      const pdfBuffer = await applyMetadata(await renderPDF(browser, urls[0], true), metadata);
      await writeOutput(outputPath, pdfBuffer);
      return pdfBuffer;
    }

    let mergedDocument: PDFDocument;
    const mergedPageLabels: string[] = [];

    if (urls.length === 1) {
      // ATS용 단일 문서는 Chromium이 만든 logical structure/tag를 그대로
      // 보존한다. 새 문서에 페이지만 복사하면 읽기 순서 태그가 유실된다.
      mergedDocument = await PDFDocument.load(await renderPDF(browser, urls[0], true));
      const pageCount = mergedDocument.getPageCount();
      mergedPageLabels.push(...Array(pageCount).fill(sectionLabels?.[0] ?? ""));
    } else {
      mergedDocument = await PDFDocument.create();
      for (const [sourceIndex, url] of urls.entries()) {
        const renderedPDF = await renderPDF(browser, url);
        const sourceDocument = await PDFDocument.load(renderedPDF);
        const pages = await mergedDocument.copyPages(
          sourceDocument,
          sourceDocument.getPageIndices()
        );

        pages.forEach((page) => {
          mergedDocument.addPage(page);
          mergedPageLabels.push(sectionLabels?.[sourceIndex] ?? "");
        });
      }
    }

    if (pageNumberStart !== undefined) {
      const pages = mergedDocument.getPages();
      const font = await mergedDocument.embedFont(StandardFonts.Helvetica);
      pages.forEach((page, index) => {
        if (index < pageNumberStart) return;
        const label = `${index + 1} / ${pages.length}`;
        const size = 7;
        const width = font.widthOfTextAtSize(label, size);
        const section = mergedPageLabels[index];
        if (footerIdentity !== false) {
          page.drawText(section ? `${footerIdentity} · ${section}` : footerIdentity, {
            x: 18,
            y: 10,
            size,
            font,
            color: rgb(0.47, 0.44, 0.42),
          });
        }
        page.drawText(label, {
          x: page.getWidth() - width - 18,
          y: 10,
          size,
          font,
          color: rgb(0.47, 0.44, 0.42),
        });
      });
    }

    if (metadata?.title) mergedDocument.setTitle(metadata.title);
    if (metadata?.author) mergedDocument.setAuthor(metadata.author);
    if (metadata?.subject) mergedDocument.setSubject(metadata.subject);
    mergedDocument.setCreator("Junyeong Eom Resume");
    mergedDocument.setProducer("Junyeong Eom Resume");

    const pdfBuffer = Buffer.from(await mergedDocument.save());
    await writeOutput(outputPath, pdfBuffer);
    return pdfBuffer;
  } finally {
    await browser.close();
  }
}
