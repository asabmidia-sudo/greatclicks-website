import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';

type Stat = {
  value: string;
  label: string;
  caption?: string;
};

const stats: Stat[] = [
  { value: '538', label: 'Leads captured' },
  { value: '76%', label: 'Consult to client conversion', caption: 'Industry average is 40 to 60%.' },
  { value: '54', label: 'New paying patients' },
  { value: '15+', label: 'Staff hours saved per week' },
];

export function CaseStudy() {
  return (
    <section className="section-y">
      <div className="container-content">
        <p className="eyebrow">Proof</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:mt-6 md:text-6xl">
          Inception Telehealth. First 6 months.
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="border-l-2 border-primary pl-6">
                <div className="font-display text-5xl font-normal leading-none text-primary md:text-6xl lg:text-7xl">
                  {stat.value}
                </div>
                <div className="mt-4 text-sm font-medium text-dark md:text-base">
                  {stat.label}
                </div>
                {stat.caption && (
                  <div className="mt-2 text-xs text-muted">{stat.caption}</div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 md:mt-16">
          <Link
            to="/case-studies/inception-telehealth"
            className="group inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            <span>Read the full case study</span>
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
