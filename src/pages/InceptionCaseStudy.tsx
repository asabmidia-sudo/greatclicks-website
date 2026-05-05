import type { ReactNode } from 'react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { BottomCTABanner } from '../components/ui/BottomCTABanner';
import { inception } from '../data/caseStudies';

export function InceptionCaseStudy() {
  const cs = inception;

  return (
    <>
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container-content">
          <ScrollReveal>
            <p className="eyebrow">Case Study</p>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <img
              src="/inception-logo.png"
              alt="Inception Telehealth and Wellness"
              className="mt-6 h-auto w-full max-w-[280px] md:mt-8 md:max-w-[360px]"
              width={1336}
              height={459}
            />
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <h1 className="mt-6 max-w-5xl text-5xl leading-[1.02] md:mt-8 md:text-7xl lg:text-[6.5rem]">
              {cs.headline}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mt-6 max-w-2xl text-lg md:mt-8 md:text-2xl">
              {cs.subhead}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-8 md:mt-16 md:grid-cols-4 md:gap-8">
            {cs.metrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={300 + i * 80}>
                <div className="border-l-2 border-primary pl-6">
                  <div className="font-display text-4xl font-normal leading-none text-primary md:text-6xl lg:text-7xl">
                    {m.value}
                  </div>
                  <div className="mt-3 text-sm font-medium text-dark md:mt-4 md:text-base">
                    {m.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Section number="01" title="Where they started.">
        <Paragraphs text={cs.story.challenge} />
      </Section>

      <Section number="02" title="What we built." className="bg-primary-bg">
        <Paragraphs text={cs.story.approach} />

        <div className="mt-12 divide-y divide-line border-y border-line md:mt-16">
          {cs.systems.map((sys, i) => (
            <ScrollReveal key={sys.name} delay={i * 60}>
              <div className="grid grid-cols-1 gap-y-4 py-8 md:grid-cols-[280px_1fr] md:gap-x-12 md:py-10">
                <h3 className="font-display text-xl font-normal text-dark md:text-2xl">
                  {sys.name}
                </h3>
                <ul className="divide-y divide-line/70">
                  {sys.components.map((c) => (
                    <li key={c} className="py-3 text-base text-body first:pt-0 last:pb-0 md:text-lg">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section number="03" title="What changed.">
        <Paragraphs text={cs.story.outcome} />

        {cs.pullQuote && (
          <ScrollReveal delay={120}>
            <blockquote className="mt-16 max-w-3xl font-display text-3xl italic leading-tight text-dark md:mt-24 md:text-5xl">
              &ldquo;{cs.pullQuote}&rdquo;
            </blockquote>
          </ScrollReveal>
        )}
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

type SectionProps = {
  number: string;
  title: string;
  className?: string;
  children: ReactNode;
};

function Section({ number, title, className = '', children }: SectionProps) {
  return (
    <section className={`section-y ${className}`}>
      <div className="container-content">
        <ScrollReveal>
          <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 md:grid-cols-[140px_1fr] md:gap-x-12">
            <div className="font-display text-5xl font-normal tracking-tight text-primary md:text-7xl">
              {number}
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl">{title}</h2>
          </div>
        </ScrollReveal>

        <div className="mt-10 md:ml-0 md:mt-12 md:grid md:grid-cols-[140px_1fr] md:gap-x-12">
          <div className="hidden md:block" aria-hidden="true" />
          <div className="max-w-3xl">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Paragraphs({ text }: { text: string }) {
  const paragraphs = splitIntoParagraphs(text);
  return (
    <div className="space-y-5 text-lg leading-relaxed md:text-xl">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function splitIntoParagraphs(text: string): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+(\s+|$)/g)?.map((s) => s.trim()) ?? [text];
  if (sentences.length <= 2) return [text];
  const mid = Math.ceil(sentences.length / 2);
  return [sentences.slice(0, mid).join(' '), sentences.slice(mid).join(' ')];
}
