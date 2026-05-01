import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <section className="section-y">
      <div className="container-content text-center">
        <p className="font-display text-8xl font-normal leading-none text-primary md:text-9xl lg:text-[12rem]">
          404
        </p>
        <h1 className="mt-6 text-4xl md:mt-8 md:text-6xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg">
          That route does not exist. Try one of these.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
          <Button to="/" variant="primary">
            Back home
          </Button>
          <Link
            to="/quiz"
            className="group inline-flex min-h-[44px] items-center text-sm font-medium text-body transition-colors hover:text-primary"
          >
            Take the quiz
            <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
