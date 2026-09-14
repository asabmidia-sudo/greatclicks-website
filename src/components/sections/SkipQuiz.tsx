import { Button } from '../ui/Button';

export function SkipQuiz() {
  return (
    <section className="section-y bg-primary-bg">
      <div className="container-narrow text-center">
        <p className="eyebrow">Direct Path</p>
        <h2 className="mt-4 text-4xl md:mt-6 md:text-6xl">
          Already know you have gaps?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg md:text-xl">
          Let's look at what's happening between lead capture, booking, enrollment, onboarding, and retention.
        </p>
        <div className="mt-10 flex justify-center">
          <Button to="/systems-review" variant="primary">
            Book a Systems Review
          </Button>
        </div>
      </div>
    </section>
  );
}
