import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../ui/ScrollReveal';

export function Hero() {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-32">
      <div className="container-content">
        <ScrollReveal>
          <p className="eyebrow">Practice Growth System</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[1.02] md:mt-8 md:text-7xl lg:text-[6.5rem]">
            Your practice is leaking revenue.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mt-8 max-w-xl text-lg md:text-2xl">
            Find out where in two minutes.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
            <Button to="/quiz" variant="primary">
              Get your Practice Growth Score
            </Button>
            <Link
              to="/assessment"
              className="group inline-flex min-h-[44px] items-center text-sm font-medium text-body transition-colors hover:text-primary"
            >
              Or book the assessment
              <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
