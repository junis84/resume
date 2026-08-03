import type { Education as EducationType } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface EducationProps {
  data: EducationType[];
}

export function Education({ data }: EducationProps) {
  const formatDate = (date: string) => {
    const [year, month] = date.split("-");
    return `${year}.${month || ""}`.replace(/\.$/, "");
  };

  return (
    <section className="section-tertiary education">
      <SectionTitle>Education</SectionTitle>
      <div>
        {data.map((edu) => (
          <div
            key={edu.id}
            className="flex items-baseline justify-between gap-2 py-1.5 border-b border-stone-100 last:border-0"
          >
            <div>
              <span className="t-detail text-stone-900 font-medium">
                {edu.institution}
              </span>
              {edu.field && (
                <span className="t-meta text-stone-500 ml-2">{edu.field}</span>
              )}
            </div>
            <span className="t-meta text-stone-500 shrink-0">
              {formatDate(edu.startDate)} ~ {formatDate(edu.endDate)} ({edu.status})
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
