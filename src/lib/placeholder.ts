/**
 * Inhaltstypen für den designten Bild-Placeholder (HueGradient).
 * In eigener .ts-Datei, weil Named-Type-Exports aus .astro-Frontmatter
 * vom Compiler nicht zuverlässig aufgelöst werden.
 */
export type PlaceholderKind =
  | "sight"
  | "restaurant"
  | "hotel"
  | "district"
  | "fest"
  | "article"
  | "generic";
