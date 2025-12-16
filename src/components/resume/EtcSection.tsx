import type { EtcItem } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface EtcSectionProps {
  data: EtcItem[];
}

export function EtcSection({ data }: EtcSectionProps) {
  return (
    <section className="section-tertiary">
      <SectionTitle>ETC</SectionTitle>
      <div className="space-y-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 py-2 border-b border-stone-100 last:border-0"
          >
            <span className="text-[11px] text-stone-500 w-24 flex-shrink-0">
              {item.date}
            </span>
            <div className="flex-1">
              <h4 className="text-[12px] font-medium text-stone-900">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-[11px] text-stone-600 mt-0.5">
                  {item.description}
                </p>
              )}
              {item.organization && (
                <p className="text-[10px] text-stone-500 mt-0.5">
                  {item.organization}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
