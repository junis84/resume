import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const isEnglishPath = request.nextUrl.pathname === "/portfolio/english";
  requestHeaders.set(
    "x-resume-locale",
    request.nextUrl.searchParams.get("lang") === "en" || isEnglishPath ? "en" : "ko",
  );

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/", "/career-history", "/print/resume", "/portfolio/english"],
};
