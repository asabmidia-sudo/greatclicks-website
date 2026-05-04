import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { BottomCTABanner } from '../components/ui/BottomCTABanner';

export function About() {
  return (
    <>
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container-content">
          <ScrollReveal>
            <p className="eyebrow">About</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mt-6 max-w-5xl text-5xl leading-[1.02] md:mt-8 md:text-7xl lg:text-[6.5rem]">
              Meet the person behind the systems.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg md:mt-8 md:text-2xl">
              I build operations for functional medicine clinics. Not funnels. Not one-off automations. Real systems that run the practice.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
            <ScrollReveal delay={300}>
              <div className="overflow-hidden rounded-3xl bg-line">
                <img
                  src="/aaron-headshot.jpg"
                  alt="Aaron Lester, founder of Greatclicks"
                  className="aspect-square h-full w-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8 md:gap-10">
              <ScrollReveal delay={380}>
                <Stat value="250+" label="Practice owners helped" />
              </ScrollReveal>
              <ScrollReveal delay={460}>
                <Stat value="2020" label="Operations for FM clinics since" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="01 / The Work" title="I work inside the stack you actually use.">
        <Paragraphs
          text={[
            'Functional medicine is not transactional. The patient relationship is long. The lab work is detailed. The protocols are personal. The billing is complicated.',
            'Generic agencies miss this. They build funnels that break the moment a Cerbo workflow needs to fire. They sell you a CRM and disappear. They never log into your EHR.',
            'I built Greatclicks specifically for this model. I partnered with Biocanic to be their official build channel for clinics on their platform. I have also built systems for clients running on Cerbo, Optimantra, and Practice Better.',
            'The work covers GoHighLevel, every major EHR in the space, Stripe, lab pipelines, and every system in between.',
          ]}
        />
      </Section>

      <Section
        eyebrow="02 / How I Work"
        title="One framework. Six stages. Real systems."
        className="bg-primary-bg"
      >
        <Paragraphs
          text={[
            'The Practice Growth System maps every place a clinic loses money. Lead capture. Lead response. Discovery call conversion. Enrollment and onboarding. Retention and lab follow-up. Referrals and reactivation.',
            'The Growth Gap Assessment finds the leaks in your practice. The build closes them.',
            'I do not build and leave. I stay in the loop. I troubleshoot when something breaks. I keep the systems clean so your team can focus on patients.',
          ]}
        />
      </Section>

      <Section eyebrow="03 / Proof" title="Real systems. Real numbers.">
        <Paragraphs
          text={[
            'The Inception Telehealth build is the case study. 538 leads. 54 new patients. 76 percent consult-to-patient conversion. Industry average is 40 to 60 percent.',
            '15 plus hours saved every week for the team. The affiliate program became the single largest lead source.',
          ]}
        />

        <ScrollReveal delay={120}>
          <Link
            to="/case-studies/inception-telehealth"
            className="group mt-12 block rounded-2xl bg-primary-bg p-8 transition-colors hover:bg-primary-bg/70 md:mt-16 md:p-12"
          >
            <h3 className="font-display text-3xl font-normal text-dark md:text-4xl">
              See how it was built.
            </h3>
            <p className="mt-3 max-w-xl text-lg md:text-xl">
              Read the full Inception Telehealth case study.
            </p>
            <div className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-primary-hover md:mt-8">
              <span>Read the case study</span>
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </div>
          </Link>
        </ScrollReveal>
      </Section>

      <BottomCTABanner
        heading="Stop stitching it together."
        subhead="Two minutes. See where revenue is leaking."
        primaryCta={{ label: 'Get your Practice Growth Score', to: '/quiz' }}
        secondaryCta={{ label: 'Or book the assessment', to: '/assessment' }}
      />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-primary pl-6">
      <div className="font-display text-5xl font-normal leading-none text-primary md:text-7xl lg:text-8xl">
        {value}
      </div>
      <div className="mt-3 text-sm font-medium text-muted md:mt-4 md:text-base">
        {label}
      </div>
    </div>
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
