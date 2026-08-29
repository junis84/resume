import type { OpenSourceProject, Publication } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface PublicEvidenceProps {
  publications: Publication[];
  openSource: OpenSourceProject[];
  githubUrl?: string;
}

export function PublicEvidence({ publications, openSource, githubUrl }: PublicEvidenceProps) {
  return (
    <section className="section-tertiary public-evidence">
      <SectionTitle>Publications & Open Source</SectionTitle>
      <div className="public-evidence-grid grid grid-cols-2 gap-6">
        <div>
          <h3 className="t-meta font-bold uppercase tracking-wider text-stone-500 mb-1">Speaking & Writing</h3>
          <div className="divide-y divide-stone-100">
            {publications.map((item) => (
              <div key={item.id} className="py-1.5 first:pt-0">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="t-detail font-semibold text-navy-900 hover:text-navy-700">
                  {item.title}
                </a>
                <p className="t-meta text-stone-500 mt-px">{item.publisher} · {item.date}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-3 mb-1">
            <h3 className="t-meta font-bold uppercase tracking-wider text-stone-500">Open-source Engineering Tools</h3>
            {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="t-meta text-navy-700">GitHub →</a>}
          </div>
          <div className="divide-y divide-stone-100">
            {openSource.map((item) => (
              <div key={item.id} className="flex items-baseline gap-2 py-1.5 first:pt-0">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="t-detail shrink-0 font-semibold text-navy-900 hover:text-navy-700">{item.name}</a>
                <p className="t-meta min-w-0 text-stone-600">{item.description}</p>
                <span className="public-evidence-language t-meta ml-auto shrink-0 text-stone-500">{item.language}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
