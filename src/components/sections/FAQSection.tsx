import { FAQAccordion } from '../ui/FAQAccordion';

const faqs = [
  {
    question: 'What does the scorecard show?',
    answer: 'Your Practice Growth Score and the stages that need the most attention. It takes about two minutes and requires no payment.',
  },
  {
    question: 'What happens in a Systems Review?',
    answer: 'We review your follow-up, CRM, patient journey, and existing systems to identify the highest-impact gaps and discuss the next steps.',
  },
  {
    question: 'Do we need to change our software?',
    answer: 'We work with your existing CRM, EHR, marketing tools, and automation stack. The starting point is the patient journey and what needs to work better.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Implementation scoped based on the systems and stages that need to be fixed. We start with a conversation about your practice.',
  },
];

export function FAQSection() {
  return (
    <section className="section-y">
      <div className="container-narrow">
        <p className="eyebrow">FAQ</p>
        <h2 className="mt-4 text-4xl md:mt-6 md:text-6xl">
          Frequently asked questions.
        </h2>
        <FAQAccordion items={faqs} className="mt-12 md:mt-16" />
      </div>
    </section>
  );
}
