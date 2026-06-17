#!/usr/bin/env node
/**
 * audit.mjs — audit SEO/contenu local du blog AI Studios.
 * Usage : node .loop_scripts/audit.mjs   (depuis la racine du repo)
 * Exit 0 si aucune erreur bloquante, 1 sinon. Les avertissements n'échouent pas.
 *
 * Vérifie, sans compiler le TS, par lecture des fichiers d'articles :
 *  - slugs/titres en double
 *  - liens internes /blog/<slug> cassés (body)
 *  - relatedSlugs cassés, self-référence, doublons
 *  - champs manquants (title, description, excerpt, imageAlt, keywords, image)
 *  - meta description > 160 caractères
 *  - hero image absente sur le disque
 *  - tirets cadratins/demi-cadratins (—, –) interdits dans le contenu
 *  - catégorie invalide
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const POSTS = join(ROOT, "content/articles/posts");
const VALID_CATS = new Set([
  "ia-image", "ia-video", "prompting",
  "storytelling", "workflow-creatif", "business-creatif",
]);
const DESC_MAX = 160;

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

  // tirets cadratins interdits dans les valeurs de contenu
  if (/[—–]/.test(a.src))
    errors.push(`${a.slug}: tiret cadratin/demi-cadratin interdit (— ou –)`);
}

console.log(`Articles analysés : ${articles.length}`);
console.log(`Erreurs : ${errors.length} | Avertissements : ${warns.length}\n`);
if (warns.length) {
  console.log("— Avertissements —");
  for (const w of warns) console.log("  ⚠ ", w);
  console.log("");
}
if (errors.length) {
  console.log("— Erreurs (bloquantes) —");
  for (const e of errors) console.log("  ✗ ", e);
  process.exit(1);
}
console.log("✅ Aucun problème bloquant.");
