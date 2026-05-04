type Stage = {
  name: string;
  score: number;
  isTopGap: boolean;
};

type StageBreakdownProps = {
  stages: Stage[];
};

export function StageBreakdown({ stages }: StageBreakdownProps) {
  return (
    <ul className="space-y-5">
      {stages.map((stage) => {
        const pct = Math.max(0, Math.min(stage.score, 100));
        return (
          <li key={stage.name}>
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <p className="text-base font-medium text-dark">{stage.name}</p>
                {stage.isTopGap && (
                  <span className="inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                    Gap
                  </span>
                )}
              </div>
              <p className="shrink-0 text-sm font-medium text-muted">
                {pct}/100
              </p>
            </div>
            <div
              className="mt-2 h-2 w-full overflow-hidden rounded-full bg-line"
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${stage.name} score`}
            >
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
