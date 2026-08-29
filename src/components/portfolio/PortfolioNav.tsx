interface PortfolioNavProps {
  currentPath?: "/portfolio" | "/portfolio/md-wisely" | "/portfolio/tableau-agent" | "/portfolio/english";
  locale?: "ko" | "en";
}

export function PortfolioNav({ currentPath = "/portfolio", locale = "ko" }: PortfolioNavProps) {
  const isEnglish = locale === "en";

  return (
    <nav className="portfolio-nav" aria-label={isEnglish ? "Portfolio navigation" : "포트폴리오 탐색"}>
      <a
        href={isEnglish ? "/portfolio/english" : "/portfolio"}
        className="font-bold text-navy-900 no-underline"
        aria-current={currentPath === "/portfolio" || currentPath === "/portfolio/english" ? "page" : undefined}
      >
        Junyeong Eom <span className="font-normal text-stone-500">/ AI Engineering Portfolio</span>
      </a>
      <div className="flex items-center gap-4 text-[13px] font-semibold">
        {!isEnglish && <>
        <a
          href="/portfolio/md-wisely"
          className={`portfolio-case-link hover:text-navy-700${currentPath === "/portfolio/md-wisely" ? " is-active" : " text-stone-600"}`}
          aria-current={currentPath === "/portfolio/md-wisely" ? "page" : undefined}
        >
          <span className="portfolio-case-label-long">Knowledge Agent</span>
          <span className="portfolio-case-label-short">Knowledge</span>
        </a>
        <a
          href="/portfolio/tableau-agent"
          className={`portfolio-case-link hover:text-navy-700${currentPath === "/portfolio/tableau-agent" ? " is-active" : " text-stone-600"}`}
          aria-current={currentPath === "/portfolio/tableau-agent" ? "page" : undefined}
        >
          <span className="portfolio-case-label-long">Analytics Agent</span>
          <span className="portfolio-case-label-short">Analytics</span>
        </a>
        </>}
        <a href={isEnglish ? "/portfolio" : "/portfolio/english"} className="portfolio-language-link text-stone-600 hover:text-navy-700">{isEnglish ? "KO" : "EN"}</a>
        <a
          href={isEnglish ? "/api/pdf?document=portfolio-en" : "/api/pdf?document=portfolio"}
          download={isEnglish ? "junyeong-eom-ai-engineering-portfolio-en.pdf" : "junyeong-eom-ai-engineering-portfolio.pdf"}
          className="portfolio-pdf-link text-stone-600 hover:text-navy-700"
        >PDF</a>
        <a href={isEnglish ? "/?lang=en" : "/"} className="portfolio-resume-link rounded-lg px-3 py-2">Resume</a>
      </div>
    </nav>
  );
}
