import { Button } from '../ui/Button';

export function QuizEmbed() {
  return (
    <section className="section-y">
      <div className="container-narrow text-center">
        <p className="eyebrow">Practice Growth Scorecard</p>
        <h2 className="mt-4 text-4xl md:mt-6 md:text-6xl">
          Find your growth gaps.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg md:text-xl">
          Take the Practice Growth Scorecard and see which stages of your patient journey need the most attention.
        </p>
        <div className="mt-10 flex justify-center md:mt-12">
          <Button to="/quiz" variant="primary">
            Get Your Practice Growth Score
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted">Takes about 2 minutes. No payment required.</p>
      </div>
    </section>
  );
}
