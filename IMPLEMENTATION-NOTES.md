# Practice Growth positioning update

Production source: `asabmidia-sudo/greatclicks-website`, branch `redesign/practice-growth-system`.
Working branch: `codex/practice-growth-positioning`.
Vercel project: `greatclicks-website` (`prj_pFGv63OwpVMt5NNoqxB0DIU7lf1p`).

## Booking setup

Set `VITE_SYSTEMS_REVIEW_BOOKING_URL` to the direct HTTPS GHL calendar URL in Vercel Preview and Production, then rebuild. This is a public, build-time Vite setting. Until it is set, `/systems-review` offers email contact at the existing `hello@greatclicks.io` address. No paid checkout is used. `/assessment` and `/contact` redirect to `/systems-review`.

`GHL_QUIZ_WEBHOOK_URL` remains server-side. Its name and the quiz payload fields/tags are preserved so existing automations can continue to consume submissions. The recommendation text now points to Systems Review. Existing GHL email sequences may still mention the paid assessment; review those separately before launch.

## Content sources

- Inception's existing case-study data supports 538 leads, 76% consultation-to-patient conversion, 54 new paying patients, and 15+ staff hours saved weekly. The homepage uses clearer labels and omits the unsubstantiated industry-average comparison.
- Kristi's content was ported from the existing local `Greatclicks/app/case-study/kristi-leigh/page.tsx`: 110 leads, 29 lab-test clients, 12 program clients, and 9 membership clients. No timeframe or revenue figure has been added. Membership remains described as a custom extension.
- Kristi is listed at `/case-studies/kristi-leigh`. The older singular URL redirects there. Her existing YouTube testimonial is linked from the homepage grid.
- All six original testimonials are retained. Inception's existing MP4 provides early proof. No new testimonial or result claims were invented.

## Verification

- `npm ci` and `npm run build` pass, including API TypeScript checks.
- Browser layout checked at 320, 375, 768, 1024, and 1440 pixels; route layouts checked at mobile, tablet, and desktop sizes.
- Scorecard verified through all eight questions, contact capture, failed submission/retry, qualified and disqualified results, reload/back navigation, and Lead event deduplication. Submission responses were mocked; no test contact was sent to GHL.
- All six YouTube players load their named testimonials. Inception MP4 playback verified.
- Internal CTA destinations, legacy redirects, mobile menu behavior, and page titles checked.
- Direct calendar booking awaits the owner's GHL URL. Live webhook delivery and downstream email workflows have not been exercised.

## Remaining backend review

The existing in-memory API rate limiter remains unchanged; it is not a shared limit across instances. A durable limiter and stricter server-side answer validation should be a separately scoped backend hardening change. This update fixes the existing API TypeScript narrowing error and removes browser logging of contact payloads.
