import type { OpenSourceProject } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface OpenSourceProps {
  data: OpenSourceProject[];
  githubUrl?: string;
}

export function OpenSource({ data, githubUrl }: OpenSourceProps) {
  return (
    <section className="section-secondary">
      <SectionTitle>Open Source</SectionTitle>
      {githubUrl && (
        <p className="text-[11px] text-navy-700 mb-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy-600"
          >
            {githubUrl.replace("https://", "")}
          </a>
        </p>
      )}

      <div className="grid grid-cols-2 gap-2">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-stone-50 rounded-lg p-2.5"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[12px] font-semibold text-navy-900">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-navy-700"
                >
                  {project.name}
                </a>
              </h3>
              <span className="text-[9px] px-1.5 py-0.5 bg-navy-100 text-navy-700 rounded">
                {project.language}
              </span>
            </div>
            <p className="text-[10px] text-stone-600">{project.description}</p>
            {project.features && project.features.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1.5">
                {project.features.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="text-[9px] px-1 py-0.5 bg-stone-200 text-stone-600 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
