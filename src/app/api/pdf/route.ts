import { NextRequest, NextResponse } from "next/server";
import { generateMergedPDF } from "@/lib/pdf";
import { localizedPath, resolveResumeLocale } from "@/lib/locale";

export const runtime = "nodejs";
export const maxDuration = 60;

const documents = {
  resume: {
    paths: ["/print/resume"],
    filename: "junyeong-eom-resume.pdf",
    title: "Junyeong Eom — Resume & Career History",
    subject: "Resume followed by complete career history",
    pageNumberStart: 0,
    footerIdentity: "Junyeong Eom · Senior AI & Backend Engineer",
    sectionLabels: ["Resume & Career History"],
  },
  portfolio: {
    paths: ["/print/portfolio"],
    filename: "junyeong-eom-ai-engineering-portfolio.pdf",
    title: "Junyeong Eom — AI Engineering Portfolio",
    subject: "Harness Engineering, enterprise knowledge and analytics agents, and open-source engineering portfolio",
    pageNumberStart: 0,
    footerIdentity: false,
    sectionLabels: ["AI Engineering Portfolio"],
  },
  "portfolio-en": {
    paths: ["/portfolio/english"],
    filename: "junyeong-eom-ai-engineering-portfolio-en.pdf",
    title: "Junyeong Eom — AI Engineering Portfolio",
    subject: "Enterprise knowledge and analytics agents, harness engineering, and open-source engineering tools",
    pageNumberStart: 0,
    footerIdentity: false,
    sectionLabels: ["English Portfolio"],
  },
} as const;

type DocumentKey = keyof typeof documents;

function isDocumentKey(value: string): value is DocumentKey {
  return value in documents;
}

export async function GET(request: NextRequest) {
  try {
    // 요청 origin에서 기본 URL 추출
    const host = request.headers.get("host") || "localhost:3000";
    const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
    const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1") || host.startsWith("[::1]");
    const protocol = forwardedProtocol || (isLocal ? "http" : "https");
    const baseUrl = `${protocol}://${host}`;

    const requestedDocument = request.nextUrl.searchParams.get("document") || "resume";
    if (!isDocumentKey(requestedDocument)) {
      return NextResponse.json({ error: "지원하지 않는 PDF 문서입니다." }, { status: 400 });
    }

    const locale = resolveResumeLocale(request.nextUrl.searchParams.get("lang") ?? undefined);
    const document = documents[requestedDocument];
    const documentUrls = document.paths.map((path) =>
      new URL(requestedDocument === "resume" ? localizedPath(path, locale) : path, baseUrl).toString()
    );

    const filename = requestedDocument === "resume" && locale === "en"
      ? "junyeong-eom-resume-en.pdf"
      : document.filename;

    const pdfBuffer = await generateMergedPDF({
      urls: documentUrls,
      pageNumberStart: "pageNumberStart" in document ? document.pageNumberStart : undefined,
      footerIdentity: "footerIdentity" in document ? document.footerIdentity : undefined,
      sectionLabels: document.sectionLabels,
      metadata: {
        title: document.title,
        author: "Junyeong Eom",
        subject: document.subject,
      },
    });

    // PDF 응답 반환
    return new NextResponse(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": pdfBuffer.length.toString(),
        "Cache-Control": "no-store",
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
