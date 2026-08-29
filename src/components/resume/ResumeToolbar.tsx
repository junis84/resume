export function ResumeToolbar() {
  return (
    <nav className="resume-toolbar no-print" aria-label="이력서 보기 및 다운로드">
      <a href="/" className="toolbar-link">Resume</a>
      <a href="/career-history" className="toolbar-link">Career History</a>
      <a href="/portfolio" className="toolbar-link">Portfolio</a>
      <a href="/api/pdf?document=resume-ats" className="toolbar-link toolbar-ats" download="junyeong-eom-resume.pdf">ATS 2p</a>
      <a href="/api/pdf?document=resume" className="toolbar-primary" download="junyeong-eom-resume-career-history.pdf">Full PDF</a>
    </nav>
  );
}
