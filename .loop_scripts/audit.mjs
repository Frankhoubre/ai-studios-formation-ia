#!/usr/bin/env node
/**
 * audit.mjs : audit SEO/contenu local du blog AI Studios.
 * Usage : node .loop_scripts/audit.mjs   (depuis la racine du repo)
 * Exit 0 si aucune erreur bloquante, 1 sinon. Les avertissements n'échouent pas.
 *
 * Vérifie, par lecture des fichiers d'articles :
 *  - slugs/titres en double
 *  - liens internes /blog/<slug> cassés (body)
 *  - relatedSlugs cassés, self-référence, doublons
 *  - champs manquants (title, description, excerpt, imageAlt, keywords, image)
 *  - meta description > 160 caractères, titre > 60 caractères (affiché sans la marque)
 *  - hero image absente sur le disque
 *  - tirets cadratins/demi-cadratins (—, –) interdits dans le contenu
 *  - catégorie invalide
 * Puis, en important chaque module (Node 22.18+ lit le TypeScript nativement) :
 *  - blocs premium (verdict, comparison, screenshot, gallery, methodology, cta) :
 *    champs obligatoires, alt non vide, capturedAt présent, dimensions réelles,
 *    aucune note chiffrée
 *  - liens affiliés sans `affiliate: true`, schéma `howTo` incomplet
 * Spécification des blocs : seo-multisites/COMPOSANTS-aistudios.md
 */
import { readFileSync, existsSync, readdirSync, openSync, readSync, closeSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const POSTS = join(ROOT, "content/articles/posts");
const VALID_CATS = new Set([
  "ia-image", "ia-video", "prompting",
  "storytelling", "workflow-creatif", "business-creatif",
]);
const DESC_MAX = 160;
const TITLE_MAX = 60;

const files = readdirSync(POSTS).filter((f) => f.endsWith(".ts"));
const articles = [];
for (const f of files) {
  const s = readFileSync(join(POSTS, f), "utf8");
  const grab = (k) => {
    const m = s.match(new RegExp(`\\b${k}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
    return m ? m[1] : "";
  };
  const arr = (k) => {
    const m = s.match(new RegExp(`${k}:\\s*\\[(.*?)\\]`, "s"));
    return m ? [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
  };
  articles.push({
    file: f,
    src: s,
    slug: grab("slug"),
    title: grab("title"),
    description: grab("description"),
    excerpt: grab("excerpt"),
    imageAlt: grab("imageAlt"),
    image: grab("image"),
    category: grab("category"),
    keywords: arr("keywords"),
    related: arr("relatedSlugs"),
  });
}

const slugs = new Set(articles.map((a) => a.slug));
// Les 30 articles débutant vivent dans beginner-articles.json (voir articles.ts) :
// leurs slugs sont des cibles valides pour les liens internes et relatedSlugs.
try {
  const beginner = JSON.parse(
    readFileSync(join(ROOT, "content/articles/beginner-articles.json"), "utf8"),
  );
  for (const b of Array.isArray(beginner) ? beginner : beginner.articles ?? []) {
    if (b?.slug) slugs.add(b.slug);
  }
} catch {}
const errors = [];
const warns = [];

// doublons
const seenSlug = new Map(), seenTitle = new Map();
for (const a of articles) {
  if (seenSlug.has(a.slug)) errors.push(`slug en double: ${a.slug}`);
  seenSlug.set(a.slug, 1);
  if (seenTitle.has(a.title)) errors.push(`titre en double: ${a.title}`);
  seenTitle.set(a.title, 1);
}

for (const a of articles) {
  // champs requis
  for (const k of ["title", "description", "excerpt", "imageAlt", "image", "category"]) {
    if (!a[k]) errors.push(`${a.slug || a.file}: champ manquant "${k}"`);
  }
  if (!a.keywords.length) errors.push(`${a.slug}: keywords vide`);
  if (a.related.length < 2) warns.push(`${a.slug}: < 2 relatedSlugs`);

  // catégorie
  if (a.category && !VALID_CATS.has(a.category))
    errors.push(`${a.slug}: catégorie invalide "${a.category}"`);

  // description longueur
  if (a.description.length > DESC_MAX)
    warns.push(`${a.slug}: description ${a.description.length} > ${DESC_MAX}`);

  // titre : affiché entier (jamais tronqué), mais au-delà de 60 Google le coupe
  if (a.title.length > TITLE_MAX)
    warns.push(`${a.slug}: titre ${a.title.length} > ${TITLE_MAX} caractères`);

  // hero image
  if (a.image && !existsSync(join(ROOT, "public", a.image)))
    errors.push(`${a.slug}: hero image absente ${a.image}`);

  // relatedSlugs
  const seen = new Set();
  for (const r of a.related) {
    if (r === a.slug) errors.push(`${a.slug}: relatedSlug self-référence`);
    if (seen.has(r)) errors.push(`${a.slug}: relatedSlug en double ${r}`);
    seen.add(r);
    if (!slugs.has(r)) errors.push(`${a.slug}: relatedSlug cassé -> ${r}`);
  }

  // liens internes body
  for (const m of a.src.matchAll(/\]\(\/blog\/([a-z0-9\-]+)\)/g)) {
    if (!slugs.has(m[1])) errors.push(`${a.slug}: lien interne cassé -> /blog/${m[1]}`);
  }

  // images inline (captures d'écran, blocs { type: "image", src: "/images/..." })
  for (const m of a.src.matchAll(/\bsrc:\s*"(\/images\/[^"]+)"/g)) {
    if (!existsSync(join(ROOT, "public", m[1])))
      errors.push(`${a.slug}: image inline absente ${m[1]}`);
  }

  // tirets cadratins interdits dans les valeurs de contenu
  if (/[—–]/.test(a.src))
    errors.push(`${a.slug}: tiret cadratin/demi-cadratin interdit (— ou –)`);
}

// ---------------------------------------------------------------------------
// Blocs premium : validation sur l'objet réel, importé depuis le module TS.
// ---------------------------------------------------------------------------

// Même règle que lib/links.ts (à garder synchronisée).
const AFFILIATE_HOSTS = [
  "goto.higgsfield.ai", "dub.florafauna.ai", "try.elevenlabs.io", "f.mtr.cool", "go.getproton.me",
];
const AFFILIATE_PARAMS = ["fpr", "via", "rfsn", "aff_id"];
function isAffiliateUrl(href) {
  let url;
  try { url = new URL(href); } catch { return false; }
  const host = url.hostname.toLowerCase().replace(/^www\./, "");
  if (AFFILIATE_HOSTS.some((h) => host === h || host.endsWith(`.${h}`))) return true;
  if (host === "wisprflow.ai" && url.pathname === "/r") return true;
  if (url.searchParams.get("sid") === "rewardful") return true;
  return AFFILIATE_PARAMS.some((p) => url.searchParams.has(p));
}

// Mêmes listes que components/article/ArticleCta.tsx.
const CTA_DESTINATIONS = {
  screenweaver: ["home", "fr", "tuto", "script", "tarifs", "mcp", "academy", "seedance", "tools", "blog"],
  imaginode: ["home", "mobile", "meme", "previz", "mcp", "models", "pricing", "signup", "docs", "tools", "blog"],
  formation: [],
};

const RATING_KEYS = /^(note|notes|rating|ratings|score|scores|stars|etoiles|étoiles|aggregaterating|reviewrating)$/i;
const RATING_TEXT = /(\b\d+(?:[.,]\d+)?\s*\/\s*(?:5|10|20|100)\b|★|⭐|\b\d+(?:[.,]\d+)?\s*étoiles?\b)/i;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const TODAY = new Intl.DateTimeFormat("fr-CA", { timeZone: "Europe/Paris" }).format(new Date());

const str = (v) => typeof v === "string" && v.trim().length > 0;
const isHttp = (v) => str(v) && /^https?:\/\/[^\s]+$/.test(v);

function checkDate(where, label, value) {
  if (!str(value)) return errors.push(`${where}: ${label} manquant`);
  if (!ISO_DATE.test(value)) return errors.push(`${where}: ${label} "${value}" doit être au format AAAA-MM-JJ`);
  if (value > TODAY) errors.push(`${where}: ${label} ${value} est dans le futur`);
}

function readImageSize(src) {
  try {
    const fd = openSync(join(ROOT, "public", src), "r");
    const b = Buffer.alloc(65536);
    const n = readSync(fd, b, 0, b.length, 0);
    closeSync(fd);
    const h = b.subarray(0, n);
    if (h.readUInt32BE(0) === 0x89504e47) return [h.readUInt32BE(16), h.readUInt32BE(20)];
    if (h.toString("ascii", 0, 4) === "RIFF" && h.toString("ascii", 8, 12) === "WEBP") {
      const c = h.toString("ascii", 12, 16);
      if (c === "VP8X") return [1 + h.readUIntLE(24, 3), 1 + h.readUIntLE(27, 3)];
      if (c === "VP8 ") return [h.readUInt16LE(26) & 0x3fff, h.readUInt16LE(28) & 0x3fff];
      if (c === "VP8L") { const v = h.readUInt32LE(21); return [(v & 0x3fff) + 1, ((v >> 14) & 0x3fff) + 1]; }
    }
    if (h[0] === 0xff && h[1] === 0xd8) {
      let i = 2;
      while (i + 9 < h.length) {
        if (h[i] !== 0xff) { i++; continue; }
        const m = h[i + 1];
        if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [h.readUInt16BE(i + 7), h.readUInt16BE(i + 5)];
        i += 2 + h.readUInt16BE(i + 2);
      }
    }
  } catch {}
  return null;
}

function checkNoRating(where, obj) {
  for (const [k, v] of Object.entries(obj)) {
    if (RATING_KEYS.test(k)) errors.push(`${where}: champ "${k}" interdit (aucune note chiffrée)`);
    const texts = typeof v === "string" ? [v] : Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
    for (const t of texts) {
      if (RATING_TEXT.test(t)) errors.push(`${where}: note chiffrée ou étoiles interdites dans "${k}" (${t.match(RATING_TEXT)[0]})`);
    }
  }
}

function checkScreenshot(where, s) {
  if (!s || typeof s !== "object") return errors.push(`${where}: capture invalide`);
  for (const k of ["src", "alt", "caption", "source", "capturedAt"]) {
    if (!str(s[k])) errors.push(`${where}: champ "${k}" manquant ou vide`);
  }
  if (str(s.alt) && s.alt.trim().length < 20) warns.push(`${where}: alt très court, décris ce qu'on voit sur la capture`);
  if (str(s.source) && !isHttp(s.source)) errors.push(`${where}: source doit être l'URL http(s) de la page capturée`);
  if (str(s.capturedAt)) checkDate(where, "capturedAt", s.capturedAt);
  if (!(Number.isInteger(s.width) && s.width > 0 && Number.isInteger(s.height) && s.height > 0)) {
    errors.push(`${where}: width et height (entiers, pixels du fichier) obligatoires`);
  } else if (str(s.src) && s.src.startsWith("/")) {
    const real = readImageSize(s.src);
    if (real && Math.abs(real[0] / real[1] - s.width / s.height) > 0.02 * (real[0] / real[1]))
      errors.push(`${where}: ratio déclaré ${s.width}x${s.height} différent du fichier ${real[0]}x${real[1]}`);
  }
  if (str(s.src) && s.src.startsWith("/") && !existsSync(join(ROOT, "public", s.src)))
    errors.push(`${where}: fichier absent ${s.src}`);
}

function collectLinks(value, out) {
  if (typeof value === "string") {
    for (const m of value.matchAll(/\]\(([^)\s]+)\)/g)) out.push(m[1]);
  } else if (Array.isArray(value)) {
    for (const v of value) collectLinks(v, out);
  } else if (value && typeof value === "object") {
    for (const v of Object.values(value)) collectLinks(v, out);
  }
  return out;
}

const nodeMajor = Number(process.versions.node.split(".")[0]);
const nodeMinor = Number(process.versions.node.split(".")[1]);
const canImportTs = nodeMajor > 23 || (nodeMajor === 23 && nodeMinor >= 6) || (nodeMajor === 22 && nodeMinor >= 18);

let blocksChecked = 0;
if (!canImportTs) {
  warns.push(`Node ${process.versions.node} : validation des blocs premium ignorée (Node 22.18+ requis)`);
} else {
  // Silence the "module type not specified" warning printed for each .ts file.
  process.removeAllListeners("warning");
  for (const a of articles) {
    let article;
    try {
      const mod = await import(pathToFileURL(join(POSTS, a.file)).href);
      article = Object.values(mod).find((v) => v && typeof v === "object" && Array.isArray(v.content));
    } catch (e) {
      errors.push(`${a.slug || a.file}: module illisible (${String(e.message).split("\n")[0]})`);
      continue;
    }
    if (!article) {
      errors.push(`${a.slug || a.file}: aucun export Article trouvé`);
      continue;
    }
    const slug = article.slug || a.file;
    const ids = new Set(article.content.filter((b) => b.id).map((b) => b.id));
    let hasAffiliateLink = false;

    article.content.forEach((b, i) => {
      const where = `${slug} bloc #${i} (${b?.type})`;
      if (!b || typeof b !== "object" || !str(b.type)) return errors.push(`${slug} bloc #${i}: type manquant`);
      switch (b.type) {
        case "image":
          blocksChecked++;
          if (!str(b.alt)) errors.push(`${where}: alt vide`);
          break;
        case "screenshot":
          blocksChecked++;
          checkScreenshot(where, b);
          break;
        case "gallery":
          blocksChecked++;
          if (!Array.isArray(b.items) || b.items.length < 2 || b.items.length > 6)
            errors.push(`${where}: une galerie contient 2 à 6 captures`);
          (b.items ?? []).forEach((s, j) => checkScreenshot(`${where} capture ${j + 1}`, s));
          break;
        case "verdict":
          blocksChecked++;
          if (!str(b.pourQui)) errors.push(`${where}: pourQui manquant`);
          if (!str(b.verdict)) errors.push(`${where}: verdict manquant`);
          if (!Array.isArray(b.forts) || !b.forts.filter(str).length) errors.push(`${where}: au moins 1 point fort`);
          if (!Array.isArray(b.faibles) || !b.faibles.filter(str).length) errors.push(`${where}: au moins 1 point faible (verdict nuancé)`);
          if (b.lien && (!str(b.lien.label) || !str(b.lien.href))) errors.push(`${where}: lien sans label ou href`);
          if (b.lien?.sponsored || (b.lien && isAffiliateUrl(b.lien.href))) hasAffiliateLink = true;
          checkNoRating(where, b);
          break;
        case "comparison":
        case "table": {
          blocksChecked++;
          const isCmp = b.type === "comparison";
          if (isCmp && !str(b.caption)) errors.push(`${where}: caption manquante`);
          if (!Array.isArray(b.headers) || b.headers.length < 2) errors.push(`${where}: au moins 2 colonnes`);
          if (!Array.isArray(b.rows) || !b.rows.length) errors.push(`${where}: aucune ligne`);
          (b.rows ?? []).forEach((r, j) => {
            if (Array.isArray(b.headers) && r.length !== b.headers.length)
              (isCmp ? errors : warns).push(`${where}: ligne ${j + 1} a ${r.length} cellules pour ${b.headers.length} colonnes`);
          });
          if (isCmp || b.source || b.verifieLe) {
            const sources = b.source ? (Array.isArray(b.source) ? b.source : [b.source]) : [];
            if (isCmp && !sources.length) errors.push(`${where}: source manquante`);
            sources.forEach((s) => {
              if (!str(s?.label) || !isHttp(s?.href)) errors.push(`${where}: source { label, href http(s) } invalide`);
            });
            if (isCmp || b.verifieLe) checkDate(where, "verifieLe", b.verifieLe);
          }
          if (isCmp) checkNoRating(where, { headers: b.headers, cells: (b.rows ?? []).flat() });
          break;
        }
        case "methodology":
          blocksChecked++;
          checkDate(where, "date", b.date);
          if (!Array.isArray(b.text) || !b.text.filter(str).length) errors.push(`${where}: text[] vide`);
          (b.sources ?? []).forEach((s) => {
            if (!str(s?.label) || !str(s?.href)) errors.push(`${where}: source { label, href } invalide`);
          });
          break;
        case "cta":
          blocksChecked++;
          if (!(b.variant in CTA_DESTINATIONS)) {
            errors.push(`${where}: variant "${b.variant}" invalide (screenweaver | imaginode | formation)`);
          } else if (b.destination && b.variant !== "formation" && !CTA_DESTINATIONS[b.variant].includes(b.destination)) {
            errors.push(`${where}: destination "${b.destination}" inconnue pour ${b.variant} (${CTA_DESTINATIONS[b.variant].join(", ")})`);
          }
          break;
        default:
          if (!["h2", "h3", "p", "ul", "ol", "youtube", "quote"].includes(b.type))
            errors.push(`${where}: type de bloc inconnu`);
      }
    });

    const links = collectLinks(article.content, []);
    if (links.some((h) => h.startsWith("sponsored:") || isAffiliateUrl(h))) hasAffiliateLink = true;
    if (hasAffiliateLink && article.affiliate !== true)
      errors.push(`${slug}: lien affilié présent sans "affiliate: true" (mention obligatoire)`);
    if (article.affiliate === true && !hasAffiliateLink)
      warns.push(`${slug}: "affiliate: true" sans aucun lien affilié`);
    for (const h of links) {
      if (h.startsWith("sponsored:") && !/^sponsored:https?:\/\//.test(h))
        errors.push(`${slug}: lien "${h}" : sponsored: doit précéder une URL http(s)`);
    }

    if (article.howTo) {
      const ht = article.howTo;
      if (!str(ht.name)) errors.push(`${slug}: howTo.name manquant`);
      if (!Array.isArray(ht.steps) || ht.steps.length < 2) errors.push(`${slug}: howTo.steps doit contenir au moins 2 étapes`);
      (ht.steps ?? []).forEach((s, j) => {
        if (!str(s?.name) || !str(s?.text)) errors.push(`${slug}: howTo étape ${j + 1} sans name ou text`);
        if (s?.anchor && !ids.has(s.anchor)) errors.push(`${slug}: howTo étape ${j + 1} ancre #${s.anchor} absente du contenu`);
      });
      if (ht.totalTime && !/^P(T?\d+[HMSD])+/.test(ht.totalTime)) errors.push(`${slug}: howTo.totalTime doit être une durée ISO 8601 (ex. PT30M)`);
    }
    checkNoRating(`${slug} (article)`, Object.fromEntries(Object.entries(article).filter(([k]) => RATING_KEYS.test(k))));
  }
}

console.log(`Articles analysés : ${articles.length} (blocs média/premium vérifiés : ${blocksChecked})`);
console.log(`Erreurs : ${errors.length} | Avertissements : ${warns.length}\n`);
if (warns.length) {
  console.log("Avertissements");
  for (const w of warns) console.log("  ⚠ ", w);
  console.log("");
}
if (errors.length) {
  console.log("Erreurs (bloquantes)");
  for (const e of errors) console.log("  ✗ ", e);
  process.exit(1);
}
console.log("✅ Aucun problème bloquant.");
