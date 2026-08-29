const principles = [
  {
    title: "제품의 문제를 함께 소유합니다",
    description: "직무 경계를 두기보다 현업·비개발자와 문제와 성공 기준을 함께 정의합니다.",
    evidence: "FDE · 현업 작성 평가",
  },
  {
    title: "선택과 포기를 설명합니다",
    description: "대안·비용·포기한 것과 결정을 뒤집을 조건까지 기록합니다.",
    evidence: "ADR · Limits & Trade-offs",
  },
  {
    title: "반대하되 결정에는 헌신합니다",
    description: "근거를 들어 대안을 비판적으로 검토하고, 결정된 방향은 제 의견과 달라도 온전히 실행합니다.",
    evidence: "Design review · Disagree and commit",
  },
  {
    title: "개인의 해법을 팀의 역량으로 만듭니다",
    description: "표준화·문서·멘토링·스터디와 기술 공유로 해법이 개인에게 머물지 않게 합니다.",
    evidence: "Rules · Open source · 기술 공유",
  },
];

interface SeniorOperatingPrinciplesProps {
  compact?: boolean;
}

export function SeniorOperatingPrinciples({ compact = false }: SeniorOperatingPrinciplesProps) {
  return (
    <div className={compact ? "senior-principles is-compact" : "senior-principles"}>
      <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-stone-500">Senior operating principles</p>
      <h2 className={`${compact ? "text-[24px]" : "text-3xl"} mt-2 max-w-4xl font-extrabold tracking-tight text-navy-900`}>
        제품의 문제를 함께 소유하고, 결정의 근거와 실행까지 책임집니다.
      </h2>
      <div className="senior-principles-grid mt-8">
        {principles.map((principle) => (
          <article key={principle.title} className="senior-principle">
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
            <span>{principle.evidence}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
