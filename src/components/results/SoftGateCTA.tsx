import { Button } from '../ui/Button';

type SoftGateCTAProps = {
  lowestStage: string;
  resourceTitle: string;
  resourceHref: string;
};

export function SoftGateCTA({ lowestStage, resourceTitle, resourceHref }: SoftGateCTAProps) {
  return (
    <div className="rounded-3xl bg-primary-bg p-8 md:p-12">
      <p className="eyebrow">Free Resource</p>
      <h2 className="mt-4 font-display text-3xl text-dark md:text-5xl">
        Start with the basics. We built you a free guide.
      </h2>
      <p className="mt-6 max-w-xl text-base text-body md:text-lg">
        Your lowest score is in {lowestStage}.
      </p>
      <p className="mt-2 max-w-xl text-base text-body md:text-lg">
        {resourceTitle} is the fastest fix this month.
      </p>
      <div className="mt-8">
        <Button href={resourceHref} variant="primary">
          Get the guide
        </Button>
      </div>
    </div>
  );
}
