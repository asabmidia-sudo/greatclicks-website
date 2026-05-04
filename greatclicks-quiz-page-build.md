# Greatclicks Redesign — Quiz Page Build (Phase 2)

Read CLAUDE.md first.

## Goal
Build the standalone Quiz page and the Quiz Results page on the existing `redesign/practice-growth-system` branch. The quiz captures lead data, computes a Practice Growth Score, ranks gaps across 6 lifecycle stages, sends the full submission to GHL via inbound webhook, and routes the user to the Gap Assessment booking page. Same tech stack as the home page: React + Vite + TypeScript + Tailwind v4.

## Branch
Continue working on `redesign/practice-growth-system`. Do not branch off. Do not touch master.

## Routes
- `/quiz` — multi-step quiz form
- `/quiz/results` — score, gap breakdown, assessment CTA
- `/assessment` — already stubbed, this is the destination of the primary CTA

## Voice Rules (every line of copy)
- No em dashes anywhere
- Every sentence under 16 words
- Hooks in first 8 words of every headline
- Direct prescriptive tone
- Banned words: pivotal, crucial, enhance, leverage, robust, seamless, streamline, unlock, empower, navigate, journey, holistic, comprehensive

## Quiz Structure

### Total questions: 8
- 2 qualifying (revenue, role)
- 6 stage diagnostic (one per Practice Growth System stage)

### Flow
1. Landing intro (heading + subhead + start button)
2. 8 questions, one per screen, with progress bar
3. Email capture screen (optional, marked "Skip" available)
4. Submit to GHL webhook
5. Redirect to `/quiz/results` with score data

### Question data structure

Store all questions in `src/data/quizQuestions.ts` as a typed array:

```typescript
type QuizQuestion = {
  id: string;
  stage: 'qualifying' | 'lead_gen' | 'lead_response' | 'consult_conversion' | 'onboarding' | 'retention' | 'referral';
  question: string;
  options: { label: string; value: number }[];
};
```

### Questions

**Q1. Monthly revenue (qualifying)**
Question: What's your monthly collected revenue?
Options:
- Under $30K → 0
- $30K to $75K → 25
- $75K to $150K → 50
- $150K to $300K → 75
- Over $300K → 100

**Q2. Role (qualifying)**
Question: What's your role at the practice?
Options:
- Founder / Owner → 100
- Clinical Director / Medical Director → 75
- Operations / Practice Manager → 50
- Other staff → 25

**Q3. Lead Generation**
Question: How does your clinic generate new patient leads?
Options:
- We don't actively generate leads. Word of mouth only. → 0
- One channel only. Ads, referrals, or content. → 25
- Two to three channels with mixed performance. → 50
- Diversified system across multiple channels. → 75
- Predictable monthly lead volume across 4+ channels. → 100

**Q4. Lead Response**
Question: How fast does your team respond to a new lead?
Options:
- We don't have a defined process. → 0
- Within 24 to 48 hours. → 25
- Within 1 to 4 hours. → 50
- Within 15 minutes during business hours. → 75
- Within 5 minutes via automated system, 24/7. → 100

**Q5. Discovery Call Conversion**
Question: What's your discovery call to paying patient conversion rate?
Options:
- We don't track it. → 0
- Under 30%. → 25
- 30% to 50%. → 50
- 50% to 70%. → 75
- Above 70%. → 100

**Q6. Enrollment & Onboarding**
Question: How are new patients onboarded?
Options:
- They figure it out themselves. → 0
- Manual emails from staff. → 25
- Templated process, mostly manual. → 50
- Automated multi-touch onboarding sequence. → 75
- Automated onboarding with EHR-synced milestones. → 100

**Q7. Retention & Lab Follow-Up**
Question: What happens when a patient's lab results come in?
Options:
- Staff manually reviews and emails the patient. → 0
- We schedule a follow-up at the next visit. → 25
- Manual review, automated reminder. → 50
- Automated review-to-follow-up workflow. → 75
- Fully integrated lab pipeline with EHR + automation. → 100

**Q8. Referral Generation**
Question: Do you have a referral or affiliate program?
Options:
- No, we rely on organic word of mouth. → 0
- We mention referrals occasionally. → 25
- We have a basic referral incentive. → 50
- Active referral program with tracking. → 75
- Affiliate program with automated payouts. → 100

## Scoring Logic

Place in `src/lib/quizScoring.ts`:

```typescript
type StageScore = {
  stage: string;
  label: string;
  score: number;
};

type QuizResult = {
  practiceGrowthScore: number;
  band: 'critical' | 'significant' | 'solid' | 'mature';
  stageScores: StageScore[];
  topGaps: StageScore[];
  qualifying: { revenue: number; role: number };
};
```

### Logic
- Practice Growth Score = average of Q3-Q8 answer values, rounded to integer
- Band: 0-25 critical, 26-50 significant, 51-75 solid, 76-100 mature
- Top gaps: stages Q3-Q8 sorted ascending by score, take first 3

## Stage Labels

```
lead_gen → "Lead Generation"
lead_response → "Lead Response"
consult_conversion → "Discovery Call Conversion"
onboarding → "Enrollment & Onboarding"
retention → "Retention & Lab Follow-Up"
referral → "Referral Generation"
```

## Gap Impact Copy (for results page top 3 gaps)

```
lead_gen: "Most clinics with no system here leak $5-15K/month in unrealized patient acquisition."
lead_response: "A 5-minute response window converts 21x better than 30 minutes. Costs $4-12K/month."
consult_conversion: "Industry average is 40-60%. Top performers hit 76%+. Gap costs $8-20K/month."
onboarding: "Manual onboarding loses 15-25% of paid patients in the first 30 days."
retention: "Patient drop-off after month 3 costs FM clinics $10-30K/month in LTV."
referral: "Affiliate programs can be the single largest channel. Most clinics ignore this."
```

## Page Structure

### `/quiz` — Quiz Form Page

**Landing screen:**
- Eyebrow: PRACTICE GROWTH QUIZ
- Headline: Find your gaps in two minutes.
- Subhead: 8 questions. One score. Six ranked stages.
- Start button: "Start the Quiz"

**Question screen (per question):**
- Progress bar at top showing "Question X of 8"
- Question text (h2 size)
- Option list (radio buttons, full-width tap targets, 44px minimum)
- Back button (except on Q1) and Next button (disabled until answered)
- Mobile-first, 375px breakpoint

**Email capture screen:**
- Heading: One last thing.
- Subhead: Want your full results emailed to you?
- Fields: First name, Email, Clinic name (all optional)
- Buttons: "Send my results" (primary) and "Skip to results" (secondary text link)

**On submit (whether email entered or skipped):**
- POST to `/api/quiz/submit` with full payload
- On success or failure, redirect to `/quiz/results` (do not block user on webhook failure)

### `/quiz/results` — Results Page

**Hero section:**
- Eyebrow: YOUR RESULTS
- Headline: Your Practice Growth Score
- Big number: "{score} / 100"
- Band callout: "Critical gaps" / "Significant gaps" / "Solid foundation" / "Mature system"
- Subhead: Most clinics score below 50. Top performers score 75+.

**Stage Breakdown:**
- Heading: How you scored across the six stages
- Horizontal bar chart, 6 rows
- Each bar: stage name, score, colored bar (red 0-25, orange 26-50, yellow 51-75, green 76-100)

**Top 3 Gaps:**
- Heading: Where your practice is leaking the most
- 3 cards in vertical stack
- Each card: stage name (bold), gap impact copy (one sentence)

**Primary CTA Section:**
- Heading: Get the full Growth Gap Assessment.
- Subhead: 90-minute working session. Written report in 48 hours. Every gap mapped, costed, and ranked.
- Button: "Book the Assessment · $450" → `/assessment`

**Secondary email capture (only if user skipped earlier):**
- Card: Want a copy emailed to you?
- Form: First name, Email, Clinic name → Submit (POSTs to same endpoint)
- After submit: replace card with "Sent. Check your inbox shortly."

## GHL Webhook Submission

Create `api/quiz/submit.ts` (Vercel serverless function).

### Webhook URL
Store in environment variable: `GHL_WEBHOOK_URL`
Default value (set in Vercel env vars):
```
https://services.leadconnectorhq.com/hooks/kyeedObOAb2jF27mJJwP/webhook-trigger/4577f83f-f890-40c6-aece-1cf0afea09ba
```

### Endpoint behavior
- Accepts POST with full quiz payload from the client
- Forwards to GHL webhook with the structured payload below
- Returns 200 to the client whether or not GHL responds successfully (do not block UX)
- Logs any GHL webhook failures to the Vercel function logs

### Payload structure to send to GHL

```typescript
type GhlPayload = {
  // Standard contact fields (top-level for GHL native mapping)
  firstName: string | null;
  email: string | null;
  companyName: string | null;
  
  // GHL tags for segmentation
  tags: string[];
  
  // Practice Growth System scoring data
  practiceGrowthScore: number;
  scoreBand: 'critical' | 'significant' | 'solid' | 'mature';
  
  // Per-stage scores (for custom field mapping in GHL)
  stageScores: {
    leadGeneration: number;
    leadResponse: number;
    consultConversion: number;
    onboarding: number;
    retention: number;
    referral: number;
  };
  
  // Top 3 gaps as both array and individual fields for easy GHL mapping
  topGapsLabel: string; // comma-separated, e.g. "Lead Generation, Retention & Lab Follow-Up, Referral Generation"
  topGap1: string;
  topGap2: string;
  topGap3: string;
  
  // Qualifying data as readable strings
  monthlyRevenue: string; // e.g., "$30K to $75K"
  role: string; // e.g., "Founder / Owner"
  
  // Full responses for reference
  responses: Array<{
    questionId: string;
    question: string;
    answer: string;
    value: number;
  }>;
  
  // Recommendation summary (one-paragraph readable text for GHL email/SMS templates)
  recommendation: string;
  
  // Metadata
  source: 'practice-growth-quiz';
  submittedAt: string; // ISO 8601 timestamp
};
```

### Recommendation text generator

Generate a single readable paragraph that GHL can drop into an email template. Format:

```
Your Practice Growth Score is {score}/100, which puts you in the "{band}" band. Your top three gaps are {gap1}, {gap2}, and {gap3}. Based on your responses, the next step is the Growth Gap Assessment, which maps every gap, calculates the monthly revenue cost, and ranks the priority fix order. Book at greatclicks.io/assessment.
```

Replace tokens with actual values per submission.

### Tag generation logic

Build the `tags` array based on submission data:

- Always include: `quiz-completed`
- Score band: `score-${scoreBand}` (e.g., `score-critical`)
- Top gap stage tags: one per top 3 gap, formatted as `gap-${stage_id}` (e.g., `gap-lead_gen`, `gap-retention`)
- Revenue tier: `revenue-under-30k`, `revenue-30k-75k`, `revenue-75k-150k`, `revenue-150k-300k`, `revenue-over-300k`
- Role tag: `role-founder`, `role-clinical-director`, `role-operations`, `role-other-staff`

### Submission rules
- If email is empty, still send to webhook with `email: null`. Aaron sees every completion in GHL even without contact details.
- If first name or clinic name is empty, send `null` for those fields.
- Wrap the fetch in a try/catch. Log errors but always return 200 to the client.
- Set request timeout to 5 seconds. If GHL is slow, do not block the user.

### Implementation example

```typescript
// api/quiz/submit.ts
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const payload = buildGhlPayload(req.body);
  
  try {
    await fetch(process.env.GHL_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    });
  } catch (error) {
    console.error('GHL webhook failed:', error);
  }
  
  return res.status(200).json({ success: true });
}
```

## Files to Create

1. `src/data/quizQuestions.ts` — typed question array
2. `src/lib/quizScoring.ts` — scoring logic and types
3. `src/data/gapImpactCopy.ts` — top-3-gap revenue impact strings
4. `src/lib/buildGhlPayload.ts` — payload builder for GHL webhook including tags and recommendation text
5. `src/pages/Quiz.tsx` — multi-step quiz form
6. `src/pages/QuizResults.tsx` — results visualization
7. `src/components/quiz/QuizProgress.tsx` — progress bar
8. `src/components/quiz/QuizQuestion.tsx` — single-question screen component
9. `src/components/quiz/QuizEmailCapture.tsx` — email capture screen
10. `src/components/quiz/ScoreVisualization.tsx` — big number + band display
11. `src/components/quiz/StageBarChart.tsx` — horizontal bar chart for 6 stages
12. `src/components/quiz/GapCard.tsx` — top 3 gap card component
13. `api/quiz/submit.ts` — Vercel serverless function for GHL webhook

Update `src/App.tsx` routing to wire `/quiz` and `/quiz/results` to real components instead of stubs.

## Environment Variables

Add to `.env.local` and Vercel project settings:

```
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/kyeedObOAb2jF27mJJwP/webhook-trigger/4577f83f-f890-40c6-aece-1cf0afea09ba
```

Do not hardcode the URL in the function. Always read from `process.env.GHL_WEBHOOK_URL`.

## Workflow

1. Confirm you have read CLAUDE.md and this prompt. Restate the goal in your own words.
2. List every file you plan to create or modify. Do not write code yet.
3. Build in phases, stopping for my approval after each:
   - **Phase 1:** Question data, scoring logic, gap impact copy, GHL payload builder (no UI yet)
   - **Phase 2:** Quiz form components (progress bar, question screen, email capture)
   - **Phase 3:** Quiz page with full multi-step flow + state management
   - **Phase 4:** Results page components (score visualization, bar chart, gap cards)
   - **Phase 5:** Results page with full layout
   - **Phase 6:** GHL webhook submission API endpoint with full tag and payload logic
4. After each phase, run the dev server and walk through the flow. Wait for my approval before moving on.
5. After Phase 6, send a real test submission and confirm the payload arrives in GHL with all fields populated. Show me the test payload.
6. Final pass: confirm no em dashes, every sentence under 16 words, no banned words, all links route correctly, mobile responsive at 375px, full quiz completable in under 2 minutes, GHL webhook fires reliably.
7. Show diff summary at the end.

## Constraints
- Components under 200 lines each
- Mobile-first, 44px minimum tap targets
- 375px mobile viewport must work end-to-end
- No browser storage (localStorage, sessionStorage). Use React state only.
- One question per screen on mobile
- Quiz must be completable on mobile in under 2 minutes
- Webhook failure must never block the user from seeing results
