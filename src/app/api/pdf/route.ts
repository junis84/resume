import { NextRequest, NextResponse } from "next/server";
import { generatePDF } from "@/lib/pdf";

export async function GET(request: NextRequest) {
  try {
    // 요청 origin에서 기본 URL 추출
    const origin = request.headers.get("host") || "localhost:3000";
    const protocol = origin.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${origin}`;

    // PDF 생성
    const pdfBuffer = await generatePDF({
      url: baseUrl,
    });

    // PDF 응답 반환
    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume-junyeong-eom.pdf"',
        "Content-Length": pdfBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "PDF 생성 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
