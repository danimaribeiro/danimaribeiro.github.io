import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = 4188;

if (!fs.existsSync(DIST_DIR)) {
  console.error('[PDF Generator] Error: dist/ directory not found. Please run vite build first.');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  let urlPath = req.url === '/' ? 'index.html' : req.url.split('?')[0].split('#')[0];
  let filePath = path.join(DIST_DIR, urlPath);

  if (!fs.existsSync(filePath)) {
    // Fallback to index.html for SPA routing
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath);
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.woff2': 'font/woff2'
  };

  res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, async () => {
  console.log(`[PDF Generator] 🚀 Local static server listening on http://localhost:${PORT}...`);
  
  try {
    console.log('[PDF Generator] Launching Chromium instance with Puppeteer...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
    });

    const languages = ['en', 'pt'];

    for (const lang of languages) {
      const page = await browser.newPage();
      const targetUrl = `http://localhost:${PORT}/#print-${lang}`;
      console.log(`[PDF Generator] 📄 Rendering ${lang.toUpperCase()} resume from: ${targetUrl}`);
      
      // Navigate and wait for content and web fonts to render
      await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 15000 });
      await new Promise(r => setTimeout(r, 800)); // Ensure animations/layout stabilize
      
      const outputPdfPath = path.join(DIST_DIR, `resume-${lang}.pdf`);
      await page.pdf({
        path: outputPdfPath,
        format: 'A4',
        printBackground: true,
        margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' }
      });

      const stats = fs.statSync(outputPdfPath);
      console.log(`[PDF Generator] ✅ Saved ${outputPdfPath} (${(stats.size / 1024).toFixed(2)} KB)`);
      await page.close();
    }

    await browser.close();
    console.log('[PDF Generator] 🌟 All PDF resumes generated successfully!');
  } catch (error) {
    console.error('[PDF Generator] ❌ Fatal error during PDF generation:', error);
    server.close();
    process.exit(1);
  } finally {
    server.close();
    process.exit(0);
  }
});
