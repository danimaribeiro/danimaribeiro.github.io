// Google Analytics 4 for danimar.dev, loaded only after the visitor accepts.
//
// Until then no Google script is requested and no cookie is set. The choice is
// kept in localStorage so the banner is asked once per browser.

const MEASUREMENT_ID = 'G-96S59NJRWJ';
const CHOICE_KEY = 'analytics-consent';

export type Choice = 'granted' | 'denied';

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
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

export function saveChoice(choice: Choice): void {
  try {
    localStorage.setItem(CHOICE_KEY, choice);
  } catch {
    // Private mode or blocked storage: the banner simply asks again next visit.
  }
  if (choice === 'granted') start();
}

let started = false;

// Loads gtag.js and sends the first page view. Safe to call more than once.
export function start(): void {
  if (started || typeof document === 'undefined') return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js reads the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID);
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

// The home page and the resume are one page that swaps views, so the switch is
// sent as its own page view. Does nothing without consent.
export function trackView(view: string, title: string): void {
  if (!started || !window.gtag) return;
  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: `${window.location.origin}/${view === 'home' ? '' : `#${view}`}`,
  });
}
