import type { SkillGroup } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface CoreCompetenciesProps {
  data: SkillGroup[];
}

export function CoreCompetencies({ data }: CoreCompetenciesProps) {
  return (
    <section className="section-primary">
      <SectionTitle>Core Competencies</SectionTitle>
      <div className="grid grid-cols-2 gap-4">
        {data.map((group) => (
          <div key={group.category} className="bg-stone-50 rounded-lg p-3">
            <h3 className="text-[13px] font-semibold text-navy-800 mb-2 pb-1 border-b border-stone-200">
              {group.category}
            </h3>
            <p className="text-[12px] text-stone-700 leading-relaxed">
              {group.skills.map((skill) => skill.name).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
