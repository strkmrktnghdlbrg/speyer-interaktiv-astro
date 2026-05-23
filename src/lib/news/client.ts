/**
 * Anthropic-API-Client für News-Rewrites.
 * ----------------------------------------
 * Nutzt Tool-Use (structured output) statt freiem Text, damit der Cron-
 * Worker deterministisch in D1 schreiben kann.
 *
 * Fetch-basiert (kein @anthropic-ai/sdk Dep nötig, läuft im Worker).
 */

import { REWRITE_TOOL, SYSTEM_PROMPT, buildUserPrompt } from "./prompt";
import type { ClaudeRewriteOutput, RawArticle } from "./types";

const MODEL = "claude-sonnet-4-6";    // pro Projekt umstellbar
const MAX_TOKENS = 1500;
const API_URL = "https://api.anthropic.com/v1/messages";

export type ClaudeApiError =
  | { kind: "rate_limit"; retryAfterSec?: number }
  | { kind: "invalid_request"; message: string }
  | { kind: "auth"; message: string }
  | { kind: "network"; message: string }
  | { kind: "no_tool_use"; message: string };

export async function rewriteArticle(
  apiKey: string,
  article: RawArticle
): Promise<{ ok: true; output: ClaudeRewriteOutput } | { ok: false; error: ClaudeApiError }> {
  let res: Response;
  try {
    res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: SYSTEM_PROMPT,
        tools: [REWRITE_TOOL],
        tool_choice: { type: "tool", name: REWRITE_TOOL.name },
        messages: [
          { role: "user", content: buildUserPrompt(article) },
        ],
      }),
    });
  } catch (e) {
    return { ok: false, error: { kind: "network", message: String(e) } };
  }

  if (res.status === 429) {
    const retryAfter = res.headers.get("retry-after");
    return {
      ok: false,
      error: { kind: "rate_limit", retryAfterSec: retryAfter ? parseInt(retryAfter, 10) : undefined },
    };
  }
  if (res.status === 401 || res.status === 403) {
    return { ok: false, error: { kind: "auth", message: await res.text() } };
  }
  if (!res.ok) {
    return { ok: false, error: { kind: "invalid_request", message: await res.text() } };
  }

  const data = (await res.json()) as {
    content: Array<{ type: string; name?: string; input?: ClaudeRewriteOutput }>;
  };
  const toolUse = data.content.find(
    (c) => c.type === "tool_use" && c.name === REWRITE_TOOL.name
  );
  if (!toolUse || !toolUse.input) {
    return {
      ok: false,
      error: { kind: "no_tool_use", message: "Claude returned no tool_use block" },
    };
  }
  return { ok: true, output: toolUse.input };
}

export const REWRITE_MODEL_NAME = MODEL;
