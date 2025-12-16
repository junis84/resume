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
          <h1 className="text-[32px] font-bold text-navy-900 tracking-tight">
            {nameKo}
            <span className="text-stone-500 font-normal ml-2">({nameEn})</span>
          </h1>
          <p className="text-[17px] text-stone-700 mt-1">{title}</p>
        </div>
        <div className="text-right">
          <div className="px-4 py-2 bg-navy-900 text-white rounded-lg">
            <span className="text-[12px]">총 경력</span>
            <span className="text-[15px] font-bold ml-2">{totalExperience}</span>
          </div>
          {updatedAt && (
            <p className="text-[10px] text-stone-400 mt-1.5">
              Updated: {updatedAt}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-4 text-[12px] text-stone-600">
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
