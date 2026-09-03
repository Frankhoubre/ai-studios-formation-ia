# PUBLISH_LOG.md

Journal des publications et des push. Une ligne par commit/déploiement réel.
Ne JAMAIS écrire "publié" si le push/déploiement n'a pas réussi.

Format : `DATE | TYPE | branche → main | commit | articles | déploiement`

---

## 2026-09-03

- `2026-09-03 | RUN 30J J18 | main direct | 3ec67b2 | 1 article | 1 evergreen (use case métier) | poussé sur main`
  - Article : `photo-culinaire-ia-restaurant`, hero Nano Banana 2 (113 Ko).
  - 2 captures d'écran réelles dans le corps : page « Conseils pour publier des contenus multimédias
    sur Maps » du centre d'aide Google (accordéons Contenu et formats + Ajustements stylistiques
    dépliés via le fragment `#zippy=`, 151 Ko) et page « Store submitted menu photo guidelines » du
    centre d'aide Uber commerçants (90 Ko), capturées le 2026-09-03.
  - `scripts/capture-screenshot.py` toujours inutilisable sur cette machine (playwright absent) :
    Chrome headless + Pillow comme en J17, script jetable dans le scratchpad. À noter, Chrome refuse
    d'écrire le PNG dans le dossier scratchpad de la session (« Accès refusé »), il faut passer par un
    dossier temporaire simple et `--no-sandbox --user-data-dir`.
  - Gates : audit.mjs OK (135 articles, 0 erreur, 0 avertissement), lint OK, build OK, check-registry.py OK
    (rouge avant `git add`, comme prévu).
  - IndexNow : 173 URLs soumises (HTTP 200).

## 2026-09-02

- `2026-09-02 | RUN 30J J17 | main direct | a2c8af7 | 1 article | 1 evergreen (tutoriel) | poussé sur main`
  - Article : `decouper-video-longue-shorts-ia`, hero Nano Banana 2 (103 Ko).
  - Premier article du run avec 2 captures d'écran réelles dans le corps : section « Contenu revendiqué
    par un tiers dans un Short de plus d'une minute » du centre d'aide YouTube, et page « How Do Credits
    Work? » du centre d'aide Opus Clip (88 Ko et 63 Ko, capturées le 2026-09-02).
  - `scripts/capture-screenshot.py` inutilisable sur cette machine (playwright, sips et cwebp absents) :
    captures faites avec Chrome headless (`--headless=new --screenshot`) + Pillow pour le recadrage et
    le WebP, script jetable dans le scratchpad, rien ajouté au repo.
  - Gates : audit.mjs OK (134 articles, 0 erreur, 0 avertissement), lint OK, build OK, check-registry.py OK
    (rouge au premier passage comme d'habitude : fichiers pas encore stagés, vert après git add).
  - IndexNow : 172 URLs soumises (HTTP 200).

## 2026-09-01

- `2026-09-01 | RUN 30J J16 | main direct | 934f594 | 1 article | 1 evergreen (guide) | poussé sur main`
  - Article : `voix-off-ia-guide`, hero Nano Banana 2 (95 Ko).
  - Run du 31/08 manqué (aucune ligne au journal), reprise directe sur J16 sans rattrapage.
  - Gates : audit.mjs OK (133 articles, 0 erreur, 0 avertissement), lint OK, build OK, check-registry.py OK
    (rouge au premier passage comme d'habitude : fichiers pas encore stagés, vert après git add).
  - IndexNow : 171 URLs soumises (HTTP 200).

## 2026-08-30

- `2026-08-30 | RUN 30J J15 | main direct | f3df06c | 1 article | 1 evergreen (guide) | poussé sur main`
  - Article : `influenceur-virtuel-ia`, hero Nano Banana 2 (63 Ko).
  - Gates : audit.mjs OK (132 articles, 0 erreur, 0 avertissement), lint OK, build OK, check-registry.py OK
    (rouge au premier passage : fichiers pas encore stagés, corrigé par git add puis revert au vert).
  - IndexNow : 170 URLs soumises (HTTP 200).

## 2026-08-29

- `2026-08-29 | RUN 30J J14 | main direct | d713111 | 1 article | 1 evergreen (tutoriel) | poussé sur main`
  - Article : `script-video-chatgpt`, hero Nano Banana 2 (92 Ko).
  - Gates : audit.mjs OK (131 articles, 0 erreur, 0 avertissement), lint OK, build OK, check-registry.py OK.
  - IndexNow : 169 URLs soumises (HTTP 200).

## 2026-08-28

- `2026-08-28 | RUN 30J J13 | main direct | a87c97b | 1 article | 1 evergreen (prompt pack) | poussé sur main`
  - Article : `prompts-kling-exemples`, hero Nano Banana 2 (63 Ko).
  - Gates : audit.mjs OK (130 articles, 0 erreur, 0 avertissement), lint OK, build OK, check-registry.py OK.
  - IndexNow : 168 URLs soumises (HTTP 200).

## 2026-08-27

- `2026-08-27 | RUN 30J J12 | main direct | 80cc672 | 1 article | 1 evergreen (comparatif) | poussé sur main`
  - Article : `kling-vs-runway-comparatif`, hero Nano Banana 2 (131 Ko).
  - Gates : audit.mjs OK (129 articles, 0 erreur, 0 avertissement), lint OK, build OK, check-registry.py OK.
  - IndexNow : 167 URLs soumises (HTTP 200).

## 2026-08-26

- `2026-08-26 | RUN 30J J11 | main direct | 05e329b | 1 article | 1 evergreen (business) | poussé sur main`
- **Article** : Vendre des vidéos IA : offres, prix et débouchés
  - Slug : `vendre-videos-ia` · Catégorie : Business créatif · KW : vendre des vidéos ia
  - Anti-cannibalisation J11 respectée : `agence-video-ia-lancer` (J2) garde la
    structure et le passage à l'agence, `fixer-prix-creation-ia-grille` garde la
    méthode de tarification (elle ne contient aucun montant), `gagner-argent-ia-creative-modeles`
    garde le panorama tous métiers. Cet article est 100 % vidéo et apporte ce que
    les trois autres n'ont pas : un catalogue de six livrables formulés côté client,
    des montants en euros, et la question des canaux de vente.
  - **Angle différenciant** : l'écart de prix entre canaux, sourcé. Codeur affiche
    135 € de TJM moyen pour un motion designer en août 2026 (84 € débutant, 210 €
    senior, budget moyen de mission 581 €), le baromètre Malt joue dans une gamme
    trois fois supérieure sur le même intitulé. Message de l'article : le canal de
    vente pèse plus lourd sur la facture que le niveau technique.
  - Vérification des sources : la page Codeur a été lue directement (WebFetch OK,
    chiffres exacts repris tels quels). La page Malt renvoie un **403 en fetch
    direct**, seul l'ordre de grandeur issu de deux recherches concordantes est
    donc utilisé dans l'intro ("autour de 420 euros"), et le paragraphe détaillé
    ne cite aucun chiffre Malt précis, juste le lien. À refaire pareil la
    prochaine fois qu'un baromètre bloque le crawl.
  - Adobe Stock : dépôt de vidéos génératives autorisé, case "Created using
    generative AI" obligatoire + autorisation pour toute personne identifiable
    (helpx.adobe.com, consignes de dépôt). Sert de débouché secondaire dans la FAQ.
  - Passes d'humanisation appliquées (humanizer → unslop-text → antislop-copywriting) :
    - 9 parallélismes négatifs ("ce n'est pas X, c'est Y") supprimés au premier
      passage, dont 3 en cellules de tableau qui finissaient toutes pareil.
    - 3 signposting retirés ("Une donnée pour poser le décor", "La conséquence
      pratique est brutale", "Cet article prend les trois questions dans l'ordre").
    - **Un chiffre inventé attrapé au 3e passage** : le Pro Tip affirmait que
      l'offre du milieu "se vend deux fois plus souvent". Aucune source, supprimé.
      Même correctif que J10 (le "80 %"). Ce type de statistique de persuasion est
      le piège récurrent des articles business, à traquer systématiquement.
    - Fourchettes de prix explicitement présentées comme des observations
      ("les fourchettes que j'observe", "ordres de grandeur, pas un barème"),
      jamais comme une statistique de marché.
    - Grappe de "trois" (10 occurrences, dont 3 dans les 3 paragraphes d'intro)
      diluée. Nouveau tell FR à ajouter à la grille : le mot-nombre qui se répète.
    - Scanner unslop : 0 finding sur 2 224 mots (article FR, donc non probant,
      passe structurelle manuelle faite en plus).
  - Hero Nano Banana 2, motif : bistrot de quartier après le service, chaises
    retournées sur les tables, lampes tungstène chaudes contre une vitrine de rue
    bleu nuit, le vidéaste et le patron attablés autour d'une tablette qui montre
    une vidéo verticale du plat, devis imprimé et stylo posés à côté. 87 Ko.
    Distinct des 5 derniers heros (J10 salle de répétition matin, J9 cabine voix
    off jour, J8 coin de bureau fin d'après-midi, J7 salle de réunion plein jour,
    J6 bureau de nuit avec moniteur) : premier hero du run situé chez le client,
    et premier à montrer le moment de la vente plutôt que celui de la production.
  - CTA : formation IA gratuite. Aucune mention d'essai 7 jours.
  - Gates : audit.mjs OK (128 articles, 0 erreur, 0 avertissement), lint OK,
    build OK, check-registry.py OK. IndexNow : 166 URLs soumises (HTTP 200).

---

## 2026-08-25

- `2026-08-25 | RUN 30J J10 | main direct | d77af31 | 1 article | 1 evergreen (guide outil) | poussé sur main`
- **Article** : Suno AI : le guide complet et les nouvelles limites
  - Slug : `suno-guide-complet` · Catégorie : IA vidéo · KW : suno ai
  - Anti-cannibalisation J10 respectée : `suno-musique-pub-courte` garde
    « musique de pub » (workflow de production courte),
    `elevenlabs-music-v2-stable-audio-suno` garde le comparatif des moteurs. Cet
    article prend le tour du produit (modèles, offres, crédits, Studio, droits).
    Les trois sont liés dans le corps du texte.
  - **Angle différenciant, à valeur de scoop FR** : les quotas de téléchargement
    Suno entrent en vigueur le **3 septembre 2026**, soit 9 jours après
    publication. 7 téléchargements à vie sur le gratuit, 20/mois sur Pro,
    60/mois sur Premier, applicables **rétroactivement à toute la bibliothèque**.
    Source : help.suno.com article 13614785. Aucun contenu FR ne couvrait ça.
  - Chiffres pris sur les pages officielles uniquement, après avoir constaté que
    les blogs SEO tiers se contredisent sur le coût d'une génération (5 ou 10
    crédits selon les sources). Parade retenue : ne pas trancher à leur place mais
    dériver le coût des chiffres officiels du centre d'aide (50 crédits/jour = 10
    morceaux, 2 500 = 500 morceaux, 10 000 = 2 000 morceaux, donc ~5 crédits le
    morceau et ~10 la génération puisqu'elle rend deux variantes). Ce calcul est
    montré au lecteur, il n'est pas assené.
  - Point de vigilance utile pour les prochains guides outils : chez Suno,
    **propriété ≠ protection**. Suno documente lui-même qu'une musique 100 % IA
    peut ne pas remplir les conditions du droit d'auteur et que certains
    distributeurs refusent les œuvres non protégées. Distinction reprise telle
    quelle, sans extrapoler sur le droit français.
  - Passes anti-slop : humanizer, unslop-text, antislop-copywriting. Scanner
    unslop final = 0 finding, densité 0,0/1k. Le seul hit du premier passage
    (« Nuance » pris pour le meme anglophone) était un faux positif français,
    reformulé quand même parce que la tournure était raide.
  - Passe structurelle FR (un vert au scanner ne prouve rien sur du français).
    **Tells trouvés et corrigés** : (1) parallélisme négatif déguisé dans le P3
    d'intro (« la qualité n'est plus le sujet… ce qui compte maintenant, c'est… ») ;
    (2) signposting « et c'est là que ça se complique » + scaffolding « La
    propriété d'abord… La protection ensuite… », remplacés par les faits
    directement ; (3) première ligne de section qui restait la reformulation de
    son h3 (« Trois offres, une grille simple, et un piège classique ») ;
    (4) passif sans acteur (« chaque sortie de fichier est décomptée » → « Suno
    décompte ») ; (5) aphorisme creux sur les ayants droit, remplacé par la cause
    concrète. **Rupture par rapport à J8/J9** : les deux ouvertures précédentes se
    recopiaient (amorce « Tu [verbe] », puis scène au présent). Ici l'attaque est
    factuelle et datée (le 3 septembre + trois chiffres). Le titre a aussi été
    écarté du gabarit « X : le guide complet en français » de J9, qui allait
    devenir une série repérable.
  - **Chiffre inventé attrapé à la relecture** : un « se joue à 80 % dans le champ
    de style » s'était glissé dans le premier jet. Aucune source, supprimé.
    Réflexe à garder : les pourcentages d'autorité sont le type de faux fait qui
    passe le mieux les scanners.
  - Hero : Nano Banana 2 (Vercel AI Gateway), 108 Ko. Motif : **salle de répétition
    dans un vieil immeuble au matin**, piano droit contre un mur de plâtre
    écalé, basse sur pied, portable sur un tabouret, structure du morceau
    écrite à la main scotchée sur le piano, contre-plongée au ras du sol.
    Anti-répétition vérifiée sur les 5 derniers heros : J9 cabine de voix off vue
    de la régie, J8 coin de bureau bricolé, J7 salle de réunion vitrée, J6 et J5
    bureaux avec écrans. Aucun écran d'ordinateur dominant ici, pas de studio
    moderne, lumière naturelle seule.
  - CTA : formation IA gratuite. Aucune mention d'essai 7 jours.
  - Gates : audit.mjs OK (127 articles, 0 erreur, 0 avertissement), lint OK,
    build OK (page `/blog/suno-guide-complet` prérendue), check-registry.py OK
    après `git add`. IndexNow : 165 URLs, HTTP 200.

## 2026-08-24

- `2026-08-24 | RUN 30J J9 | main direct | fc5ada0 | 1 article | 1 evergreen (guide outil) | poussé sur main`
- **Article** : ElevenLabs : le guide complet en français
  - Slug : `elevenlabs-guide-complet` · Catégorie : IA vidéo · KW : elevenlabs français
  - **Run repris en cours de route** : un run antérieur du même jour (14:05) avait
    écrit l'article, généré le hero et modifié `articles.ts`, puis s'était arrêté
    sans committer. Rien n'était loggé pour le 24/08, le working tree contenait
    exactement les 3 fichiers du jour et rien d'autre : travail repris, vérifié,
    puis publié. Réflexe à garder : un `git status` sale au démarrage n'est pas
    forcément une collision autopilote, regarder les dates et le contenu avant de
    jeter quoi que ce soit.
  - Anti-cannibalisation J9 respectée : `elevenlabs-voiceover-pub` garde « voix off
    pub », cet article prend le tour complet du produit (TTS, clonage, SFX, dubbing,
    transcription). Les deux sont liés dans le corps du texte.
  - Chiffres pris sur les pages officielles : tableau des offres (Free 10 000
    crédits jusqu'à Business 6 M), tableau des prix par fonction repris de
    `elevenlabs.io/pricing/api`, durées de clonage de la doc. Point de vigilance
    utile pour les prochains guides outils : la licence commerciale démarre à
    Starter, le palier Free ne couvre que les essais personnels.
  - Passes anti-slop : humanizer, unslop-text, antislop-copywriting. Scanner
    unslop = score 1, densité 0,5/1k, unique hit « Robust » qui est le **nom
    officiel d'un réglage de stabilité ElevenLabs**, donc faux positif conservé.
  - Passe structurelle FR (le scanner anglophone ne prouve rien sur du français) :
    0 parallélisme négatif, 0 signposting, 0 preuve sociale vague. **Un vrai tell
    trouvé et corrigé** : l'ouverture recopiait la forme de J8 (même amorce en
    « Tu [verbe] », puis un second paragraphe en liste de quatre propositions
    interrogatives « quel / combien / comment / à quel moment »). Réécrit en
    attaque de scène et en groupes nominaux. À surveiller chaque jour : c'est le
    deuxième run d'affilée où l'intro est le point qui se recopie.
  - Hero : Nano Banana 2 (Vercel AI Gateway), 64 Ko, généré par le run précédent et
    validé ici. Motif : cabine de voix off vue depuis la régie, comédienne au micro
    derrière la vitre, console de mixage au premier plan, lumière du jour. Distinct
    de J8 (coin de bureau bricolé, smartphone sur trépied) et de J7 (salle de
    réunion vitrée).
  - CTA : formation IA gratuite. Aucune mention d'essai 7 jours.
  - Gates : audit.mjs OK (126 articles, 0 erreur, 0 avertissement), lint OK,
    build OK (page `/blog/elevenlabs-guide-complet` prérendue), check-registry.py
    OK après `git add`. IndexNow : 164 URLs, HTTP 200.

## 2026-08-21

- `2026-08-21 | RUN 30J J8 | main direct | 3231dd3 | 1 article | 1 evergreen (guide outil) | poussé sur main`
- **Article** : HeyGen : le guide complet des avatars vidéo IA
  - Slug : `heygen-guide-avatars` · Catégorie : IA vidéo · KW : heygen
  - Faits sourcés sur les pages officielles HeyGen, pas sur les blogs tiers : les
    comparatifs SEO trouvés en recherche donnaient Creator à 200 crédits, la page
    officielle en annonce 600 et Pro à 49 $ (et non 99 $). Vérifier chaque chiffre
    à la source reste indispensable sur ce sujet.
  - Coûts en crédits repris du centre d'aide (article 15126059) : Avatar III 4 à 7
    crédits/min, Avatar IV 16 (look photo) et 31 (look vidéo), Avatar V 48.
  - Passes anti-slop appliquées : humanizer, unslop-text (score 2, densité 0,7/1k,
    2 faux positifs sur le mot français « utilise »), antislop-copywriting. Cette
    dernière passe a rattrapé une incohérence de calcul (« se paie quatre fois »
    alors que 48/16 = 3) et deux ouvertures recopiées de l'article J7.
  - Hero : Nano Banana 2 (Vercel AI Gateway), 75 Ko. Motif : coin de bureau
    transformé en poste d'enregistrement, chaise vide face à un smartphone sur
    trépied, fond gris agrafé, fin d'après-midi. Rupture voulue avec les heros
    récents, tous des bureaux avec écrans.
  - CTA : formation IA gratuite. Aucune mention d'essai 7 jours.
  - Gates : audit.mjs OK (125 articles, 0 erreur, 0 avertissement), lint OK,
    build OK, check-registry.py OK. IndexNow : 162 URLs, HTTP 200.
  - Passe structurelle FR ajoutée après coup (commit `5cf78b9`), sur signalement
    d'une session sœur : le scanner unslop est anglophone, un score bas ne prouve
    rien sur du français. Corrigés à la main 2 parallélismes négatifs (« ce n'est
    pas X, c'est Y »), dont un que j'avais moi-même introduit en corrigeant la
    passe précédente, plus une première ligne de section qui répétait son titre.
    Méthode : grep des négations directement dans le .ts, pas sur l'extrait .md.
    Piège rencontré : un grep contenant une apostrophe droite est mangé par le
    shell et renvoie un faux négatif, écrire le motif en `n.est pas`.

## 2026-08-19

- `2026-08-19 | RUN 30J J7 | main direct | c6ebdf0 | 1 article | 1 evergreen (use cases B2B) | poussé sur main`
- **Article** : Vidéo IA en entreprise : 7 usages vraiment rentables
  - Slug : `video-ia-pour-entreprise` · Catégorie : Business créatif
  - Mot-clé principal : vidéo ia entreprise (secondaires : vidéo corporate ia, vidéo institutionnelle ia, production vidéo interne ia)
  - Angle : distinction prestige (film de marque, à laisser au tournage) vs flux
    (formation, produit, social, RH, support, avant-vente, multilingue). Les 7 usages
    avec ce qu'ils remplacent et le signal de rentabilité.
  - Source d'autorité : FAQ de la Commission européenne sur les obligations de
    transparence de l'article 50 du règlement IA, applicables depuis le 02/08/2026.
  - Liens internes : video-ia-guide-complet, photos-produit-ia-shooting,
    video-courte-ia-tiktok-reels-shorts, sous-titres-automatiques-ia-video,
    agence-video-ia-lancer, avatars-ia-ugc-presentateur-virtuel.
  - Hero : Nano Banana 2 via Vercel AI Gateway, 64 Ko. Motif : réunion d'équipe en
    salle vitrée, lumière du jour, storyboards imprimés. Choisi pour rompre avec les
    trois heros précédents (bureaux de nuit).
  - CTA : formation IA gratuite (aucune mention d'essai limité).
  - Gates : audit.mjs OK (124 articles, 0 erreur, 0 avertissement), lint OK, build OK,
    check-registry.py OK. IndexNow : 161 URLs soumises (HTTP 200).

## 2026-08-17

- `2026-08-17 | RUN 30J J6 | main direct | efcade7 | 1 article | 1 evergreen (prompt pack) | poussé sur main`
  - `prompt-veo-3-exemples` (Prompting, prompt pack, 25 prompts Veo 3 classés par usage : dialogue, ambiance sonore, physique, plans cinématiques, formats sociaux, KW "prompt veo 3")
  - Angle du plan respecté : satellite de prompts-video-ia-50-exemples spécifique Veo (audio natif, dialogue, physique). Le guide veo-3-generer-videos-ia garde le KW marque "veo 3".
  - Vérification web : la version courante est Veo 3.1 (annonce Google du 15/10/2025 : images de référence, first/last frame, extension de scène, mêmes règles de prompt). Article écrit "Veo 3 et 3.1", pas de réorientation nécessaire. Faits repris de J3 (8 s, son natif) cohérents.
  - Hero **Nano Banana 2** via Vercel AI Gateway (`scripts/generate-hero-nb2.mjs`, premier run sans Higgsfield) : webp 16:9 131 Ko, coût affiché 0,139 $.
  - Maillage : liens internes vers prompts-video-ia-50-exemples, veo-3-generer-videos-ia, decrire-lumiere-prompt-ia, veo-3-vs-sora-comparatif. Lien externe developers.googleblog.com (annonce Veo 3.1). CTA formation gratuite.
  - Audit 122 articles 0 err / 0 warn, lint et build verts. check-registry KO avant commit (fichier pas encore suivi), OK après add.
  - Le commit inclut aussi la migration hero laissée en attente dans l'arbre de travail : generate-hero.py réécrit NB2, notes CLAUDE.md et RUN_30J.md.
  - Sixième article du run 30 jours. Runs du 04 au 16/08 manqués (tâche planifiée disparue, recréée ce jour).

## 2026-08-03

- `2026-08-03 | RUN 30J J5 | main direct | 0869427 | 1 article | 1 evergreen (tutoriel) | poussé sur main`
  - `creer-video-youtube-ia` (IA vidéo, tutoriel A à Z, script → voix off → visuels → montage → miniature, KW "créer vidéo youtube ia")
  - Angle imposé par le plan : chaîne complète étape par étape avec point de vérification à chaque maillon (pas un outil miracle, un enchaînement précis).
  - Note de rattrapage : la mémoire J4 (chaine-youtube-automatisee-ia, 2026-07-29) n'avait pas été committée à la fin du run précédent ; commit de rattrapage `43c0ce9` fait en tout début de ce run avant de démarrer J5.
  - Lien externe support.google.com/youtube/answer/72431 (spécifications techniques miniature YouTube). Pas de lien vers `elevenlabs-guide-complet` (J9, pas encore publié) : redirigé vers `elevenlabs-voiceover-pub` existant avec ancre honnête.
  - Hero Higgsfield soul_2 16:9 (bureau de créateur la nuit, laptop + smartphone + casque) converti webp 1600px (85 Ko). Audit 121 articles 0 err / 0 warn, lint et build verts, check-registry OK.
  - Maillage : liens internes vers formation-ia-video, monter-video-ia-capcut-davinci, chaine-youtube-automatisee-ia, elevenlabs-voiceover-pub.
  - Cinquième article du run 30 jours (voir RUN_30J.md). IndexNow pingé après push (159 URLs, HTTP 200).

## 2026-07-29

- `2026-07-29 | RUN 30J J4 | main direct | b43f934 | 1 article | 1 evergreen (business/stratégie) | poussé sur main`
  - `chaine-youtube-automatisee-ia` (Business créatif, evergreen, la vérité sur la chaîne YouTube faceless automatisée à l'IA, KW "chaîne youtube automatisée ia")
  - Angle honnête anti-get-rich-quick imposé par le plan : ce qui marche, ce qui sature, où placer l'automatisation sans se faire démonétiser. Pas de revenu passif promis, pas de chiffres inventés.
  - Fait clé vérifié par recherche web : YouTube a précisé sa politique de monétisation le 15/07/2025 en renommant "contenu répétitif" en "contenu inauthentique" (contenu produit en masse, sans apport d'auteur). L'IA reste monétisable si elle enrichit un contenu original. Source officielle liée : support.google.com/youtube/answer/1311392 (politiques de monétisation). Divulgation du contenu synthétique dans YouTube Studio mentionnée sans inventer de seuils.
  - Hero Higgsfield soul_2 16:9 (bureau de créateur la nuit, timeline de montage) converti webp 1600px (70 Ko). Audit 120 articles 0 err / 0 warn, lint et build verts.
  - Maillage : liens internes vers gagner-argent-ia-creative-modeles, video-courte-ia-tiktok-reels-shorts, sous-titres-automatiques-ia-video, automatiser-production-contenu-ia, video-ia-guide-complet, meilleurs-outils-ia-video. Lien externe support.google.com (YouTube).
  - Quatrième article du run 30 jours (voir RUN_30J.md). IndexNow pingé après push (158 URLs, HTTP 200).

## 2026-07-23

- `2026-07-23 | RUN 30J J3 | main direct | 2c1019f | 1 article | 1 evergreen (comparatif) | poussé sur main`
  - `veo-3-vs-sora-comparatif` (IA vidéo, evergreen, comparatif Veo 3.1 contre Sora, KW "veo vs sora")
  - Angle imposé par les faits : OpenAI a fermé l'app et le site Sora le 26/04/2026, l'API Sora 2 s'arrête le 24/09/2026. Le comparatif devient donc "le duel est fini + par quoi remplacer Sora", vérifié sur la page d'aide officielle OpenAI, confirmé par CNN, VentureBeat et the-decoder.
  - Faits Veo vérifiés sur deepmind.google/models/veo : Veo 3.1, plans de 8 s, 1080p et 4K, son natif, accès Gemini / Flow / AI Studio / API Gemini / Vids. Crédits Flow (50/jour gratuits, 200/mois offre Plus) vérifiés sur support.google.com/flow.
  - Hero Higgsfield soul_2 16:9 converti webp 1600px (54 Ko). Audit 0 err / 0 warn, lint et build verts, check-registry OK. Rendu vérifié en local (H1 unique, JSON-LD FAQPage, hero servi, 0 tiret cadratin).
  - Maillage : liens internes vers sora-openai-creer-videos, veo-3-generer-videos-ia, meilleurs-outils-ia-video, prompts-video-ia-50-exemples, pourquoi-videos-ia-air-faux. Liens externes help.openai.com, deepmind.google, support.google.com.
  - Troisième article du run 30 jours (voir RUN_30J.md). IndexNow pingé après push (157 URLs, HTTP 200).

## 2026-07-22

- `2026-07-22 | RUN 30J J2 | main direct | 1c9cb72 | 1 article | 1 evergreen (business) | poussé sur main`
  - `agence-video-ia-lancer` (Business créatif, evergreen, lancer une agence vidéo IA : positionnement, offre, tarifs, premiers contrats, KW "agence vidéo ia")
  - Hero Higgsfield soul_2 16:9 converti webp 1600px (77 Ko). Audit 0 err / 0 warn, lint et build verts.
  - Maillage : liens internes vers gagner-argent-ia-creative-modeles, devenir-freelance-creation-ia, fixer-prix-creation-ia-grille, workflow-client-brief-livraison-ia. Lien externe fr.wikipedia.org/wiki/Agence_de_communication.
  - Deuxième article du run 30 jours (voir RUN_30J.md). IndexNow pingé après push (156 URLs, HTTP 200).

## 2026-07-20

- `2026-07-20 | RUN 30J J1 | main direct | 1 article | 1 evergreen (prompt pack) | poussé sur main`
  - `prompts-video-ia-50-exemples` (Prompting, evergreen, 50 prompts vidéo classés par genre, KW "prompt vidéo ia", ~3900 mots)
  - Hero Higgsfield soul_2 16:9 converti webp 1600px (71 Ko). Audit 0 err / 0 warn, lint et build verts.
  - Maillage : liens internes vers prompt-structure-4-blocs-ia, decrire-lumiere-prompt-ia, video-ia-guide-complet. Lien externe deepmind.google/models/veo.
  - Premier article du run 30 jours (voir RUN_30J.md). IndexNow pingé après push.

## 2026-07-06

- `2026-07-06 | RUN #7 | loop/daily-2026-07-06 → main | 3 articles | 2 news + 1 evergreen | poussé sur main (commit bd72b4b, merge edaae82)`
  - `seedance-2-5-video-ia-30-secondes` (IA vidéo, news, Seedance 2.5 ByteDance)
  - `gemini-images-personnalisees-donnees-google` (IA image, news, images Gemini gratuites US)
  - `pourquoi-videos-ia-air-faux` (IA vidéo, evergreen, réalisme vidéo)
  - Bonus SEO : 14 liens internes cassés repointés dans les 3 pages piliers + 1 description ramenée sous 160 car.
  - Heros Imagen 4 Fast 1K (16/28/42 Ko). Audit 0 err, lint/build verts. CI success. 3 pages en 200. IndexNow 135 URLs (HTTP 200).
  - B-5 (24 fichiers non commités) laissé intact et non poussé (stash/pop autour du merge).

## 2026-06-25

- `2026-06-25 | RUN #6 | loop/daily-2026-06-25 → main | 3 articles | 2 news + 1 evergreen | poussé sur main`
  - `grok-imagine-video-1-5-juin-2026` (IA vidéo, news, Grok Imagine 1.5 xAI 16/06, image vers vidéo + audio natif, + capture x.ai/news)
  - `minimax-hub-creation-video-ia` (IA vidéo, news, MiniMax Hub festival de Shanghai 15/06, source Variety, + capture minimax.io)
  - `monter-video-ia-capcut-davinci` (Workflow créatif, evergreen, monter ses plans IA dans CapCut/DaVinci)
  - Heros Imagen 4 Fast 1K. Audit (110 art., 0 err, 0 avert.) / lint / build verts.
  - 2 news à ~8-10 j (semaine creuse côté sorties fraîches), mais solides et sourcées
    (primaire x.ai ; Variety). Dates des faits citées précisément dans le texte.
  - Fix SEO : 2 descriptions >160 (ecrire-scenario, screenweaver) raccourcies.
  - 24 modifs non commitées (injections de liens, B-5) toujours laissées en l'état,
    non stagées, non poussées. Push surgical (git add explicite uniquement).
  - 2 articles préexistants future-datés tombaient le 25 (`images-cinema-ia-scene-film`,
    `rendu-pellicule-grain-film-ia`, ia-image) : non touchés.

## 2026-06-22

- `2026-06-22 | RUN #5 | loop/daily-2026-06-22 → main | 2 articles | 1 news + 1 evergreen | poussé sur main`
  - `kling-3-turbo-omni-juin-2026` (IA vidéo, news, Kling 3.0 Turbo + Omni 17/06, + capture klingai.com)
  - `combien-coute-ia-creative-mois` (Business créatif, evergreen, budget mensuel outils IA)
  - Heros Imagen 4 Fast 1K. Audit (107 art., 0 err) / lint / build verts.
  - 1 seule news : seul sujet frais, on-thème et non sensible cette semaine.
    Seedance 2.0 Mini (15/06) volontairement écarté (litige Disney/Paramount +
    demande de fermeture de sénateurs US = sujet sensible, voir ERRORS).
  - 2 articles datés du jour préexistaient (evergreen `veo-3-generer-videos-ia`
    et `sora-openai-creer-videos`, future-datés tombant le 22) : non touchés.
  - 24 modifs non commitées laissées en l'état (injections de liens internes d'un
    run précédent pointant vers des articles encore future-datés = risque 404
    live ; ne pas committer tel quel). Voir ERRORS_AND_BLOCKERS.

## 2026-06-20

- `2026-06-20 | RUN #4 | loop/daily-2026-06-20 → main | 3 articles | 2 news + 1 evergreen | poussé sur main`
  - `higgsfield-creative-os-juin-2026` (IA vidéo, news, + capture higgsfield.ai)
  - `elevenlabs-music-v2-stable-audio-suno` (Business créatif, news, + capture elevenlabs.io)
  - `focale-objectif-prompt-ia` (Prompting, evergreen)

## 2026-06-18

- `2026-06-18 | RUN #2 | loop/daily-2026-06-18 → main | 3 articles | 2 news + 1 evergreen | poussé sur main`
  - `adobe-firefly-android-imagen-veo` (IA image, news, Firefly sur Android 17/06)
  - `krea-2-images-2-secondes` (IA image, news, Krea 2 08/06)
  - `image-to-video-ia-methode` (IA vidéo, evergreen)
  - Heros Imagen 4 Fast 1K. Audit/lint/build verts. Voir DAILY_REPORT.

## 2026-06-17

- `2026-06-17 | RUN #1 | loop/daily-2026-06-17 → main | 3 articles | 2 news + 1 evergreen | poussé sur main`
  - `midjourney-v8-1-mise-a-jour` (IA image, news, Midjourney V8.1)
  - `runway-seedance-2-fast-aleph-2` (IA vidéo, news, Runway Seedance/Aleph)
  - `comfyui-workflow-nodal-debutant` (Workflow créatif, evergreen)
  - Heros Imagen 4 Fast (1K). Audit/lint/build verts. Voir DAILY_REPORT.
- `2026-06-17 | BOOTSTRAP | loop/bootstrap-2026-06-17 → main | 0 article publié | infra + 2 correctifs SEO | poussé sur main (sur demande utilisateur)`
  - Contenu publié : aucun nouvel article (pas de contenu créé ce run).
  - Correctifs poussés live : CI lint réparée, 16 liens internes cassés repointés.
  - Fichiers infra ajoutés : `.loop_memory/*`, `.loop_scripts/*`, `SETUP_LOOP.md`.
  - Autopilote concurrent : avait terminé son lot (60/60) avant le commit, pas de
    collision. Working tree ne contenait que les fichiers de ce run.

> À partir du run 2 : chaque article publié doit aussi apparaître dans
> CONTENT_LEDGER.md, et chaque push doit confirmer le statut Vercel (Ready).

## 2026-08-17 : article hors plan (publication différée 2026-08-21)

- **Article** : Créer un plan vidéo IA de A à Z sur Imaginode
  - Slug : `creer-plan-video-ia-imaginode` · Catégorie : Workflow créatif
  - Mot-clé principal : plan vidéo ia (secondaires : imaginode, canvas ia, canvas à nodes, workflow vidéo ia)
  - **Hors run 30 jours** : article produit Imaginode (outil de Frank), demandé à part.
    Ne touche pas RUN_30J.md ni au plan quotidien.
  - `date: 2026-08-21` (volontaire : 3 articles Imaginode sur 3 sites à dates
    décalées ; le repo masque les articles futurs jusqu'à leur date). Committé et
    poussé le 2026-08-17, visible en ligne à partir du 21/08.
  - Hero : vraie frame extraite de `SimpleAI/public/about.mp4` (t=4 s, ffmpeg,
    1600 px, ~51 Ko), pas de génération Nano Banana pour cet article produit.
  - CTA : formation IA gratuite. Aucun code promo mentionné (interdiction Frank).
  - Gates : audit.mjs OK, lint OK, build OK, check-registry.py OK.
