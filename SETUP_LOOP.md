# SETUP_LOOP.md — faire tourner le loop de croissance

Ce dépôt (**AI Studios Blog**, Next.js 16 / Vercel) est équipé d'un système de
contenu + SEO autonome. Ce fichier explique comment le faire tourner chaque jour
sans ouvrir le laptop, et ce qu'il faut décider/brancher d'abord.

- Site : https://blog.ai-studios.fr · Repo : `Frankhoubre/ai-studios-formation-ia`
- Déploiement : Vercel, auto depuis `main`. CI : GitHub Actions (`lint` + `build`).
- Mémoire du loop : `.loop_memory/` · Playbooks : `.loop_scripts/`

## Ce que fait le loop (objectif quotidien)

1. **2 articles news** IA créative, sourcés (24-72 h).
2. **1 article evergreen** SEO, sans cannibalisation.
3. **1 audit SEO/technique**, correctifs sûrs poussés en prod.
4. Mémoire + journaux mis à jour, rapport quotidien écrit.

Tout est détaillé dans `.loop_scripts/daily_content_loop.md` (orchestrateur).

---

## ✅ Coexistence — RÉSOLU (2026-06-17)

État clarifié et arbitré ("fais ce qui est logique") :

- Les 2 tâches planifiées préexistantes (`daily-ai-news-article`,
  `translate-blog-backlog`) ciblent **`/Users/frankhoubre/frankhoubre.com`**, un
  AUTRE site. Elles ne touchent pas ce repo → aucun conflit. On n'y touche pas.
- L'autopilote évergreen de CE repo (`content/editorial-plan.json`) a **épuisé
  son plan (60/60)**. Il ne produisait plus rien.
- **Décision : un seul système quotidien pour ce site**, la tâche planifiée
  `daily-growth-loop-ai-studios` (tous les jours **08:10** Europe/Paris), qui
  exécute le loop complet (2 news + 1 evergreen + audit SEO) via les playbooks
  `.loop_scripts/`. Auto-publie sur `main` si les gates sont verts.

Gérer/inspecter la tâche : section "Scheduled" de Claude Code, ou
`/Users/frankhoubre/.claude/scheduled-tasks/daily-growth-loop-ai-studios/SKILL.md`.

> Reste à faire pour 100% de fonctionnalité : déposer la clé `GEMINI_API_KEY`
> dans `/Users/frankhoubre/blog-ai-studio/.env` (hero images). Voir
> ERRORS_AND_BLOCKERS.md B-2. Sans elle, le loop tourne quand même mais sans
> visuel hero dédié.

---

## Pré-requis / accès à brancher

| Besoin | Pourquoi | Statut à confirmer |
|--------|----------|--------------------|
| `GEMINI_API_KEY` (env ou `.env` git-ignoré) | hero images via `scripts/generate-hero.py` (Imagen 4) | requis pour le visuel |
| Accès web (WebSearch/WebFetch ou Bright Data ou RSS via curl) | sourcer les news | requis pour les news |
| MCP Ahrefs / Search Console liés à `blog.ai-studios.fr` | audit live, requêtes, positions | optionnel (améliore l'audit) |
| Droit de push sur `main` | déclenche le déploiement Vercel | requis pour publier |

Outils macOS pour le hero : `cwebp` et `sips` dans le PATH (voir l'en-tête de
`scripts/generate-hero.py`).

Ne jamais committer `.env*` (déjà couvert par `.gitignore`). Ne jamais exposer de
token.

---

## Lancer un run à la main (test)

```bash
git pull
git switch -c loop/daily-$(date +%F)

# 1) audit local
node .loop_scripts/audit.mjs

# 2) (agent) suivre .loop_scripts/daily_content_loop.md :
#    news x2 + evergreen x1 + corrections SEO

# 3) gate
npm run lint && npm run build

# 4) publier (voir .loop_scripts/publish_loop.md)
```

Le travail de rédaction/recherche est fait par un agent qui lit les playbooks.
`audit.mjs`, `lint` et `build` sont les garde-fous automatiques.

---

## Automatiser (1 run/jour, sans laptop)

Le déploiement étant sur Vercel + GitHub, le plus robuste est un runner planifié
qui exécute l'agent. Trois options selon ton setup :

### Option 1 — Routine planifiée Claude Code (recommandé si dispo)
Créer une routine cron qui, chaque matin (ex. 07:00 Europe/Paris), exécute le
prompt : « Lis `.loop_scripts/daily_content_loop.md` et exécute le run du jour ».
La routine a accès au repo, au web et aux MCP. Voir le skill `schedule` /
`/schedule` de Claude Code.

### Option 2 — GitHub Actions planifié
Un workflow `schedule:` (cron) qui appelle l'agent (Claude Agent SDK / API) avec
les playbooks, puis commit/push. Stocker `GEMINI_API_KEY` et la clé API en
**secrets GitHub**. Avantage : tourne dans le cloud, pas besoin du laptop.

### Option 3 — Cron local (macOS launchd)
Un `launchd` qui lance le script du run sur la machine. Simple mais dépend que la
machine soit allumée.

> Horaire conseillé : un run **matin** (news + evergreen + audit + publish). Run
> **soir** optionnel : vérifier les pages déployées, lire les analytics si
> branchées, logger. Caler l'horaire pour NE PAS chevaucher l'autopilote (voir
> Coexistence).

---

## En cas de problème

- Build/lint rouge → corriger avant push (gate `.loop_scripts/publish_loop.md`).
- Pas d'accès web → pas de news ce jour, evergreen + audit seulement (logger).
- Conflit git / autre loop actif → STOP, ne pas forcer, logger B-0.
- Tout est tracé dans `.loop_memory/` (PROGRESS, ERRORS_AND_BLOCKERS, DAILY_REPORT).

## Garanties de sécurité du loop

Ne supprime pas de contenu sans raison loggée · ne pousse que si build vert ·
ne commit jamais de secret · s'arrête sur incertitude légale/factuelle ou sujet
sensible · max 10 itérations/jour.
