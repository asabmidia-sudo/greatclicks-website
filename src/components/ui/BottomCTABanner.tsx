import { Link } from 'react-router-dom';
import { Button } from './Button';

type CTAItem = { label: string; to: string };

type BottomCTABannerProps = {
  heading: string;
  subhead?: string;
  primaryCta: CTAItem;
  secondaryCta?: CTAItem;
  className?: string;
};

export function BottomCTABanner({
  heading,
  subhead,
  primaryCta,
  secondaryCta,
  className = '',
}: BottomCTABannerProps) {
  return (
    <section className={`bg-dark text-white ${className}`}>
      <div className="container-content py-20 text-center md:py-32">
        <h2 className="mx-auto max-w-4xl font-display text-4xl text-white md:text-6xl lg:text-7xl">
          {heading}
        </h2>
        {subhead && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            {subhead}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <Button to={primaryCta.to} variant="primary">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Link
              to={secondaryCta.to}
              className="group inline-flex min-h-[44px] items-center text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {secondaryCta.label}
              <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
