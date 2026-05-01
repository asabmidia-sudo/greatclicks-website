import { NumberedSection } from '../ui/NumberedSection';

const steps = [
  {
    number: '01',
    title: 'Quiz',
    description: 'Two minutes. Score and ranked gaps.',
  },
  {
    number: '02',
    title: 'Assess',
    description: '90 minutes. Report in 48 hours.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We install what the report recommends.',
  },
];

export function HowItWorks() {
  return (
    <section className="section-y bg-primary-bg">
      <div className="container-content">
        <p className="eyebrow">How It Works</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:mt-6 md:text-6xl">
          Three steps. No fluff.
        </h2>
        <NumberedSection items={steps} className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}
