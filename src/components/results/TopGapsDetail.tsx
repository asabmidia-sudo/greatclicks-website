type Gap = {
  rank: 1 | 2 | 3;
  stage: string;
  score: number;
  impactCopy: string;
};

type TopGapsDetailProps = {
  gaps: Gap[];
};

export function TopGapsDetail({ gaps }: TopGapsDetailProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
      {gaps.map((gap) => (
        <article
          key={gap.rank}
          className="flex flex-col rounded-2xl border border-line bg-white p-6"
        >
          <p className="font-display text-5xl leading-none text-primary">
            {gap.rank}
          </p>
          <h3 className="mt-4 font-display text-xl text-dark">{gap.stage}</h3>
          <p className="mt-2 text-sm font-medium text-muted">
            Score: {gap.score}/100
          </p>
          <p className="mt-4 text-sm text-body">{gap.impactCopy}</p>
        </article>
      ))}
    </div>
  );
}
