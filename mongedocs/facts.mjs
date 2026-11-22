// Facts the Monge Docs pages state, in one place so the three languages cannot
// disagree. Each one has to be true of the released product: change it here when
// the product changes, not in the copy.

export const facts = {
  site: 'https://danimar.dev',
  base: '/mongedocs',
  analyticsId: 'G-96S59NJRWJ', // the same GA4 property as src/analytics.ts
  storeId: 'ncolfoambfnfgiopbmfophmjejaaalom',
  email: 'danimaribeiro@gmail.com',

  // Free + Pro, as decided in the growth plan (monge-docs#178).
  pricing: {
    proPerMonth: 10, // US dollars; the price of the Stripe Pro link
    freeHostedGuidesPerMonth: 3,
    freeShareLinks: 3, // FreeShareLimit in backend/internal/guides/model.go
  },

  // The pages are written for the product as the growth plan finishes it: the repository
  // public under AGPL-3.0 (monge-docs#175). Publish them only once `url` opens for a
  // logged-out visitor, or set `live` to false to leave every open-source claim out.
  openSource: {
    live: false,
    licence: 'AGPL-3.0',
    url: 'https://github.com/danimaribeiro/monge-docs',
  },

  // What the comparison pages say about the other tools. Every figure was read on the
  // vendor's own pricing page or help centre on `checked`; read them again before
  // changing a number, and move the date.
  competitors: {
    scribe: {
      name: 'Scribe',
      checked: '2026-11-21',
      pricingUrl: 'https://scribe.com/pricing',
      helpUrl: 'https://support.scribehow.com/hc/en-us',
      proPersonal: { monthly: 35, yearly: 25 }, // per seat per month
      proTeam: { monthly: 17, yearly: 13, minSeats: 5 },
      freeSharedGuides: 10,
      storeUsers: 2_000_000,
    },
    tango: {
      name: 'Tango',
      checked: '2026-11-21',
      pricingUrl: 'https://www.tango.ai/pricing',
      helpUrl: 'https://help.tango.ai/en/',
      proSmall: { monthly: 30, yearly: 22 }, // per user per month, 1 or 2 users
      proTeam: { monthly: 20, yearly: 15, minUsers: 3 },
      freeWorkflows: 5,
      freeUsers: 10,
    },
  },
};

/** A competitor's `checked` date, written out in the page's language. */
export function checkedOn(competitor, lang) {
  const date = new Date(`${facts.competitors[competitor].checked}T12:00:00Z`);
  return new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
}

/** The Chrome Web Store listing, in the visitor's language, tagged with the page it came from. */
export function storeUrl(hl, campaign) {
  const params = new URLSearchParams({
    hl,
    utm_source: 'danimar.dev',
    utm_medium: 'landing',
    utm_campaign: campaign,
  });
  return `https://chromewebstore.google.com/detail/${facts.storeId}?${params}`;
}
