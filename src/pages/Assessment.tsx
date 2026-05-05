import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Button } from '../components/ui/Button';
import { FAQAccordion, type FAQItem } from '../components/ui/FAQAccordion';

const WHOP_CHECKOUT = 'https://whop.com/checkout/plan_8XSsdqUjoGELX';

const deliverables = [
  {
    heading: '90-minute working session',
    body: 'We walk through your full patient lifecycle. Lead capture. Lead response. Discovery call. Onboarding. Retention. Referrals. I ask the questions. You give the real answers.',
  },
  {
    heading: 'Top 3 revenue gaps',
    body: 'The three places your clinic loses the most money every month. With dollar impact estimates based on your numbers. Not generic benchmarks.',
  },
  {
    heading: 'Recommended system fixes',
    body: 'Specific automation and workflow recommendations. What to build. What to wire. What to kill. The exact next moves for each gap.',
  },
];

const steps = [
  {
    heading: 'Book and pay',
    body: 'Pick a time. Pay $450. Calendar locks the slot. We send a short pre-call form so the call goes deep, not shallow.',
  },
  {
    heading: '90-minute call',
    body: 'We get on Zoom. I screen-share through every stage of your practice operations. We find the leaks together.',
  },
  {
    heading: 'Written report in 48 hours',
    body: 'You get a full PDF report with your top 3 gaps, recommended fixes, and a custom build proposal if you want me to fix them.',
  },
];

const faqs: FAQItem[] = [
  {
    question: 'What if the assessment finds I do not need a full build?',
    answer:
      'That is a real possibility. Some clinics need one or two automations, not a full Practice OS. The report will tell you the truth either way.',
  },
  {
    question: 'Do I have to hire you after the assessment?',
    answer:
      'No. The $450 buys the diagnostic. You own the report. Hire me, hire someone else, or do it yourself. Up to you.',
  },
  {
    question: 'How is this different from the free quiz?',
    answer:
      'The quiz scores six stages from your answers. The assessment is a 90-minute deep-dive into your real operations with dollar-impact analysis and specific build recommendations. The quiz is the screening. The assessment is the diagnosis.',
  },
  {
    question: 'Is the call recorded?',
    answer: 'Yes. You get the recording and the written report.',
  },
  {
    question: 'Do you only work with functional medicine clinics?',
    answer:
      'Functional medicine is the primary focus. The framework also fits integrative medicine and other health practices doing $30K plus per month with admin staff and an EHR. If your clinic fits that profile, the assessment will deliver value.',
  },
  {
    question: 'How fast can we start?',
    answer: 'Calendar slots open within the next two weeks. After payment, you book directly.',
  },
];

export function Assessment() {
  return (
    <>
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container-content">
          <ScrollReveal>
            <p className="eyebrow">Growth Gap Assessment</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mt-6 max-w-5xl text-5xl leading-[1.02] md:mt-8 md:text-7xl lg:text-[6.5rem]">
              Find the leaks costing your clinic money. In 48 hours.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg md:mt-8 md:text-2xl">
              A 90-minute working session and a written report. Top 3 gaps. Recommended fixes. Real numbers.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={280}>
            <p className="mt-8 max-w-2xl font-display text-xl text-primary md:text-2xl">
              $450. Fully credited toward your build.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={360}>
            <div className="mt-10 md:mt-12">
              <Button href={WHOP_CHECKOUT} variant="primary">
                Book the assessment
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Section eyebrow="01 / Who this is for" title="Built for clinics that already have leads.">
        <Paragraphs
          text={[
            'This assessment is for functional medicine clinics doing $30K or more in monthly revenue.',
            'You have leads coming in. You have admin staff. You have an EHR. You probably have a CRM or a calendar tool. The pieces are there.',
            'The problem is they do not talk to each other. Leads slip through. Consults no-show. Patients churn. You feel it every month but you cannot point to where the money is going.',
            'That is what this assessment finds.',
          ]}
        />
      </Section>

      <section className="section-y bg-primary-bg">
        <div className="container-content">
          <ScrollReveal>
            <p className="eyebrow">02 / What you get</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 max-w-4xl text-3xl md:mt-6 md:text-5xl lg:text-6xl">
              A 90-minute call. A written report. No fluff.
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl md:mt-12">
            <Paragraphs text={['Every Growth Gap Assessment includes the same three deliverables.']} />
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
            {deliverables.map((d, i) => (
              <ScrollReveal key={d.heading} delay={i * 80}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 md:p-7">
                  <h3 className="font-display text-xl font-normal text-dark md:text-2xl">
                    {d.heading}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-body md:text-lg">
                    {d.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content">
          <ScrollReveal>
            <p className="eyebrow">03 / The process</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 max-w-4xl text-3xl md:mt-6 md:text-5xl lg:text-6xl">
              Three steps. Forty-eight hours from start to report.
            </h2>
          </ScrollReveal>
          <div className="mt-12 divide-y divide-line border-y border-line md:mt-16">
            {steps.map((s, i) => (
              <ScrollReveal key={s.heading} delay={i * 60}>
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 py-8 md:grid-cols-[120px_1fr] md:gap-x-12 md:py-10">
                  <div className="font-display text-4xl font-normal leading-none text-primary md:text-6xl">
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-normal text-dark md:text-2xl">
                      {s.heading}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-body md:mt-4 md:text-lg">
                      {s.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="04 / Why $450" title="This price is intentional." className="bg-primary-bg">
        <Paragraphs
          text={[
            '$450 is the cost of a serious diagnostic from someone who has built this stack from scratch. It is not free, because free assessments are sales calls in disguise.',
            'The price filters for clinic owners who are ready to do the work.',
            'If you decide to hire me to build the systems we identify, the full $450 is credited toward your build. The assessment becomes free.',
          ]}
        />
      </Section>

      <Section eyebrow="05 / Proof" title="Real systems. Real numbers.">
        <Paragraphs
          text={[
            'The Inception Telehealth build started with the same diagnostic. 538 leads. 54 new patients. 76 percent consult-to-patient conversion. Industry average is 40 to 60 percent.',
          ]}
        />
        <ScrollReveal delay={120}>
          <Link
            to="/case-studies/inception-telehealth"
            className="group mt-12 block rounded-2xl bg-primary-bg p-8 transition-colors hover:bg-primary-bg/70 md:mt-16 md:p-12"
          >
            <h3 className="font-display text-3xl font-normal text-dark md:text-4xl">
              See the full case study.
            </h3>
            <p className="mt-3 max-w-xl text-lg md:text-xl">
              How we built the Practice OS in 30 days.
            </p>
            <div className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary-hover md:mt-8">
              <span>Read the case study</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </div>
          </Link>
        </ScrollReveal>
      </Section>

      <section className="section-y bg-primary-bg">
        <div className="container-content">
          <ScrollReveal>
            <p className="eyebrow">06 / FAQ</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mt-4 max-w-4xl text-3xl md:mt-6 md:text-5xl lg:text-6xl">
              Common questions.
            </h2>
          </ScrollReveal>
          <div className="mt-12 max-w-3xl md:mt-16">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="container-content py-20 text-center md:py-32">
          <ScrollReveal>
            <p className="eyebrow text-white/60">Book the assessment</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="mx-auto mt-6 max-w-4xl font-display text-4xl text-white md:text-6xl lg:text-7xl">
              Find the leaks. Fix them. Get back to running your practice.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
              $450. Fully credited toward your build.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={240}>
            <div className="mt-10 flex justify-center">
              <Button href={WHOP_CHECKOUT} variant="primary">
                Book the assessment
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

type SectionProps = {
  eyebrow: string;
  title: string;
  className?: string;
  children: ReactNode;
};

function Section({ eyebrow, title, className = '', children }: SectionProps) {
  return (
    <section className={`section-y ${className}`}>
      <div className="container-content">
        <ScrollReveal>
          <p className="eyebrow">{eyebrow}</p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="mt-4 max-w-4xl text-3xl md:mt-6 md:text-5xl lg:text-6xl">{title}</h2>
        </ScrollReveal>

        <div className="mt-10 max-w-3xl md:mt-12">{children}</div>
      </div>
    </section>
  );
}

function Paragraphs({ text }: { text: string[] }) {
  return (
    <div className="space-y-5 text-lg leading-relaxed md:text-xl">
      {text.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
