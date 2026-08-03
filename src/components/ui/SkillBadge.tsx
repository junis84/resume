interface SkillBadgeProps {
  skill: string;
  className?: string;
}

/**
 * 회색 채움 알약 대신 얇은 아웃라인. 한 카드에 여러 개가 놓였을 때
 * 채움 배지는 회색 덩어리로 뭉쳐 보이지만 아웃라인은 개별 항목으로 읽힌다.
 * 크기는 스케일 최소값(10px)으로 고정 — 이전 `size` 프롭은 "sm"(9px)만
 * 쓰였고 9px 는 인쇄 가독 하한 미만이었다.
 */
export function SkillBadge({ skill, className = "" }: SkillBadgeProps) {
  return (
    <span
      className={`px-1.5 py-px t-meta rounded-sm border border-stone-200 text-stone-600 ${className}`}
    >
      {skill}
    </span>
  );
}
