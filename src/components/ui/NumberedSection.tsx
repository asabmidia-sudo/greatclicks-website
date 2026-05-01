import { ScrollReveal } from './ScrollReveal';

export type NumberedItem = {
  number: string;
  title: string;
  description?: string;
};

type NumberedSectionProps = {
  items: NumberedItem[];
  className?: string;
};

export function NumberedSection({ items, className = '' }: NumberedSectionProps) {
  return (
    <ol className={`divide-y divide-line border-y border-line ${className}`}>
      {items.map((item, i) => (
        <li key={item.number}>
          <ScrollReveal delay={i * 80}>
            <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 py-8 md:grid-cols-[140px_1fr] md:gap-x-12 md:py-12">
              <div className="font-display text-5xl font-normal tracking-tight text-primary md:text-7xl">
                {item.number}
              </div>
              <div>
                <h3 className="font-display text-2xl font-normal text-dark md:text-4xl">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-3 max-w-xl text-base md:text-lg">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </ScrollReveal>
        </li>
      ))}
    </ol>
  );
}
