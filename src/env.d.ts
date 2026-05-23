/// <reference path="../.astro/types.d.ts" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

// Cloudflare-Bindings, gespiegelt aus wrangler.toml
interface Env {
  DB: D1Database;
  ANTHROPIC_API_KEY?: string;
}
