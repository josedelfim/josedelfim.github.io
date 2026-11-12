import config from './analytics-config.mjs';

const INTERNAL_KEY = 'zezoffice:exclude-internal-analytics:v1';
const SCRIPT_ID = 'zezoffice-web-analytics';
const BEACON_URL = 'https://static.cloudflareinsights.com/beacon.min.js';

// This flag excludes one browser on one origin. It is not a visitor counter.
export function internalVisit(url, storage) {
  const value = url.searchParams.get('internal');
  try {
    if (value === '1') {
      storage.setItem(INTERNAL_KEY, '1');
      return true;
    }
    if (value === '0') storage.removeItem(INTERNAL_KEY);
    return storage.getItem(INTERNAL_KEY) === '1';
  } catch {
    // If preferences cannot be read, don't risk counting an internal browser.
    return true;
  }
}

export function analyticsDecision(settings, env) {
  const url = new URL(env.href);
  if (internalVisit(url, env.storage)) return { status: 'excluded', reason: 'internal-browser' };
  if (!settings.enabled) return { status: 'inactive', reason: 'not-configured' };
  const allowed = Array.isArray(settings.productionHosts) ? settings.productionHosts : [];
  if (url.protocol !== 'https:' || !allowed.includes(url.hostname.toLowerCase())) {
    return { status: 'excluded', reason: 'not-production-host' };
  }
  if (env.webdriver || env.globalPrivacyControl || ['1', 'yes'].includes(env.doNotTrack)) {
    return { status: 'excluded', reason: 'browser-preference-or-test' };
  }
  if (!/^[a-f0-9]{32}$/i.test(settings.siteToken || '')) {
    return { status: 'inactive', reason: 'invalid-site-tag' };
  }
  return { status: 'ready', reason: 'production' };
}

export function startAnalytics(settings, env, document) {
  const decision = analyticsDecision(settings, env);
  if (decision.status !== 'ready') return decision;
  // Reject duplicates including automatic Cloudflare injection. Manual setup
  // must be used in the dashboard for the internal-browser exclusion to work.
  if (document.querySelector('script[data-cf-beacon],script[src*="static.cloudflareinsights.com/beacon"]')) {
    return { status: 'inactive', reason: 'existing-beacon-check-dashboard' };
  }
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.type = 'module';
  script.src = BEACON_URL;
  script.setAttribute('data-cf-beacon', JSON.stringify({ token: settings.siteToken, spa: false }));
  document.head.append(script);
  // Script insertion does not prove receipt in Cloudflare's dashboard.
  return { status: 'requested', reason: 'beacon-added' };
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  let storage;
  try { storage = window.localStorage; } catch { /* fail closed in internalVisit */ }
  const state = startAnalytics(config, {
    href: window.location.href,
    storage,
    webdriver: window.navigator.webdriver,
    globalPrivacyControl: window.navigator.globalPrivacyControl,
    doNotTrack: window.navigator.doNotTrack,
  }, document);
  // Diagnosis only: no counts, dashboard credentials or visitor data are public.
  window.zezOfficeAnalytics = Object.freeze(state);
  document.documentElement.dataset.analyticsStatus = state.status;
  document.documentElement.dataset.analyticsReason = state.reason;
}
