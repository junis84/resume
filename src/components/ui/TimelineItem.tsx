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
    <div className="relative flex gap-4">
      {/* Timeline sidebar */}
      <div className="flex flex-col items-center w-24 flex-shrink-0">
        <div className="text-[10px] text-stone-500 font-medium text-right w-full">
          {formatDate(date)}
          {endDate && ` ~ ${formatDate(endDate)}`}
          {isCurrent && " ~"}
        </div>
        {isCurrent && (
          <span className="mt-1 px-1.5 py-0.5 text-[9px] font-medium bg-navy-100 text-navy-700 rounded">
            재직 중
          </span>
        )}
        {duration && (
          <span className="mt-1 text-[9px] text-stone-400">[{duration}]</span>
        )}
      </div>

      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-navy-700 mt-1" />
        <div className="w-0.5 flex-1 bg-stone-200 -mt-0.5" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-5">{children}</div>
    </div>
  );
}
