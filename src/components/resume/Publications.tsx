import type { Publication } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface PublicationsProps {
  data: Publication[];
}

export function Publications({ data }: PublicationsProps) {
  return (
    <section className="section-secondary">
      <SectionTitle>Publications & Speaking</SectionTitle>
      <div className="space-y-3">
        {data.map((pub) => (
          <div
            key={pub.id}
            className="bg-stone-50 rounded-lg p-3 border-l-4 border-navy-600"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-[13px] font-semibold text-navy-900">
                {pub.title}
              </h3>
              <span className="text-[10px] text-stone-500 whitespace-nowrap">
                {pub.date}
              </span>
            </div>
            <p className="text-[11px] text-stone-600 mt-1">
              {pub.publisher}
            </p>
            {pub.description && (
              <p className="text-[11px] text-stone-500 mt-1">
                {pub.description}
              </p>
            )}
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-navy-600 hover:text-navy-500 mt-1 inline-block"
            >
              {pub.url}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
