interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`text-[15px] font-semibold text-navy-900 tracking-wide border-b-2 border-navy-700 pb-1.5 mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}
