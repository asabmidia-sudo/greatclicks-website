import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PageStub } from '../components/ui/PageStub';

const ANSWERS_KEY = 'pgq_answers';

export function QuizResults() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hasState = location.state != null;
    const hasAnswers = sessionStorage.getItem(ANSWERS_KEY) !== null;
    if (!hasState && !hasAnswers) {
      navigate('/quiz', { replace: true });
    }
  }, [location.state, navigate]);

  return (
    <PageStub
      eyebrow="Your Score"
      title="Results page coming soon."
      description="Returns your ranked gaps and recommended next actions."
    />
  );
}
