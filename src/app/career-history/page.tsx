import type { Metadata } from "next";
import { CoreCompetencies } from "@/components/resume/CoreCompetencies";
import { CredentialsAndAdditional } from "@/components/resume/CredentialsAndAdditional";
import { Experience } from "@/components/resume/Experience";
import { Header } from "@/components/resume/Header";
import { IntroduceSection } from "@/components/resume/IntroduceSection";
import { OpenSource } from "@/components/resume/OpenSource";
import { Projects } from "@/components/resume/Projects";
import { Publications } from "@/components/resume/Publications";
import { ResumeToolbar } from "@/components/resume/ResumeToolbar";
import { careerHistoryData } from "@/data/resume";

export const metadata: Metadata = {
  title: "Career History",
  description: "엄준영의 전체 경력과 프로젝트 아카이브",
};

export default function CareerHistoryPage() {
  return (
    <main className="resume-wrapper career-wrapper">
      <ResumeToolbar />
      <article className="resume-container career-document">
        <div className="career-summary-block">
          <Header data={careerHistoryData.header} />
          <div className="career-note no-print t-detail text-stone-600 border-l-2 border-navy-700 pl-3 mb-5">
            전체 경력과 프로젝트를 보존한 기술 아카이브입니다. 채용 검토용 핵심 정보는 <a href="/" className="font-semibold text-navy-700">2페이지 Resume</a>에서 확인할 수 있습니다.
          </div>
          <IntroduceSection data={careerHistoryData.introduce} />
          <CoreCompetencies data={careerHistoryData.skills} />
        </div>
        <header className="career-appendix-header print-only">
          <p className="t-meta font-bold uppercase tracking-[0.16em] text-accent-700">Career History Appendix</p>
          <h1 className="mt-2 text-[26px] font-bold tracking-tight text-navy-900">엄준영 <span className="font-normal text-stone-500">Junyeong Eom</span></h1>
          <p className="mt-1 t-detail text-stone-600">Full career timeline and project archive</p>
        </header>
        <Experience data={careerHistoryData.experience} />
        <Projects data={careerHistoryData.projects} />
        <div className="career-duplicate-sections">
          <Publications data={careerHistoryData.publications} />
          <OpenSource data={careerHistoryData.openSource} githubUrl={careerHistoryData.header.githubUrl} />
          <CredentialsAndAdditional
            certifications={careerHistoryData.certifications}
            education={careerHistoryData.education}
            etc={careerHistoryData.etc}
          />
        </div>
      </article>
    </main>
  );
}
