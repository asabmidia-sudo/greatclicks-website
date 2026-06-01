type Band = 'critical' | 'significant' | 'solid' | 'mature';

type ResultsHeroProps = {
  score: number;
  band: Band;
};

const bandLabels: Record<Band, string> = {
  critical: 'Critical',
  significant: 'Significant Gaps',
  solid: 'Solid Foundation',
  mature: 'Mature Operation',
};

const bandDescriptions: Record<Band, string> = {
  critical: 'Foundation is missing. Multiple systems need to be built before anything else works.',
  significant: 'Foundation is partly there. Real gaps are breaking handoffs across your practice.',
  solid: 'Foundation is in place. A few system gaps still cost your team time every week.',
  mature: 'Foundation is strong. Tighten the last few gaps to fully automate.',
};

export function ResultsHero({ score, band }: ResultsHeroProps) {
  const clamped = Math.max(0, Math.min(score, 100));
  return (
    <div>
      <p className="eyebrow">Your Practice Growth Score</p>
      <p className="mt-6 font-display text-7xl leading-none text-dark md:text-9xl">
        {clamped}
      </p>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {bandLabels[band]}
      </p>
      <p className="mt-6 max-w-xl text-lg text-body md:text-xl">
        {bandDescriptions[band]}
      </p>
    </div>
  );
}
