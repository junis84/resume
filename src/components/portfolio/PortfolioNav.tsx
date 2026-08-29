export function PortfolioNav() {
  return (
    <nav className="portfolio-nav" aria-label="포트폴리오 탐색">
      <a href="/portfolio" className="font-bold text-navy-900 no-underline">
        Junyeong Eom <span className="font-normal text-stone-500">/ AI Engineering Portfolio</span>
      </a>
      <div className="flex items-center gap-4 text-[13px] font-semibold">
        <a href="/portfolio/md-wisely" className="portfolio-case-link text-stone-600 hover:text-navy-700">Knowledge Agent</a>
        <a href="/portfolio/tableau-agent" className="portfolio-case-link text-stone-600 hover:text-navy-700">Analytics Agent</a>
        <a href="/api/pdf?document=portfolio" download="junyeong-eom-ai-engineering-portfolio.pdf" className="portfolio-pdf-link text-stone-600 hover:text-navy-700">PDF</a>
        <a href="/" className="portfolio-resume-link rounded-lg px-3 py-2">Resume</a>
      </div>
    </nav>
  );
}
