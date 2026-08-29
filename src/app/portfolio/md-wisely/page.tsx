import type { Metadata } from "next";
import { CaseMetric } from "@/components/portfolio/CaseMetric";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";

export const metadata: Metadata = {
  title: "Enterprise Knowledge Agent Case Study",
  description: "근거 검증형 사내 지식 에이전트 MD Wisely의 색인·서빙·평가 설계",
};

const claimComparison = [
  { name: "MD Wisely", coverage: "57.0%", precision: "96.9%", unsupported: "1.6%", clean: "87 / 100" },
  { name: "Rovo", coverage: "43.5%", precision: "92.2%", unsupported: "4.4%", clean: "71 / 100" },
  { name: "Gemini Enterprise", coverage: "50.0%", precision: "80.8%", unsupported: "12.1%", clean: "58 / 100" },
];

const answerComparison = [
  { name: "MD Wisely", clean: "87 / 100", wrong: "13 / 100", costly: "2 / 100" },
  { name: "Rovo", clean: "71 / 100", wrong: "29 / 100", costly: "4 / 100" },
  { name: "Gemini Enterprise", clean: "58 / 100", wrong: "42 / 100", costly: "8 / 100" },
];

export default function MdWiselyPage() {
  return (
    <main className="portfolio-shell">
      <div className="portfolio-container">
        <PortfolioNav />

        <header className="case-hero py-20 md:py-28">
          <div className="grid grid-cols-[1fr_260px] items-end gap-12 max-md:grid-cols-1">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-accent-700">Case 01 · Enterprise Knowledge Agent</p>
              <h1 className="mt-5 max-w-4xl text-[clamp(38px,6vw,64px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-navy-900">
                근거가 없으면 답하지 않고,<br className="desktop-break" />근거가 있어도 다시 검증합니다.
              </h1>
              <p className="mt-7 max-w-3xl text-[17px] leading-[1.8] text-stone-600">
                사내 지식 검색은 문서를 찾는 문제만이 아니었습니다. 빈 검색 결과에서 유창한 답을 만들지 않고, 찾은 근거와 최종 문장의 차이까지 통제해야 했습니다.
              </p>
            </div>
            <dl className="space-y-4 border-l border-stone-200 pl-6 text-[13px]">
              <div><dt className="font-bold text-stone-500">Ownership</dt><dd className="mt-1 text-stone-800">Architecture · Core RAG · Evaluation</dd></div>
              <div><dt className="font-bold text-stone-500">Period</dt><dd className="mt-1 text-stone-800">2026.04–현재</dd></div>
              <div><dt className="font-bold text-stone-500">Stage</dt><dd className="mt-1 text-stone-800">사내 운영 환경</dd></div>
              <div><dt className="font-bold text-stone-500">Snapshot</dt><dd className="mt-1 text-stone-800">2026.08</dd></div>
            </dl>
          </div>
          <div className="mt-12 grid grid-cols-4 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            <CaseMetric value="1,435" label="Indexed documents" detail="2026.08 활성 문서 기준" />
            <CaseMetric value="96.9%" label="Claim precision" detail="100문항 대조 연구" />
            <CaseMetric value="1.6%" label="Unsupported claims" detail="출처를 찾지 못한 주장" />
            <CaseMetric value="87/100" label="오류 주장 미검출 답변" detail="완전 정답률이 아닌 안전성 지표" />
          </div>
        </header>

        <section className="case-section border-t border-stone-200 py-20">
          <div className="case-heading-grid">
            <div><p className="case-kicker">01 · Problem</p><h2>RAG의 실패는 검색 결과가 비었을 때 가장 위험했습니다.</h2></div>
            <div className="case-copy">
              <p>업무 문서는 표·첨부·사내 약어가 섞여 있고, 질문의 표현은 원문과 다릅니다. 단순 벡터 검색은 가까운 문서를 반환하지만 그것이 답할 수 있는 근거인지는 보장하지 않습니다.</p>
              <p>특히 모델은 근거가 없을 때도 자연스러운 문장을 완성합니다. 그래서 “근거 없음”을 프롬프트 지시가 아니라 순수 코드 판정으로 만들고, 답변을 만든 뒤에도 주장별로 다시 확인했습니다.</p>
            </div>
          </div>
        </section>

        <section className="case-section border-t border-stone-200 py-20">
          <p className="case-kicker">02 · Architecture</p>
          <h2 className="case-title">색인 8단계와 서빙 16단계를 서로 다른 책임으로 분리했습니다.</h2>
          <div className="architecture-flow mt-10">
            {[
              ["Source", "Confluence", "활성 1,435문서로 코퍼스를 명시적으로 한정"],
              ["Index", "8-stage pipeline", "구조 인식 청킹 · parent-child · media caption"],
              ["Retrieve", "Hybrid RRF", "dense + lexical · family collapse · budget"],
              ["Decide", "Evidence gates", "의도 판별 · 근거 충분성 · 제한된 반복"],
              ["Serve", "Verified answer", "주장 단위 검증 · 인용 · 한계 공개"],
            ].map(([eyebrow, title, body]) => (
              <div key={title} className="architecture-node">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-accent-700">{eyebrow}</p>
                <h3 className="mt-2 text-[14px] font-extrabold text-navy-900">{title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-stone-500">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section signature-decisions border-t border-stone-200 py-20">
          <p className="case-kicker">03 · Signature decisions</p>
          <div className="mt-8 grid grid-cols-3 gap-5 max-md:grid-cols-1">
            <article className="decision-card"><span>01</span><h3>생성 전에 근거를 판정</h3><p>의도 판별 뒤에만 검색하고, 근거 없음·일부 근거·충분한 근거를 코드가 구분합니다. 모델은 이 판정에 참여하지 않습니다.</p></article>
            <article className="decision-card"><span>02</span><h3>모든 반복을 코드가 제한</h3><p>검색 round, 답변 수정, 재탐색을 서로 다른 counter로 소유합니다. 모델이나 orchestration runtime이 무한 반복을 결정하지 못합니다.</p></article>
            <article className="decision-card"><span>03</span><h3>최종 문장을 주장별로 검증</h3><p>답변과 근거의 entailment를 확인하고, 잘못된 인용은 제거합니다. 한 번의 수정과 한 번의 재탐색 뒤에도 남은 차이는 숨기지 않습니다.</p></article>
          </div>
        </section>

        <section className="case-section border-t border-stone-200 py-20">
          <div className="case-heading-grid">
            <div><p className="case-kicker">04 · Trace walkthrough</p><h2>한 질문이 답변이 되기까지 세 번의 통제 지점을 통과합니다.</h2></div>
            <ol className="trace-list">
              <li><strong>Scope gate</strong><span>질문이 지식베이스로 답할 수 있는지 확인하고, 범위 밖 질문은 검색 전에 종료합니다.</span></li>
              <li><strong>Evidence loop</strong><span>질문을 업무 어휘로 정규화하고 hybrid retrieval 결과가 충분할 때까지 제한된 탐색 회차만 수행합니다.</span></li>
              <li><strong>Evidence gate</strong><span>근거가 없으면 정해진 무응답 방식으로 종료하고, 일부만 있으면 확인된 범위만 요약합니다.</span></li>
              <li><strong>Claim verification</strong><span>생성된 각 주장을 실제 제공 근거와 대조하고 검증된 인용만 최종 응답에 남깁니다.</span></li>
            </ol>
          </div>
        </section>

        <section className="case-section border-t border-stone-200 py-20">
          <p className="case-kicker">05 · Measured outcome</p>
          <div className="mt-4 flex items-end justify-between gap-8 max-md:block">
            <h2 className="case-title max-w-2xl">사용자가 바로 체감하는 답변 단위 안전성을 먼저 비교했습니다.</h2>
            <p className="max-w-md text-right text-[12px] leading-relaxed text-stone-500 max-md:mt-4 max-md:text-left">같은 100개 질문에서 추출한 총 3,069개 답변 주장을 판정한 뒤, 오류가 포함된 답변과 그렇지 않은 답변을 질문 단위로 다시 집계했습니다.</p>
          </div>
          <div className="case-table-wrap mt-8" tabIndex={0} aria-label="답변 단위 비교표, 모바일에서는 좌우로 스크롤할 수 있습니다">
            <p className="table-scroll-hint" aria-hidden="true">표를 좌우로 밀어 전체 항목 보기 →</p>
            <table className="case-table">
              <thead><tr><th>System</th><th>오류 주장 미검출</th><th>오류 주장 포함</th><th>고비용 오류 포함</th></tr></thead>
              <tbody>{answerComparison.map((row) => <tr key={row.name} className={row.name === "MD Wisely" ? "is-primary" : ""}><th>{row.name}</th><td>{row.clean}</td><td>{row.wrong}</td><td>{row.costly}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="mt-4 text-[12px] leading-relaxed text-stone-500">이 지표는 “완전 정답”이 아니라 오류·고비용 주장이 검출되지 않은 답변 비율입니다. Rovo 대비 +16%p, Gemini Enterprise 대비 +29%p는 신뢰구간상 유의했습니다. 고비용 오류 2건과 4건의 차이는 이 표본에서 유의하지 않아 Rovo 상대 우위로 주장하지 않습니다.</p>
          <div className="mt-10 grid grid-cols-[240px_1fr] gap-8 rounded-2xl border border-stone-200 bg-white p-6 max-md:grid-cols-1">
            <div><p className="case-kicker">Retrieval diagnostic</p><strong className="mt-2 block text-3xl font-extrabold text-navy-900">문서 도달 33/40</strong><p className="mt-1 text-[11px] text-stone-500">도달한 문서에서는 33/33 정답</p></div>
            <div><h3 className="text-lg font-extrabold text-navy-900">전체 답변 정오 판정이 있는 별도 진단에서는, 답안 작성보다 의미가 멀어진 문서를 찾는 단계가 병목이었습니다.</h3><p className="mt-2 text-[13px] leading-relaxed text-stone-600">권위 문서가 하나로 정해진 20쌍에서 MD Wisely는 키워드형 20건 모두 문서 도달·정답, 사례형은 13건 도달·13건 정답이었습니다. 놓친 7건은 문서를 찾지 못했습니다. 세 시스템 전체에서도 도달 35건 중 30건이 정답, 미도달 25건 중 정답은 1건이었습니다. 100문항 본 실험에는 같은 holistic pass/fail 판정이 없으므로 33/40 문서 도달 결과를 전체 정답률로 확대하지 않습니다.</p></div>
          </div>
          <div className="evaluation-loop mt-10 grid grid-cols-[240px_1fr] gap-8 border-l-2 border-emerald-600 pl-6 max-md:grid-cols-1">
            <div><p className="case-kicker">Evaluation → data loop</p><strong className="mt-2 block text-3xl font-extrabold text-navy-900">849건</strong><p className="mt-1 text-[12px] font-bold text-stone-600">GT·지식원 보강 후보</p></div>
            <div><h3 className="text-lg font-extrabold text-navy-900">평가는 순위표로 끝나지 않고 GT와 지식원 개선 백로그를 만들었습니다.</h3><p className="mt-2 text-[13px] leading-relaxed text-stone-600">네 구성의 답변에서 GT에는 없지만 문서가 뒷받침한 옳은 사실 후보를 시스템별 합계 849건 수집했습니다. 이 후보를 검토해 GT·문서를 보강한 뒤에는 동일 프로토콜로 다시 측정해야 하며, 보강을 가정한 점수로 기존 결과를 소급 변경하지 않습니다.</p></div>
          </div>
          <details className="research-details mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
            <summary className="text-[13px] font-extrabold text-navy-900">연구 부록: GT 기준 클레임 포함률 57.0%의 정의·분모·비교 결과 보기</summary>
            <p className="mt-3 text-[12px] leading-relaxed text-stone-600">이 값은 질문 정답률이나 retrieval recall이 아니라, 문서가 뒷받침하는 GT claim을 최종 답변에 담은 비율입니다. 정답 근거가 확인된 61개 질문의 356개 claim 가운데 203개를 포함했습니다.</p>
            <div className="coverage-explainer mt-5 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              <div className="rounded-xl bg-white p-4"><strong className="block text-xl text-navy-900">790</strong><span className="mt-1 block text-[11px] leading-relaxed text-stone-500">최초 GT claims</span></div>
              <div className="rounded-xl bg-white p-4"><strong className="block text-xl text-navy-900">−434</strong><span className="mt-1 block text-[11px] leading-relaxed text-stone-500">결함 180 + 검증 불가 254</span></div>
              <div className="rounded-xl bg-white p-4"><strong className="block text-xl text-navy-900">356</strong><span className="mt-1 block text-[11px] leading-relaxed text-stone-500">문서로 도달 가능한 분모</span></div>
            </div>
            <div className="case-table-wrap mt-5" tabIndex={0} aria-label="주장 단위 비교표, 모바일에서는 좌우로 스크롤할 수 있습니다">
              <p className="table-scroll-hint" aria-hidden="true">표를 좌우로 밀어 전체 항목 보기 →</p>
              <table className="case-table">
                <thead><tr><th>System</th><th>GT-relative claim coverage</th><th>Precision</th><th>Unsupported</th><th>오류 주장 미검출</th></tr></thead>
                <tbody>{claimComparison.map((row) => <tr key={row.name} className={row.name === "MD Wisely" ? "is-primary" : ""}><th>{row.name}</th><td>{row.coverage}</td><td>{row.precision}</td><td>{row.unsupported}</td><td>{row.clean}</td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-4 text-[12px] leading-relaxed text-stone-500">Rovo 대비 completeness +13.5%p는 유의했고, Gemini Enterprise 대비 +7.0%p는 유의하지 않았습니다. 절대값은 GT 구성·claim 세분도·코퍼스·판정 규칙에 의존하므로 외부 벤치마크와 직접 비교하지 않습니다.</p>
          </details>
        </section>

        <section className="case-section border-t border-stone-200 py-20">
          <div className="case-contribution-grid grid grid-cols-2 gap-12 max-md:grid-cols-1">
            <div><p className="case-kicker">Ownership & contribution</p><h2 className="case-title">설계에서 평가까지 하나의 피드백 루프로 연결했습니다.</h2><ul className="case-bullets"><li>그래프 제어 흐름과 실패 처리 설계</li><li>RAG 색인·검색·근거 판정 핵심 구현</li><li>A2A와 KB MCP 사이 출처·책임 경계</li><li>대조 연구·품질 지표·운영 문서 체계</li></ul></div>
              <div><p className="case-kicker">Limits & trade-offs</p><h2 className="case-title">측정되지 않은 효과는 성과로 쓰지 않았습니다.</h2><ul className="case-bullets"><li>현재 New Stack 운영 코퍼스는 Confluence로 한정</li><li>GT 감사에서 defect 22.8%, unverifiable 32.2% 확인</li><li>100문항 본 실험에는 holistic 정답 pass/fail 판정이 없음</li><li>New Stack 각 요소의 독립 기여도는 아직 분리하지 못함</li><li>정확성을 위해 한 번의 수정·재탐색 지연을 허용</li></ul></div>
          </div>
        </section>

        <footer className="case-next border-t border-stone-200 py-16">
          <p className="case-kicker">Next case</p>
          <a href="/portfolio/tableau-agent" className="mt-3 flex items-end justify-between gap-6 no-underline group"><span className="text-[clamp(26px,5vw,48px)] font-extrabold tracking-tight text-navy-900">정형 데이터 자연어 분석 에이전트</span><span className="text-3xl text-navy-700 group-hover:translate-x-1 transition">→</span></a>
        </footer>
      </div>
    </main>
  );
}
