interface CaseMetricProps {
  value: string;
  label: string;
  detail: string;
}

export function CaseMetric({ value, label, detail }: CaseMetricProps) {
  return (
    <div className="case-metric">
      <p className="text-[28px] font-extrabold tracking-tight text-navy-900 tabular-nums">{value}</p>
      <p className="text-[13px] font-bold text-stone-800">{label}</p>
      <p className="mt-1 text-[12px] leading-relaxed text-stone-500">{detail}</p>
    </div>
  );
}
