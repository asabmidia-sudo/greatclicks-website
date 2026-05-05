import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Case Studies' },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex min-h-[44px] items-center gap-2">
              <img src="/logo.svg" alt="Greatclicks" className="h-9 w-9" />
              <span className="font-display text-xl font-normal text-white">Greatclicks</span>
            </Link>
            <p className="mt-4 max-w-sm text-base text-white/70">
              Practice Growth System for functional medicine clinics.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href="https://www.linkedin.com/company/greatclicks" label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="https://www.youtube.com/@greatclicks" label="YouTube">
                <YouTubeIcon />
              </SocialLink>
            </div>
          </div>

          <FooterCol title="Pages">
            {pageLinks.map((link) => (
              <FooterLink key={link.to} to={link.to}>{link.label}</FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <li>
              <a
                href="mailto:hello@greatclicks.io"
                className="block min-h-[44px] py-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                hello@greatclicks.io
              </a>
            </li>
            <li>
              <a
                href="tel:+16193935747"
                className="block min-h-[44px] py-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                619-393-5747
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-white/50">
          © 2026 Greatclicks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="block min-h-[44px] py-2 text-sm text-white/70 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-white hover:bg-white hover:text-dark"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}
