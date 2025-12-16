import type { Introduce } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface IntroduceSectionProps {
  data: Introduce;
}

export function IntroduceSection({ data }: IntroduceSectionProps) {
  return (
    <section className="section-primary">
      <SectionTitle>Introduce</SectionTitle>
      <div className="bg-stone-50 rounded-lg p-5 border-l-4 border-navy-700">
        <div className="space-y-2.5">
          {data.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[13px] leading-[1.7] text-stone-800"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
