import { PDFDocument } from "pdf-lib";
import chromium from "@sparticuz/chromium";
import puppeteer, { type Browser, type LaunchOptions } from "puppeteer-core";

export interface PDFGenerateOptions {
  url: string;
  outputPath?: string;
}

export interface PDFMergeOptions {
  urls: string[];
  outputPath?: string;
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

async function renderPDF(browser: Browser, url: string): Promise<Buffer> {
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
}: PDFMergeOptions): Promise<Buffer> {
  if (urls.length === 0) {
    throw new Error("병합할 PDF URL이 없습니다.");
  }

  const browser = await launchBrowser();

  try {
    const mergedDocument = await PDFDocument.create();

    for (const url of urls) {
      const renderedPDF = await renderPDF(browser, url);
      const sourceDocument = await PDFDocument.load(renderedPDF);
      const pages = await mergedDocument.copyPages(
        sourceDocument,
        sourceDocument.getPageIndices()
      );

      pages.forEach((page) => mergedDocument.addPage(page));
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
