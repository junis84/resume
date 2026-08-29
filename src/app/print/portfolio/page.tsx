import type { Metadata } from "next";
import PortfolioPage from "@/app/portfolio/page";
import KnowledgeAgentPage from "@/app/portfolio/md-wisely/page";
import AnalyticsAgentPage from "@/app/portfolio/tableau-agent/page";

export const metadata: Metadata = {
  title: { absolute: "Junyeong Eom — AI Engineering Portfolio" },
  authors: [{ name: "Junyeong Eom" }],
  description: "Harness engineering, enterprise AI agent case studies, and open-source engineering tools",
  robots: { index: false, follow: false },
};

export default function PrintPortfolioPage() {
  return (
    <div className="portfolio-print-document">
      <PortfolioPage searchParams={Promise.resolve({})} />
      <KnowledgeAgentPage />
      <AnalyticsAgentPage />
    </div>
  );
}
