// HTML for the Monge Docs pages. One layout, two page types (landing, comparison).
// Copy comes from content/<locale>.mjs, facts from facts.mjs, media from the build script.

import { facts, storeUrl } from './facts.mjs';

export const LOCALES = [
  { code: 'en', lang: 'en', hl: 'en', og: 'en_US', dir: '' },
  { code: 'pt-br', lang: 'pt-BR', hl: 'pt-BR', og: 'pt_BR', dir: 'pt-br/' },
  { code: 'es', lang: 'es', hl: 'es', og: 'es_ES', dir: 'es/' },
];

export const COMPETITORS = ['scribe', 'tango'];

/** Path of a page under the site root. `page` is '' for the landing page, or 'vs-scribe'. */
export const pagePath = (locale, page = '') => `${facts.base}/${locale.dir}${page ? `${page}/` : ''}`;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));

function head({ locale, page, title, description, ctx, jsonLd }) {
  const url = facts.site + pagePath(locale, page);
  const alternates = LOCALES.map(
    (l) => `<link rel="alternate" hreflang="${l.lang}" href="${facts.site}${pagePath(l, page)}">`,
  ).join('\n');
  const og = ctx.ogImage
    ? `<meta property="og:image" content="${facts.site}${ctx.ogImage.src}">
<meta property="og:image:width" content="${ctx.ogImage.width}">
<meta property="og:image:height" content="${ctx.ogImage.height}">
<meta name="twitter:card" content="summary_large_image">`
    : '<meta name="twitter:card" content="summary">';
  return `<!doctype html>
<html lang="${locale.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
${alternates}
<link rel="alternate" hreflang="x-default" href="${facts.site}${pagePath(LOCALES[0], page)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Monge Docs">
<meta property="og:locale" content="${locale.og}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
${og}
<link rel="icon" href="${facts.base}/icon.png">
<link rel="preload" href="${ctx.asset('fonts/bricolage-grotesque-latin-wght-normal.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${ctx.asset('fonts/atkinson-hyperlegible-next-latin-wght-normal.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${ctx.asset('site.css')}">
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
</head>`;
}

function header({ locale, page, t, campaign }) {
  const langs = LOCALES.map((l) =>
    l.code === locale.code
      ? `<li><a href="${pagePath(l, page)}" lang="${l.lang}" aria-current="true">${l.name}</a></li>`
      : `<li><a href="${pagePath(l, page)}" lang="${l.lang}" hreflang="${l.lang}">${l.name}</a></li>`,
  ).join('');
  return `<a class="skip" href="#main">${t.skip}</a>
<header class="top">
  <a class="brand" href="${pagePath(locale)}"><img src="${facts.base}/icon.png" alt="" width="32" height="32">Monge Docs</a>
  <nav aria-label="${t.nav.languages}"><ul class="langs">${langs}</ul></nav>
  <a class="btn btn-small" href="${esc(storeUrl(locale.hl, campaign))}">${t.nav.install}</a>
</header>`;
}

function footer({ locale, t, extra = '' }) {
  return `<footer class="bottom">
  <p>${t.footer.made} ${fill(t.footer.contact, { email: facts.email })}</p>
  <p class="links"><a href="${pagePath(locale)}">${t.footer.home}</a> <a href="${facts.base}/privacy/">${t.footer.privacy}</a></p>
  ${extra}
</footer>
${tracking(t)}`;
}

// Google Analytics, the same property and the same choice as the rest of danimar.dev
// (src/analytics.ts): it loads unless the visitor rejected it in the banner. A click on
// any store link is sent as `install_click`, the conversion ads are measured by, and a
// visit's utm_* tags (from an ad) replace the page's own on the store links, so the
// store's own report can tell the ad apart. The page that was clicked moves to
// utm_content.
function tracking(t) {
  const c = t.consent;
  return `<div class="consent" role="region" aria-label="${esc(c.label)}" hidden>
  <p>${c.body}</p>
  <p class="consent-buttons"><button type="button" class="btn-quiet" data-choice="denied">${c.reject}</button><button type="button" class="btn btn-small" data-choice="granted">${c.accept}</button></p>
</div>
<script>
(function () {
  var ID = '${facts.analyticsId}', KEY = 'analytics-consent', TAGS = 'mongedocs-utm';
  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}

  var q = new URLSearchParams(location.search), tags = {};
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) {
    if (q.get(k)) tags[k] = q.get(k);
  });
  if (!tags.utm_source && (q.get('gclid') || q.get('gbraid') || q.get('wbraid'))) {
    tags.utm_source = 'google'; tags.utm_medium = 'cpc';
  }
  try {
    if (tags.utm_source) sessionStorage.setItem(TAGS, JSON.stringify(tags));
    else tags = JSON.parse(sessionStorage.getItem(TAGS) || '{}');
  } catch (e) {}

  document.querySelectorAll('a[href^="https://chromewebstore.google.com/"]').forEach(function (a) {
    var url = new URL(a.href), page = url.searchParams.get('utm_campaign');
    if (tags.utm_source) {
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) { url.searchParams.delete(k); });
      Object.keys(tags).forEach(function (k) { url.searchParams.set(k, tags[k]); });
      if (!tags.utm_content && page) url.searchParams.set('utm_content', page);
      a.href = url.toString();
    }
    a.addEventListener('click', function () {
      if (window.gtag) window.gtag('event', 'install_click', { page_campaign: page, link_url: a.href });
    });
  });

  function start() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(s);
  }
  if (choice !== 'denied') start();

  var banner = document.querySelector('.consent');
  if (choice !== 'granted' && choice !== 'denied') banner.hidden = false;
  banner.addEventListener('click', function (e) {
    var picked = e.target.getAttribute && e.target.getAttribute('data-choice');
    if (!picked) return;
    try { localStorage.setItem(KEY, picked); } catch (e2) {}
    banner.hidden = true;
    if (picked === 'denied') {
      window['ga-disable-' + ID] = true;
      document.cookie.split(';').map(function (c) { return c.split('=')[0].trim(); })
        .filter(function (n) { return n === '_ga' || n.indexOf('_ga_') === 0; })
        .forEach(function (n) {
          document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
          document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.danimar.dev';
        });
    }
  });
})();
</script>`;
}

const img = (m, alt, attrs = '') =>
  `<img src="${m.src}" width="${m.width}" height="${m.height}" alt="${esc(alt)}" ${attrs}>`;

function clip(L, ctx) {
  const { mp4, webm, poster } = ctx.media.clip;
  if (!mp4 && !webm) return '';
  // The clip starts by itself only for visitors who have not asked for less motion;
  // everyone gets the controls.
  return `<figure class="clip">
  <video id="demo" controls muted loop playsinline preload="metadata" aria-label="${esc(L.clipLabel)}"${
    poster ? ` poster="${poster.src}" width="${poster.width}" height="${poster.height}"` : ''
  }>
    ${webm ? `<source src="${webm.src}" type="video/webm">` : ''}
    ${mp4 ? `<source src="${mp4.src}" type="video/mp4">` : ''}
  </video>
  <figcaption>${L.clipCaption}</figcaption>
</figure>
<script>
(function () {
  var v = document.getElementById('demo');
  if (v && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var p = v.play();
    if (p && p.catch) p.catch(function () {});
  }
})();
</script>`;
}

function plan(p) {
  return `<div class="plan">
    <h3>${p.name}</h3>
    <p class="price"><span class="amount">${p.price}</span>${p.per ? ` <span class="per">${p.per}</span>` : ''}</p>
    <ul>${p.items.map((i) => `<li>${i}</li>`).join('')}</ul>
    ${p.how ? `<p class="plan-note">${p.how}</p>` : ''}
  </div>`;
}

export function landing({ locale, t, ctx }) {
  const L = t.landing;
  const campaign = `home-${locale.code}`;
  const store = esc(storeUrl(locale.hl, campaign));
  const stills = [ctx.media.record, ctx.media.guideStill, ctx.media.editor];
  const guide = ctx.media.guide;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Monge Docs',
    description: L.description,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome',
    url: facts.site + pagePath(locale),
    inLanguage: locale.lang,
    author: { '@type': 'Person', name: 'Danimar Ribeiro', url: `${facts.site}/` },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return `${head({ locale, page: '', title: L.title, description: L.description, ctx, jsonLd })}
<body>
${header({ locale, page: '', t, campaign })}
<main id="main">
  <section class="hero">
    <h1>${L.h1.map((line) => `<span>${line}</span>`).join(' ')}</h1>
    <p class="lede">${L.lede}</p>
    <p class="cta"><a class="btn" href="${store}">${L.install}</a>${
      guide ? `<a class="quiet" href="#guide">${L.seeGuide}</a>` : ''
    }</p>
    <p class="note">${L.installNote}</p>
    ${clip(L, ctx)}
  </section>

  <section class="how" aria-labelledby="how">
    <h2 id="how">${L.howTitle}</h2>
    <ol class="rail">
      ${L.steps
        .map(
          (s, i) => `<li>
        <div class="step-text"><h3>${s.title}</h3><p>${s.body}</p></div>
        ${stills[i] ? `<div class="shot">${img(stills[i], s.alt, 'loading="lazy"')}</div>` : ''}
      </li>`,
        )
        .join('\n      ')}
    </ol>
  </section>

  ${
    guide
      ? `<section class="made" aria-labelledby="guide">
    <h2 id="guide">${L.guideTitle}</h2>
    <p class="intro">${L.guideIntro}${
      guide.sharedUrl ? ` <a href="${guide.sharedUrl}">${L.guideShared}</a>.` : ''
    }</p>
    <article class="sheet" lang="${guide.lang}">
      <h3 class="sheet-title">${esc(guide.title)}</h3>
      ${guide.html}
    </article>
  </section>`
      : ''
  }

  <section class="local" aria-labelledby="local">
    <h2 id="local">${L.localTitle}</h2>
    ${L.localBody.map((p) => `<p>${fill(p, { privacy: `${facts.base}/privacy/` })}</p>`).join('\n    ')}
  </section>

  <section class="also" aria-labelledby="also">
    <h2 id="also">${L.alsoTitle}</h2>
    <dl>
      ${L.also.map(([term, def]) => `<div><dt>${term}</dt><dd>${def}</dd></div>`).join('\n      ')}
    </dl>
  </section>

  <section class="pricing" aria-labelledby="pricing">
    <h2 id="pricing">${L.pricingTitle}</h2>
    <p class="intro">${L.pricingIntro}</p>
    <div class="plans">
      ${plan(L.free)}
      ${plan(L.pro)}
    </div>
  </section>

  ${
    facts.openSource.live
      ? `<section class="open" aria-labelledby="open">
    <h2 id="open">${L.openSourceTitle}</h2>
    <p>${L.openSourceBody} <a href="${facts.openSource.url}">${L.openSourceLink}</a>.</p>
  </section>`
      : ''
  }

  <section class="versus" aria-labelledby="versus">
    <h2 id="versus">${L.compareTitle}</h2>
    <p class="intro">${L.compareIntro}</p>
    <ul>
      ${COMPETITORS.filter((c) => t.compare?.[c])
        .map((c) => `<li><a href="${pagePath(locale, `vs-${c}`)}">${L.compareLinks[c]}</a></li>`)
        .join('\n      ')}
    </ul>
  </section>

  <section class="closing">
    <h2>${L.closingTitle}</h2>
    <p>${L.closingBody}</p>
    <p class="cta"><a class="btn" href="${store}">${L.install}</a></p>
  </section>
</main>
${footer({ locale, t })}
</body>
</html>
`;
}

export function compare({ locale, t, ctx, competitor }) {
  const C = t.compare[competitor];
  const page = `vs-${competitor}`;
  const campaign = `${page}-${locale.code}`;
  const store = esc(storeUrl(locale.hl, campaign));
  const rows = C.rows.filter(Boolean);

  return `${head({ locale, page, title: C.title, description: C.description, ctx })}
<body>
${header({ locale, page, t, campaign })}
<main id="main" class="page-compare">
  <section class="hero hero-compare">
    <h1>${C.h1}</h1>
    <p class="lede">${C.lede}</p>
  </section>

  <section aria-labelledby="table">
    <h2 id="table">${t.compareCommon.tableTitle}</h2>
    <div class="tbl"><table>
      <thead><tr><th scope="col"></th><th scope="col">Monge Docs</th><th scope="col">${C.name}</th></tr></thead>
      <tbody>
        ${rows.map(([label, us, them]) => `<tr><th scope="row">${label}</th><td data-tool="Monge Docs">${us}</td><td data-tool="${C.name}">${them}</td></tr>`).join('\n        ')}
      </tbody>
    </table></div>
    <p class="checked">${C.checked}</p>
  </section>

  <section class="pick" aria-labelledby="pick">
    <h2 id="pick">${t.compareCommon.pickTitle}</h2>
    <div class="picks">
      <div><h3>${C.pickThem.title}</h3><ul>${C.pickThem.items.map((i) => `<li>${i}</li>`).join('')}</ul></div>
      <div><h3>${C.pickUs.title}</h3><ul>${C.pickUs.items.filter(Boolean).map((i) => `<li>${i}</li>`).join('')}</ul></div>
    </div>
  </section>

  <section class="closing">
    <h2>${t.compareCommon.closingTitle}</h2>
    <p>${t.compareCommon.closingBody}</p>
    <p class="cta"><a class="btn" href="${store}">${t.nav.install}</a><a class="quiet" href="${pagePath(locale)}">${t.compareCommon.back}</a></p>
  </section>
</main>
${footer({ locale, t, extra: `<p>${fill(t.compareCommon.marks, { name: C.name })}</p>` })}
</body>
</html>
`;
}
