import { BottomCTABanner } from '../components/ui/BottomCTABanner';
import { NumberedSection } from '../components/ui/NumberedSection';
import { kristi } from '../data/caseStudies';

const journey = ['Lead magnet / VSL', 'Free assessment', 'Initial lab testing', 'High-ticket program', 'Ongoing membership'];
const metricNotes = ['Entered the tracked journey', '26% of tracked leads', '41% of lab-test clients', '75% of program clients'];

export function KristiCaseStudy() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32">
        <div className="container-content">
          <p className="eyebrow">Case study / Kristi Leigh</p>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[1.02] md:mt-8 md:text-7xl lg:text-[6.5rem]">{kristi.headline}</h1>
          <p className="mt-8 max-w-3xl text-lg md:text-2xl">Greatclicks helped a virtual functional health practice connect the funnels, follow-up, pipelines, tracking, onboarding, and client ascension infrastructure behind its real offer journey.</p>
          <figure className="mt-12 max-w-4xl overflow-hidden rounded-2xl bg-dark md:mt-16">
            <div className="aspect-video"><iframe src="https://www.youtube-nocookie.com/embed/8iKJvXJ7EUE?rel=0" title="Kristi Leigh video testimonial" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full border-0" /></div>
            <figcaption className="px-5 py-3 text-sm font-medium text-white">Kristi Leigh</figcaption>
          </figure>
        </div>
      </section>
      <section className="section-y bg-primary-bg">
        <div className="container-content">
          <p className="eyebrow">01 / The setup</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">A real offer. One connected journey.</h2>
          <p className="mt-6 max-w-3xl text-lg md:text-xl">{kristi.story.challenge}</p>
          <p className="mt-5 max-w-3xl text-lg md:text-xl">{kristi.story.approach}</p>
          <NumberedSection items={journey.map((title, i) => ({ number: String(i + 1).padStart(2, '0'), title }))} className="mt-12 md:mt-16" />
        </div>
      </section>
      <section className="section-y">
        <div className="container-content">
          <p className="eyebrow">02 / The numbers in context</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">A tracked progression across four client stages.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
            {kristi.metrics.map((metric, i) => (
              <div key={metric.label} className="border-l-2 border-primary pl-6">
                <div className="font-display text-5xl leading-none text-primary md:text-6xl">{metric.value}</div>
                <h3 className="mt-4 text-xl">{metric.label}</h3>
                <p className="mt-3 text-sm text-muted">{metricNotes[i]}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg">These numbers show movement across the commercial journey. Results reflect one practice and depend on traffic, offers, pricing, team execution, and sales processes as well as the supporting infrastructure.</p>
        </div>
      </section>
      <section className="section-y bg-primary-bg">
        <div className="container-content">
          <p className="eyebrow">03 / What Greatclicks connected</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">The infrastructure behind each next step.</h2>
          <NumberedSection items={kristi.systems.map((system, i) => ({ number: String(i + 1).padStart(2, '0'), title: system.name, description: system.components.join(' ') }))} className="mt-12 md:mt-16" />
          <p className="mt-8 max-w-3xl text-lg">Kristi’s membership workflow was a practice-specific extension. Ongoing care, future testing, retention, and renewals are scoped around how each clinic operates.</p>
        </div>
      </section>
      <BottomCTABanner heading="Map your own Lab-to-Program journey." subhead="Review the handoffs between testing, results review, program recommendations, enrollment, and onboarding." primaryCta={{ label: 'Book a Systems Review', to: '/systems-review' }} secondaryCta={{ label: 'Get Your Practice Growth Score', to: '/quiz' }} />
    </>
  );
}
