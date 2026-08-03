import type { Header as HeaderType } from "@/types/resume";

interface HeaderProps {
  data: HeaderType;
}

export function Header({ data }: HeaderProps) {
  const {
    nameKo,
    nameEn,
    title,
    email,
    githubUrl,
    linkedinUrl,
    totalExperience,
    updatedAt,
  } = data;

  return (
    <header className="mb-7 pb-5 border-b border-stone-200">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="t-name font-bold text-navy-900 tracking-tight">
            {nameKo}
            <span className="text-stone-500 font-normal ml-2">({nameEn})</span>
          </h1>
          <p className="t-title text-stone-700 mt-1">{title}</p>
        </div>
        {/* 총 경력: 짙은 알약 배지 대신 타이포로만 — 배지는 스티커처럼 보인다 */}
        <div className="text-right">
          <p className="t-meta text-stone-500 uppercase tracking-widest">
            총 경력
          </p>
          <p className="t-title font-semibold text-navy-900 mt-0.5">
            {totalExperience}
          </p>
          {updatedAt && (
            <p className="t-meta text-stone-400 mt-1">Updated {updatedAt}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-4 t-body text-stone-600">
        <a
          href={`mailto:${email}`}
          className="hover:text-navy-700 transition-colors"
        >
          {email}
        </a>
        <span className="text-stone-300">|</span>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy-700 hover:text-navy-600 transition-colors"
        >
          {githubUrl?.replace("https://", "")}
        </a>
        {linkedinUrl && (
          <>
            <span className="text-stone-300">|</span>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-700 hover:text-navy-600 transition-colors"
            >
              LinkedIn
            </a>
          </>
        )}
      </div>
    </header>
  );
}
