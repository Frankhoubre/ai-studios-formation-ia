# DAILY_REPORT.md

Rapport du dernier run. Réécrit à chaque run (historique long → PROGRESS.md).

---

## 2026-06-22 — Run #5

**Date** : 2026-06-22 (Europe/Paris) · **Branche** : loop/daily-2026-06-22 → main

### Contexte
Dernier run réel = 20/06. Rien le 21. Au démarrage, 2 articles étaient déjà
datés du 22 (`veo-3-generer-videos-ia`, `sora-openai-creer-videos`), mais ce sont
des evergreen future-datés tombant ce jour, pas la production du loop. Working
tree non propre : 24 fichiers modifiés non commités (injections de liens d'un run
précédent, risque 404 live, voir plus bas) → laissés en l'état.

### Articles créés (2, datés 2026-06-22)
1. **News — `kling-3-turbo-omni-juin-2026`** (IA vidéo)
   « Kling 3.0 Turbo et Omni : la maj vidéo de juin ». Annonce du 17/06/2026 :
   mode Turbo pour itérer vite, édition Omni en 4K / 3-15 s. Angle : la vitesse
   d'itération change le workflow. + vraie capture de klingai.com.
2. **Evergreen — `combien-coute-ia-creative-mois`** (Business créatif)
   « Combien coûte l'IA créative par mois (le vrai budget) ». Méthode de budget
   (image/vidéo/audio, abonnement vs usage), fourchettes en ordres de grandeur,
   4 erreurs qui font gonfler la facture. Gabarit complet + FAQ 6 Q/R.

### Pourquoi 1 seule news (et pas 2)
Recherche web large (Kling, Runway, Sora, Veo, Midjourney, Flux, Seedance, Luma,
Pika, ElevenLabs, Suno, Higgsfield, Krea, Ideogram). Seul sujet frais (≤7 j),
on-thème, multi-sourcé ET non sensible : Kling 3.0 Turbo/Omni. Les autres étaient
soit anciens (Veo 10/25, Runway Gen-4.5 12/25, FLUX.2 11/25, MJ V8.1 04/26), soit
déjà couverts (ElevenLabs Music v2, Firefly Android, Luma Ray 3.2, Higgsfield),
soit sensibles. Règle "qualité > quantité" appliquée : 1 news solide plutôt que 2.

### Écarté volontairement
**Seedance 2.0 Mini** (ByteDance, 15/06) : litige actif Disney/Paramount + lettre
de sénateurs US (16/03) demandant l'arrêt du modèle → sujet sensible, non publié
(voir ERRORS_AND_BLOCKERS B-4).

### Sources
- Kling : klingai.com (site officiel), atlascloud.ai (guide), communiqué relayé
  barchart/openpr (17/06/2026). Divergences mineures sur résolution/prix de Turbo
  signalées honnêtement dans l'article (pas de chiffre contesté présenté en fait).
- Budget : angle méthode, fourchettes en ordres de grandeur, autorité tarifs =
  runwayml.com/pricing.

### Images
- 2 heros Imagen 4 Fast (1K). 1 capture réelle klingai.com (home série 3.0, propre).

### Build / lint / audit
- `audit.mjs` ✅ 0 erreur (107 articles) · `lint` ✅ · `build` ✅.
- Descriptions : 148 / 148 car. Aucun tiret cadratin. Liens internes → slugs LIVE
  uniquement (les cibles business future-datées ont été évitées).
- 2 avertissements préexistants (descriptions >160) sur des articles hors run,
  laissés en l'état.

### À noter / problème
- **24 modifs non commitées** (injections de liens internes d'un run précédent)
  pointent depuis des articles LIVE vers des articles encore future-datés → 404
  live si commitées telles quelles. Stashées pendant le push, restaurées ensuite.
  À traiter par un humain / run dédié (voir ERRORS_AND_BLOCKERS B-5).

### Statut déploiement
- Poussé sur `main`, Vercel redéploie. (Vérif CI + 200 en fin de run.)

### Prochaines actions
- Prochain evergreen : checklist livrable client propre, ou glossaire (hub).
- Régler le lot des 24 injections de liens (committer seulement cibles live).
- Fiabiliser le run auto du matin (app ouverte / outils pré-approuvés).
