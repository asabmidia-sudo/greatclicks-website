export type CaseStudy = {
  slug: string;
  client: string;
  clientDescriptor: string;
  headline: string;
  subhead: string;
  metrics: { value: string; label: string }[];
  systems: { name: string; components: string[] }[];
  story: { challenge: string; approach: string; outcome: string };
  pullQuote?: string;
};

export const inception: CaseStudy = {
  slug: 'inception-telehealth',
  client: 'Inception Telehealth',
  clientDescriptor: 'a functional medicine telehealth clinic',
  headline: 'Built the Practice OS from scratch in 30 days.',
  subhead: '538 leads. 54 new patients. 15 hours saved every week.',
  metrics: [
    { value: '538', label: 'Leads captured' },
    { value: '76%', label: 'Consult to client conversion' },
    { value: '54', label: 'New paying patients' },
    { value: '15+', label: 'Staff hours saved per week' },
  ],
  systems: [
    {
      name: 'Lead Capture and Response',
      components: [
        'Instant SMS and email response on every new lead',
        'Lead tagging by source and intent',
        'AI voice agent answering after-hours calls',
      ],
    },
    {
      name: 'Consult Conversion',
      components: [
        'Multi-touch nurture sequence before the consult',
        'No-show recovery automation with rebook links',
      ],
    },
    {
      name: 'Patient Onboarding',
      components: [
        'Stripe billing wired to consult booking',
        'Cerbo and Biocanic onboarding pipeline',
      ],
    },
    {
      name: 'Retention and Reviews',
      components: [
        'Lab result delivery pipeline',
        'Post-visit survey routing to Google reviews',
      ],
    },
    {
      name: 'Referral Engine',
      components: [
        'First Promoter affiliate program for past patients and partners',
      ],
    },
  ],
  story: {
    challenge:
      'A new functional medicine telehealth clinic launching with no systems, no playbook, and no team to run them. Every lead handled manually. Every consult booked by hand. Every onboarding step done in three different tools.',
    approach:
      'We built the full Practice OS in 30 days. Six stages of the Practice Growth System mapped to real automations across GoHighLevel, Cerbo, Biocanic, and Stripe. The team got a single dashboard. Patients got a single experience.',
    outcome:
      'In the first six months, 538 leads turned into 54 new paying patients. Consult-to-patient conversion hit 76%, against an industry average of 40 to 60%. The affiliate program became the single largest lead source. The team got 15+ hours back every week.',
  },
  pullQuote:
    'Industry average for consult-to-patient conversion is 40 to 60 percent. We hit 76 percent.',
};

export const caseStudies: CaseStudy[] = [inception];
