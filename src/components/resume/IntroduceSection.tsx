import type { Introduce } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface IntroduceSectionProps {
  data: Introduce;
}

export function IntroduceSection({ data }: IntroduceSectionProps) {
  return (
    <section className="section-primary">
      <SectionTitle>Introduce</SectionTitle>

      {/* 리드문 — 이 섹션에서 유일하게 크게 읽히는 문장 */}
      <p className="t-subhead font-medium text-navy-900 leading-[1.6] mb-4">
        {data.lead}
      </p>

      {/* 일하는 방식 — 문단에 묻히지 않도록 라벨을 앞세워 스캔 가능하게 */}
      <dl className="mb-4 space-y-1.5">
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
      </dl>

      <div className="space-y-2 border-t border-stone-200 pt-3">
        {data.paragraphs.map((paragraph, index) => (
          <p key={index} className="t-detail text-stone-700 leading-[1.7]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
