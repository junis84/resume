import type { Introduce } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface IntroduceSectionProps {
  data: Introduce;
}

export function IntroduceSection({ data }: IntroduceSectionProps) {
  return (
    <section className="section-secondary profile-summary">
      <SectionTitle>Professional Summary</SectionTitle>

      {/* 리드문 — 이 섹션에서 유일하게 크게 읽히는 문장 */}
      <p className="t-subhead font-semibold text-navy-900 leading-[1.55] mb-2">
        {data.lead}
      </p>

      {data.paragraphs.length > 0 && (
        <div className="space-y-1.5 mb-3">
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className="t-detail text-stone-700 leading-[1.6]">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {data.proofPoints && data.proofPoints.length > 0 && (
        <dl className="proof-grid grid grid-cols-3 gap-2.5">
          {data.proofPoints.map((point) => (
            <div key={point.label} className="proof-item border-l-2 border-accent-600 pl-2.5 py-0.5">
              <dt className="t-subhead font-bold text-navy-900 tabular-nums">{point.value}</dt>
              <dd className="t-meta font-semibold text-stone-700">{point.label}</dd>
              {point.detail && <dd className="t-meta text-stone-500 mt-px">{point.detail}</dd>}
            </div>
          ))}
        </dl>
      )}

      {/* 일하는 방식 — 문단에 묻히지 않도록 라벨을 앞세워 스캔 가능하게 */}
      {data.principles.length > 0 && <dl className="mt-3 space-y-1.5">
        {data.principles.map((principle) => (
          <div key={principle.label} className="flex gap-3">
            <dt className="t-detail font-semibold text-navy-800 w-[104px] shrink-0">
              {principle.label}
            </dt>
            <dd className="t-detail text-stone-700 leading-[1.65] flex-1">
              {principle.text}
            </dd>
          </div>
        ))}
      </dl>}
    </section>
  );
}
