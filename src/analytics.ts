// Google Analytics 4 for danimar.dev.
//
// It loads by default. A visitor who rejects in the banner turns it off: the
// choice is kept in localStorage, and from then on no Google script is loaded.

const MEASUREMENT_ID = 'G-96S59NJRWJ';
const CHOICE_KEY = 'analytics-consent';

export type Choice = 'granted' | 'denied';

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
    __prerender?: boolean;
  }
}

export function storedChoice(): Choice | null {
  try {
    const v = localStorage.getItem(CHOICE_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

let started = false;

// Loads gtag.js and sends the first page view, unless the visitor rejected.
// Safe to call more than once.
export function start(): void {
  // scripts/prerender.mjs sets __prerender, so a deploy never counts as a visit.
  if (started || window.__prerender || storedChoice() === 'denied') return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js reads the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  });
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

function deleteGoogleCookies(): void {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((n) => n === '_ga' || n.startsWith('_ga_'));
  const expire = 'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  for (const n of names) {
    document.cookie = `${n}=; ${expire}`;
    document.cookie = `${n}=; ${expire}; domain=.danimar.dev`;
  }
}

export function saveChoice(choice: Choice): void {
  try {
    localStorage.setItem(CHOICE_KEY, choice);
  } catch {
    // Private mode or blocked storage: the banner simply asks again next visit.
  }
  if (choice === 'denied') {
    (window as unknown as Record<string, boolean>)[`ga-disable-${MEASUREMENT_ID}`] = true;
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    deleteGoogleCookies();
    started = false;
  }
}

// The home page and the resume are one page that swaps views, so the switch is
// sent as its own page view. Does nothing once the visitor has rejected.
export function trackView(view: string, title: string): void {
  if (!started || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: `${window.location.origin}/${view === 'home' ? '' : `#${view}`}`,
  });
}
