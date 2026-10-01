// Copies the public site into dist/ for `wrangler pages deploy dist`.
// Only what's listed here ships; tools/, README, share.html and .git stay local.
import { cpSync, rmSync, mkdirSync } from 'node:fs';

const files = ['index.html', '404.html', '_redirects', 'favicon.svg', 'apple-touch-icon.png', 'robots.txt', 'sitemap.xml', '_headers'];
const dirs = ['img', 'fonts'];

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
for (const f of files) cpSync(f, `dist/${f}`);
for (const d of dirs) cpSync(d, `dist/${d}`, { recursive: true, filter: src => !/[\/]_[^\/]*$/.test(src) });
console.log('dist/ ready');
