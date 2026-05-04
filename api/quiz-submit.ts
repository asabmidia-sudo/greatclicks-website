// Vercel Edge function: validates and relays quiz submissions to the GHL webhook.
// Keeps the GHL URL server-side and adds rate limiting + payload validation.

declare const process: { env: Record<string, string | undefined> };

export const config = { runtime: 'edge' };

const SCORE_BANDS = ['critical', 'significant', 'solid', 'mature'] as const;
type ScoreBand = (typeof SCORE_BANDS)[number];

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

const rateLimitMap = new Map<string, number[]>();

function clientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

type ValidationResult = { ok: true } | { ok: false; detail: string };

function validatePayload(body: unknown): ValidationResult {
  if (!body || typeof body !== 'object') return { ok: false, detail: 'body_not_object' };
  const b = body as Record<string, unknown>;

  if (typeof b.sessionId !== 'string' || b.sessionId.length === 0)
    return { ok: false, detail: 'sessionId' };
  if (typeof b.email !== 'string' || !b.email.includes('@'))
    return { ok: false, detail: 'email' };
  if (
    typeof b.practiceGrowthScore !== 'number' ||
    b.practiceGrowthScore < 0 ||
    b.practiceGrowthScore > 100
  )
    return { ok: false, detail: 'practiceGrowthScore' };
  if (!SCORE_BANDS.includes(b.scoreBand as ScoreBand))
    return { ok: false, detail: 'scoreBand' };
  if (typeof b.topGap1 !== 'string') return { ok: false, detail: 'topGap1' };
  if (typeof b.topGap2 !== 'string') return { ok: false, detail: 'topGap2' };
  if (typeof b.topGap3 !== 'string') return { ok: false, detail: 'topGap3' };
  if (!Array.isArray(b.responses) || b.responses.length !== 8)
    return { ok: false, detail: 'responses' };
  if (b.source !== 'practice-growth-quiz') return { ok: false, detail: 'source' };

  return { ok: true };
}

function corsHeaders(origin: string | null): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': origin ?? '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function jsonResponse(body: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(origin),
    },
  });
}

export default async function handler(request: Request): Promise<Response> {
  const origin = request.headers.get('origin');

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'method_not_allowed' }, 405, origin);
  }

  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return jsonResponse({ error: 'rate_limited' }, 429, origin);
  }

  const webhookUrl = process.env.GHL_QUIZ_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error('[quiz-submit] missing GHL_QUIZ_WEBHOOK_URL');
    return jsonResponse({ error: 'misconfigured' }, 500, origin);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      { error: 'invalid_payload', detail: 'json_parse' },
      400,
      origin,
    );
  }

  const validation = validatePayload(body);
  if (!validation.ok) {
    return jsonResponse(
      { error: 'invalid_payload', detail: validation.detail },
      400,
      origin,
    );
  }

  try {
    const ghlRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!ghlRes.ok) {
      console.error(`[quiz-submit] GHL responded ${ghlRes.status}`);
      return jsonResponse({ error: 'webhook_failed' }, 502, origin);
    }
    return jsonResponse({ ok: true }, 200, origin);
  } catch (e) {
    console.error('[quiz-submit] fetch threw', e);
    return jsonResponse({ error: 'webhook_failed' }, 502, origin);
  }
}
