import type { Project } from "@/types/resume";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TimelineItem } from "@/components/ui/TimelineItem";

interface ProjectsProps {
  data: Project[];
}

export function Projects({ data }: ProjectsProps) {
  return (
    <section className="section-primary">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-1">
        {data.map((project) => (
          <TimelineItem
            key={project.id}
            date={project.startDate}
            endDate={project.endDate}
          >
            <div className="project-card">
              <div className="mb-2">
                <h4 className="text-[13px] font-semibold text-navy-900">
                  {project.name}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] text-stone-500">
                    {project.company}
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] bg-stone-100 text-stone-600 rounded">
                    {project.category}
                  </span>
                </div>
              </div>

              <ul className="space-y-0.5 mb-2">
                {project.descriptions.map((desc, index) => (
                  <li key={index} className="text-[11px] text-stone-700 flex">
                    <span className="text-stone-400 mr-2">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {project.achievements && project.achievements.length > 0 && (
                <div className="pt-2 border-t border-stone-100">
                  <ul className="space-y-0.5">
                    {project.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className={`text-[11px] flex items-start ${
                          achievement.isHighlight
                            ? "text-accent-700 font-medium"
                            : "text-stone-600"
                        }`}
                      >
                        <span className="mr-2">
                          {achievement.isHighlight ? "✓" : "•"}
                        </span>
                        <span>{achievement.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </TimelineItem>
        ))}
      </div>
    </section>
  );
}
