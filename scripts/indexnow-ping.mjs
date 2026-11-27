#!/usr/bin/env node
/**
 * Ping IndexNow (Bing, Seznam, Naver, Yandex…) avec les URLs du sitemap.
 *
 * IndexNow fait indexer les nouvelles pages en minutes au lieu de jours.
 * Google ne l'utilise pas (il suit le sitemap), mais Bing s'en sert pour
 * la recherche classique ET pour Copilot / ChatGPT search (index Bing).
 *
 * Usage :
 *   node scripts/indexnow-ping.mjs                 # ping toutes les URLs du sitemap
 *   node scripts/indexnow-ping.mjs <url1> <url2>   # ping des URLs précises
 *
 * À lancer après chaque déploiement qui publie de nouveaux articles
 * (le daily loop peut l'appeler après son git push).
 */

const HOST = "blog.ai-studios.fr";
const KEY = "1c86c50d39183eebffb9f66de99ea7e2"; // doit correspondre à public/<KEY>.txt
const SITEMAP = `https://${HOST}/sitemap.xml`;

async function getSitemapUrls() {
  const res = await fetch(SITEMAP);
  if (!res.ok) throw new Error(`sitemap HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length > 0 ? args : await getSitemapUrls();
  if (urlList.length === 0) {
    console.log("indexnow: aucune URL à soumettre.");
    return;
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
  });

  // 200 = reçu, 202 = reçu (clé en cours de validation)
  if (res.status === 200 || res.status === 202) {
    console.log(`indexnow: ${urlList.length} URLs soumises (HTTP ${res.status}).`);
  } else {
    console.error(`indexnow: échec HTTP ${res.status} ${await res.text()}`);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("indexnow: erreur", err.message);
  process.exitCode = 1;
});
