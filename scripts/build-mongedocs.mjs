// Builds the Monge Docs product pages into dist/mongedocs, after `vite build`.
//
//   node scripts/build-mongedocs.mjs [--out <dir>]
//
// Source: mongedocs/ (copy per language, facts, templates, styles, media). The landing
// page and the comparison pages are written once per language:
//
//   /mongedocs/            /mongedocs/vs-scribe/            /mongedocs/vs-tango/
//   /mongedocs/pt-br/      /mongedocs/pt-br/vs-scribe/      ...
//   /mongedocs/es/         ...
//
// public/mongedocs (icon, privacy policy) is copied by Vite and left alone.
//
// Media comes from the capture pipeline in the monge-docs repo (marketing/capture) and
// lives in mongedocs/media/<locale>/. A language without its own media uses the English
// one; a page section whose media is missing is left out, with a warning.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';
import { facts } from '../mongedocs/facts.mjs';
import { LOCALES, COMPETITORS, landing, compare, pagePath } from '../mongedocs/templates.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'mongedocs');
const outArg = process.argv.indexOf('--out');
const OUT_ROOT = outArg > 0 ? path.resolve(process.argv[outArg + 1]) : path.join(ROOT, 'dist');
const OUT = path.join(OUT_ROOT, facts.base);

const warnings = [];
const warn = (msg) => warnings.push(msg);

function copyDir(from, to) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  fs.cpSync(from, to, { recursive: true });
}

/** Width and height of a PNG, from its header. */
function pngSize(file) {
  const b = fs.readFileSync(file);
  if (b.toString('ascii', 1, 4) !== 'PNG') throw new Error(`${file} is not a PNG`);
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}

/** A file's URL with a hash of its content, so a new version is never served stale. */
function versioned(file, url) {
  const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 10);
  return `${url}?v=${hash}`;
}

const asset = (name) => versioned(path.join(SRC, 'assets', name), `${facts.base}/assets/${name}`);

/** The media file `name` for a locale, falling back to English. Null if neither has it. */
function mediaFile(locale, name) {
  for (const code of [locale.code, 'en']) {
    const file = path.join(SRC, 'media', code, name);
    if (fs.existsSync(file)) {
      const src = versioned(file, `${facts.base}/media/${code}/${name}`);
      return { file, src, code, ...(name.endsWith('.png') ? pngSize(file) : {}) };
    }
  }
  return null;
}

/** The demo guide, as the extension's ZIP export wrote it, rendered for the page. */
function loadGuide(locale) {
  const md = mediaFile(locale, 'guide/guide.md');
  if (!md) return null;
  const dir = path.dirname(md.file);
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'meta.json'), 'utf8'));
  // The export starts with a YAML header (title, date) that is not part of the text.
  let text = fs.readFileSync(md.file, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  // The page shows the title itself, above the text.
  text = text.replace(/^\s*#\s+.*\n/, '');

  const marked = new Marked({
    renderer: {
      // The guide sits under the page's own h2 and its title (h3).
      heading({ tokens, depth }) {
        const level = Math.min(depth + 2, 6);
        return `<h${level}>${this.parser.parseInline(tokens)}</h${level}>\n`;
      },
      image({ href, text: alt }) {
        const file = path.join(dir, href);
        if (!fs.existsSync(file)) {
          warn(`guide (${md.code}): image ${href} is missing`);
          return '';
        }
        const { width, height } = pngSize(file);
        const src = versioned(file, `${facts.base}/media/${md.code}/guide/${path.posix.normalize(href)}`);
        return `<img src="${src}" width="${width}" height="${height}" alt="${alt.replace(/"/g, '&quot;')}" loading="lazy">`;
      },
    },
  });
  return {
    html: marked.parse(text),
    title: meta.title,
    lang: meta.language ?? md.code,
    sharedUrl: meta.sharedUrl ?? null,
  };
}

function loadMedia(locale) {
  const media = {
    clip: {
      mp4: mediaFile(locale, 'demo.mp4'),
      webm: mediaFile(locale, 'demo.webm'),
      poster: mediaFile(locale, 'demo-poster.png'),
    },
    record: mediaFile(locale, 'record.png'),
    guideStill: mediaFile(locale, 'guide.png'),
    editor: mediaFile(locale, 'editor.png'),
    guide: loadGuide(locale),
  };
  if (!media.clip.mp4 && !media.clip.webm) warn(`${locale.code}: no demo clip`);
  for (const key of ['record', 'guideStill', 'editor', 'guide']) {
    if (!media[key]) warn(`${locale.code}: no ${key}`);
  }
  return media;
}

function write(urlPath, html) {
  const file = path.join(OUT_ROOT, urlPath, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  return urlPath;
}

fs.mkdirSync(OUT, { recursive: true });
copyDir(path.join(SRC, 'assets'), path.join(OUT, 'assets'));
copyDir(path.join(SRC, 'media'), path.join(OUT, 'media'));

const contents = {};
for (const locale of LOCALES) {
  const { default: content } = await import(`../mongedocs/content/${locale.code}.mjs`);
  contents[locale.code] = content(facts);
  locale.name = contents[locale.code].langName;
}

const og = fs.existsSync(path.join(SRC, 'assets', 'og.png'))
  ? { src: asset('og.png'), ...pngSize(path.join(SRC, 'assets', 'og.png')) }
  : null;
if (!og) warn('no assets/og.png: link previews will have no image');

const written = [];
for (const locale of LOCALES) {
  const t = contents[locale.code];
  const ctx = { asset, media: loadMedia(locale), ogImage: og };
  written.push(write(pagePath(locale), landing({ locale, t, ctx })));
  for (const competitor of COMPETITORS) {
    if (!t.compare?.[competitor]) {
      warn(`${locale.code}: no copy for vs-${competitor}`);
      continue;
    }
    written.push(write(pagePath(locale, `vs-${competitor}`), compare({ locale, t, ctx, competitor })));
  }
}

console.log(`[mongedocs] wrote ${written.length} pages to ${path.relative(ROOT, OUT) || OUT}`);
for (const p of written) console.log(`  ${p}`);
for (const w of warnings) console.warn(`[mongedocs] warning: ${w}`);
