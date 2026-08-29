import type { Metadata } from "next";
import { CoreCompetencies } from "@/components/resume/CoreCompetencies";
import { CredentialsAndAdditional } from "@/components/resume/CredentialsAndAdditional";
import { EarlierExperience } from "@/components/resume/EarlierExperience";
import { Experience } from "@/components/resume/Experience";
import { Header } from "@/components/resume/Header";
import { IntroduceSection } from "@/components/resume/IntroduceSection";
import { Projects } from "@/components/resume/Projects";
import { PublicEvidence } from "@/components/resume/PublicEvidence";
import { ResumeToolbar } from "@/components/resume/ResumeToolbar";
import { SkipLink } from "@/components/ui/SkipLink";
import { careerHistoryData, selectedResumeData } from "@/data/resume";
import { careerHistoryDataEn, selectedResumeDataEn } from "@/data/resume.en";
import { resolveResumeLocale } from "@/lib/locale";

function PageFooter({ page }: { page: number }) {
  return (
    <footer className="resume-page-footer t-meta text-stone-500">
      <span>Junyeong Eom · Senior AI & Backend Engineer</span>
      <span>{page} / 2</span>
    </footer>
  );
}

interface ResumePageProps {
  searchParams: Promise<{ lang?: string | string[] }>;
}

export async function generateMetadata({ searchParams }: ResumePageProps): Promise<Metadata> {
  const locale = resolveResumeLocale((await searchParams).lang);
  return locale === "en"
    ? {
        title: { absolute: "Junyeong Eom · Senior AI & Backend Engineer" },
        description: "Senior AI and backend engineer with 16+ years of experience building high-scale backend platforms and evaluated enterprise AI agent systems.",
      }
    : {
        title: { absolute: "엄준영 · Senior AI & Backend Engineer" },
        description: "16년 이상의 백엔드 경험을 바탕으로 근거·평가 체계를 갖춘 Agentic AI 플랫폼과 에이전트를 설계하는 엔지니어",
      };
}

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const locale = resolveResumeLocale((await searchParams).lang);
  const resume = locale === "en" ? selectedResumeDataEn : selectedResumeData;
  const career = locale === "en" ? careerHistoryDataEn : careerHistoryData;
  const name = locale === "en" ? "Junyeong Eom" : "엄준영";

  return (
    <main className="resume-wrapper" lang={locale}>
      <SkipLink href="#resume-content" label={locale === "en" ? "Skip to resume" : "이력서 본문으로 이동"} />
      <ResumeToolbar locale={locale} currentPath="/" />

      <article id="resume-content" className="resume-sheet resume-page resume-page-one" aria-label={`${name} resume page 1`}>
        <Header data={resume.header} locale={locale} />
        <IntroduceSection data={resume.introduce} />
        <CoreCompetencies data={resume.skills} locale={locale} />
        <Experience data={resume.experience} title="Professional Experience" locale={locale} />
        <PageFooter page={1} />
      </article>

      <article className="resume-sheet resume-page resume-page-two" aria-label={`${name} resume page 2`}>
        <header className="resume-running-header flex items-center justify-between border-b border-stone-200 pb-2 mb-4">
          <div>
            <p className="t-subhead font-bold text-navy-900">
              {locale === "en" ? "Junyeong Eom" : <><span>엄준영</span> <span className="font-normal text-stone-500">Junyeong Eom</span></>}
            </p>
            <p className="t-meta text-stone-500">Agent systems, backend foundations, public work, and credentials</p>
          </div>
          <a href={locale === "en" ? "/portfolio/english" : "/portfolio"} className="t-meta font-semibold text-navy-700">
            {locale === "en" ? "English portfolio" : "junyeong-ai · Portfolio"}
          </a>
        </header>

        <Projects data={resume.projects} locale={locale} />
        <PublicEvidence
          publications={resume.publications}
          openSource={resume.openSource}
          githubUrl={resume.header.githubUrl}
        />
        <EarlierExperience data={career.experience.slice(3)} locale={locale} />
        <CredentialsAndAdditional
          certifications={resume.certifications}
          education={resume.education}
          etc={resume.etc}
        />
        <PageFooter page={2} />
      </article>
    </main>
  );
}
