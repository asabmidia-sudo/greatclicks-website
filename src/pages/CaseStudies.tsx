import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { BottomCTABanner } from '../components/ui/BottomCTABanner';
import { caseStudies } from '../data/caseStudies';

export function CaseStudies() {
  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        <div className="container-content">
          <ScrollReveal>
            <p className="eyebrow">Case Studies</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] md:mt-8 md:text-7xl">
              Real systems. Real numbers.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg md:mt-8 md:text-xl">
              How we build the Practice OS for functional medicine clinics.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-content">
          <ul className="grid gap-8">
            {caseStudies.map((cs, i) => (
              <li key={cs.slug}>
                <ScrollReveal delay={i * 80}>
                  <Link
                    to={`/case-studies/${cs.slug}`}
                    className="group block rounded-2xl border border-line bg-white p-8 transition-colors hover:border-primary md:p-12"
                  >
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                      {cs.client}
                    </p>
                    <h2 className="mt-4 max-w-3xl text-3xl md:mt-6 md:text-5xl">
                      {cs.headline}
                    </h2>

                    <div className="mt-8 grid grid-cols-2 gap-6 md:mt-10 md:grid-cols-4 md:gap-8">
                      {cs.metrics.slice(0, 4).map((m) => (
                        <div key={m.label} className="border-l-2 border-primary pl-4 md:pl-6">
                          <div className="font-display text-3xl font-normal leading-none text-primary md:text-5xl">
                            {m.value}
                          </div>
                          <div className="mt-2 text-xs font-medium text-dark md:mt-3 md:text-sm">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary-hover md:mt-10">
                      <span>Read the full case study</span>
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </div>
                  </Link>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BottomCTABanner
        heading="Stop stitching it together."
        subhead="Two minutes. See where revenue is leaking."
        primaryCta={{ label: 'Get your Practice Growth Score', to: '/quiz' }}
        secondaryCta={{ label: 'Or book the assessment', to: '/assessment' }}
      />
    </>
  );
}
