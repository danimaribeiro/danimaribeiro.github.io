// Renders public/og.png, the 1200x630 link-preview image named by the
// og:image and twitter:image tags in index.html.
// Run it again after changing the name or headline: node scripts/generate-og.mjs
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../public/og.png');

const html = `<!doctype html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&family=Outfit:wght@400;600;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; overflow: hidden;
    background:
      radial-gradient(circle at 12% 18%, rgba(16,185,129,.16) 0%, transparent 42%),
      radial-gradient(circle at 88% 78%, rgba(139,92,246,.18) 0%, transparent 45%),
      #090a0f;
    color: #f0f2f8; font-family: Outfit, sans-serif;
    padding: 84px 96px; display: flex; flex-direction: column; justify-content: center; gap: 30px;
  }
  .grid {
    position: absolute; inset: 0; pointer-events: none;
    background-image: linear-gradient(rgba(148,163,184,.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(148,163,184,.06) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse at 70% 40%, #000 0%, transparent 75%);
  }
  .badge {
    align-self: flex-start; display: inline-flex; align-items: center; gap: 12px;
    padding: 10px 20px; border-radius: 999px;
    background: rgba(16,185,129,.1); border: 1.5px solid rgba(16,185,129,.35);
    color: #34d399; font: 600 22px 'JetBrains Mono', monospace;
  }
  .dot { width: 12px; height: 12px; border-radius: 50%; background: #34d399; box-shadow: 0 0 14px #34d399; }
  h1 {
    font-size: 92px; font-weight: 800; letter-spacing: -2px; line-height: 1;
    background: linear-gradient(90deg, #fff, #f1f5f9 55%, #c7d2fe);
    -webkit-background-clip: text; color: transparent;
  }
  .role { font-size: 36px; font-weight: 600; color: #cbd5e1; line-height: 1.3; max-width: 980px; }
  .foot { display: flex; justify-content: space-between; align-items: center; margin-top: 18px;
          font: 400 24px 'JetBrains Mono', monospace; color: #64748b; }
  .url { color: #34d399; font-weight: 600; }
</style></head>
<body>
  <div class="grid"></div>
  <div class="badge"><span class="dot"></span>Senior / Staff Backend Engineer · 15+ years</div>
  <h1>Danimar Ribeiro</h1>
  <p class="role">Python, cloud architecture and enterprise systems.<br>Building database engines from scratch in Rust and Zig.</p>
  <div class="foot"><span>Florianópolis, Brazil · Remote</span><span class="url">danimar.dev</span></div>
</body></html>`;

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: OUT, type: 'png' });
  console.log(`[OG] Saved ${OUT}`);
} finally {
  await browser.close();
}
