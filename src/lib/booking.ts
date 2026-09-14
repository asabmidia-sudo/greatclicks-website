// Set this public URL when the GHL calendar is ready. No checkout is used.
const configuredUrl = import.meta.env.VITE_SYSTEMS_REVIEW_BOOKING_URL?.trim();

export const bookingUrl = configuredUrl && /^https:\/\//i.test(configuredUrl)
  ? configuredUrl
  : null;

export const reviewContactUrl = 'mailto:hello@greatclicks.io?subject=Practice%20Systems%20Review';
