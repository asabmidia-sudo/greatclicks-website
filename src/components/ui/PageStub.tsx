import { Link } from 'react-router-dom';

type PageStubProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageStub({ eyebrow, title, description }: PageStubProps) {
  return (
    <section className="section-y">
      <div className="container-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] md:mt-8 md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl">
          {description}
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="group inline-flex min-h-[44px] items-center text-sm font-medium text-primary transition-colors hover:text-primary-hover"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
            <span>Back home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
