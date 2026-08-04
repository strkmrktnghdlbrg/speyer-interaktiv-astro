// Baut public/_redirects aus der Regel-Quelle in scripts/legacy-map.mjs.
//
// Warum ueberhaupt generiert: Cloudflare Pages matcht eine Regel `/alt` NICHT
// gegen die Anfrage `/alt/` (und umgekehrt). WordPress-Altlinks tragen fast
// immer den Schraegstrich, die Regeln standen aber nur ohne - dadurch liefen
// alle Alt-URLs in der real verlinkten Schreibweise ins 404 (live gemessen
// 04.08.2026). Deshalb wird jede Regel in BEIDEN Schreibweisen ausgegeben,
// und das Ziel bekommt direkt den Schraegstrich, damit kein 301->308-Hop
// entsteht.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { GROUPS, AFFILIATE } from "./legacy-map.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, "..", "public", "_redirects");

const FILE_EXT = /\.[a-z0-9]{2,5}$/i;

const withSlash = (p) => (FILE_EXT.test(p) || p.endsWith("/") ? p : p + "/");
const noSlash = (p) => (p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p);

const pad = (s, n) => s + " ".repeat(Math.max(1, n - s.length));

const lines = [
  "# Cloudflare Pages Redirects - GENERIERT, NICHT VON HAND EDITIEREN.",
  "# Quelle: scripts/legacy-map.mjs -> `node scripts/build-redirects.mjs`",
  "# Pruefen: `node scripts/verify-redirects.mjs <basis-url>`",
  "#",
  "# Jede Alt-URL steht bewusst in BEIDEN Schreibweisen (mit und ohne",
  "# Schraegstrich): Pages normalisiert die Anfrage nicht auf die Regel.",
  "# Ziele tragen den Schraegstrich, damit kein zusaetzlicher 308-Hop folgt.",
  "",
];

for (const group of GROUPS) {
  lines.push(`# === ${group.title} ===`);
  for (const [src, target] of group.rules) {
    const t = withSlash(target);
    lines.push(`${pad(noSlash(src), 56)}${pad(t, 56)}301`);
    lines.push(`${pad(withSlash(src), 56)}${pad(t, 56)}301`);
  }
  lines.push("");
}

lines.push("# === AFFILIATE-LINKS (/r/...) - 302, clickref = speyer-interaktiv.de ===");
for (const [src, target] of AFFILIATE) {
  lines.push(`${pad(noSlash(src), 26)}${target} 302`);
  lines.push(`${pad(withSlash(src), 26)}${target} 302`);
}
lines.push("");

writeFileSync(out, lines.join("\n"), "utf8");

const ruleCount = GROUPS.reduce((n, g) => n + g.rules.length, 0);
console.log(
  `public/_redirects geschrieben: ${ruleCount} Alt-Pfade x2 Schreibweisen + ${AFFILIATE.length} Affiliate-Slugs x2 = ${(ruleCount + AFFILIATE.length) * 2} Regeln`,
);
