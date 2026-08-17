#!/usr/bin/env node
/**
 * Generate a blog hero image with Nano Banana 2 (google/gemini-3-pro-image)
 * through the Vercel AI Gateway, then convert it to webp via ffmpeg.
 *
 * Usage:
 *   node scripts/generate-hero-nb2.mjs --prompt "cinematic still ..." --out public/images/articles/<slug>.webp
 *
 * The API key is read from AI_GATEWAY_API_KEY (env) or from .env.local at the
 * repo root (git-ignored). Never commit the key.
 * Requires ffmpeg in PATH. Output: 16:9 webp, max 1600px wide, quality 82.
 */
import { readFileSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const args = process.argv.slice(2);
const getArg = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const prompt = getArg("prompt");
const out = getArg("out");
if (!prompt || !out) {
  console.error("Usage: node scripts/generate-hero-nb2.mjs --prompt \"...\" --out path.webp");
  process.exit(1);
}

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
let apiKey = process.env.AI_GATEWAY_API_KEY;
if (!apiKey) {
  const envPath = join(repoRoot, ".env.local");
  if (existsSync(envPath)) {
    const m = readFileSync(envPath, "utf8").match(/^AI_GATEWAY_API_KEY=(.+)$/m);
    if (m) apiKey = m[1].trim();
  }
}
if (!apiKey) {
  console.error("AI_GATEWAY_API_KEY missing (env or .env.local at repo root).");
  process.exit(1);
}

const res = await fetch("https://ai-gateway.vercel.sh/v1/chat/completions", {
  method: "POST",
  headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "google/gemini-3-pro-image",
    messages: [{ role: "user", content: `Generate a 16:9 landscape image. ${prompt}` }],
    image_config: { aspect_ratio: "16:9" },
  }),
});
if (!res.ok) {
  console.error(`Gateway HTTP ${res.status}: ${(await res.text()).slice(0, 500)}`);
  process.exit(1);
}
const data = await res.json();
const images = data?.choices?.[0]?.message?.images ?? [];
if (!images.length) {
  console.error(`No image in response: ${JSON.stringify(data).slice(0, 500)}`);
  process.exit(1);
}
const url = images[0].image_url?.url ?? images[0].url;
const b64 = url.split(",", 2)[1];
const raw = join(tmpdir(), `nb2-hero-${Date.now()}.img`);
writeFileSync(raw, Buffer.from(b64, "base64"));

execFileSync("ffmpeg", ["-y", "-v", "error", "-i", raw, "-vf", "scale='min(1600,iw)':-2", "-quality", "82", out]);
unlinkSync(raw);

const size = Math.round(readFileSync(out).length / 1024);
const cost = data?.usage?.cost_details?.upstream_inference_cost ?? data?.usage?.market_cost;
console.log(`OK ${out} (${size} KB, cost $${cost ?? "?"})`);
