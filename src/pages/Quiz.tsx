import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizProgress } from '../components/quiz/QuizProgress';
import { QuizQuestion } from '../components/quiz/QuizQuestion';
import { QuizEmailCapture } from '../components/quiz/QuizEmailCapture';
import { Button } from '../components/ui/Button';
import { quizQuestions } from '../data/quizQuestions';
import { computeQuizResult, isDisqualified } from '../lib/quizScoring';
import { buildGhlPayload, type ContactInfo } from '../lib/buildGhlPayload';

const SESSION_KEY = 'pgq_session';
const ANSWERS_KEY = 'pgq_answers';
const STEP_KEY = 'pgq_step';
const WEBHOOK_URL =
  'https://services.leadconnectorhq.com/hooks/kyeedObOAb2jF27mJJwP/webhook-trigger/4577f83f-f890-40c6-aece-1cf0afea09ba';

const STEPS = ['landing', '1', '2', '3', '4', '5', '6', '7', '8', 'email'] as const;
type Step = (typeof STEPS)[number];

const isStep = (s: string): s is Step => (STEPS as readonly string[]).includes(s);
const stepToHash = (s: Step): string => (s === 'landing' ? '' : `#${s}`);

function readHashStep(): Step | null {
  const raw = window.location.hash.replace(/^#/, '');
  if (raw === '') return 'landing';
  return isStep(raw) ? raw : null;
}

export function Quiz() {
  const navigate = useNavigate();
  const [step, setStepState] = useState<Step>('landing');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [contact, setContact] = useState<ContactInfo>({ firstName: '', email: '', companyName: '' });
  const [sessionId, setSessionId] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const initialized = useRef(false);

  // Mount: restore from sessionStorage; resolve step from hash > stored > landing.
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const storedSession = sessionStorage.getItem(SESSION_KEY);
    if (!storedSession) {
      if (window.location.hash !== '') {
        history.replaceState(null, '', window.location.pathname);
      }
      return;
    }

    setSessionId(storedSession);
    const storedAnswers = sessionStorage.getItem(ANSWERS_KEY);
    if (storedAnswers) {
      try {
        const parsed = JSON.parse(storedAnswers);
        if (parsed && typeof parsed === 'object') setAnswers(parsed);
      } catch {
        // ignore parse error
      }
    }

    const hashStep = readHashStep();
    const storedStep = sessionStorage.getItem(STEP_KEY);
    let nextStep: Step = 'landing';
    if (hashStep && hashStep !== 'landing') nextStep = hashStep;
    else if (storedStep && isStep(storedStep)) nextStep = storedStep;

    setStepState(nextStep);
    const desiredHash = stepToHash(nextStep);
    if (window.location.hash !== desiredHash) {
      history.replaceState(null, '', `${window.location.pathname}${desiredHash}`);
    }
  }, []);

  // Hashchange listener: keep state in sync with browser back/forward.
  useEffect(() => {
    const handler = () => {
      const hashStep = readHashStep();
      if (!hashStep) return;
      if (hashStep === 'landing' || sessionStorage.getItem(SESSION_KEY)) {
        setStepState(hashStep);
        if (hashStep === 'landing') sessionStorage.removeItem(STEP_KEY);
        else sessionStorage.setItem(STEP_KEY, hashStep);
      }
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  // Push a new history entry so browser back walks the quiz one step at a time.
  const setStep = (next: Step) => {
    setStepState(next);
    if (next === 'landing') sessionStorage.removeItem(STEP_KEY);
    else sessionStorage.setItem(STEP_KEY, next);
    const desiredHash = stepToHash(next);
    if (window.location.hash !== desiredHash) {
      history.pushState(null, '', `${window.location.pathname}${desiredHash}`);
    }
  };

  const handleStart = () => {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      sessionStorage.setItem(SESSION_KEY, id);
    }
    setSessionId(id);
    setStep('1');
  };

  const handleSelect = (questionId: string, value: number) => {
    const next = { ...answers, [questionId]: value };
    setAnswers(next);
    sessionStorage.setItem(ANSWERS_KEY, JSON.stringify(next));
  };

  const handleNext = () => {
    if (step === 'landing') return handleStart();
    if (step === 'email') return;
    const idx = parseInt(step, 10);
    if (idx >= 1 && idx < 8) setStep(String(idx + 1) as Step);
    else if (idx === 8) setStep('email');
  };

  const handleBack = () => {
    if (step === 'email') return setStep('8');
    if (step === 'landing') return;
    const idx = parseInt(step, 10);
    if (idx > 1) setStep(String(idx - 1) as Step);
    else setStep('landing');
  };

  const handleSubmit = async () => {
    setError(null);
    setIsSubmitting(true);

    const result = computeQuizResult(answers);
    const disqualified = isDisqualified(answers);
    const payload = {
      ...buildGhlPayload(contact, answers, result),
      sessionId,
    };

    console.log('[quiz] submitting payload', payload);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      sessionStorage.removeItem(SESSION_KEY);
      sessionStorage.removeItem(ANSWERS_KEY);
      sessionStorage.removeItem(STEP_KEY);

      navigate('/quiz/results', {
        state: {
          score: result.practiceGrowthScore,
          band: result.band,
          stageScores: result.stageScores,
          topGaps: result.topGaps,
          disqualified,
        },
      });
    } catch (e) {
      console.error('[quiz] submit failed', e);
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-y">
      <div className="container-content">
        <div className="max-w-2xl">
          {step === 'landing' ? (
            <Landing onStart={handleStart} />
          ) : step === 'email' ? (
            <QuizEmailCapture
              contact={contact}
              onChange={setContact}
              onSubmit={handleSubmit}
              onBack={handleBack}
              isSubmitting={isSubmitting}
              error={error}
            />
          ) : (
            <QuestionStep
              step={step}
              answers={answers}
              onSelect={handleSelect}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function Landing({ onStart }: { onStart: () => void }) {
  return (
    <div>
      <p className="eyebrow">Practice Growth Quiz</p>
      <h1 className="mt-6 font-display text-5xl leading-[1.05] text-dark md:mt-8 md:text-7xl">
        Find your gaps in two minutes.
      </h1>
      <p className="mt-6 text-lg text-body md:text-xl">
        8 questions. One score. Six ranked stages.
      </p>
      <div className="mt-10">
        <Button onClick={onStart} variant="primary">
          Start the Quiz
        </Button>
      </div>
    </div>
  );
}

type QuestionStepProps = {
  step: Step;
  answers: Record<string, number>;
  onSelect: (questionId: string, value: number) => void;
  onNext: () => void;
  onBack: () => void;
};

function QuestionStep({ step, answers, onSelect, onNext, onBack }: QuestionStepProps) {
  const idx = parseInt(step, 10);
  const question = quizQuestions[idx - 1];
  const selectedValue = answers[question.id] ?? null;

  return (
    <div>
      <QuizProgress current={idx} total={8} className="mb-8" />
      <QuizQuestion
        question={question}
        selectedValue={selectedValue}
        onSelect={(v) => onSelect(question.id, v)}
        onNext={onNext}
        onBack={idx > 1 ? onBack : undefined}
      />
    </div>
  );
}
