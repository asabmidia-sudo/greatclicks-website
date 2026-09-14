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

// Source: existing Greatclicks /case-study/kristi-leigh content.
// These are tracked journey counts, not results over an assumed time period.
export const kristi: CaseStudy = {
  slug: 'kristi-leigh',
  client: 'Kristi Leigh',
  clientDescriptor: 'a virtual functional health practice',
  headline: 'One connected journey from lead to membership.',
  subhead: 'Connecting initial lab testing, program enrollment, and ongoing membership.',
  metrics: [
    { value: '110', label: 'Leads in the tracked journey' },
    { value: '29', label: 'Lab-test clients' },
    { value: '12', label: 'Program clients' },
    { value: '9', label: 'Membership clients' },
  ],
  systems: [
    { name: 'Demand capture', components: ['The lead magnet, VSL, and assessment path gave the practice a defined front door and a trackable next action.'] },
    { name: 'Initial lab testing', components: ['The lab offer, purchase status, and follow-up became a visible stage of the same client journey.'] },
    { name: 'Program enrollment', components: ['Results review and recommendation follow-up supported the transition into the higher-value care program.'] },
    { name: 'Onboarding and continuity', components: ['Enrollment and onboarding were connected to the next client stage, with the ongoing membership layer custom-built for this practice.'] },
  ],
  story: {
    challenge: 'The practice needed the path from first interest through lab testing, program enrollment, and membership to behave like one journey.',
    approach: 'Greatclicks connected the customer-facing pages with the follow-up, status tracking, handoffs, and onboarding required to keep each next step visible.',
    outcome: 'The tracked journey included 110 leads, 29 lab-test clients, 12 program clients, and 9 membership clients. The ongoing membership layer was specific to Kristi’s practice.',
  },
};

export const caseStudies: CaseStudy[] = [inception, kristi];
