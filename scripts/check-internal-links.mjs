// Prueft jeden internen Link im gebauten dist/ gegen die tatsaechlich
// vorhandenen Seiten und gegen public/_redirects.
//
//   npm run build && node scripts/check-internal-links.mjs
//
// Findet: tote interne Links (Ziel existiert nicht) und Links, die nur ueber
// einen Redirect funktionieren (unnoetiger Hop im eigenen Seitenbaum).
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const htmlFiles = [];
(function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (e === "_astro" || e === "_worker.js") continue;
      walk(p);
    } else if (e.endsWith(".html")) htmlFiles.push(p);
  }
})(dist);

// Regeln aus _redirects, damit ein Link auf eine Alt-URL nicht als tot gilt,
// aber trotzdem als vermeidbarer Hop auffaellt.
const redirectSources = new Set();
for (const line of readFileSync(join(dist, "_redirects"), "utf8").split("\n")) {
  const t = line.trim();
  if (!t || t.startsWith("#")) continue;
  redirectSources.add(t.split(/\s+/)[0]);
}

const exists = (p) => {
  if (p === "/") return existsSync(join(dist, "index.html"));
  const clean = p.replace(/[?#].*$/, "");
  return (
    existsSync(join(dist, clean, "index.html")) ||
    existsSync(join(dist, clean)) ||
    existsSync(join(dist, clean.replace(/\/$/, "") + ".html"))
  );
};

const dead = [];
const viaRedirect = [];

for (const f of htmlFiles) {
  const page = "/" + f.slice(dist.length + 1).replace(/index\.html$/, "").replace(/\\/g, "/");
  const html = readFileSync(f, "utf8");
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (href.startsWith("/_") || href.startsWith("/r/")) continue;
    if (exists(href)) continue;
    if (redirectSources.has(href)) viaRedirect.push({ page, href });
    else dead.push({ page, href });
  }
}

const uniq = (arr) => [...new Map(arr.map((x) => [x.page + x.href, x])).values()];

const d = uniq(dead);
const v = uniq(viaRedirect);
console.log(`Seiten geprueft: ${htmlFiles.length}`);
console.log(`Tote interne Links: ${d.length}`);
for (const x of d.slice(0, 40)) console.log(`  ${x.page} -> ${x.href}`);
console.log(`Links ueber einen Redirect (vermeidbarer Hop): ${v.length}`);
for (const x of v.slice(0, 20)) console.log(`  ${x.page} -> ${x.href}`);
if (d.length) process.exit(1);
