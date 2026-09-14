import { useEffect } from 'react';
import { bookingFrameId, bookingUrl } from '../lib/booking';

export function AssessmentCalendar() {
  useEffect(() => {
    // Re-run GHL's initializer for each mounted iframe. Its own global guards
    // deduplicate listeners; removing this tag keeps StrictMode/remounts clean.
    const script = document.createElement('script');
    script.id = 'ghl-calendar-embed-script';
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <section id="calendar" className="scroll-mt-24 pb-20 md:pb-28" aria-labelledby="calendar-heading">
      <div className="container-content">
        <p className="eyebrow">Book an Assessment Call</p>
        <h2 id="calendar-heading" className="mt-4 text-3xl md:text-4xl">Choose a time to talk about your practice.</h2>
        <div className="mt-8">
          <iframe
            id={bookingFrameId}
            src={bookingUrl}
            title="Book your Greatclicks Assessment Call"
            allow="payment"
            scrolling="no"
            style={{ width: '100%', minHeight: '800px', border: 'none', overflow: 'hidden' }}
          />
        </div>
        <p className="mt-5 text-sm text-muted">
          Prefer a separate window?{' '}
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center font-medium text-primary hover:underline">Open the assessment calendar →</a>
        </p>
      </div>
    </section>
  );
}
