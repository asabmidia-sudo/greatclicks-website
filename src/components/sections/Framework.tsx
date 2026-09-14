import { NumberedSection } from '../ui/NumberedSection';

const stages = [
  { number: '01', title: 'Lead Capture' },
  { number: '02', title: 'Lead Response' },
  { number: '03', title: 'Discovery Call Conversion' },
  { number: '04', title: 'Enrollment & Onboarding' },
  { number: '05', title: 'Retention & Lab Follow-Up' },
  { number: '06', title: 'Referrals & Reactivation' },
];

export function Framework() {
  return (
    <section className="section-y">
      <div className="container-content">
        <p className="eyebrow">The Practice Growth Framework</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:mt-6 md:text-6xl">
          Six stages. All measurable. All fixable.
        </h2>
        <p className="mt-6 max-w-3xl text-lg md:text-xl">
          Most practices don't have one big problem. They have small gaps across the patient journey that quietly cost appointments, enrollments, staff time, and revenue.
        </p>
        <NumberedSection items={stages} className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}
