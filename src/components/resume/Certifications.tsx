import type { Certification } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface CertificationsProps {
  data: Certification[];
}

export function Certifications({ data }: CertificationsProps) {
  return (
    <section className="section-tertiary">
      <SectionTitle>Certifications</SectionTitle>
      <div className="grid grid-cols-2 gap-2">
        {data.map((cert) => (
          <div
            key={cert.id}
            className="flex items-center justify-between p-2.5 bg-stone-50 rounded-lg"
          >
            <div>
              <span className="text-[12px] text-stone-900 font-medium">
                {cert.name}
              </span>
              <p className="text-[10px] text-stone-500">{cert.issuer}</p>
            </div>
            <span className="text-[10px] text-navy-700 font-medium">
              {cert.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
