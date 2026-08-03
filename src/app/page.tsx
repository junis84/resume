"use client";

import { resumeData } from "@/data/resume";
import { Header } from "@/components/resume/Header";
import { IntroduceSection } from "@/components/resume/IntroduceSection";
import { CoreCompetencies } from "@/components/resume/CoreCompetencies";
import { Experience } from "@/components/resume/Experience";
import { Projects } from "@/components/resume/Projects";
import { Publications } from "@/components/resume/Publications";
import { OpenSource } from "@/components/resume/OpenSource";
import { Certifications } from "@/components/resume/Certifications";
import { Education } from "@/components/resume/Education";
import { EtcSection } from "@/components/resume/EtcSection";

export default function ResumePage() {
  return (
    <div className="resume-wrapper">
      <article className="resume-container">
        {/* Header - 이름, 직함, 연락처 */}
        <Header data={resumeData.header} />

        {/* Introduce - 상세 자기소개 */}
        <IntroduceSection data={resumeData.introduce} />

        {/* Core Competencies - 기술 스택 (숙련도 표시) */}
        <CoreCompetencies data={resumeData.skills} />

        {/* Experience - 경력 사항 (타임라인) */}
        <Experience data={resumeData.experience} />

        {/* Projects - 상세 프로젝트 (성과 체크마크) */}
        <Projects data={resumeData.projects} />

        {/* Publications & Speaking - AWS 블로그, Summit */}
        <Publications data={resumeData.publications} />

        {/* Open Source - GitHub 프로젝트 */}
        <OpenSource
          data={resumeData.openSource}
          githubUrl={resumeData.header.githubUrl}
        />

        {/* Certifications - 자격증 */}
        <Certifications data={resumeData.certifications} />

        {/* Education - 학력 */}
        <Education data={resumeData.education} />

        {/* ETC - 기타 (멘사, 군복무) */}
        <EtcSection data={resumeData.etc} />
      </article>

      {/* PDF 다운로드 및 인쇄 버튼 */}
      <div className="no-print mt-4 flex gap-4">
        <a
          href="/api/pdf"
          className="px-6 py-2.5 bg-navy-900 text-white rounded-lg hover:bg-navy-800 transition-colors inline-block font-medium text-[13px]"
          download="resume-junyeong-eom.pdf"
        >
          PDF 다운로드
        </a>
        <button
          onClick={() => window.print()}
          className="px-6 py-2.5 bg-stone-700 text-white rounded-lg hover:bg-stone-600 transition-colors font-medium text-[13px]"
        >
          인쇄
        </button>
      </div>
    </div>
  );
}
