import type { Certification, Education, EtcItem } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface CredentialsAndAdditionalProps {
  certifications: Certification[];
  education: Education[];
  etc: EtcItem[];
}

function formatDate(date: string) {
  return date.replace("-", ".");
}

export function CredentialsAndAdditional({ certifications, education, etc }: CredentialsAndAdditionalProps) {
  return (
    <section className="credentials-additional">
      <SectionTitle>{education.length > 0 ? "Education & Credentials" : "Certifications & Additional Information"}</SectionTitle>
      <div className="credentials-grid grid grid-cols-[1.35fr_1fr] gap-6">
        <div className="divide-y divide-stone-100">
          {certifications.map((item) => (
            <div key={item.id} className="flex items-baseline justify-between gap-3 py-1 first:pt-0">
              <div>
                <span className="t-detail font-semibold text-stone-900">{item.name}</span>
                <span className="t-meta text-stone-500 ml-2">{item.issuer}</span>
              </div>
              <span className="t-meta text-stone-500 shrink-0">{formatDate(item.date)}</span>
            </div>
          ))}
        </div>
        <div className="divide-y divide-stone-100">
          {education.map((item) => (
            <div key={item.id} className="flex items-baseline justify-between gap-3 py-1 first:pt-0">
              <span className="t-detail font-semibold text-stone-900">{item.institution} · {item.field}</span>
              <span className="t-meta text-stone-500 shrink-0">{item.status}</span>
            </div>
          ))}
          {etc.map((item) => (
            <div key={item.id} className="flex items-baseline justify-between gap-3 py-1">
              <span className="t-detail font-semibold text-stone-900">{item.title}</span>
              <span className="t-meta text-stone-500 shrink-0">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
