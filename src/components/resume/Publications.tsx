import type { Publication } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface PublicationsProps {
  data: Publication[];
}

export function Publications({ data }: PublicationsProps) {
  return (
    <section className="section-secondary">
      <SectionTitle>Publications & Speaking</SectionTitle>
      <div>
        {data.map((pub) => (
          <div key={pub.id} className="py-2 border-b border-stone-100 last:border-0">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="t-detail font-semibold text-navy-900">
                {pub.title}
              </h3>
              <span className="t-meta text-stone-500 shrink-0">{pub.date}</span>
            </div>
            <p className="t-meta text-stone-600 mt-0.5">{pub.publisher}</p>
            {pub.description && (
              <p className="t-meta text-stone-500 mt-px">{pub.description}</p>
            )}
            {pub.url && (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="t-meta text-navy-600 hover:text-navy-500 mt-px inline-block"
              >
                {pub.url}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
