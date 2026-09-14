import { Button } from '../ui/Button';

type SoftGateCTAProps = {
  lowestStage: string;
};

export function SoftGateCTA({ lowestStage }: SoftGateCTAProps) {
  return (
    <div className="rounded-3xl bg-primary-bg p-8 md:p-12">
      <p className="eyebrow">Your next step</p>
      <h2 className="mt-4 font-display text-3xl text-dark md:text-5xl">
        Start with your biggest gap.
      </h2>
      <p className="mt-6 max-w-xl text-base text-body md:text-lg">
        Your lowest score is in {lowestStage}.
      </p>
      <p className="mt-2 max-w-xl text-base text-body md:text-lg">
        Use the stage breakdown above to review where people lose their next step. When you’re ready, we can discuss the systems behind it.
      </p>
      <div className="mt-8">
        <Button to="/assessment" variant="secondary">
          Ask About Your Systems
        </Button>
      </div>
    </div>
  );
}
