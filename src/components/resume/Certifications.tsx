import type { Certification } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface CertificationsProps {
  data: Certification[];
}

export function Certifications({ data }: CertificationsProps) {
  return (
    <section className="section-tertiary certifications">
      <SectionTitle>Certifications</SectionTitle>
      <div className="grid grid-cols-2 gap-x-6">
        {data.map((cert) => (
          <div
            key={cert.id}
            className="flex items-baseline justify-between gap-2 py-1.5 border-b border-stone-100"
          >
            <div>
              <span className="t-detail text-stone-900 font-medium">
                {cert.name}
              </span>
              <p className="t-meta text-stone-500">{cert.issuer}</p>
            </div>
            <span className="t-meta text-stone-500 shrink-0">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
