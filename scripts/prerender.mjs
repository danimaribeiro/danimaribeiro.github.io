// Pre-renders the home page into dist/index.html after `vite build`.
//
// The built index.html ships an empty <div id="root"></div>, so readers that do
// not run JavaScript (AI fetchers, link previews, Bing's first pass) saw no text
// or links. This script serves dist/, loads / in Chromium, and writes the
// rendered English page into #root. In the browser React mounts over it as before.
import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX = path.join(DIST_DIR, 'index.html');
const PORT = 4189;
const ROOT_RE = /<div id="root">[\s\S]*?<\/div>(?=\s*<\/body>)/;

if (!fs.existsSync(INDEX)) {
  console.error('[Prerender] dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(INDEX, 'utf8');
if (!ROOT_RE.test(template)) {
  console.error('[Prerender] Could not find <div id="root"> right before </body> in dist/index.html.');
  process.exit(1);
}

const mimeTypes = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
  let filePath = path.join(DIST_DIR, urlPath === '/' ? 'index.html' : urlPath);
  if (!filePath.startsWith(DIST_DIR) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = INDEX;
  }
  // Always render from the empty template, even if this script ran before.
  if (filePath === INDEX) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(template.replace(ROOT_RE, '<div id="root"></div>'));
    return;
  }
  res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

await new Promise((resolve) => server.listen(PORT, resolve));

let exitCode = 0;
const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });
  // Capture #root at React's first render, before any entrance animation runs.
  // Animated elements are then saved in their starting state (e.g. the hero at
  // opacity 0), so when React mounts over the snapshot it starts from the same
  // frame and the animation plays once, without a visible -> hidden -> fade-in blink.
  await page.evaluateOnNewDocument(() => {
    // Keeps Google Analytics off (src/analytics.ts), so a deploy is not a visit.
    window.__prerender = true;
    const observer = new MutationObserver(() => {
      const root = document.getElementById('root');
      if (!root || !root.querySelector('h1')) return;
      const copy = root.cloneNode(true);
      // Decorative layers (physics easter egg, wave and constellation backgrounds)
      // are canvases drawn at runtime; they carry no content.
      copy.querySelectorAll('canvas').forEach((c) => c.remove());
      window.__firstRender = copy.innerHTML;
      observer.disconnect();
    });
    observer.observe(document, { childList: true, subtree: true });
  });
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForFunction(() => typeof window.__firstRender === 'string', { timeout: 10000 });
  const rendered = await page.evaluate(() => window.__firstRender);

  if (!rendered.includes('Danimar Ribeiro') || !rendered.includes('droid.danimar.dev')) {
    throw new Error('Rendered page is missing expected content (name or Droid link).');
  }

  // Without JavaScript nothing animates, so show elements saved in their hidden starting state.
  const noscript = '<noscript><style>#root [style*="opacity"]{opacity:1!important;transform:none!important}</style></noscript>';
  const html = template
    .replace(/<noscript><style>#root[^<]*<\/style><\/noscript>\s*/, '')
    .replace('</head>', `  ${noscript}\n  </head>`)
    .replace(ROOT_RE, `<div id="root">${rendered}</div>`);
  fs.writeFileSync(INDEX, html);
  console.log(`[Prerender] Wrote ${INDEX} (${(rendered.length / 1024).toFixed(1)} KB of rendered markup).`);
} catch (error) {
  console.error('[Prerender] Failed:', error);
  exitCode = 1;
} finally {
  await browser.close();
  server.close();
}
process.exit(exitCode);
