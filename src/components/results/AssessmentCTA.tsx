import { Button } from '../ui/Button';

export function AssessmentCTA() {
  return (
    <div className="rounded-3xl bg-primary-bg p-8 md:p-12">
      <h2 className="font-display text-3xl text-dark md:text-5xl">
        Turn your score into a clear next step.
      </h2>
      <p className="mt-6 max-w-xl text-base text-body md:text-lg">
        We review your follow-up, patient journey, and existing systems to identify the highest-impact improvements first.
      </p>
      <div className="mt-8">
        <Button to="/assessment" variant="primary">
          Book an Assessment Call
        </Button>
      </div>
    </div>
  );
}
