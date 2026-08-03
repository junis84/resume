interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    // 밑줄은 navy 2px 전폭에서 stone 1px 로 낮췄다. 9개 섹션마다 굵은 선이
    // 반복되면 정작 강조해야 할 성과보다 구분선이 먼저 눈에 들어온다.
    <h2
      className={`t-section font-semibold text-navy-900 tracking-tight border-b border-stone-300 pb-1.5 mb-3.5 ${className}`}
    >
      {children}
    </h2>
  );
}
