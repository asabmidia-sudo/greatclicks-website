import { Button } from '../components/ui/Button';
import { NumberedSection } from '../components/ui/NumberedSection';
import { AssessmentCalendar } from '../components/AssessmentCalendar';

const steps = [
  { number: '01', title: 'Your patient journey', description: 'We review what happens between first inquiry, booking, enrollment, onboarding, and retention.' },
  { number: '02', title: 'Your system gaps', description: 'We look at the follow-up, handoffs, and manual work that keep your team chasing the next step.' },
  { number: '03', title: 'Your next priorities', description: 'We identify the highest-impact improvements first. Implementation is scoped around what your practice needs.' },
];

export function Assessment() {
  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32">
        <div className="container-content">
          <p className="eyebrow">Assessment Call</p>
          <h1 className="mt-6 max-w-5xl text-5xl leading-[1.02] md:mt-8 md:text-7xl lg:text-[6.5rem]">Find the gaps. Get clear on what comes next.</h1>
          <p className="mt-8 max-w-2xl text-lg md:text-2xl">Let's look at what's happening between lead capture, booking, enrollment, onboarding, and retention.</p>
          <div className="mt-10">
            <Button href="#calendar">Book an Assessment Call</Button>
          </div>
          <p className="mt-5 text-sm text-muted">Built for functional medicine and lab-driven practices.</p>
        </div>
      </section>
      <AssessmentCalendar />
      <section className="section-y bg-primary-bg">
        <div className="container-content">
          <p className="eyebrow">What we review</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:text-6xl">The systems behind the patient journey.</h2>
          <NumberedSection items={steps} className="mt-12 md:mt-16" />
        </div>
      </section>
      <section className="section-y">
        <div className="container-narrow">
          <p className="eyebrow">Practice Growth System</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Fix what matters first.</h2>
          <p className="mt-6 text-lg md:text-xl">Implementation scoped based on the systems and stages that need to be fixed. Ongoing Systems Management can be scoped separately as your practice evolves.</p>
          <p className="mt-5 text-lg">We work with your existing CRM, EHR, marketing tools, and automation stack.</p>
          <div className="mt-10"><Button to="/quiz" variant="secondary">Get Your Practice Growth Score</Button></div>
        </div>
      </section>
    </>
  );
}
