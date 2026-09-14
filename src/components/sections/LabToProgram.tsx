import { Link } from 'react-router-dom';

export function LabToProgram() {
  return (
    <aside className="container-content pb-20 md:pb-28" aria-labelledby="lab-to-program-heading">
      <div className="border-l-2 border-primary pl-6 md:pl-8">
        <p className="eyebrow">For lab-driven practices</p>
        <h2 id="lab-to-program-heading" className="mt-4 text-3xl md:text-4xl">Using labs as the entry point to care?</h2>
        <p className="mt-5 max-w-3xl text-lg">Our Lab-to-Program System connects initial testing, results review, treatment recommendations, enrollment, and onboarding into one measurable patient journey.</p>
        <Link to="/systems-review" className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover">
          Ask About Lab-to-Program <span aria-hidden="true">→</span>
        </Link>
        <div><Link to="/case-studies/kristi-leigh" className="inline-flex min-h-[44px] items-center text-sm text-body hover:text-primary">See Kristi’s Lab-to-Program case study →</Link></div>
      </div>
    </aside>
  );
}
