import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const home = {
  title: 'Greatclicks | Growth Systems for Functional Medicine Practices',
  description: 'Greatclicks helps functional medicine practices improve lead response, consultation conversion, patient onboarding, retention, and reactivation by fixing the systems across the patient journey.',
};

const metadata: Record<string, typeof home> = {
  '/': home,
  '/about': { title: 'About Greatclicks | Practice Growth Systems', description: 'Meet the person behind the growth systems for functional medicine practices.' },
  '/case-studies': { title: 'Client Case Studies | Greatclicks', description: 'Explore the patient journeys Greatclicks connected for Inception Telehealth and Kristi Leigh.' },
  '/case-studies/inception-telehealth': { title: 'Inception Telehealth Case Study | Greatclicks', description: 'How Greatclicks connected lead capture, consultation conversion, onboarding, and follow-up for Inception Telehealth.' },
  '/case-studies/kristi-leigh': { title: 'Kristi Leigh Lab-to-Program Case Study | Greatclicks', description: 'How Greatclicks connected a virtual functional health practice from initial lab testing through program enrollment and ongoing membership.' },
  '/systems-review': { title: 'Book a Systems Review | Greatclicks', description: 'Review the gaps between lead capture, booking, enrollment, onboarding, and retention in your functional medicine practice.' },
  '/quiz': { title: 'Practice Growth Scorecard | Greatclicks', description: 'Get your Practice Growth Score and identify gaps across six stages of your patient journey. Takes about two minutes.' },
  '/quiz/results': { title: 'Your Practice Growth Score | Greatclicks', description: 'Your practice growth score and patient journey priorities.' },
};

export function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = metadata[pathname] ?? home;
    document.title = page.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', page.description);
  }, [pathname]);
  return null;
}
