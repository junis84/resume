import type { SkillGroup } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface CoreCompetenciesProps {
  data: SkillGroup[];
}

/**
 * 카테고리당 한 행. 이전에는 2열 카드 그리드였는데 카테고리가 홀수(5개)라
 * 마지막 칸이 비었고, 그리드가 페이지 경계에 걸리면 한 카드만 다음 장으로
 * 넘어갔다. 행 레이아웃은 두 문제를 모두 없애고 밀도도 높다.
 *
 * `level: 3`(고급)은 진하게, 그 외는 옅게 렌더해 숙련도를 별도 UI 없이 표현한다.
 */
export function CoreCompetencies({ data }: CoreCompetenciesProps) {
  return (
    <section className="section-primary competencies">
      <SectionTitle>Core Competencies</SectionTitle>
      <dl className="space-y-2">
        {data.map((group) => (
          <div
            key={group.category}
            className="flex gap-3 border-b border-stone-100 pb-2 last:border-b-0 last:pb-0"
          >
            <dt className="t-detail font-semibold text-navy-800 w-[76px] shrink-0">
              {group.category}
            </dt>
            <dd className="t-detail flex-1 leading-[1.65]">
              {group.skills.map((skill, index) => (
                <span key={skill.name}>
                  <span
                    className={
                      skill.level === 3 || skill.level === undefined
                        ? "text-stone-800"
                        : "text-stone-500"
                    }
                  >
                    {skill.name}
                  </span>
                  {index < group.skills.length - 1 && (
                    <span className="text-stone-300"> · </span>
                  )}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      <p className="t-meta text-stone-400 mt-2">
        진한 표기 = 실무 주력 · 옅은 표기 = 사용 경험
      </p>
    </section>
  );
}
