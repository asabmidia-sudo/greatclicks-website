# Greatclicks Quiz Email Sequence

12 email templates for the Practice Growth Quiz lead nurture. Built around GHL merge tags. Designed to convert quiz takers into paid Growth Gap Assessments.

## Sequence overview

| # | Day | Type | Trigger |
|---|-----|------|---------|
| 1 | Day 0 (immediate) | Results delivery | 4 variants by score band |
| 2 | Day 2 | Top gap deep dive | 6 variants by top_gap_1 |
| 3 | Day 5 | Inception case study | Universal |
| 4 | Day 9 | Final close | Universal |

All emails sign off as Aaron, Founder, Greatclicks.

---

## Required GHL merge fields

```
{{contact.first_name}}
{{contact.practice_growth_score}}
{{contact.score_band}}
{{contact.top_gap_1}}
{{contact.top_gap_2}}
{{contact.top_gap_3}}
```

Assessment booking URL: `https://greatclicks.io/assessment`

---

# EMAIL 1 — Day 0 — Results Delivery

4 variants. Trigger by `{{contact.score_band}}`.

---

## Variant 1A — Critical (score 0-25)

**Subject:** Your Practice Growth Score: {{contact.practice_growth_score}}/100
**Alt subjects:**
- Critical gaps. Six figures a year.
- {{contact.first_name}}, your practice is leaking revenue

**Body:**

{{contact.first_name}},

You scored {{contact.practice_growth_score}} out of 100.

That puts you in the critical band. Most clinics here leak six figures a year and do not see it.

Your top three gaps:

1. {{contact.top_gap_1}}
2. {{contact.top_gap_2}}
3. {{contact.top_gap_3}}

The quiz tells you where. The Growth Gap Assessment tells you what it is costing you and how to fix it first.

90-minute working session. Written report in 48 hours. Every gap mapped, costed, ranked.

$450. Report is yours regardless.

[Book the Assessment](https://greatclicks.io/assessment)

Aaron
Founder, Greatclicks

---

## Variant 1B — Significant (score 26-50)

**Subject:** Your Practice Growth Score: {{contact.practice_growth_score}}/100
**Alt subjects:**
- Significant gaps. Fixable.
- {{contact.first_name}}, here is the path

**Body:**

{{contact.first_name}},

You scored {{contact.practice_growth_score}} out of 100.

That puts you in the significant gaps band. Several stages of your client lifecycle are unstructured.

Your top three gaps:

1. {{contact.top_gap_1}}
2. {{contact.top_gap_2}}
3. {{contact.top_gap_3}}

The quiz surfaced the gaps. The next step quantifies them.

The Growth Gap Assessment is a 90-minute working session with your key staff. You walk away with a written report in 48 hours showing the monthly revenue cost of each gap and the priority fix order.

$450. Report is yours regardless.

[Book the Assessment](https://greatclicks.io/assessment)

Aaron
Founder, Greatclicks

---

## Variant 1C — Solid (score 51-75)

**Subject:** Your Practice Growth Score: {{contact.practice_growth_score}}/100
**Alt subjects:**
- Solid foundation. One or two leaks.
- {{contact.first_name}}, you are closer than most

**Body:**

{{contact.first_name}},

You scored {{contact.practice_growth_score}} out of 100.

That puts you in the solid foundation band. Most stages are working. One or two are leaking.

Your top three gaps:

1. {{contact.top_gap_1}}
2. {{contact.top_gap_2}}
3. {{contact.top_gap_3}}

Practices in your range often plateau because they cannot see which fix unlocks the next level of growth.

The Growth Gap Assessment costs each gap and ranks them. Most clinics in your range recover 5 to 15 thousand a month after the first fix.

$450. 90-minute session. Report in 48 hours.

[Book the Assessment](https://greatclicks.io/assessment)

Aaron
Founder, Greatclicks

---

## Variant 1D — Mature (score 76-100)

**Subject:** Your Practice Growth Score: {{contact.practice_growth_score}}/100
**Alt subjects:**
- Top quartile. Optimization opportunities exist.
- {{contact.first_name}}, the last 10 percent

**Body:**

{{contact.first_name}},

You scored {{contact.practice_growth_score}} out of 100.

That puts you in the mature system band. You are already top quartile.

The gaps surfaced are smaller, but they exist:

1. {{contact.top_gap_1}}
2. {{contact.top_gap_2}}
3. {{contact.top_gap_3}}

At your level, the Growth Gap Assessment is less about fixing leaks and more about finding the last 10 percent of leverage.

If that is what you are looking for, the assessment delivers it in 90 minutes with a written report in 48 hours.

$450. Report is yours regardless.

[Book the Assessment](https://greatclicks.io/assessment)

Aaron
Founder, Greatclicks

---

# EMAIL 2 — Day 2 — Top Gap Deep Dive

6 variants. Trigger by `{{contact.top_gap_1}}` value.

---

## Variant 2A — Lead Generation gap

**Subject:** One channel won't grow a clinic
**Alt subjects:**
- {{contact.first_name}}, your lead engine is fragile
- The math on one-channel growth

**Body:**

{{contact.first_name}},

Your top gap is Lead Generation.

Most FM clinics here run one channel. Word of mouth, Google ads, or a single referral source.

When that channel slows, the calendar empties. The math does not hold.

Top performers run four or more channels. Paid, organic, referral, partnership. Each one feeds the next.

Inception Telehealth captured 538 leads in 6 months across four channels. The biggest one was their affiliate program.

The Growth Gap Assessment maps your current channels and ranks the fastest fix.

[Book the Assessment - $450](https://greatclicks.io/assessment)

Aaron

---

## Variant 2B — Lead Response gap

**Subject:** A 5-minute response converts 21x better
**Alt subjects:**
- {{contact.first_name}}, your leads are going cold
- Speed is the cheapest growth lever

**Body:**

{{contact.first_name}},

Your top gap is Lead Response.

A 30-minute wait converts 21 times worse than a 5-minute response.

Most clinics respond in hours. Top performers respond in seconds via automation.

The cost is 4 to 12 thousand a month in lost patients. Most owners never see it because the leads stop counting as real.

The Growth Gap Assessment shows you what your actual response time is and what it is costing you.

[Book the Assessment - $450](https://greatclicks.io/assessment)

Aaron

---

## Variant 2C — Discovery Call Conversion gap

**Subject:** 76% consult conversion is possible
**Alt subjects:**
- {{contact.first_name}}, your consult math is fixable
- The 8 to 20 thousand monthly leak

**Body:**

{{contact.first_name}},

Your top gap is Discovery Call Conversion.

Industry average is 40 to 60 percent. Top performers hit 76.

Inception Telehealth ran 71 consults in 6 months. 54 became patients. That is 76 percent.

The difference between 50 and 76 is structure. Pre-call education, on-call frameworks, post-call follow-up.

Without those, you are leaving 8 to 20 thousand a month on the table.

The Growth Gap Assessment audits your full consult flow and ranks the leverage point.

[Book the Assessment - $450](https://greatclicks.io/assessment)

Aaron

---

## Variant 2D — Enrollment & Onboarding gap

**Subject:** 25% of paid patients churn in month one
**Alt subjects:**
- {{contact.first_name}}, your onboarding is leaking
- They paid. They never showed up.

**Body:**

{{contact.first_name}},

Your top gap is Enrollment and Onboarding.

When onboarding is manual, 15 to 25 percent of paid patients drop off in the first 30 days.

They paid. They never engaged. The lifetime value never showed up.

Top clinics run automated multi-touch onboarding tied to the EHR. Lab orders, intake forms, expectations, all triggered without staff lift.

The Growth Gap Assessment maps your current onboarding and shows you exactly where patients fall off.

[Book the Assessment - $450](https://greatclicks.io/assessment)

Aaron

---

## Variant 2E — Retention & Lab Follow-Up gap

**Subject:** Most patients leave at month three
**Alt subjects:**
- {{contact.first_name}}, the month three drop is preventable
- Where your LTV is dying

**Body:**

{{contact.first_name}},

Your top gap is Retention and Lab Follow-Up.

The drop-off pattern is consistent. Month one is high engagement. Month three is silence. Month six is gone.

For an FM clinic, that is 10 to 30 thousand a month in unrealized lifetime value.

The fix is the lab follow-up loop. When labs come in, the patient hears from you within 24 hours. Always. No exceptions.

Manual review breaks under volume. Automation does not.

The Growth Gap Assessment audits your retention pipeline and finds the leaks.

[Book the Assessment - $450](https://greatclicks.io/assessment)

Aaron

---

## Variant 2F — Referral Generation gap

**Subject:** Your biggest channel is the one you ignored
**Alt subjects:**
- {{contact.first_name}}, referrals are not a strategy yet
- The cheapest channel in your clinic

**Body:**

{{contact.first_name}},

Your top gap is Referral Generation.

Inception Telehealth's biggest lead source was not paid ads. It was their affiliate program.

Most FM clinics rely on word of mouth and call it a referral strategy. It is not.

A real program tracks attribution, automates payouts, and gives patients a reason to refer beyond goodwill.

When this is dialed in, it becomes the cheapest and highest-converting channel in the practice.

The Growth Gap Assessment scopes a referral program for your specific patient base.

[Book the Assessment - $450](https://greatclicks.io/assessment)

Aaron

---

# EMAIL 3 — Day 5 — Inception Case Study (Universal)

**Subject:** 538 leads in 6 months
**Alt subjects:**
- What a real Practice Growth System looks like
- {{contact.first_name}}, the numbers from Inception

**Body:**

{{contact.first_name}},

When we built Inception Telehealth's system, the first 6 months looked like this:

- 538 leads captured
- 71 consultations run
- 54 became paying patients
- 76 percent consult-to-client conversion
- 15 staff hours saved per week

The biggest lead source was their affiliate program.

The biggest conversion lever was lead response automation.

None of this was guessed. We mapped every gap, costed each one, and ranked the fixes.

Your Growth Gap Assessment does the same diagnostic for your clinic. 90 minutes. Report in 48 hours.

[Book the Assessment - $450](https://greatclicks.io/assessment)

Aaron

---

# EMAIL 4 — Day 9 — Final Close (Universal)

**Subject:** One question
**Alt subjects:**
- {{contact.first_name}}, what is the gap costing you?
- 90 days from now

**Body:**

{{contact.first_name}},

One question.

Your top gap is {{contact.top_gap_1}}. The quiz confirmed it.

What is the cost of leaving that gap unfixed for another 90 days?

That is what the Growth Gap Assessment quantifies. We sit with you and your key staff, work through every stage of the lifecycle, and you walk away with a written report that names the dollar cost of each gap.

You keep the report regardless. There is no obligation to build with us.

[Book the Assessment - $450](https://greatclicks.io/assessment)

Aaron

---

# GHL Workflow Logic

Build one workflow triggered by the inbound webhook. Logic:

```
Trigger: Webhook received from greatclicks.io quiz
   ↓
Create or update contact (firstName, email, companyName)
Apply tags from payload
Set custom fields from payload
   ↓
Send Email 1 (Day 0, immediate)
   IF score_band = "critical" → send Variant 1A
   IF score_band = "significant" → send Variant 1B
   IF score_band = "solid" → send Variant 1C
   IF score_band = "mature" → send Variant 1D
   ↓
Wait 2 days
   ↓
Send Email 2 (Day 2)
   IF top_gap_1 = "Lead Generation" → send Variant 2A
   IF top_gap_1 = "Lead Response" → send Variant 2B
   IF top_gap_1 = "Discovery Call Conversion" → send Variant 2C
   IF top_gap_1 = "Enrollment & Onboarding" → send Variant 2D
   IF top_gap_1 = "Retention & Lab Follow-Up" → send Variant 2E
   IF top_gap_1 = "Referral Generation" → send Variant 2F
   ↓
Wait 3 days
   ↓
Send Email 3 (Day 5, universal)
   ↓
Wait 4 days
   ↓
Send Email 4 (Day 9, universal)
   ↓
End sequence (or continue into long-term nurture if you have one)
```

## Suppression rules

- If contact books the assessment at any point, exit the sequence immediately
- If contact replies to any email, pause sequence and route to your inbox
- If `email` is null on submission, skip the email sequence entirely (you'll see them in GHL but cannot reach them)
- Optional: if `score_band = "mature"` and you don't want to nurture top-quartile clinics, exit after Email 1

## A/B testing notes

Each email has 2-3 subject line variants. Test which performs best:
- Open rate target: 35%+ on Email 1, 25%+ on follow-ups
- Click rate target: 5%+ on assessment CTA
- Sequence-to-booking conversion target: 15-20%

After 30 days, kill underperforming subject lines and double down on winners.

---

## Three rules for editing these

1. **Never lengthen the emails.** Most quiz takers will read on mobile. Short paragraphs convert.
2. **Never soften the price.** $450 stays in every email. Friction is the qualifier.
3. **Never add another CTA.** One assessment booking link per email. Multiple CTAs reduce clicks.
