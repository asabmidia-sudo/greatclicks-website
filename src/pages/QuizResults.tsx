import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultsHero } from '../components/results/ResultsHero';
import { StageBreakdown } from '../components/results/StageBreakdown';
import { TopGapsDetail } from '../components/results/TopGapsDetail';
import { AssessmentCTA } from '../components/results/AssessmentCTA';
import { SoftGateCTA } from '../components/results/SoftGateCTA';
import {
  computeQuizResult,
  isDisqualified,
  type ScoreBand,
  type StageScore,
} from '../lib/quizScoring';
import { gapImpactCopy } from '../data/gapImpactCopy';
import { stageLabels, type StageId } from '../data/quizQuestions';

const ANSWERS_KEY = 'pgq_answers';

const REQUIRED_ANSWER_KEYS = [
  'monthly_revenue',
  'role',
  'lead_gen',
  'lead_response',
  'consult_conversion',
  'onboarding',
  'retention',
  'referral',
] as const;

const softGateResources: Record<StageId, string> = {
  lead_gen: 'The Lead Capture Playbook',
  lead_response: 'The Lead Response Playbook',
  consult_conversion: 'The Discovery Call Playbook',
  onboarding: 'The Onboarding Playbook',
  retention: 'The Retention Playbook',
  referral: 'The Referral Playbook',
};

type ResultsState = {
  score: number;
  band: ScoreBand;
  stageScores: StageScore[];
  topGaps: StageScore[];
  disqualified: boolean;
};

function readAnswersFromStorage(): Record<string, number> | null {
  const raw = sessionStorage.getItem(ANSWERS_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    for (const key of REQUIRED_ANSWER_KEYS) {
      if (typeof parsed[key] !== 'number') return null;
    }
    return parsed as Record<string, number>;
  } catch {
    return null;
  }
}

function isValidResultsState(state: unknown): state is ResultsState {
  if (!state || typeof state !== 'object') return false;
  const r = state as Partial<ResultsState>;
  return (
    typeof r.score === 'number' &&
    typeof r.band === 'string' &&
    Array.isArray(r.stageScores) &&
    Array.isArray(r.topGaps) &&
    typeof r.disqualified === 'boolean'
  );
}

export function QuizResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState<ResultsState | null>(null);

  useEffect(() => {
    if (isValidResultsState(location.state)) {
      setResults(location.state);
      return;
    }

    const answers = readAnswersFromStorage();
    if (!answers) {
      navigate('/quiz', { replace: true });
      return;
    }

    try {
      const result = computeQuizResult(answers);
      setResults({
        score: result.practiceGrowthScore,
        band: result.band,
        stageScores: result.stageScores,
        topGaps: result.topGaps,
        disqualified: isDisqualified(answers),
      });
    } catch {
      navigate('/quiz', { replace: true });
    }
  }, [location.state, navigate]);

  const stageBreakdownRows = useMemo(() => {
    if (!results) return [];
    const topGapStageIds = new Set(results.topGaps.map((g) => g.stage));
    return results.stageScores.map((s) => ({
      name: s.label,
      score: s.score,
      isTopGap: topGapStageIds.has(s.stage),
    }));
  }, [results]);

  const topGapCards = useMemo(() => {
    if (!results) return [];
    return results.topGaps.map((g, i) => ({
      rank: (i + 1) as 1 | 2 | 3,
      stage: g.label,
      score: g.score,
      impactCopy: gapImpactCopy[g.stage],
    }));
  }, [results]);

  if (!results) return null;

  const lowestGap = results.topGaps[0];

  return (
    <>
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-32">
        <div className="container-content">
          <ResultsHero score={results.score} band={results.band} />
        </div>
      </section>

      <section className="section-y bg-primary-bg">
        <div className="container-content">
          <p className="eyebrow">01 / Your stage breakdown</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:mt-6 md:text-6xl">
            Where you stand. All six stages.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-body md:text-xl">
            Each stage scores 0 to 100. Your three lowest stages get a Gap badge.
          </p>
          <div className="mt-12 md:mt-16">
            <StageBreakdown stages={stageBreakdownRows} />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content">
          <p className="eyebrow">02 / Your top three gaps</p>
          <h2 className="mt-4 max-w-3xl text-4xl md:mt-6 md:text-6xl">
            Your biggest leaks. Fix these first.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-body md:text-xl">
            These three stages drain the most revenue every month.
          </p>
          <div className="mt-12 md:mt-16">
            <TopGapsDetail gaps={topGapCards} />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-content">
          {results.disqualified ? (
            // TODO Phase 6+: replace resourceHref with real lead-magnet URL keyed by lowest stage
            <SoftGateCTA
              lowestStage={stageLabels[lowestGap.stage]}
              resourceTitle={softGateResources[lowestGap.stage]}
              resourceHref="#"
            />
          ) : (
            <AssessmentCTA />
          )}
        </div>
      </section>
    </>
  );
}
