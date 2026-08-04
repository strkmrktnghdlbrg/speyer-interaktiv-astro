// Faehrt JEDE Regel aus scripts/legacy-map.mjs in BEIDEN Schreibweisen gegen
// eine laufende Instanz und vergleicht Status + Ziel.
//
//   node scripts/verify-redirects.mjs http://localhost:8788     (wrangler pages dev dist)
//   node scripts/verify-redirects.mjs https://speyer-interaktiv.de
//
// Fehlschlaege werden bis zu 3x wiederholt: direkt nach einem Deploy liefern
// einzelne Edge-Knoten noch den alten Stand, das sieht aus wie ein Defekt.
import { GROUPS, AFFILIATE } from "./legacy-map.mjs";

const base = (process.argv[2] || "http://localhost:8788").replace(/\/$/, "");
const FILE_EXT = /\.[a-z0-9]{2,5}$/i;
const withSlash = (p) => (FILE_EXT.test(p) || p.endsWith("/") ? p : p + "/");

const cases = [];
for (const group of GROUPS) {
  for (const [src, target] of group.rules) {
    const expected = withSlash(target);
    cases.push({ url: src, expected, group: group.title });
    cases.push({ url: withSlash(src), expected, group: group.title });
  }
}
for (const [src, target] of AFFILIATE) {
  cases.push({ url: src, expected: target, group: "Affiliate", status: 302 });
  cases.push({ url: withSlash(src), expected: target, group: "Affiliate", status: 302 });
}

async function probe(c) {
  let res;
  try {
    res = await fetch(base + c.url, { redirect: "manual" });
  } catch (err) {
    return { ok: false, status: "ERR", loc: String(err.cause?.code || err.message) };
  }
  const loc = res.headers.get("location") || "";
  const locPath = loc.startsWith("http") ? loc : loc;
  const wantStatus = c.status || 301;
  const okStatus = res.status === wantStatus;
  // Pages prozentkodiert Query-Werte im Ziel (adcell param0) - das ist korrekt,
  // deshalb wird das Affiliate-Ziel dekodiert verglichen.
  const okTarget =
    c.status === 302
      ? decodeURIComponent(loc) === decodeURIComponent(c.expected)
      : new URL(loc, base).pathname === c.expected;
  return { ok: okStatus && okTarget, status: res.status, loc: locPath };
}

const failed = [];
let pass = 0;

for (const c of cases) {
  let r;
  for (let attempt = 1; attempt <= 3; attempt++) {
    r = await probe(c);
    if (r.ok) break;
    if (attempt < 3) await new Promise((ok) => setTimeout(ok, 4000 * attempt));
  }
  if (r.ok) pass++;
  else failed.push({ ...c, ...r });
}

console.log(`\nBasis: ${base}`);
console.log(`OK: ${pass}/${cases.length}`);
if (failed.length) {
  console.log(`\nFEHLGESCHLAGEN (${failed.length}):`);
  for (const f of failed) {
    console.log(`  ${f.url}\n    erwartet: 301 -> ${f.expected}\n    bekommen: ${f.status} -> ${f.loc || "(kein Location-Header)"}`);
  }
  process.exit(1);
}
console.log("Alle Alt-URLs leiten in beiden Schreibweisen korrekt weiter.\n");
