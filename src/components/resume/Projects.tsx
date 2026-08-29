import type { Project } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineItem } from "@/components/ui/TimelineItem";

interface ProjectsProps {
  data: Project[];
}

export function Projects({ data }: ProjectsProps) {
  return (
    <section className="section-secondary selected-projects">
      <SectionTitle>Key Projects</SectionTitle>
      <div className="space-y-1">
        {data.map((project) => (
          <TimelineItem
            key={project.id}
            date={project.startDate}
            endDate={project.endDate}
          >
            <div className="project-card">
              <div className="mb-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="t-subhead font-semibold text-navy-900">
                    {project.name}
                  </h3>
                  {project.portfolioUrl && (
                    <a href={project.portfolioUrl} className="project-link t-meta font-semibold text-navy-700 shrink-0">
                      Case study →
                    </a>
                  )}
                </div>
                {/* 회사 · 분류를 한 줄 메타로. 분류를 회색 배지로 감싸면
                    페이지마다 배지가 28개 반복돼 성과 표기와 경쟁한다. */}
                <p className="t-meta text-stone-500 mt-0.5">
                  {project.company}
                  <span className="text-stone-300"> · </span>
                  {project.category}
                  {project.role && <><span className="text-stone-300"> · </span>{project.role}</>}
                </p>
              </div>

              <ul className="space-y-px mb-1">
                {project.descriptions.map((desc, index) => (
                  <li key={index} className="t-detail text-stone-700 flex">
                    <span className="text-stone-300 mr-2">·</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {project.achievements && project.achievements.length > 0 && (
                <ul className="space-y-0.5">
                  {project.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className={`t-detail flex items-start ${
                        achievement.isHighlight
                          ? "text-accent-700 font-medium"
                          : "text-stone-600"
                      }`}
                    >
                      <span className="mr-2 shrink-0">
                        {achievement.isHighlight ? "→" : "·"}
                      </span>
                      <span>{achievement.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}
