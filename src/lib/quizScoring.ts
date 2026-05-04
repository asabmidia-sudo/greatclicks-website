import { stageLabels, stageOrder, type StageId } from '../data/quizQuestions';

export type ScoreBand = 'critical' | 'significant' | 'solid' | 'mature';

export type StageScore = {
  stage: StageId;
  label: string;
  score: number;
};

export type QuizResult = {
  practiceGrowthScore: number;
  band: ScoreBand;
  stageScores: StageScore[];
  topGaps: StageScore[];
  qualifying: { revenue: number; role: number };
};

export type QuizAnswers = Record<string, number>;

export function bandForScore(score: number): ScoreBand {
  if (score <= 25) return 'critical';
  if (score <= 50) return 'significant';
  if (score <= 75) return 'solid';
  return 'mature';
}

export function getDisqualificationReason(answers: QuizAnswers): string | null {
  const reasons: string[] = [];
  if (answers['monthly_revenue'] === 0) reasons.push('below_revenue_threshold');
  if (answers['role'] === 25) reasons.push('no_admin_staff');
  return reasons.length === 0 ? null : reasons.join(',');
}

export function isDisqualified(answers: QuizAnswers): boolean {
  return getDisqualificationReason(answers) !== null;
}

export function computeQuizResult(answers: QuizAnswers): QuizResult {
  const stageScores: StageScore[] = stageOrder.map((stage) => ({
    stage,
    label: stageLabels[stage],
    score: answers[stage] ?? 0,
  }));

  const total = stageScores.reduce((sum, s) => sum + s.score, 0);
  const practiceGrowthScore = Math.round(total / stageScores.length);

  const topGaps = [...stageScores]
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  return {
    practiceGrowthScore,
    band: bandForScore(practiceGrowthScore),
    stageScores,
    topGaps,
    qualifying: {
      revenue: answers['monthly_revenue'] ?? 0,
      role: answers['role'] ?? 0,
    },
  };
}
