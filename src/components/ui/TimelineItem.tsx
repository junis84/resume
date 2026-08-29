import { ReactNode } from "react";

interface TimelineItemProps {
  date: string;
  endDate?: string;
  isCurrent?: boolean;
  duration?: string;
  children: ReactNode;
}

export function TimelineItem({
  date,
  endDate,
  isCurrent,
  duration,
  children,
}: TimelineItemProps) {
  const formatDate = (dateStr: string) => {
    if (dateStr.includes("~")) return dateStr;
    const [year, month] = dateStr.split("-");
    return `${year}.${month || ""}`.replace(/\.$/, "");
  };

  return (
    <div className="timeline-item relative flex gap-3.5">
      {/* Timeline sidebar — 날짜 / 기간 / 재직 여부를 한 축으로 우측 정렬.
          이전에는 날짜·알약 배지·[대괄호 기간]이 각기 다른 정렬과 크기로
          쌓여 있어 사이드바가 본문보다 시끄러웠다. */}
      <div className="timeline-date w-24 flex-shrink-0 text-right">
        <div className="t-meta text-stone-600 font-medium">
          {formatDate(date)}
          {endDate && ` ~ ${formatDate(endDate)}`}
          {isCurrent && " ~ 현재"}
        </div>
        {duration && (
          <div className="t-meta text-stone-400">{duration}</div>
        )}
      </div>

      {/* Timeline line and dot — 현재 진행 중인 항목만 채운 점으로 구분한다
          ("재직 중" 배지를 대신하는 신호) */}
      <div className="timeline-rail flex flex-col items-center">
        <div
          className={`w-1.5 h-1.5 rounded-full mt-[5px] ${
            isCurrent
              ? "bg-navy-700 ring-2 ring-navy-100"
              : "bg-white border border-stone-300"
          }`}
        />
        <div className="w-px flex-1 bg-stone-200 mt-0.5" />
      </div>

      {/* Content */}
      <div className="timeline-content flex-1 pb-3.5">{children}</div>
    </div>
  );
}
