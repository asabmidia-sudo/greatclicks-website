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
  critical: 'Multiple core systems are missing. Each one is leaking revenue every month.',
  significant: 'Foundation is partly there. Real gaps are leaking revenue right now.',
  solid: 'Most systems work. Top performers push 20% past where you are.',
  mature: 'Strong operation across the board. Refinement is what scales from here.',
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
