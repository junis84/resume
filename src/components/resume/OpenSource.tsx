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
        <p className="t-detail text-navy-700 mb-2.5">
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

      {/* 채움 카드 18개가 이어지면 회색 격자로 보인다. 얇은 구분선 기반의
          2열 목록으로 바꿔 개별 프로젝트가 항목으로 읽히게 한다. */}
      <div className="grid grid-cols-2 gap-x-6">
        {data.map((project) => (
          <div key={project.id} className="py-1.5 border-b border-stone-100">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="t-detail font-semibold text-navy-900">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-navy-700"
                >
                  {project.name}
                </a>
              </h3>
              <span className="t-meta text-stone-400 shrink-0">
                {project.language}
              </span>
            </div>
            <p className="t-meta text-stone-600 mt-px">{project.description}</p>
            {project.features && project.features.length > 0 && (
              <p className="t-meta text-stone-400 mt-px">
                {project.features.slice(0, 3).join(" · ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
