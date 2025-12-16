interface SkillBadgeProps {
  skill: string;
  size?: "sm" | "md";
  className?: string;
}

export function SkillBadge({
  skill,
  size = "md",
  className = "",
}: SkillBadgeProps) {
  const sizeClasses = size === "sm"
    ? "px-1.5 py-0.5 text-[9px]"
    : "px-2 py-1 text-[10px]";

  return (
    <span
      className={`${sizeClasses} rounded bg-stone-100 text-stone-700 font-medium ${className}`}
    >
      {skill}
    </span>
  );
}
