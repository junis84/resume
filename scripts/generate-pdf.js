#!/usr/bin/env node

const path = require("path");
const fs = require("fs/promises");

const documents = [
  {
    key: "resume",
    filename: "junyeong-eom-resume-career-history.pdf",
  },
  {
    key: "portfolio",
    filename: "junyeong-eom-ai-engineering-portfolio.pdf",
  },
];

async function generatePDF() {
  const outputDir = path.join(__dirname, "..", "public", "output");
  await fs.mkdir(outputDir, { recursive: true });

  const baseUrl = process.env.RESUME_URL || "http://localhost:3000";
  console.log("🚀 통합 PDF 2종 생성 시작...");

  for (const document of documents) {
    const apiUrl = new URL("/api/pdf", baseUrl);
    apiUrl.searchParams.set("document", document.key);

    console.log(`📄 생성 중: ${document.filename}`);
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`${document.key} PDF 생성 실패 (${response.status})`);
    }

    const outputPath = path.join(outputDir, document.filename);
    const pdfBuffer = Buffer.from(await response.arrayBuffer());
    await fs.writeFile(outputPath, pdfBuffer);
    console.log(`✅ 생성 완료: ${outputPath}`);
  }
}

generatePDF().catch((error) => {
  console.error("❌ PDF 생성 실패:", error.message);
  process.exit(1);
});
