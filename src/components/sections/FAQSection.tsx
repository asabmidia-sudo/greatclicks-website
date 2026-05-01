import { FAQAccordion } from '../ui/FAQAccordion';

const faqs = [
  {
    question: 'What does the quiz show?',
    answer: 'Your Practice Growth Score and ranked gaps. Two minutes.',
  },
  {
    question: "What's in the Growth Gap Assessment?",
    answer: '90-minute session with your key staff. Report in 48 hours. Every gap costed and ranked.',
  },
  {
    question: 'Is this HIPAA-compliant?',
    answer: 'Yes. BAA-covered infrastructure across the stack.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Assessment is $450. Build pricing scopes from the report.',
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
