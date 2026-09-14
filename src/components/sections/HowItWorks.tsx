import { NumberedSection } from '../ui/NumberedSection';

const steps = [
  {
    number: '01',
    title: 'Score',
    description: 'See where your practice is leaking opportunities.',
  },
  {
    number: '02',
    title: 'Diagnose',
    description: 'We review your follow-up, CRM, patient journey, and existing systems.',
  },
  {
    number: '03',
    title: 'Fix',
    description: 'We implement the highest-impact improvements first.',
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
