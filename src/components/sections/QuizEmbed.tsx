import { Button } from '../ui/Button';

export function QuizEmbed() {
  return (
    <section className="section-y">
      <div className="container-narrow text-center">
        <p className="eyebrow">Take the Quiz</p>
        <h2 className="mt-4 text-4xl md:mt-6 md:text-6xl">
          Find your gaps right now.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg md:text-xl">
          Two minutes. Six stages. One score.
        </p>

        <div className="mt-12 rounded-3xl border border-line bg-primary-bg p-10 md:mt-16 md:p-16">
          <p className="font-display text-2xl text-dark md:text-4xl">
            Quiz coming soon.
          </p>
          <p className="mt-3 text-base">
            Embedded form lands here next sprint.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/quiz" variant="primary">
              Open quiz in new page
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
