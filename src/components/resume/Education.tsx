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
    <section className="section-tertiary">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-2">
        {data.map((edu) => (
          <div
            key={edu.id}
            className="flex items-center justify-between py-2 border-b border-stone-100 last:border-0"
          >
            <div>
              <span className="text-[13px] text-stone-900 font-medium">
                {edu.institution}
              </span>
              {edu.field && (
                <span className="text-[11px] text-stone-500 ml-2">
                  | {edu.field}
                </span>
              )}
            </div>
            <span className="text-[11px] text-stone-500">
              {formatDate(edu.startDate)} ~ {formatDate(edu.endDate)} ({edu.status})
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
