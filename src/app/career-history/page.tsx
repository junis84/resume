import type { Metadata } from "next";
import { CredentialsAndAdditional } from "@/components/resume/CredentialsAndAdditional";
import { Experience } from "@/components/resume/Experience";
import { OpenSource } from "@/components/resume/OpenSource";
import { Projects } from "@/components/resume/Projects";
import { Publications } from "@/components/resume/Publications";
import { ResumeToolbar } from "@/components/resume/ResumeToolbar";
import { SkipLink } from "@/components/ui/SkipLink";
import { careerHistoryData } from "@/data/resume";
import { careerHistoryDataEn } from "@/data/resume.en";
import { resolveResumeLocale } from "@/lib/locale";

interface CareerHistoryPageProps {
  searchParams: Promise<{ lang?: string | string[] }>;
}

export async function generateMetadata({ searchParams }: CareerHistoryPageProps): Promise<Metadata> {
  const locale = resolveResumeLocale((await searchParams).lang);
  return {
    title: "Career History",
    description: locale === "en"
      ? "Junyeong Eom's complete career and project history"
      : "엄준영의 전체 경력과 프로젝트 아카이브",
  };
}

export default async function CareerHistoryPage({ searchParams }: CareerHistoryPageProps) {
  const locale = resolveResumeLocale((await searchParams).lang);
  const career = locale === "en" ? careerHistoryDataEn : careerHistoryData;
  const appendixProjectIds = new Set(["proj-md-wisely", "proj-tableau-agent", "proj-kotlin-migration"]);
  const appendixProjects = career.projects.filter((project) => !appendixProjectIds.has(project.id));

  return (
    <main className="resume-wrapper career-wrapper" lang={locale}>
      <SkipLink href="#career-content" label={locale === "en" ? "Skip to career history" : "경력 본문으로 이동"} />
      <ResumeToolbar locale={locale} currentPath="/career-history" />
      <article id="career-content" className="resume-container career-document">
        <header className="career-screen-header no-print">
          <p className="t-meta font-bold uppercase tracking-[0.16em] text-accent-700">Full career timeline</p>
          <h1 className="mt-2 text-[30px] font-bold tracking-tight text-navy-900">Career History</h1>
          <p className="mt-2 max-w-2xl t-detail text-stone-600">
            {locale === "en"
              ? "A chronological record of professional experience and projects by company."
              : "회사별 경력과 프로젝트를 시간순으로 정리했습니다."}
          </p>
        </header>
        <header className="career-appendix-header print-only">
          <p className="t-meta font-bold uppercase tracking-[0.16em] text-accent-700">Career History Appendix</p>
          <h1 className="mt-2 text-[26px] font-bold tracking-tight text-navy-900">
            {locale === "en" ? "Junyeong Eom" : <><span>엄준영</span> <span className="font-normal text-stone-500">Junyeong Eom</span></>}
          </h1>
          <p className="mt-1 t-detail text-stone-600">Full career timeline and project archive</p>
        </header>
        <nav className="career-jump-nav no-print" aria-label={locale === "en" ? "Jump to career section" : "경력 섹션 바로가기"}>
          <span>{locale === "en" ? "Jump to" : "바로가기"}</span>
          {career.experience.map((experience) => (
            <a key={experience.id} href={`#experience-${experience.id}`}>{experience.company}</a>
          ))}
          <a href="#career-projects">{locale === "en" ? "Projects" : "프로젝트"}</a>
          <a href="#public-work">{locale === "en" ? "Public work" : "공개 활동"}</a>
        </nav>

        <div className="screen-only career-full-history">
          <Experience data={career.experience} title="Professional Experience" locale={locale} />
          <Projects
            data={career.projects}
            locale={locale}
            title="Project Archive"
            groupByCompany
          />
        </div>

        <div className="print-only career-print-appendix">
          <Experience
            data={career.experience.slice(3)}
            title={locale === "en" ? "Earlier Professional Experience" : "Earlier Professional Experience"}
            locale={locale}
            idPrefix="print-"
          />
          <Projects data={appendixProjects} locale={locale} idPrefix="print-" />
        </div>
        <div id="public-work" className="career-duplicate-sections">
          <Publications data={career.publications} locale={locale} />
          <OpenSource data={career.openSource} githubUrl={career.header.githubUrl} />
          <CredentialsAndAdditional
            certifications={career.certifications}
            education={career.education}
            etc={career.etc}
          />
        </div>
      </article>
    </main>
  );
}
