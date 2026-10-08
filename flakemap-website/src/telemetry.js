// Consent-aware, in-memory preview instrumentation. No network, cookies, or lead persistence.
let consent = false;
const events = [],
  seen = new Set();
export function setAnalyticsConsent(value) {
  consent = value;
  if (!value) {
    events.length = 0;
    seen.clear();
  }
}
export function track(event, { synthetic = false, key = "" } = {}) {
  if (!consent) return;
  const id = `${event}:${key}`;
  if (key && seen.has(id)) return;
  if (key) seen.add(id);
  const params = new URLSearchParams(location.search),
    utm = {};
  for (const k of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ]) {
    if (params.has(k)) utm[k] = params.get(k).slice(0, 100);
  }
  events.push({ event, synthetic, at: new Date().toISOString(), utm });
}
export function getEvents() {
  return [...events];
}

export function getAnalyticsConsent() {
  return consent;
}
