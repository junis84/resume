import type { Project } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineItem } from "@/components/ui/TimelineItem";
import type { ResumeLocale } from "@/lib/locale";

interface ProjectsProps {
  data: Project[];
  locale?: ResumeLocale;
  title?: string;
  groupByCompany?: boolean;
  idPrefix?: string;
}

function ProjectList({ data, locale, idPrefix }: { data: Project[]; locale: ResumeLocale; idPrefix: string }) {
  return (
    <div className="space-y-1">
        {data.map((project) => (
          <TimelineItem
            key={project.id}
            id={`${idPrefix}project-${project.id}`}
            date={project.startDate}
            endDate={project.endDate}
            locale={locale}
          >
            <div className="project-card">
              <div className="mb-1">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="t-subhead font-semibold text-navy-900">
                    {project.name}
                  </h3>
                  {project.portfolioUrl && locale === "ko" && (
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
                {project.stage && (
                  <p className="project-stage t-meta font-medium text-accent-700 mt-px">
                    {project.stage}
                  </p>
                )}
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
  );
}

export function Projects({ data, locale = "ko", title = "Key Projects", groupByCompany = false, idPrefix = "" }: ProjectsProps) {
  const groups = Array.from(
    data.reduce((result, project) => {
      const projects = result.get(project.company) ?? [];
      projects.push(project);
      result.set(project.company, projects);
      return result;
    }, new Map<string, Project[]>()),
  );

  return (
    <section id={`${idPrefix}career-projects`} className="section-secondary selected-projects">
      <SectionTitle>{title}</SectionTitle>
      {groupByCompany ? (
        <div className="career-project-groups">
          {groups.map(([company, projects]) => (
            <details key={company} className="career-project-group">
              <summary>
                <span>{company}</span>
                <span>{projects.length} {locale === "en" ? (projects.length === 1 ? "project" : "projects") : "개 프로젝트"}</span>
              </summary>
              <div className="career-project-list">
                <ProjectList data={projects} locale={locale} idPrefix={idPrefix} />
              </div>
            </details>
          ))}
        </div>
      ) : (
        <ProjectList data={data} locale={locale} idPrefix={idPrefix} />
      )}
    </section>
  );
}
