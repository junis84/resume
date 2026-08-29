import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "엄준영 · Senior AI Platform & Backend Engineer",
    template: "%s · Junyeong Eom",
  },
  description:
    "16년 이상의 백엔드 경험을 바탕으로 근거·평가 체계를 갖춘 Agentic AI 플랫폼과 에이전트를 설계하는 엔지니어",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
