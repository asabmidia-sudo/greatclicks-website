type MarqueeProps = {
  items: string[];
  separator?: string;
  className?: string;
};

export function Marquee({ items, separator = '·', className = '' }: MarqueeProps) {
  const stripContent = [...items, ...items, ...items];

  const renderStrip = (key: string, ariaHidden: boolean) => (
    <div
      key={key}
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {stripContent.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 text-sm font-medium uppercase tracking-[0.2em] text-white md:text-base">
            {item}
          </span>
          <span className="text-primary-mid" aria-hidden="true">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative overflow-hidden bg-dark py-6 ${className}`}>
      <div className="flex w-max animate-marquee">
        {renderStrip('a', false)}
        {renderStrip('b', true)}
      </div>
    </div>
  );
}
