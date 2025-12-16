#!/usr/bin/env node

const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

async function generatePDF() {
  const outputDir = path.join(__dirname, "..", "public", "output");
  const outputPath = path.join(outputDir, "resume.pdf");

  // 출력 디렉토리 생성
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("🚀 PDF 생성 시작...");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    // A4 크기로 뷰포트 설정
    await page.setViewport({
      width: 794,
      height: 1123,
      deviceScaleFactor: 2,
    });

    // 로컬 개발 서버 URL (기본 포트 3000)
    const url = process.env.RESUME_URL || "http://localhost:3000";
    console.log(`📄 페이지 로딩: ${url}`);

    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // 폰트 로딩 대기
    await page.waitForFunction(
      () => document.fonts.ready.then(() => true),
      { timeout: 10000 }
    );

    console.log("📝 PDF 생성 중...");

    // PDF 생성
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "0.85cm",
        right: "0.85cm",
        bottom: "0.85cm",
        left: "0.85cm",
      },
    });

    console.log(`✅ PDF 생성 완료: ${outputPath}`);
  } catch (error) {
    console.error("❌ PDF 생성 실패:", error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

generatePDF();
