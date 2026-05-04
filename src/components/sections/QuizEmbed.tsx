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
        <div className="mt-10 flex justify-center md:mt-12">
          <Button to="/quiz" variant="primary">
            Get your Practice Growth Score
          </Button>
        </div>
      </div>
    </section>
  );
}
