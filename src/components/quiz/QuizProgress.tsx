type QuizProgressProps = {
  current: number;
  total: number;
  className?: string;
};

export function QuizProgress({ current, total, className = '' }: QuizProgressProps) {
  const clamped = Math.max(0, Math.min(current, total));
  const pct = total > 0 ? (clamped / total) * 100 : 0;

  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Question {clamped} of {total}
        </p>
        <p className="text-xs font-medium text-muted">
          {Math.round(pct)}%
        </p>
      </div>
      <div
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`Question ${clamped} of ${total}`}
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
