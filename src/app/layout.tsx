import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "엄준영 (Junyoung Eom) - Resume",
  description:
    "Senior Backend Engineer | AI Systems Architect - 17년 경력의 백엔드 개발자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
