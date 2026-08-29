interface PortfolioContactProps {
  printOnly?: boolean;
}

export function PortfolioContact({ printOnly = false }: PortfolioContactProps) {
  return (
    <footer className={`portfolio-contact ${printOnly ? "print-only" : ""}`}>
      <div>
        <p className="font-extrabold text-navy-900">Junyeong Eom</p>
        <p className="mt-1 text-stone-500">Senior AI & Backend Engineer</p>
      </div>
      <div className="portfolio-contact-links">
        <a href="mailto:e.junis84@gmail.com">e.junis84@gmail.com</a>
        <a href="https://github.com/junyeong-ai">github.com/junyeong-ai</a>
      </div>
    </footer>
  );
}
