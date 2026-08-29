import { CoreCompetencies } from "@/components/resume/CoreCompetencies";
import { CredentialsAndAdditional } from "@/components/resume/CredentialsAndAdditional";
import { EarlierExperience } from "@/components/resume/EarlierExperience";
import { Experience } from "@/components/resume/Experience";
import { Header } from "@/components/resume/Header";
import { IntroduceSection } from "@/components/resume/IntroduceSection";
import { Projects } from "@/components/resume/Projects";
import { PublicEvidence } from "@/components/resume/PublicEvidence";
import { ResumeToolbar } from "@/components/resume/ResumeToolbar";
import { careerHistoryData, selectedResumeData } from "@/data/resume";

function PageFooter({ page }: { page: number }) {
  return (
    <footer className="resume-page-footer t-meta text-stone-500">
      <span>Junyeong Eom · Senior AI & Backend Engineer</span>
      <span>{page} / 2</span>
    </footer>
  );
}

export default function ResumePage() {
  return (
    <main className="resume-wrapper">
      <ResumeToolbar />

      <article className="resume-sheet resume-page resume-page-one" aria-label="엄준영 채용용 이력서 1페이지">
        <Header data={selectedResumeData.header} />
        <IntroduceSection data={selectedResumeData.introduce} />
        <CoreCompetencies data={selectedResumeData.skills} />
        <Experience data={selectedResumeData.experience} title="Professional Experience" />
        <PageFooter page={1} />
      </article>

      <article className="resume-sheet resume-page resume-page-two" aria-label="엄준영 채용용 이력서 2페이지">
        <header className="resume-running-header flex items-center justify-between border-b border-stone-200 pb-2 mb-4">
          <div>
            <p className="t-subhead font-bold text-navy-900">엄준영 <span className="font-normal text-stone-500">Junyeong Eom</span></p>
            <p className="t-meta text-stone-500">Agent systems, backend foundations, public work, and credentials</p>
          </div>
          <a href="/portfolio" className="t-meta font-semibold text-navy-700">junyeong-ai · Portfolio</a>
        </header>

        <Projects data={selectedResumeData.projects} />
        <PublicEvidence
          publications={selectedResumeData.publications}
          openSource={selectedResumeData.openSource}
          githubUrl={selectedResumeData.header.githubUrl}
        />
        <EarlierExperience data={careerHistoryData.experience.slice(3)} />
        <CredentialsAndAdditional
          certifications={selectedResumeData.certifications}
          education={selectedResumeData.education}
          etc={selectedResumeData.etc}
        />
        <PageFooter page={2} />
      </article>
    </main>
  );
}
