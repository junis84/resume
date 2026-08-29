import type { Metadata } from "next";
import { CaseMetric } from "@/components/portfolio/CaseMetric";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { SeniorOperatingPrinciples } from "@/components/portfolio/SeniorOperatingPrinciples";
import { SkipLink } from "@/components/ui/SkipLink";

export const metadata: Metadata = {
  title: "AI Engineering Portfolio",
  description: "AI 하네스 엔지니어링과 근거 검증형 지식 에이전트·정형 데이터 분석 에이전트의 설계·구현·평가 사례",
};

const cases = [
  {
    href: "/portfolio/md-wisely",
    eyebrow: "Enterprise Knowledge Agent · RAG · Evaluation",
    title: "근거가 없으면 답하지 않고, 근거가 있어도 다시 검증하는 에이전트",
    description: "구조 인식 색인, hybrid retrieval, 생성 전 증거 판정, 생성 후 주장 단위 검증을 하나의 제한된 제어 흐름으로 설계했습니다.",
    metrics: ["1,435 documents", "Claim precision 96.9%", "Unsupported claims 1.6%"],
  },
  {
    href: "/portfolio/tableau-agent",
    eyebrow: "Enterprise Analytics Agent · Guardrails · Evaluation",
    title: "그럴듯한 오답을 실행 전에 차단하는 자연어 분석 시스템",
    description: "25단계 중 AI 판단을 7단계로 제한하고, 값 정규화·35개 코드 검증·data epoch로 조용한 오답을 통제했습니다.",
    metrics: ["25 stages", "35 guardrails", "30 evaluators"],
  },
];

const openSourceToolchain = [
  {
    name: "symora",
    href: "https://github.com/junyeong-ai/symora",
    stage: "Code graph",
    description: "LSP 기반 심볼·참조·변경 영향도를 조회해 코드 탐색의 추측을 줄입니다.",
  },
  {
    name: "nodex",
    href: "https://github.com/junyeong-ai/nodex",
    stage: "Document graph",
    description: "프론트매터·링크·정책 표식을 검증하고 문서 변경의 영향을 질의합니다.",
  },
  {
    name: "harnex",
    href: "https://github.com/junyeong-ai/harnex",
    stage: "Harness contract",
    description: "프로젝트에 맞는 규칙·훅·권한을 생성하고 실제 설치 상태를 결정론적으로 감사합니다.",
  },
  {
    name: "hatel",
    href: "https://github.com/junyeong-ai/hatel",
    stage: "Telemetry loop",
    description: "OTel과 lifecycle hook을 세션 단위로 결합해 비용·토큰·서브에이전트 효과를 측정합니다.",
  },
];

interface PortfolioPageProps {
  searchParams: Promise<{ pdfSection?: string }>;
}

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const { pdfSection } = await searchParams;
  const showCover = !pdfSection || pdfSection === "cover";
  const showHarness = !pdfSection || pdfSection === "harness";
  const showToolchain = !pdfSection || pdfSection === "toolchain";
  const showPrinciples = !pdfSection || pdfSection === "principles";

  return (
    <main className="portfolio-shell" aria-label="AI engineering portfolio overview">
      <SkipLink href="#portfolio-content" label="포트폴리오 본문으로 이동" />
      <div className="portfolio-container">
        <PortfolioNav currentPath="/portfolio" />

        {showCover && <>
        <section id="portfolio-content" className="portfolio-hero py-16 md:py-20">
          <p className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-accent-700">Agentic AI · Backend · Evaluation</p>
          <h1 className="portfolio-hero-title max-w-5xl text-[clamp(38px,5.6vw,64px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-navy-900">
            AI 에이전트를 데모가 아니라,<br />검증 가능한 운영 시스템으로 만듭니다.
          </h1>
          <p className="mt-7 max-w-3xl text-[17px] leading-[1.8] text-stone-600">
            16년의 백엔드 경험을 바탕으로 모델의 판단과 코드의 보장을 분리하고, 근거·가드레일·반복 평가로 운영 품질을 검증합니다.
          </p>
          <div className="portfolio-proof-grid mt-10 grid max-w-3xl grid-cols-3 gap-3">
            <CaseMetric value="16년+" label="Backend & Platform" detail="대규모 서비스에서 Agentic AI까지" />
            <CaseMetric value="2개" label="기업용 에이전트 시스템" detail="지식 검색과 정형 데이터 분석" />
            <CaseMetric value="139 × 3" label="현업 작성 반복 평가" detail="139문항 · 30종 평가기 · 3회 실행" />
          </div>
          <PortfolioContact printOnly />
        </section>

        <section className="selected-case-section pb-24">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-stone-500">Case studies</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900">두 시스템, 하나의 원칙</h2>
            </div>
            <p className="max-w-md text-right text-[13px] leading-relaxed text-stone-500 max-md:hidden">모든 수치는 측정 시점과 한계를 함께 표시했으며, 내부 URL·데이터소스·사업 원문은 제거했습니다.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {cases.map((item, index) => (
              <a key={item.href} href={item.href} className="portfolio-card group flex min-h-[430px] flex-col p-8 no-underline transition hover:-translate-y-1 hover:border-navy-700">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-accent-700">{item.eyebrow}</span>
                  <span className="text-4xl font-light text-stone-300">0{index + 1}</span>
                </div>
                <h3 className="mt-16 text-[30px] font-extrabold leading-[1.25] tracking-[-0.03em] text-navy-900">{item.title}</h3>
                <p className="mt-5 text-[14px] leading-[1.75] text-stone-600">{item.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {item.metrics.map((metric) => <span key={metric} className="rounded-full bg-stone-100 px-3 py-1.5 text-[12px] font-bold text-stone-700">{metric}</span>)}
                </div>
                <span className="mt-7 text-[13px] font-bold text-navy-700 group-hover:underline">Read case study →</span>
              </a>
            ))}
          </div>
          <a href="#harness-engineering" className="toolchain-index-strip mt-6 flex items-center justify-between gap-6 rounded-2xl border border-stone-200 bg-white px-6 py-5 no-underline max-md:block">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-accent-700">Harness engineering · Open source</p>
              <p className="mt-1 text-[16px] font-extrabold text-navy-900">30 rules · 36 gates · 6 telemetry signal types</p>
            </div>
            <p className="max-w-xl text-right text-[13px] leading-relaxed text-stone-600 max-md:mt-3 max-md:text-left">AI 코딩의 반복 결함을 하네스로 통제하고, 재사용 가능한 네 가지 공개 도구로 분리했습니다. <span className="font-bold text-navy-700">Harness case →</span></p>
          </a>
        </section>
        </>}

        {showHarness && <section id="harness-engineering" className="harness-section border-t border-stone-200 py-20">
          <div className="flex items-end justify-between gap-10 max-md:block">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-stone-500">AI-native software engineering · Harness</p>
              <h2 className="mt-2 max-w-4xl text-3xl font-extrabold tracking-tight text-navy-900">AI-native 개발의 속도는 취하고, 결과는 결정론적 하네스로 검증했습니다.</h2>
            </div>
            <dl className="shrink-0 border-l border-stone-200 pl-5 text-[11px] leading-relaxed text-stone-500 max-md:mt-5">
              <div><dt className="font-bold text-stone-700">Ownership</dt><dd>Architecture · Rules · Telemetry</dd></div>
              <div className="mt-2"><dt className="font-bold text-stone-700">Snapshot</dt><dd>2026.08</dd></div>
            </dl>
          </div>
          <p className="mt-5 max-w-5xl text-[14px] leading-[1.75] text-stone-600">AI가 코드의 1차 저자이고 사람이 판정자인 환경에서, 이른바 바이브 코딩의 반복 결함을 이름 붙인 규칙으로 전환해 쓰기·커밋·리뷰 단계에서 차단하고 그 결과를 모델에 다시 환류하도록 설계했습니다.</p>
          <p className="mt-3 text-[12px] font-bold leading-relaxed text-navy-700">설계·구현 범위 — 컨텍스트 주입 · 규칙 레지스트리 · 훅/게이트 · 독립 리뷰 · 텔레메트리 · 학습 수명주기</p>

          <div className="mt-8 grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <CaseMetric value="30" label="Named rules" detail="차단 28 · 경고 2" />
            <CaseMetric value="36" label="Validation gates" detail="just check 병렬 게이트 + unit suite" />
            <CaseMetric value="6" label="Telemetry signal types" detail="규칙·차단·게이트·세션·기억·스킬" />
            <CaseMetric value="4" label="Control surfaces" detail="Context · Gates · Review · Memory" />
          </div>

          <div className="harness-surface-flow mt-8">
            <article className="harness-surface-node"><p>01 · Context</p><h3>필요할 때만 읽힙니다.</h3><span>항상 로드되는 헌장과 경로별 규칙을 분리해 현재 작업에 필요한 지침만 주입합니다.</span></article>
            <article className="harness-surface-node"><p>02 · Gates</p><h3>결함을 이름 붙여 막습니다.</h3><span>구조로 판정 가능한 위반을 저장·커밋 시점에 검사하고, 차단 이유를 다음 행동의 입력으로 돌려줍니다.</span></article>
            <article className="harness-surface-node"><p>03 · Review</p><h3>새 문맥이 반박합니다.</h3><span>측정 가능한 변경 신호가 독립 리뷰를 발화하고, 자동 수정이 수렴하지 않으면 사람에게 판정을 올립니다.</span></article>
            <article className="harness-surface-node"><p>04 · Memory</p><h3>실패를 저장소가 기억합니다.</h3><span>결정·학습을 문서 그래프로 연결하고 텔레메트리로 규칙의 승급과 은퇴 근거를 관리합니다.</span></article>
          </div>

          <div className="harness-boundary mt-6 rounded-2xl bg-navy-900 px-6 py-5 text-white">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-emerald-300">Structure enforced by code · Judgment owned by humans</p>
            <p className="mt-2 text-[14px] leading-relaxed text-stone-100">구조적 불변식은 코드가 보장하고, 설계가 옳은지는 사람이 책임집니다.</p>
          </div>
        </section>}

        {showToolchain && <section id="open-source-toolchain" className="open-source-section border-t border-stone-200 py-20">
          <div className="flex items-end justify-between gap-8 max-md:block">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-stone-500">Reusable harness tooling · Open source</p>
              <h2 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight text-navy-900">하네스에서 반복되는 탐색·검증·측정 문제를 네 가지 공개 도구로 분리했습니다.</h2>
            </div>
            <a href="https://github.com/junyeong-ai" target="_blank" rel="noopener noreferrer" className="shrink-0 text-[13px] font-bold text-navy-700 max-md:mt-4">GitHub 전체 저장소 →</a>
          </div>
          <p className="mt-5 max-w-4xl text-[14px] leading-[1.75] text-stone-600">별도 데모가 아니라 사내 AI 에이전트 플랫폼과 여러 운영 웹앱의 실제 개발 루프에서 검증한 뒤, 프로젝트에 이식 가능한 도구로 분리했습니다.</p>
          <div className="toolchain-flow mt-10">
            {openSourceToolchain.map((tool) => (
              <a key={tool.name} href={tool.href} target="_blank" rel="noopener noreferrer" className="toolchain-node group no-underline">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-accent-700">{tool.stage}</p>
                <h3 className="mt-3 text-xl font-extrabold text-navy-900 group-hover:underline">{tool.name}</h3>
                <p className="mt-3 text-[12px] leading-[1.7] text-stone-600">{tool.description}</p>
              </a>
            ))}
          </div>
          <div className="learning-loop-banner mt-6 rounded-2xl bg-navy-900 px-6 py-5 text-white">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.13em] text-emerald-300">Closed learning loop</p>
            <p className="mt-2 text-[14px] leading-relaxed text-stone-100">코드·문서 그래프에서 변경 영향을 찾고 → 프로젝트 규칙을 생성·감사하고 → 세션 결과를 측정해 → 다음 규칙과 도구 설계에 되돌립니다.</p>
          </div>
          <div className="toolchain-principles print-only">
            <SeniorOperatingPrinciples compact />
          </div>
        </section>}

        {showPrinciples && <>
        <section className="portfolio-principles screen-only border-t border-stone-200 py-20">
          <SeniorOperatingPrinciples />
        </section>

        <footer className="screen-only flex items-center justify-between border-t border-stone-200 py-8 text-[12px] text-stone-500">
          <span>Junyeong Eom · AI Engineering Portfolio</span>
          <a href="mailto:e.junis84@gmail.com" className="text-navy-700">e.junis84@gmail.com</a>
        </footer>
        </>}
      </div>
    </main>
  );
}
