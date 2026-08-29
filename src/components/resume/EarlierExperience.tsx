import type { Experience } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { ResumeLocale } from "@/lib/locale";

interface EarlierExperienceProps {
  data: Experience[];
  locale?: ResumeLocale;
}

function formatDate(date: string) {
  return date.replace("-", ".");
}

export function EarlierExperience({ data, locale = "ko" }: EarlierExperienceProps) {
  return (
    <section className="section-tertiary earlier-experience">
      <SectionTitle>Earlier Experience</SectionTitle>
      <div className="earlier-grid grid grid-cols-1">
        {data.map((experience) => (
          <div key={experience.id} className="earlier-row flex items-baseline justify-between gap-3 border-b border-stone-100 py-0.5 first:pt-0">
            <span className="t-detail font-semibold text-navy-900">
              {experience.company} · {experience.position}
            </span>
            <span className="t-meta text-stone-500 tabular-nums">
              {formatDate(experience.startDate)}–{formatDate(experience.endDate ?? (locale === "en" ? "Present" : "현재"))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
