import { quizQuestions, type QuizQuestion } from '../data/quizQuestions';
import {
  getDisqualificationReason,
  isDisqualified,
  type QuizAnswers,
  type QuizResult,
  type ScoreBand,
} from './quizScoring';

export type ContactInfo = {
  firstName: string;
  email: string;
  companyName: string;
};

export type QuizResponse = {
  questionId: string;
  question: string;
  answer: string;
  value: number;
};

export type GhlPayload = {
  firstName: string | null;
  email: string | null;
  companyName: string | null;
  tags: string[];
  practiceGrowthScore: number;
  scoreBand: ScoreBand;
  stageScores: {
    leadGeneration: number;
    leadResponse: number;
    consultConversion: number;
    onboarding: number;
    retention: number;
    referral: number;
  };
  topGapsLabel: string;
  topGap1: string;
  topGap2: string;
  topGap3: string;
  monthlyRevenue: string;
  role: string;
  responses: QuizResponse[];
  recommendation: string;
  disqualified: boolean;
  disqualificationReason: string | null;
  source: 'practice-growth-quiz';
  submittedAt: string;
};

const revenueTags: Record<number, string> = {
  0: 'revenue-under-30k',
  25: 'revenue-30k-75k',
  50: 'revenue-75k-150k',
  75: 'revenue-150k-300k',
  100: 'revenue-over-300k',
};

const roleTags: Record<number, string> = {
  100: 'role-founder',
  75: 'role-clinical-director',
  50: 'role-operations',
  25: 'role-other-staff',
};

function nullIfEmpty(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  return trimmed.length === 0 ? null : trimmed;
}

function findOptionLabel(question: QuizQuestion, value: number): string {
  return question.options.find((o) => o.value === value)?.label ?? 'Unknown';
}

function buildResponses(answers: QuizAnswers): QuizResponse[] {
  return quizQuestions.map((q) => ({
    questionId: q.id,
    question: q.question,
    answer: findOptionLabel(q, answers[q.id] ?? -1),
    value: answers[q.id] ?? 0,
  }));
}

function buildTags(result: QuizResult): string[] {
  const tags: string[] = ['quiz-completed', `score-${result.band}`];

  for (const gap of result.topGaps) {
    tags.push(`gap-${gap.stage}`);
  }

  const revenueTag = revenueTags[result.qualifying.revenue];
  if (revenueTag) tags.push(revenueTag);

  const roleTag = roleTags[result.qualifying.role];
  if (roleTag) tags.push(roleTag);

  return tags;
}

function buildRecommendation(result: QuizResult): string {
  const [g1, g2, g3] = result.topGaps;
  return [
    `Your Practice Growth Score is ${result.practiceGrowthScore}/100, which puts you in the "${result.band}" band.`,
    `Your top three gaps: ${g1.label}, ${g2.label}, ${g3.label}.`,
    'The next step is the Growth Gap Assessment.',
    'It maps every gap, costs the monthly revenue impact, and ranks the fix order.',
    'Book at greatclicks.io/assessment.',
  ].join(' ');
}

export function buildGhlPayload(
  contact: ContactInfo,
  answers: QuizAnswers,
  result: QuizResult,
): GhlPayload {
  const [topGap1, topGap2, topGap3] = result.topGaps;
  const revenueQ = quizQuestions.find((q) => q.id === 'monthly_revenue')!;
  const roleQ = quizQuestions.find((q) => q.id === 'role')!;

  const stageMap = Object.fromEntries(
    result.stageScores.map((s) => [s.stage, s.score]),
  );

  return {
    firstName: nullIfEmpty(contact.firstName),
    email: nullIfEmpty(contact.email),
    companyName: nullIfEmpty(contact.companyName),
    tags: buildTags(result),
    practiceGrowthScore: result.practiceGrowthScore,
    scoreBand: result.band,
    stageScores: {
      leadGeneration: stageMap['lead_gen'] ?? 0,
      leadResponse: stageMap['lead_response'] ?? 0,
      consultConversion: stageMap['consult_conversion'] ?? 0,
      onboarding: stageMap['onboarding'] ?? 0,
      retention: stageMap['retention'] ?? 0,
      referral: stageMap['referral'] ?? 0,
    },
    topGapsLabel: result.topGaps.map((g) => g.label).join(', '),
    topGap1: topGap1.label,
    topGap2: topGap2.label,
    topGap3: topGap3.label,
    monthlyRevenue: findOptionLabel(revenueQ, result.qualifying.revenue),
    role: findOptionLabel(roleQ, result.qualifying.role),
    responses: buildResponses(answers),
    recommendation: buildRecommendation(result),
    disqualified: isDisqualified(answers),
    disqualificationReason: getDisqualificationReason(answers),
    source: 'practice-growth-quiz',
    submittedAt: new Date().toISOString(),
  };
}
