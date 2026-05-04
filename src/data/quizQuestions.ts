export type QuizStage =
  | 'qualifying'
  | 'lead_gen'
  | 'lead_response'
  | 'consult_conversion'
  | 'onboarding'
  | 'retention'
  | 'referral';

export type StageId = Exclude<QuizStage, 'qualifying'>;

export type QuizOption = {
  label: string;
  value: number;
};

export type QuizQuestion = {
  id: string;
  stage: QuizStage;
  question: string;
  options: QuizOption[];
};

export const stageLabels: Record<StageId, string> = {
  lead_gen: 'Lead Capture',
  lead_response: 'Lead Response',
  consult_conversion: 'Discovery Call Conversion',
  onboarding: 'Enrollment & Onboarding',
  retention: 'Retention & Lab Follow-Up',
  referral: 'Referrals & Reactivation',
};

export const stageOrder: StageId[] = [
  'lead_gen',
  'lead_response',
  'consult_conversion',
  'onboarding',
  'retention',
  'referral',
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'monthly_revenue',
    stage: 'qualifying',
    question: "What's your monthly collected revenue?",
    options: [
      { label: 'Under $30K', value: 0 },
      { label: '$30K to $75K', value: 25 },
      { label: '$75K to $150K', value: 50 },
      { label: '$150K to $300K', value: 75 },
      { label: 'Over $300K', value: 100 },
    ],
  },
  {
    id: 'role',
    stage: 'qualifying',
    question: "What's your role at the practice?",
    options: [
      { label: 'Founder / Owner', value: 100 },
      { label: 'Clinical Director / Medical Director', value: 75 },
      { label: 'Operations / Practice Manager', value: 50 },
      { label: 'Other staff', value: 25 },
    ],
  },
  {
    id: 'lead_gen',
    stage: 'lead_gen',
    question: 'How does your clinic generate new patient leads?',
    options: [
      { label: "We don't actively generate leads. Word of mouth only.", value: 0 },
      { label: 'One channel only. Ads, referrals, or content.', value: 25 },
      { label: 'Two to three channels with mixed performance.', value: 50 },
      { label: 'Diversified system across multiple channels.', value: 75 },
      { label: 'Predictable monthly lead volume across 4+ channels.', value: 100 },
    ],
  },
  {
    id: 'lead_response',
    stage: 'lead_response',
    question: 'How fast does your team respond to a new lead?',
    options: [
      { label: "We don't have a defined process.", value: 0 },
      { label: 'Within 24 to 48 hours.', value: 25 },
      { label: 'Within 1 to 4 hours.', value: 50 },
      { label: 'Within 15 minutes during business hours.', value: 75 },
      { label: 'Within 5 minutes via automated system, 24/7.', value: 100 },
    ],
  },
  {
    id: 'consult_conversion',
    stage: 'consult_conversion',
    question: "What's your discovery call to paying patient conversion rate?",
    options: [
      { label: "We don't track it.", value: 0 },
      { label: 'Under 30%.', value: 25 },
      { label: '30% to 50%.', value: 50 },
      { label: '50% to 70%.', value: 75 },
      { label: 'Above 70%.', value: 100 },
    ],
  },
  {
    id: 'onboarding',
    stage: 'onboarding',
    question: 'How are new patients onboarded?',
    options: [
      { label: 'They figure it out themselves.', value: 0 },
      { label: 'Manual emails from staff.', value: 25 },
      { label: 'Templated process, mostly manual.', value: 50 },
      { label: 'Automated multi-touch onboarding sequence.', value: 75 },
      { label: 'Automated onboarding with EHR-synced milestones.', value: 100 },
    ],
  },
  {
    id: 'retention',
    stage: 'retention',
    question: "What happens when a patient's lab results come in?",
    options: [
      { label: 'Staff manually reviews and emails the patient.', value: 0 },
      { label: 'We schedule a follow-up at the next visit.', value: 25 },
      { label: 'Manual review, automated reminder.', value: 50 },
      { label: 'Automated review-to-follow-up workflow.', value: 75 },
      { label: 'Fully integrated lab pipeline with EHR + automation.', value: 100 },
    ],
  },
  {
    id: 'referral',
    stage: 'referral',
    question: 'Do you have a referral or affiliate program?',
    options: [
      { label: 'No, we rely on organic word of mouth.', value: 0 },
      { label: 'We mention referrals occasionally.', value: 25 },
      { label: 'We have a basic referral incentive.', value: 50 },
      { label: 'Active referral program with tracking.', value: 75 },
      { label: 'Affiliate program with automated payouts.', value: 100 },
    ],
  },
];
