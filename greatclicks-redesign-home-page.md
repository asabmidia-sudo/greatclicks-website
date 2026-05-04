# Greatclicks Redesign — Home Page Build (Phase 1)

Read CLAUDE.md first.

## Goal
Build the new Greatclicks home page on a new branch in the existing greatclicks.io repo. Design language inspired by Arooth (https://arooth.webflow.io/). Tech stack stays React + Vite + TypeScript + Tailwind v4. Page-by-page build, starting with the home page. This prompt covers project scaffolding, shared components, and the home page only.

## Branch
Create a new branch from master called `redesign/practice-growth-system`. All work happens there. Do not touch master.

## Design Language (from Arooth)
- Numbered sections with prominent 01/02/03 labels
- Marquee scrolling strip with bullet separators
- FAQ accordion with plus/minus toggle
- Bottom CTA banner, full-width and dramatic
- Modern agency aesthetic: bold typography, clean layout, generous spacing
- Brand color stays blue (current Greatclicks primary)
- Use existing brand fonts. If none present, recommend two and let me pick before building.

## Voice Rules (every line of copy)
- No em dashes anywhere
- Every sentence under 16 words
- Hooks in first 8 words of every headline
- Direct prescriptive tone
- Banned words: pivotal, crucial, enhance, leverage, robust, seamless, streamline, unlock, empower, navigate, journey, holistic, comprehensive

## Routes (stub all, build only home now)
- `/` (home, this build)
- `/about` (stub)
- `/case-studies` (stub)
- `/case-studies/inception-telehealth` (stub)
- `/quiz` (stub)
- `/quiz/results` (stub)
- `/assessment` (stub)
- `/contact` (stub)
- `/404` (build)

## Shared Components
- **Nav**: logo, links (Home, About, Case Studies, Contact), CTA button "Book Assessment" → `/assessment`
- **Footer**: logo, tagline, page links, contact info, social icons (LinkedIn, YouTube), copyright
- **Marquee**: horizontal scrolling text strip with bullet separators
- **NumberedSection**: reusable layout for numbered lists with prominent 01/02/03
- **FAQAccordion**: expand/collapse with plus/minus icons
- **BottomCTABanner**: full-width dramatic close section

## Home Page Sections (in order)

### 1. Hero
- Eyebrow: PRACTICE GROWTH SYSTEM
- Headline: Your practice is leaking revenue.
- Subhead: Find out where in two minutes.
- Primary CTA: "Get your Practice Growth Score" → `/quiz`
- Secondary link: "Or book the assessment →" → `/assessment`

### 2. Marquee Strip
- Text: Real results · Operator built · Functional medicine first ·
- Loop horizontally

### 3. The Pain
- Eyebrow: WHY MOST CLINICS STALL
- Heading: You didn't open a clinic to babysit software.
- Front desk drowning in reminders.
- Leads go cold before follow-up.
- Consult no-shows hit 30%.
- Patients drop off month three. Nobody notices.
- EHR and marketing tools don't talk.

### 4. The Framework (numbered, six stages)
- Eyebrow: THE FRAMEWORK
- Heading: Six stages. All measurable. All fixable.
- 01 Lead Capture
- 02 Lead Response
- 03 Discovery Call Conversion
- 04 Enrollment & Onboarding
- 05 Retention & Lab Follow-Up
- 06 Referrals & Reactivation

### 5. How It Works (numbered, three steps)
- Eyebrow: HOW IT WORKS
- Heading: Three steps. No fluff.
- 01 Quiz: Two minutes. Score and ranked gaps.
- 02 Assess: 90 minutes. Report in 48 hours.
- 03 Build: We install what the report recommends.

### 6. Case Study
- Eyebrow: PROOF
- Heading: Inception Telehealth. First 6 months.
- Stats grid:
  - 538 Leads captured
  - 76% Consult to client conversion
  - 54 New paying patients
  - 15+ Staff hours saved per week
- Caption: Industry average is 40 to 60%.
- Link: "Read the full case study →" → `/case-studies/inception-telehealth`

### 7. Testimonials
- Eyebrow: TESTIMONIALS
- Heading: From our clients.
- Carry over the 6 YouTube video embeds from the current homepage (Kristi, Dr. Erika, Sean, Nate, Rashid, Elijah). Pull the existing video IDs from the current site code.

### 8. Embedded Quiz Section
- Eyebrow: TAKE THE QUIZ
- Heading: Find your gaps right now.
- Subhead: Two minutes. Six stages. One score.
- For now, placeholder card with text "Quiz coming soon" and CTA "Open quiz in new page" → `/quiz`. Real quiz form is a later build.

### 9. Skip-the-Quiz Section
- Eyebrow: DIRECT PATH
- Heading: Already know you have gaps?
- Subhead: Skip the quiz. Book the assessment.
- CTA: "Book the Assessment · $450" → `/assessment`

### 10. FAQ Accordion
- Eyebrow: FAQ
- Heading: Frequently asked questions.
- Q: What does the quiz show?
  A: Your Practice Growth Score and ranked gaps. Two minutes.
- Q: What's in the Growth Gap Assessment?
  A: 90-minute session with your key staff. Report in 48 hours. Every gap costed and ranked.
- Q: Is this HIPAA-compliant?
  A: Yes. BAA-covered infrastructure across the stack.
- Q: How much does it cost?
  A: Assessment is $450. Build pricing scopes from the report.

### 11. Bottom CTA Banner (Arooth-style, full-width)
- Heading: Stop stitching it together.
- Subhead: Two minutes. See where revenue is leaking.
- Primary CTA: "Get your Practice Growth Score" → `/quiz`
- Secondary: "Or book the assessment →" → `/assessment`

### 12. Footer
- Logo and tagline: Practice Growth System for functional medicine clinics.
- Pages: Home / About / Case Studies / Contact
- Contact: hello@greatclicks.io · 619-393-5747
- Social: LinkedIn · YouTube
- © 2026 Greatclicks. All rights reserved.

## Workflow
1. Confirm you have read CLAUDE.md and this prompt. Restate the goal in your own words.
2. List every file you plan to create or modify. Do not write code yet.
3. Build in phases, stopping for my approval after each:
   - **Phase 1**: Branch + design tokens (colors, typography, spacing) + base layout shell
   - **Phase 2**: Shared components (Nav, Footer, Marquee, NumberedSection, FAQAccordion, BottomCTABanner)
   - **Phase 3**: Home sections 1-6
   - **Phase 4**: Home sections 7-12
   - **Phase 5**: Stub routes for all other pages so nav links don't 404
4. After each phase, run the dev server and describe what's on screen. Wait for my approval before moving on.
5. Final pass: confirm no em dashes, every sentence under 16 words, no banned words, all links route correctly, mobile responsive at 375px.
6. Show diff summary at the end.

## Constraints
- Components under 200 lines each
- Mobile-first, 44px tap targets minimum
- 375px mobile viewport must work
- Do not touch master branch
