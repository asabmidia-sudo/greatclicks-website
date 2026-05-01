import { useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export function FAQAccordion({ items, className = '' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <ul className={`divide-y divide-line border-y border-line ${className}`}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="group flex min-h-[44px] w-full items-center justify-between gap-6 py-6 text-left transition-colors"
            >
              <span className="font-display text-lg font-normal text-dark transition-colors group-hover:text-primary md:text-2xl">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors ${isOpen ? 'border-primary bg-primary text-white' : 'border-line text-primary group-hover:border-primary'}`}
              >
                {isOpen ? <MinusIcon /> : <PlusIcon />}
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl text-base md:text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
