import type { Metadata } from "next";
import { CaseMetric } from "@/components/portfolio/CaseMetric";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { SkipLink } from "@/components/ui/SkipLink";

export const metadata: Metadata = {
  title: "AI Engineering Portfolio · English",
  description: "Concise case studies in enterprise knowledge agents, analytics agents, evaluation, and harness engineering.",
};

const cases = [
  {
    eyebrow: "01 · Enterprise Knowledge Agent",
    title: "Refuse without evidence; verify again after generation.",
    problem: "Internal knowledge retrieval fails dangerously when an LLM completes a fluent answer from empty or insufficient evidence.",
    design: "Separated an eight-stage indexing pipeline from a 16-stage serving graph, with deterministic evidence states, bounded retrieval, claim-level verification, and citation validation.",
    metrics: ["1,435 active documents", "96.9% claim precision", "1.6% unsupported claims"],
  },
  {
    eyebrow: "02 · Enterprise Analytics Agent",
    title: "Stop plausible-but-wrong results before execution.",
    problem: "Small mismatches in business terms, stored values, relative dates, or data freshness can produce convincing but incorrect totals.",
    design: "Implemented a 25-stage control graph, limited model judgment to seven stages, and placed 35 deterministic checks before execution with bounded correction and data-epoch awareness.",
    metrics: ["25 controlled stages", "35 code guardrails", "30 evaluators · 139 questions"],
  },
];

const tools = [
  ["symora", "Code graph", "LSP-powered symbol, reference, and change-impact queries."],
  ["nodex", "Document graph", "Frontmatter, link, policy, and document-impact validation."],
  ["harnex", "Harness contract", "Project-aware rules, hooks, permissions, and installation audits."],
  ["hatel", "Telemetry loop", "OTel and lifecycle-hook correlation for cost, token, and subagent analysis."],
];

export default function EnglishPortfolioPage() {
  return (
    <main className="portfolio-shell english-portfolio" lang="en" aria-label="English AI engineering portfolio">
      <SkipLink href="#english-portfolio-content" label="Skip to portfolio" />
      <div className="portfolio-container">
        <PortfolioNav currentPath="/portfolio/english" locale="en" />

        <section id="english-portfolio-content" className="portfolio-hero py-16 md:py-20">
          <p className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-accent-700">Agentic AI · Backend · Evaluation</p>
          <h1 className="portfolio-hero-title max-w-5xl text-[clamp(38px,5.6vw,64px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-navy-900">
            Turning model capability into<br className="desktop-break" /> verifiable enterprise systems.
          </h1>
          <p className="mt-7 max-w-3xl text-[17px] leading-[1.8] text-stone-600">
            Senior AI and backend engineer with 16+ years of experience. Separates model judgment from code-enforced guarantees, then validates behavior through evidence, bounded control flow, and repeatable evaluation.
          </p>
          <div className="portfolio-proof-grid mt-10 grid max-w-3xl grid-cols-3 gap-3">
            <CaseMetric value="16+ years" label="Backend & platform" detail="Large-scale services to agentic AI" />
            <CaseMetric value="2 systems" label="Enterprise agents" detail="Knowledge retrieval and structured analytics" />
            <CaseMetric value="139 questions" label="Business-authored evaluation set" detail="30 evaluators · 3 repeated runs" />
          </div>
          <PortfolioContact printOnly />
        </section>

        <section className="selected-case-section border-t border-stone-200 py-20">
          <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-stone-500">Case studies</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900">At a glance: failure mode and control</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {cases.map((item) => (
              <article key={item.eyebrow} className="portfolio-card flex flex-col p-8">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-accent-700">{item.eyebrow}</p>
                <h3 className="mt-8 text-[29px] font-extrabold leading-[1.22] tracking-[-0.03em] text-navy-900">{item.title}</h3>
                <dl className="mt-7 grid gap-4 text-[13px] leading-[1.7]">
                  <div><dt className="font-bold text-stone-800">Failure mode</dt><dd className="mt-1 text-stone-600">{item.problem}</dd></div>
                  <div><dt className="font-bold text-stone-800">Control</dt><dd className="mt-1 text-stone-600">{item.design}</dd></div>
                </dl>
                <div className="mt-7 flex flex-wrap gap-2">{item.metrics.map((metric) => <span key={metric} className="rounded-full bg-stone-100 px-3 py-1.5 text-[11px] font-bold text-stone-700">{metric}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="english-case-detail border-t border-stone-200 py-20" aria-labelledby="knowledge-deep-dive-title">
          <p className="case-kicker">Deep dive 01 · Enterprise Knowledge Agent</p>
          <div className="case-heading-grid mt-4">
            <div>
              <h2 id="knowledge-deep-dive-title">Make “insufficient evidence” a system state—not a prompt suggestion.</h2>
              <p className="mt-5 text-[13px] leading-[1.75] text-stone-600">The dangerous failure was not an empty search result. It was a fluent answer produced after one.</p>
            </div>
            <dl className="english-case-facts">
              <div><dt>System boundary</dt><dd>1,435 active Confluence documents; document evidence crosses A2A boundaries with provenance.</dd></div>
              <div><dt>Ownership</dt><dd>Architecture, core retrieval and RAG logic, control flow, comparative evaluation, and operating documentation.</dd></div>
            </dl>
          </div>
          <div className="architecture-flow mt-9">
            {[
              ["Index", "8 stages", "Structure-aware chunks, parent–child context, media captions"],
              ["Retrieve", "Hybrid RRF", "Dense + lexical retrieval, family collapse, bounded budget"],
              ["Decide", "Evidence states", "No evidence, partial evidence, or sufficient evidence—owned by code"],
              ["Verify", "16-stage serving", "Claim checks, citation validation, one bounded correction path"],
            ].map(([eyebrow, title, body]) => (
              <div key={title} className="architecture-node"><p className="text-[10px] font-extrabold uppercase tracking-wider text-accent-700">{eyebrow}</p><h3 className="mt-2 text-[14px] font-extrabold text-navy-900">{title}</h3><p className="mt-2 text-[11px] leading-relaxed text-stone-500">{body}</p></div>
            ))}
          </div>
          <div className="mt-9 grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <CaseMetric value="87/100" label="Answers with no detected claim errors" detail="Claim-level evaluation · not holistic accuracy" />
            <CaseMetric value="96.9%" label="Claim precision" detail="100-question comparative study" />
            <CaseMetric value="1.6%" label="Unsupported claims" detail="Claims with no supporting source found" />
            <CaseMetric value="33/40" label="Authority document reached" detail="Correct in all 33 cases when reached" />
          </div>
          <p className="english-case-limit"><strong>Measured limit:</strong> The 100-question study has no holistic pass/fail label. The 40-question retrieval diagnostic is separate, and the current corpus is limited to Confluence.</p>
        </section>

        <section className="english-case-detail border-t border-stone-200 py-20" aria-labelledby="analytics-deep-dive-title">
          <p className="case-kicker">Deep dive 02 · Enterprise Analytics Agent</p>
          <div className="case-heading-grid mt-4">
            <div>
              <h2 id="analytics-deep-dive-title">Treat plausible-but-wrong numbers as the primary failure mode.</h2>
              <p className="mt-5 text-[13px] leading-[1.75] text-stone-600">Aliases, stored values, relative dates, and data freshness can change a total while leaving the query perfectly executable.</p>
            </div>
            <dl className="english-case-facts">
              <div><dt>System boundary</dt><dd>Natural language becomes a validated execution plan against approved Tableau data sources—not free-form SQL.</dd></div>
              <div><dt>Ownership</dt><dd>Architecture, value resolution, plan guardrails, bounded repair, provenance, and repeated evaluation.</dd></div>
            </dl>
          </div>
          <div className="architecture-flow mt-9">
            {[
              ["Understand", "Turn context", "Intent, relative periods, and follow-up question state"],
              ["Resolve", "Value linking", "Stored values, managed aliases, fuzzy candidates, clarification"],
              ["Protect", "35 checks", "24 sequential + 11 cross-context checks before execution"],
              ["Correct", "Bounded repair", "Up to three redraws and one re-ground with failure context"],
            ].map(([eyebrow, title, body]) => (
              <div key={title} className="architecture-node"><p className="text-[10px] font-extrabold uppercase tracking-wider text-accent-700">{eyebrow}</p><h3 className="mt-2 text-[14px] font-extrabold text-navy-900">{title}</h3><p className="mt-2 text-[11px] leading-relaxed text-stone-500">{body}</p></div>
            ))}
          </div>
          <div className="mt-9 grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <CaseMetric value="25" label="Controlled stages" detail="Model judgment limited to seven stages" />
            <CaseMetric value="30" label="Evaluators" detail="21 deterministic + 9 LLM-based" />
            <CaseMetric value="121/139" label="Passed all three runs" detail="Business-authored evaluation questions" />
            <CaseMetric value="14 · 4" label="Variable results · persistent failures" detail="Separated across three repeated runs" />
          </div>
          <p className="english-case-limit"><strong>Measured limit:</strong> Validation adds latency; value resolution is intentionally conservative. Data sources are anonymized, and direct customer or business outcomes have not yet been measured.</p>
        </section>

        <section className="harness-section border-t border-stone-200 py-20">
          <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-stone-500">AI-native software engineering · Harness</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-extrabold tracking-tight text-navy-900">Keep AI-assisted speed; make acceptance deterministic.</h2>
          <p className="mt-5 max-w-4xl text-[14px] leading-[1.75] text-stone-600">In an environment where AI drafts code and humans own judgment, recurring failures become named rules enforced at write, commit, review, and release time. Telemetry feeds the outcome back into rules, documentation, and tools.</p>
          <div className="mt-8 grid grid-cols-4 gap-3 max-md:grid-cols-2">
            <CaseMetric value="30" label="Named rules" detail="28 blocking · 2 advisory" />
            <CaseMetric value="36" label="Validation gates" detail="Parallel checks + unit suite" />
            <CaseMetric value="6" label="Telemetry signal types" detail="Rules, blocks, gates, sessions, memory, skills" />
            <CaseMetric value="4" label="Control surfaces" detail="Context · Gates · Review · Memory" />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <div className="measure-card"><strong>Code owns structure</strong><span>Package boundaries, permissions, bounded loops, and validation gates are deterministic.</span></div>
            <div className="measure-card"><strong>Models handle semantics</strong><span>Interpretation and drafting operate only inside explicit contracts and evidence boundaries.</span></div>
            <div className="measure-card"><strong>Humans own judgment</strong><span>Trade-offs, exceptions, escalation, and final design decisions remain accountable.</span></div>
          </div>
        </section>

        <section className="open-source-section border-t border-stone-200 py-20">
          <div className="flex items-end justify-between gap-8 max-md:block">
            <div><p className="text-[12px] font-bold uppercase tracking-[0.15em] text-stone-500">Reusable harness tooling · Open source</p><h2 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight text-navy-900">Four tools extracted from recurring engineering problems.</h2></div>
            <a href="https://github.com/junyeong-ai" target="_blank" rel="noopener noreferrer" className="shrink-0 text-[13px] font-bold text-navy-700 max-md:mt-4">GitHub repositories →</a>
          </div>
          <div className="toolchain-flow mt-10">
            {tools.map(([name, stage, description]) => (
              <a key={name} href={`https://github.com/junyeong-ai/${name}`} target="_blank" rel="noopener noreferrer" className="toolchain-node group no-underline">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-accent-700">{stage}</p>
                <h3 className="mt-3 text-xl font-extrabold text-navy-900 group-hover:underline">{name}</h3>
                <p className="mt-3 text-[12px] leading-[1.7] text-stone-600">{description}</p>
              </a>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
            {[
              ["Define with stakeholders", "Start with business and engineering stakeholders and measurable acceptance criteria."],
              ["Make trade-offs explicit", "Document the chosen path, rejected options, risks, and reversal criteria."],
              ["Disagree, then commit", "Challenge with evidence before a decision; execute it fully afterward."],
              ["Turn solutions into team leverage", "Convert solutions into standards, ADRs, mentoring, and shared tools."],
            ].map(([title, body]) => <div key={title} className="senior-principle"><h3>{title}</h3><p>{body}</p></div>)}
          </div>
        </section>

        <footer className="flex items-center justify-between border-t border-stone-200 py-8 text-[12px] text-stone-500">
          <span>Junyeong Eom · AI Engineering Portfolio</span>
          <a href="mailto:e.junis84@gmail.com" className="text-navy-700">e.junis84@gmail.com</a>
        </footer>
      </div>
    </main>
  );
}
