import type { EtcItem } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface EtcSectionProps {
  data: EtcItem[];
}

export function EtcSection({ data }: EtcSectionProps) {
  return (
    <section className="section-tertiary etc">
      <SectionTitle>ETC</SectionTitle>
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-baseline gap-4 py-1.5 border-b border-stone-100 last:border-0"
          >
            <span className="t-meta text-stone-500 w-24 shrink-0">
              {item.date}
            </span>
            <div className="flex-1">
              <span className="t-detail font-medium text-stone-900">
                {item.title}
              </span>
              {item.description && (
                <span className="t-meta text-stone-600 ml-2">
                  {item.description}
                </span>
              )}
              {item.organization && (
                <span className="t-meta text-stone-500 ml-2">
                  {item.organization}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
