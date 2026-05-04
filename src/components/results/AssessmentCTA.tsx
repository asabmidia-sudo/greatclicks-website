import { Button } from '../ui/Button';

export function AssessmentCTA() {
  return (
    <div className="rounded-3xl bg-primary-bg p-8 md:p-12">
      <h2 className="font-display text-3xl text-dark md:text-5xl">
        Stop leaking revenue. Book the Growth Gap Assessment.
      </h2>
      <p className="mt-6 max-w-xl text-base text-body md:text-lg">
        We map every gap, score the impact, and hand you a 90-day fix plan.
      </p>
      <p className="mt-2 max-w-xl text-base text-body md:text-lg">
        $450, fully credited if you become a client.
      </p>
      <div className="mt-8">
        <Button to="/assessment" variant="primary">
          Book the assessment
        </Button>
      </div>
    </div>
  );
}
