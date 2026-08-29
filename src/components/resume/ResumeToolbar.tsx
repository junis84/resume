import { localizedPath, type ResumeLocale } from "@/lib/locale";

interface ResumeToolbarProps {
  locale?: ResumeLocale;
  currentPath?: "/" | "/career-history";
}

export function ResumeToolbar({ locale = "ko", currentPath = "/" }: ResumeToolbarProps) {
  const pdfUrl = `/api/pdf?document=resume${locale === "en" ? "&lang=en" : ""}`;
  const isResume = currentPath === "/";
  const isCareer = currentPath === "/career-history";

  return (
    <nav
      className="resume-toolbar no-print"
      aria-label={locale === "en" ? "Resume navigation and download" : "이력서 보기 및 다운로드"}
    >
      <a
        href={localizedPath("/", locale)}
        className={`toolbar-link${isResume ? " is-active" : ""}`}
        aria-current={isResume ? "page" : undefined}
      >
        Resume
      </a>
      <a
        href={localizedPath("/career-history", locale)}
        className={`toolbar-link${isCareer ? " is-active" : ""}`}
        aria-current={isCareer ? "page" : undefined}
      >
        <span className="toolbar-label-long">Career History</span>
        <span className="toolbar-label-short">Career</span>
      </a>
      <a href={locale === "en" ? "/portfolio/english" : "/portfolio"} className="toolbar-link">
        <span className="toolbar-label-long">Portfolio</span>
        <span className="toolbar-label-short">Portfolio</span>
      </a>
      <span className="toolbar-divider" aria-hidden="true" />
      <span className="toolbar-locale" aria-label="Language">
        <a
          href={currentPath}
          className={locale === "ko" ? "is-active" : undefined}
          aria-label={locale === "ko" ? "한국어, 현재 언어" : "한국어로 보기"}
        >
          KO
        </a>
        <a
          href={localizedPath(currentPath, "en")}
          className={locale === "en" ? "is-active" : undefined}
          aria-label={locale === "en" ? "English, current language" : "View in English"}
        >
          EN
        </a>
      </span>
      <a
        href={pdfUrl}
        className="toolbar-primary"
        download={locale === "en" ? "junyeong-eom-resume-en.pdf" : "junyeong-eom-resume.pdf"}
      >
        <span className="toolbar-label-long">{locale === "en" ? "Download PDF" : "Resume PDF"}</span>
        <span className="toolbar-label-short">PDF</span>
      </a>
    </nav>
  );
}
