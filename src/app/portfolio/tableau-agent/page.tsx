import type { Metadata } from "next";
import { CaseMetric } from "@/components/portfolio/CaseMetric";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { SeniorOperatingPrinciples } from "@/components/portfolio/SeniorOperatingPrinciples";

export const metadata: Metadata = {
  title: "Enterprise Analytics Agent Case Study",
  description: "틀린 숫자가 실행되기 어려운 Tableau 연동 정형 데이터 자연어 분석 에이전트 설계",
};

export default function TableauAgentPage() {
  return (
    <main className="portfolio-shell">
      <div className="portfolio-container">
        <PortfolioNav />

        <header className="case-hero py-20 md:py-28">
          <div className="grid grid-cols-[1fr_260px] items-end gap-12 max-md:grid-cols-1">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-accent-700">Case 02 · Enterprise Analytics Agent</p>
              <h1 className="mt-5 max-w-4xl text-[clamp(38px,6vw,64px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-navy-900">
                자연어를 SQL로 번역하는 대신,<br className="desktop-break" />틀린 숫자가 실행되기 어렵게 만들었습니다.
              </h1>
              <p className="mt-7 max-w-3xl text-[17px] leading-[1.8] text-stone-600">
                한국어 업무 용어, 실제 저장값, 상대 기간, 데이터 최신 시점이 조금만 어긋나도 그럴듯한 오답이 나옵니다. 모델의 생성 능력보다 실행 전 검증과 제한된 교정 경로를 먼저 설계했습니다.
              </p>
            </div>
            <dl className="space-y-4 border-l border-stone-200 pl-6 text-[13px]">
              <div><dt className="font-bold text-stone-500">Ownership</dt><dd className="mt-1 text-stone-800">Architecture · Core Guardrails · Evaluation</dd></div>
              <div><dt className="font-bold text-stone-500">Period</dt><dd className="mt-1 text-stone-800">2026.04–현재</dd></div>
              <div><dt className="font-bold text-stone-500">Stage</dt><dd className="mt-1 text-stone-800">사내 운영 검증</dd></div>
              <div><dt className="font-bold text-stone-500">Snapshot</dt><dd className="mt-1 text-stone-800">2026.08</dd></div>
            </dl>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <CaseMetric value="25" label="Controlled stages" detail="AI 판단은 7단계만 사용" />
            <CaseMetric value="35" label="Code guardrails" detail="순차 24 + 교차 맥락 11" />
            <CaseMetric value="30" label="Evaluation graders" detail="규칙 기반 21 + LLM 기반 9" />
            <CaseMetric value="139" label="현업 작성 평가 문항" detail="3회 반복 실행으로 안정성 분리" />
          </div>
        </header>

        <section className="case-section border-t border-stone-200 py-20">
          <div className="case-heading-grid">
            <div><p className="case-kicker">01 · Problem</p><h2>분석 에이전트의 가장 위험한 실패는 오류가 아니라 조용한 오답입니다.</h2></div>
            <div className="case-copy"><p>“클리오”와 저장값 “CLIO”, 달력의 어제와 데이터가 적재된 마지막 날, 브랜드와 품목의 중복 조건처럼 작은 차이가 완전히 다른 합계를 만듭니다.</p><p>쿼리가 성공했다는 사실은 정답의 증거가 아닙니다. 값·기간·집계·다중 질문을 단계별 검증 규칙으로 분리하고, 통과하지 못한 계획은 실행 전에 되돌렸습니다.</p></div>
          </div>
        </section>

        <section className="case-section border-t border-stone-200 py-20">
          <p className="case-kicker">02 · Architecture</p>
          <h2 className="case-title">모델은 의미를 해석하고, 코드는 실행 권한을 소유합니다.</h2>
          <div className="architecture-flow mt-10">
            {[
              ["Understand", "Turn refinement", "기간·질문 의도·후속 질문 맥락"],
              ["Resolve", "Value linking", "실제 값 · 별칭 · fuzzy match · 재질문"],
              ["Plan", "Per-ask lanes", "질문별 계획 · 병렬 실행 · ask-order merge"],
              ["Protect", "35 guardrails", "교정 최대 3회 · 재해석 최대 1회"],
              ["Deliver", "Deterministic result", "숫자 · 출처 · 최신 시점 · 파일"],
            ].map(([eyebrow, title, body]) => (
              <div key={title} className="architecture-node"><p className="text-[10px] font-extrabold uppercase tracking-wider text-accent-700">{eyebrow}</p><h3 className="mt-2 text-[14px] font-extrabold text-navy-900">{title}</h3><p className="mt-2 text-[11px] leading-relaxed text-stone-500">{body}</p></div>
            ))}
          </div>
        </section>

        <section className="case-section signature-decisions border-t border-stone-200 py-20">
          <p className="case-kicker">03 · Signature decisions</p>
          <div className="mt-8 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <article className="decision-card"><span>01</span><h3>값을 추측하지 않고 해소</h3><p>실제 저장값, 관리된 별칭, fuzzy match 순서로 후보를 찾습니다. 유사한 값이 둘 이상이면 자동 선택하지 않고 사용자에게 되묻습니다.</p></article>
            <article className="decision-card"><span>02</span><h3>실행 전에 계획을 교정</h3><p>24개 순차 검증과 11개 교차 맥락 검증이 기간·필터·집계·비교 계획을 확인합니다. 실패 이유를 다음 계획에 전달해 제한된 횟수만 다시 그립니다.</p></article>
            <article className="decision-card"><span>03</span><h3>데이터 변경과 모델 회귀를 구분</h3><p>high-water mark, checksum, row count를 결합한 data epoch를 골든셋에 기록합니다. 원천 데이터가 바뀐 경우를 모델 실패로 채점하지 않습니다.</p></article>
          </div>
        </section>

        <section className="case-section border-t border-stone-200 py-20">
          <div className="case-heading-grid">
            <div><p className="case-kicker">04 · Controlled correction</p><h2>실패는 재시도하지 않고, 실패 이유를 가진 채 교정합니다.</h2></div>
            <ol className="trace-list">
              <li><strong>Resolve</strong><span>질문의 업무 용어를 실제 데이터소스 값과 연결하고 모호하면 사용자 재질문으로 종료합니다.</span></li>
              <li><strong>Propose</strong><span>고정된 분석 구조를 바탕으로 질문별 실행 계획을 생성합니다.</span></li>
              <li><strong>Validate & redraw</strong><span>코드 검증이 실패 종류를 분류하고 이전 실패를 포함해 최대 3회 계획을 교정합니다.</span></li>
              <li><strong>Re-ground once</strong><span>분석 구조 자체가 잘못된 경우 주 질문만 한 번 이전 단계로 돌아갑니다. 보조 질문 실패는 전체 응답을 중단하지 않습니다.</span></li>
              <li><strong>Deliver</strong><span>실행 결과의 숫자·출처·최신 시점은 코드가 조립하고, 모델은 근거가 제공된 서술만 담당합니다.</span></li>
            </ol>
          </div>
        </section>

        <section className="case-section border-t border-stone-200 py-20">
          <p className="case-kicker">05 · Evaluation system</p>
          <div className="mt-4 flex items-end justify-between gap-8 max-md:block">
            <h2 className="case-title max-w-2xl">정답률 하나로 비결정성을 숨기지 않았습니다.</h2>
            <p className="max-w-md text-right text-[12px] leading-relaxed text-stone-500 max-md:mt-4 max-md:text-left">2026.08 기준. 31개 질문 유형과 10개 커버리지 영역에서 현업이 직접 작성한 평가 문항을 반복 실행했습니다.</p>
          </div>
          <div className="mt-8 grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <CaseMetric value="121" label="3/3 pass" detail="3회 연속 통과" />
            <CaseMetric value="14" label="Run-to-run variance" detail="반복 실행 사이 판정 변동" />
            <CaseMetric value="4" label="3/3 fail" detail="3회 연속 실패" />
            <CaseMetric value="20 / 10" label="Gate / Advisory" detail="배포 판정과 관찰 지표 분리" />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <div className="measure-card"><strong>규칙 기반 21종</strong><span>질의 구조·기간·값·종료 유형처럼 코드로 정확히 비교할 수 있는 항목</span></div>
            <div className="measure-card"><strong>LLM 기반 평가기 9종</strong><span>근거 충실성·서술 정직성처럼 의미 판정이 필요한 항목</span></div>
            <div className="measure-card"><strong>무응답 처리 9종</strong><span>답이 없을 때도 거절·안내·재질문 가운데 정해진 종료 방식을 평가</span></div>
          </div>
        </section>

        <section className="case-section border-t border-stone-200 py-20">
          <div className="case-contribution-grid grid grid-cols-2 gap-12 max-md:grid-cols-1">
            <div><p className="case-kicker">Ownership & contribution</p><h2 className="case-title">질문 해석부터 회귀 판정까지 전체 신뢰 경로를 설계했습니다.</h2><ul className="case-bullets"><li>25단계 그래프와 다중 질문 제어 흐름</li><li>값 해소·계획 검증·제한된 교정 루프 핵심 구현</li><li>데이터 스냅샷·출처·최신 시점 검증 규칙</li><li>현업 작성 평가 세트·30종 평가기·반복 실행 품질 게이트</li></ul></div>
            <div><p className="case-kicker">Limits & trade-offs</p><h2 className="case-title">엄격한 검증에는 비용과 오탐이 따릅니다.</h2><ul className="case-bullets"><li>교정·재해석은 정확성 대신 지연을 증가시킴</li><li>닫힌 값 사전은 새로운 업무 용어에 보수적으로 반응</li><li>일부 입력값의 출처 정보를 더 앞 단계에서 코드가 소유하도록 개선 중</li><li>운영 데이터소스와 실제 사업 수치는 공개 포트폴리오에서 익명화</li></ul></div>
          </div>
        </section>

        <section className="case-section case-senior-principles border-t border-stone-200 py-16">
          <SeniorOperatingPrinciples compact />
          <PortfolioContact printOnly />
        </section>

        <footer className="case-next border-t border-stone-200 py-16">
          <p className="case-kicker">Previous case</p>
          <a href="/portfolio/md-wisely" className="mt-3 flex items-end justify-between gap-6 no-underline group"><span className="text-[clamp(26px,5vw,48px)] font-extrabold tracking-tight text-navy-900">근거 검증형 사내 지식 에이전트</span><span className="text-3xl text-navy-700 group-hover:-translate-x-1 transition">←</span></a>
        </footer>
      </div>
    </main>
  );
}
