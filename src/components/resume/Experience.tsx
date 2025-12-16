import type { Experience as ExperienceType } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface ExperienceProps {
  data: ExperienceType[];
}

// 정량적 성과를 강조하는 헬퍼 함수
function highlightAchievements(text: string): React.ReactNode {
  const parts = text.split(/(\d+(?:\.\d+)?%|\d+(?:\.\d+)?배|\d+,?\d*만?)/g);

  return parts.map((part, index) => {
    if (/^\d+(?:\.\d+)?%$|^\d+(?:\.\d+)?배$|^\d+,?\d*만?$/.test(part)) {
      return (
        <span key={index} className="font-semibold text-accent-700">
          {part}
        </span>
      );
    }
    return part;
  });
}

export function Experience({ data }: ExperienceProps) {
  const validExperiences = data.filter((exp) => !exp.isPlaceholder);
  const placeholderExperiences = data.filter((exp) => exp.isPlaceholder);

  return (
    <section className="section-primary">
      <SectionTitle>Experience</SectionTitle>

      {/* Placeholder (42dot) */}
      {placeholderExperiences.map((exp) => (
        <div
          key={exp.id}
          className="mb-4 p-3 bg-stone-50 border border-dashed border-stone-300 rounded-lg opacity-60"
        >
          <div className="flex justify-between items-baseline">
            <h3 className="text-[14px] font-semibold text-stone-500">
              {exp.company}
              {exp.companyEn && (
                <span className="font-normal ml-1">({exp.companyEn})</span>
              )}
            </h3>
            <span className="text-[11px] text-stone-400">입사 예정</span>
          </div>
          <p className="text-[11px] text-stone-400 mt-1 italic">
            [입사 후 정보 입력 예정]
          </p>
        </div>
      ))}

      {/* Main experiences */}
      <div className="space-y-1">
        {validExperiences.map((exp) => (
          <TimelineItem
            key={exp.id}
            date={exp.startDate}
            endDate={exp.endDate}
            isCurrent={exp.isCurrent}
            duration={exp.duration}
          >
            <div className="experience-card">
              <div className="mb-2">
                <h3 className="text-[14px] font-semibold text-navy-900">
                  {exp.company}
                  {exp.companyEn && (
                    <span className="text-stone-500 font-normal ml-1">
                      ({exp.companyEn})
                    </span>
                  )}
                </h3>
                <p className="text-[12px] text-stone-700">
                  {exp.position}
                  {exp.department && ` · ${exp.department}`}
                </p>
                {exp.companyInfo && (
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    {exp.companyInfo}
                  </p>
                )}
              </div>

              {exp.highlights.length > 0 && (
                <ul className="space-y-1 mb-2">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="text-[12px] text-stone-800 flex">
                      <span className="text-stone-400 mr-2">•</span>
                      <span>{highlightAchievements(highlight)}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.skillKeywords && exp.skillKeywords.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-2 border-t border-stone-100">
                  {exp.skillKeywords.map((tech) => (
                    <SkillBadge key={tech} skill={tech} size="sm" />
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
