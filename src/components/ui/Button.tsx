import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  showArrow?: boolean;
  className?: string;
};

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
};

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  showArrow = true,
  className = '',
}: ButtonProps) {
  const classes = `group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          <path
            d="M3 8h10m0 0L8 3m5 5l-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href ?? '#'} className={classes}>
      {content}
    </a>
  );
}
