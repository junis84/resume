import puppeteer from "puppeteer";

export interface PDFGenerateOptions {
  url: string;
  outputPath?: string;
}

export async function generatePDF({
  url,
  outputPath,
}: PDFGenerateOptions): Promise<Buffer> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    // A4 크기로 뷰포트 설정 (210mm x 297mm at 96dpi)
    await page.setViewport({
      width: 794, // 210mm at 96dpi
      height: 1123, // 297mm at 96dpi
      deviceScaleFactor: 2, // 고해상도
    });

    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // 폰트 로딩 대기
    await page.waitForFunction(
      () => document.fonts.ready.then(() => true),
      { timeout: 10000 }
    );

    // PDF 생성
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "0.85cm",
        right: "0.85cm",
        bottom: "0.85cm",
        left: "0.85cm",
      },
    });

    // 파일로 저장 (옵션)
    if (outputPath) {
      const fs = await import("fs/promises");
      await fs.writeFile(outputPath, pdfBuffer);
    }

    return Buffer.from(pdfBuffer);
  } finally {
    await browser.close();
  }
}
