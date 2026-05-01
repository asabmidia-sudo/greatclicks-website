import { ScrollReveal } from '../ui/ScrollReveal';

const painPoints = [
  'Front desk drowning in reminders.',
  'Leads go cold before follow-up.',
  'Consult no-shows hit 30%.',
  'Patients drop off month three. Nobody notices.',
  "EHR and marketing tools don't talk.",
];

export function Pain() {
  return (
    <section className="section-y bg-primary-bg">
      <div className="container-content">
        <p className="eyebrow">Why Most Clinics Stall</p>
        <h2 className="mt-4 max-w-3xl text-4xl md:mt-6 md:text-6xl">
          You didn't open a clinic to babysit software.
        </h2>
        <ul className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {painPoints.map((point, i) => (
            <li key={i}>
              <ScrollReveal delay={i * 60}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 transition-colors hover:border-primary md:p-7">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-bg text-primary">
                    <XIcon />
                  </span>
                  <p className="pt-1 font-display text-lg leading-snug text-dark md:text-xl">
                    {point}
                  </p>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 2l10 10M12 2L2 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
