import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/case-studies', label: 'Case Studies' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex min-h-[44px] items-center gap-2">
          <img src="/logo.svg" alt="Greatclicks" className="h-8 w-8 md:h-9 md:w-9" />
          <span className="font-display text-lg font-normal text-dark md:text-xl">Greatclicks</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-body hover:text-primary'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/assessment" variant="primary">
            Book Assessment
          </Button>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="grid h-11 w-11 place-items-center md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute inset-x-0 h-0.5 bg-dark transition-all duration-200 ${menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}
            />
            <span
              className={`absolute inset-x-0 h-0.5 bg-dark transition-all duration-200 ${menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="container-content flex flex-col gap-1 pb-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `flex min-h-[44px] items-center text-base font-medium ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-4">
            <Button to="/assessment" variant="primary" className="w-full">
              Book Assessment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
