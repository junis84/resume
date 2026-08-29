import type { Metadata } from "next";
import { CoreCompetencies } from "@/components/resume/CoreCompetencies";
import { CredentialsAndAdditional } from "@/components/resume/CredentialsAndAdditional";
import { EarlierExperience } from "@/components/resume/EarlierExperience";
import { Experience } from "@/components/resume/Experience";
import { Header } from "@/components/resume/Header";
import { IntroduceSection } from "@/components/resume/IntroduceSection";
import { Projects } from "@/components/resume/Projects";
import { PublicEvidence } from "@/components/resume/PublicEvidence";
import { careerHistoryData, selectedResumeData } from "@/data/resume";
import { careerHistoryDataEn, selectedResumeDataEn } from "@/data/resume.en";
import { resolveResumeLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: { absolute: "Junyeong Eom — Resume & Career History" },
  authors: [{ name: "Junyeong Eom" }],
  description: "Resume followed by career history",
  robots: { index: false, follow: false },
};

interface PrintResumePageProps {
  searchParams: Promise<{ lang?: string | string[] }>;
}

export default async function PrintResumePage({ searchParams }: PrintResumePageProps) {
  const locale = resolveResumeLocale((await searchParams).lang);
  const resume = locale === "en" ? selectedResumeDataEn : selectedResumeData;
  const career = locale === "en" ? careerHistoryDataEn : careerHistoryData;
  const name = locale === "en" ? "Junyeong Eom" : "엄준영";
  const coveredProjectIds = new Set(["proj-md-wisely", "proj-tableau-agent", "proj-kotlin-migration"]);
  const appendixProjects = career.projects.filter((project) => !coveredProjectIds.has(project.id));

  return (
    <main className="resume-wrapper resume-print-document" lang={locale}>
      <article className="resume-sheet resume-page resume-page-one" aria-label={`${name} resume page 1`}>
        <Header data={resume.header} locale={locale} />
        <IntroduceSection data={resume.introduce} />
        <CoreCompetencies data={resume.skills} locale={locale} />
        <Experience data={resume.experience} title="Professional Experience" locale={locale} idPrefix="resume-" />
      </article>

      <article className="resume-sheet resume-page resume-page-two" aria-label={`${name} resume page 2`}>
        <header className="resume-running-header mb-4 flex items-center justify-between border-b border-stone-200 pb-2">
          <div>
            <p className="t-subhead font-bold text-navy-900">
              {locale === "en" ? "Junyeong Eom" : <><span>엄준영</span> <span className="font-normal text-stone-500">Junyeong Eom</span></>}
            </p>
            <p className="t-meta text-stone-500">Agent systems, backend foundations, public work, and credentials</p>
          </div>
          {locale === "ko" && <a href="/portfolio" className="t-meta font-semibold text-navy-700">junyeong-ai · Portfolio</a>}
          {locale === "en" && <a href="/portfolio/english" className="t-meta font-semibold text-navy-700">English portfolio</a>}
        </header>

        <Projects data={resume.projects} locale={locale} idPrefix="resume-" />
        <PublicEvidence publications={resume.publications} openSource={resume.openSource} githubUrl={resume.header.githubUrl} />
        <EarlierExperience data={career.experience.slice(3)} locale={locale} />
        <CredentialsAndAdditional certifications={resume.certifications} education={resume.education} etc={resume.etc} />
      </article>

      <article className="career-document resume-print-career" aria-label={locale === "en" ? "Career history appendix" : "전체 경력 부록"}>
        <header className="career-appendix-header">
          <p className="t-meta font-bold uppercase tracking-[0.16em] text-accent-700">Career History Appendix</p>
          <h1 className="mt-2 text-[26px] font-bold tracking-tight text-navy-900">
            {locale === "en" ? "Junyeong Eom" : <><span>엄준영</span> <span className="font-normal text-stone-500">Junyeong Eom</span></>}
          </h1>
          <p className="mt-1 t-detail text-stone-600">Full career timeline and project archive</p>
        </header>
        <Experience data={career.experience.slice(3)} title="Earlier Professional Experience" locale={locale} idPrefix="appendix-" />
        <Projects data={appendixProjects} title="Project Archive" locale={locale} idPrefix="appendix-" />
      </article>
    </main>
  );
}
