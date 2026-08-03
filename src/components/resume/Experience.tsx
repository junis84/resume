import type { Experience as ExperienceType } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface ExperienceProps {
  data: ExperienceType[];
}

/**
 * 성과의 크기를 나타내는 수치(30%, 2배)만 강조한다.
 *
 * 이전에는 맨숫자까지 잡아서 "Capora TMS 2.0"의 버전, "18종"·"9종"의 개수가
 * 성과처럼 칠해졌다. 개수와 버전은 크기가 아니므로 강조 대상이 아니다.
 * 앞뒤가 영문·숫자인 경우(A2A, NL2SQL)도 제외한다.
 */
const MAGNITUDE = /((?<![A-Za-z0-9.])\d+(?:\.\d+)?(?:%|배)(?![A-Za-z0-9]))/g;

function highlightMagnitude(text: string): React.ReactNode {
  return text.split(MAGNITUDE).map((part, index) =>
    /^\d+(?:\.\d+)?(?:%|배)$/.test(part) ? (
      <span key={index} className="font-semibold text-accent-700">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function Experience({ data }: ExperienceProps) {
  return (
    <section className="section-primary">
      <SectionTitle>Experience</SectionTitle>

      <div className="space-y-1">
        {data.map((exp) => (
          <TimelineItem
            key={exp.id}
            date={exp.startDate}
            endDate={exp.endDate}
            isCurrent={exp.isCurrent}
            duration={exp.duration}
          >
            <div className="experience-card">
              <div className="mb-2">
                <h3 className="t-subhead font-semibold text-navy-900">
                  {exp.company}
                  {exp.companyEn && (
                    <span className="text-stone-500 font-normal ml-1">
                      ({exp.companyEn})
                    </span>
                  )}
                </h3>
                <p className="t-body text-stone-700">
                  {exp.position}
                  {exp.department && ` · ${exp.department}`}
                </p>
                {exp.companyInfo && (
                  <p className="t-detail text-stone-500 mt-0.5">
                    {exp.companyInfo}
                  </p>
                )}
              </div>

              {exp.highlights.length > 0 && (
                <ul className="space-y-1 mb-2">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="t-body text-stone-800 flex">
                      <span className="text-stone-300 mr-2">·</span>
                      <span>{highlightMagnitude(highlight)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.skillKeywords && exp.skillKeywords.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {exp.skillKeywords.map((tech) => (
                    <SkillBadge key={tech} skill={tech} />
                  ))}
                </div>
              )}
            </div>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}
