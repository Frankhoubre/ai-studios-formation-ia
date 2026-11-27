import type { Article } from "@/lib/types/article";

export const fluxGuideComplet: Article = {
  title: "Flux IA : quel modèle choisir et à quel prix",
  slug: "flux-guide-complet",
  description:
    "Flux est devenu une famille de neuf modèles. Variantes, prix au mégapixel, VRAM, licences : le guide pour choisir le bon et savoir ce que tu paies vraiment.",
  excerpt:
    "Les tutoriels Flux qui remontent dans Google parlent encore de FLUX.1 dev sur une RTX 3090. Depuis, le nom couvre trois générations, cinq variantes image, deux licences incompatibles et une facturation au mégapixel qui surprend au premier relevé de compte.",
  category: "ia-image",
  tags: [
    "Flux",
    "Black Forest Labs",
    "FLUX.2",
    "poids ouverts",
    "générateur d'images",
  ],
  date: "2026-09-26",
  updatedAt: "2026-09-26",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/flux-guide-complet.webp",
  imageAlt:
    "Atelier de réparation informatique un matin gris, une femme en chemise de travail bordeaux et gants bleus abaisse une carte graphique noire à deux ventilateurs dans un boîtier ouvert posé à plat sur un tapis antistatique, tournevis et vis à main sur le tapis, carton d'expédition ouvert au bord de l'établi",
  keywords: [
    "flux ia",
    "flux modèle image",
    "black forest labs",
    "flux 2",
    "prix flux api",
    "flux poids ouverts",
  ],
  relatedSlugs: [
    "midjourney-vs-flux-vs-dalle",
    "flux-lora-publicite-locale",
    "stable-diffusion-debutant-demarrer",
  ],
  faq: [
    {
      question: "Flux, c'est quoi exactement aujourd'hui ?",
      answer:
        "Une famille de modèles éditée par Black Forest Labs, pas un modèle unique. Sa page modèles aligne neuf entrées réparties en trois générations : FLUX.1 (2024), FLUX.2 pour l'image (annoncé le 25 novembre 2025) et FLUX 3 pour la vidéo et la robotique (2026). Quand quelqu'un dit « je génère avec Flux » en parlant d'images en 2026, il parle en principe d'une des cinq variantes de FLUX.2 : max, pro, flex, dev ou klein.",
    },
    {
      question: "Quelle variante de FLUX.2 choisir ?",
      answer:
        "FLUX.2 [pro] couvre la grande majorité des besoins pro, avec le meilleur rapport qualité-prix de la gamme. FLUX.2 [max] sert quand la cohérence d'édition compte plus que la facture, par exemple sur une série longue qui doit garder le même personnage. FLUX.2 [flex] expose les paramètres de steps et de guidance, et rend la typographie plus fiable. FLUX.2 [klein] est le modèle rapide, à moins d'une seconde par image. FLUX.2 [dev] est la version à poids ouverts, 32 milliards de paramètres, à faire tourner chez toi.",
    },
    {
      question: "Combien coûte une image générée avec Flux ?",
      answer:
        "Depuis FLUX.2, la facturation se fait au mégapixel de sortie, avec un premier mégapixel plus cher que les suivants. Sur FLUX.2 [pro], une image de 1024 × 1024 pixels revient à 0,03 $, et la même en 4 mégapixels à 0,075 $. Sur FLUX.2 [max], on passe à 0,07 $ et 0,16 $. Les modèles FLUX.1 restent facturés à l'image entière : 0,025 $ pour FLUX.1 [dev], 0,04 $ pour FLUX 1.1 [pro], 0,06 $ pour la version Ultra. Tarifs relevés le 26 septembre 2026 sur bfl.ai/pricing.",
    },
    {
      question: "Peut-on faire tourner Flux sur son propre PC ?",
      answer:
        "Oui, et le ticket d'entrée est plus bas qu'on ne le croit. FLUX.2 [klein] 4B demande 8,4 Go de VRAM et sort une image en environ 1,2 seconde sur une RTX 5090. La version 9B distillée demande 19,6 Go pour environ 2 secondes. Les modèles Base, non distillés, sont faits pour le fine-tuning et mettent beaucoup plus de temps : environ 35 secondes pour le 9B Base sur la même carte. Chiffres publiés par Black Forest Labs sur la page du modèle.",
    },
    {
      question:
        "Les poids ouverts de Flux sont-ils utilisables commercialement ?",
      answer:
        "Pas tous, et c'est le piège le plus coûteux de la gamme. Seuls FLUX.2 [klein] 4B et 4B Base sont sous licence Apache 2.0, donc libres d'usage commercial. Les versions 9B et 9B Base sont sous FLUX Non-Commercial License. FLUX.2 [dev] demande une licence commerciale payante, vendue par paliers (Builder, Platform, Professional, Enterprise) avec des quotas d'images mensuels et un nombre de domaines et de clients limité.",
    },
    {
      question: "Flux ou Midjourney ?",
      answer:
        "Les deux ne se jouent pas sur le même terrain. Midjourney reste plus fort en direction artistique spontanée, Flux en contrôle, en typographie et en cohérence multi-références, avec une API et des poids téléchargeables que Midjourney n'offre pas. Le face-à-face détaillé, avec DALL·E dans la balance, est traité dans le comparatif dédié du blog.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tape « Flux » dans Google et tu tombes sur des tutoriels ComfyUI qui expliquent comment installer FLUX.1 dev sur une RTX 3090. Ils datent de 2024 et ils sont toujours en première page. Pendant ce temps, la page modèles de Black Forest Labs en aligne neuf.",
    },
    {
      type: "p",
      text: "Le nom Flux couvre désormais trois générations, cinq variantes pour l'image, deux licences incompatibles entre elles et une facturation au mégapixel qui surprend au premier relevé de compte. Cet article range tout ça, avec les chiffres.",
    },
    {
      type: "p",
      text: "Tous les montants et toutes les specs qui suivent viennent des pages officielles de Black Forest Labs, relevées le 26 septembre 2026. Ils bougeront, donc retiens surtout la méthode de calcul : c'est elle qui reste valable quand la grille change.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Trois générations vivent sous le même nom",
    },
    {
      type: "p",
      text: "FLUX.1 est sorti en 2024 et a fait la réputation de la maison. FLUX.2 a été annoncé le 25 novembre 2025 dans un billet intitulé [FLUX.2: Frontier Visual Intelligence](https://bfl.ai/blog/flux-2). FLUX 3 est arrivé en 2026 par la vidéo. Les trois sont encore servis par la même API, ce qui explique une bonne partie de la confusion.",
    },
    {
      type: "p",
      text: "FLUX 3 ne concerne pas ta génération d'images. FLUX 3 Video produit des clips jusqu'à 20 secondes avec audio natif, facturé à la seconde de vidéo (0,17 $ la seconde en HD, 0,06 $ en mode Draft). FLUX 3 Action, annoncé le 23 septembre 2026, est un modèle 7B destiné à la robotique. Bel effort, autre métier.",
    },
    {
      type: "p",
      text: "Pour l'image en production, c'est **FLUX.2**. Les modèles FLUX.1 restent accessibles et facturés à l'ancienne, à l'image entière (0,025 $ pour FLUX.1 [dev], 0,04 $ pour FLUX 1.1 [pro], 0,06 $ pour FLUX 1.1 [pro] Ultra). Ils dépannent encore, sans plus.",
    },
    {
      type: "h3",
      text: "Ce que FLUX.2 apporte que FLUX.1 n'avait pas",
    },
    {
      type: "ul",
      items: [
        "Jusqu'à 10 images de référence combinées dans une seule génération, de quoi tenir un personnage, un produit ou un style sur une série entière.",
        "Génération et édition jusqu'à 4 mégapixels, là où l'édition plafonnait beaucoup plus bas.",
        "Couleurs de marque données en code hexadécimal, sans approximation.",
        "Typographie complexe réellement lisible : infographies, maquettes d'interface, textes longs dans l'image.",
        "32 000 tokens de prompt en entrée, largement assez pour écrire un brief structuré au lieu d'une liste de mots-clés.",
      ],
    },
    {
      type: "p",
      text: "Sous le capot, FLUX.2 associe un modèle vision-langage Mistral-3 de 24 milliards de paramètres à un transformeur à flux rectifié. Ce détail d'architecture a une conséquence très pratique : le modèle lit un brief, pas une incantation. Si tu écris encore tes prompts en empilant des mots-clés séparés par des virgules, tu utilises une fraction de la machine. La logique de prompt détaillée dans le guide sur [les images cinéma générées par IA](/blog/prompt-image-ia-cinema) s'applique directement ici.",
    },
    {
      type: "h3",
      text: "Les cinq variantes image, en une ligne chacune",
    },
    {
      type: "table",
      caption:
        "Positionnement des variantes tel que décrit sur bfl.ai/models/flux-2, le 26 septembre 2026.",
      headers: ["Variante", "Ce qu'elle fait de mieux", "Accès"],
      rows: [
        [
          "FLUX.2 [max]",
          "Cohérence d'édition la plus élevée, meilleur suivi de prompt, génération ancrée avec contexte web temps réel",
          "API seule",
        ],
        [
          "FLUX.2 [pro]",
          "Le rapport qualité-prix de la gamme, pensé pour les gros volumes de production",
          "API seule",
        ],
        [
          "FLUX.2 [flex]",
          "Contrôle des steps et de la guidance, typographie et petits détails",
          "API seule",
        ],
        [
          "FLUX.2 [dev]",
          "32 milliards de paramètres à poids ouverts, le plus puissant modèle image téléchargeable",
          "Poids + licence commerciale",
        ],
        [
          "FLUX.2 [klein]",
          "Vitesse : moins d'une seconde par image, quatre tailles au choix",
          "API et poids",
        ],
      ],
    },
    {
      type: "h2",
      id: "pricing",
      text: "La facture se compte en mégapixels",
    },
    {
      type: "p",
      text: "C'est le changement que personne n'annonce dans les tutoriels. FLUX.1 se payait à l'image, prix fixe, quelle que soit la taille. FLUX.2 facture au mégapixel produit, avec un premier mégapixel nettement plus cher que les suivants.",
    },
    {
      type: "p",
      text: "Les règles de calcul sont écrites en petit sous la grille : la résolution est arrondie au mégapixel entier supérieur, séparément pour l'entrée et pour la sortie ; un mégapixel vaut 1024 × 1024 pixels ; la sortie est plafonnée à 4 mégapixels, toutes opérations confondues.",
    },
    {
      type: "image",
      src: "/images/articles/flux-guide-complet-prix.webp",
      alt: "Grille tarifaire FLUX.2 sur le site de Black Forest Labs, colonnes premier mégapixel, mégapixel supplémentaire et image de référence pour les variantes max, pro, klein 9B, klein 4B et flex",
      caption:
        "La grille image de FLUX.2, onglet FLUX.2 de bfl.ai/pricing, capturée le 26 septembre 2026.",
    },
    {
      type: "p",
      text: "Une image carrée en 1024 × 1024, c'est exactement un mégapixel, donc le tarif du premier mégapixel et rien d'autre : 0,03 $ sur pro, 0,07 $ sur max, 0,015 $ sur klein 9B. Monte la même image en 4 mégapixels et tu ajoutes trois mégapixels au tarif dégressif : 0,075 $ sur pro, 0,16 $ sur max, 0,021 $ sur klein 9B.",
    },
    {
      type: "p",
      text: "FLUX.2 [flex] facture 0,05 $ par mégapixel, sans dégressivité. En 1 mégapixel il coûte moins cher que max. En 4 mégapixels il revient à 0,20 $ contre 0,16 $ pour max. **Sur les grandes résolutions, le modèle « flexible » devient le plus cher de la gamme.** Ce n'est écrit nulle part en toutes lettres, ça se déduit de la grille.",
    },
    {
      type: "p",
      text: "À l'échelle d'une commande, l'écart se voit. Deux cents visuels produits en 1 mégapixel coûtent 6 $ sur pro et 14 $ sur max. Les mêmes en 4 mégapixels montent à 15 $ et 32 $. Générer en 4 mégapixels « au cas où » multiplie ta facture par deux et demi pour des fichiers que personne ne regardera à cette taille.",
    },
    {
      type: "h3",
      text: "Tes images de référence sont facturées elles aussi",
    },
    {
      type: "p",
      text: "La colonne REF IMG de la grille existe pour ça. Chaque image de référence est facturée au tarif du mégapixel supplémentaire : 0,015 $ sur pro, 0,03 $ sur max, 0,002 $ sur klein 9B. Une référence seule de moins de 4 mégapixels est traitée à sa résolution d'origine ; dès qu'il y en a plusieurs, chacune est ramenée à un mégapixel et comptée comme telle, quelle que soit la taille de sortie demandée.",
    },
    {
      type: "p",
      text: "Trois références par génération sur pro, ça fait 0,045 $ d'entrée qui s'ajoutent à chaque image. Sur une série de cent visuels tenus par une charte, tu as payé 4,50 $ rien qu'à montrer tes références au modèle. Petite somme, ligne oubliée neuf fois sur dix au moment de chiffrer un devis client.",
    },
    {
      type: "h2",
      id: "local",
      text: "Faire tourner Flux sur ta propre machine",
    },
    {
      type: "p",
      text: "La famille klein est distillée à partir du modèle de base FLUX.2, en quatre tailles téléchargeables. Black Forest Labs publie pour chacune le temps d'inférence mesuré sur deux cartes et la VRAM nécessaire, ce qui permet enfin de savoir si ta machine suit avant de lancer un téléchargement de plusieurs dizaines de gigaoctets.",
    },
    {
      type: "image",
      src: "/images/articles/flux-guide-complet-klein.webp",
      alt: "Tableau des quatre variantes locales de FLUX.2 klein avec leur licence, leur temps d'inférence sur GB200 et RTX 5090 et leur besoin en VRAM",
      caption:
        "Les quatre variantes locales de FLUX.2 [klein], relevées sur bfl.ai/models/flux-2-klein le 26 septembre 2026.",
    },
    {
      type: "p",
      text: "Lis la colonne VRAM avant tout le reste. 8,4 Go pour le 4B, c'est dans les cordes d'une carte grand public à 12 Go. 19,6 Go pour le 9B distillé, il te faut déjà du matériel de créateur. Et attention au piège des versions Base : elles ne sont pas distillées, elles sont faites pour le fine-tuning, et le 9B Base met environ 35 secondes par image sur une RTX 5090 contre 2 secondes pour le 9B classique. Si tu prends la mauvaise, tu vas croire que ta machine est morte.",
    },
    {
      type: "p",
      text: "Pour l'installation elle-même, la logique est la même que celle décrite dans le guide sur [ComfyUI et les workflows nodaux](/blog/comfyui-workflow-nodal-debutant), et le raisonnement local contre en ligne est traité de bout en bout dans [le guide Stable Diffusion pour débutants](/blog/stable-diffusion-debutant-demarrer).",
    },
    {
      type: "h3",
      text: "Poids ouverts ne veut pas dire poids libres",
    },
    {
      type: "p",
      text: "C'est l'erreur que je vois le plus souvent, et elle peut coûter cher. Sur les quatre variantes klein, deux seulement sont sous licence Apache 2.0 : le 4B et le 4B Base. Les versions 9B et 9B Base sont livrées sous FLUX Non-Commercial License. Le fichier est gratuit à télécharger, l'usage commercial ne l'est pas.",
    },
    {
      type: "image",
      src: "/images/articles/flux-guide-complet-licences.webp",
      alt: "Page de licences de Black Forest Labs présentant les quatre paliers Builder, Platform, Professional et Enterprise avec les modèles inclus et les quotas mensuels d'images",
      caption:
        "Les quatre paliers de licence des poids Flux, capturés sur bfl.ai/licensing le 26 septembre 2026.",
    },
    {
      type: "p",
      text: "Builder donne les modèles klein, 10 000 images par mois, un domaine, dix utilisateurs, et exclut explicitement l'usage pour des clients ou des applications tierces. Platform ajoute klein Base 9B et FLUX.2 [dev] avec 100 000 images mensuelles. Professional vise les agences : FLUX.2 [dev], 100 000 images, jusqu'à trois domaines, les trois premiers clients inclus et des frais par client au-delà. Enterprise couvre le reste sur mesure.",
    },
    {
      type: "p",
      text: "Traduction pour un freelance : livrer des visuels à un client avec klein 9B téléchargé sur Hugging Face te met hors licence, même si le téléchargement était gratuit. Le 4B en Apache 2.0, lui, ne pose aucun problème. À relire avant de signer une prestation.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "Choisir, en quatre situations",
    },
    {
      type: "ol",
      items: [
        "**Tu produis des visuels clients à la chaîne.** FLUX.2 [pro] via l'API, sortie calée sur la taille de livraison réelle et pas au-dessus. Trois références maximum par génération. Ça te coûte 0,03 $ à 0,08 $ par image générée, ratés compris, ce qui laisse de la marge sur à peu près n'importe quel devis.",
        "**Tu tiens un personnage ou un produit sur une longue série.** FLUX.2 [max], pour la cohérence d'édition, avec les 10 références permises. Le surcoût par image se rattrape sur le nombre de reprises évitées. Si tu vises une identité de marque stable dans le temps, l'entraînement d'un LoRA reste plus solide, et la méthode est détaillée dans l'article sur [Flux et LoRA pour une publicité locale](/blog/flux-lora-publicite-locale).",
        "**Tu itères vite sur des idées, cent images par après-midi.** FLUX.2 [klein] 9B, en API ou en local si tu as 19,6 Go de VRAM. À 0,015 $ l'image en 1 mégapixel, explorer ne coûte presque rien, et tu repasses les gardées sur pro ou max pour le rendu final.",
        "**Tu intègres la génération dans un produit ou un outil interne.** Poids ouverts, et là le choix se fait sur la licence avant la qualité. Klein 4B en Apache 2.0 si tu veux dormir tranquille, palier Platform ou Professional si tu as besoin de FLUX.2 [dev].",
      ],
    },
    {
      type: "h2",
      id: "mistakes",
      text: "Les erreurs qui coûtent cher",
    },
    {
      type: "ul",
      items: [
        "Générer en 4 mégapixels par défaut. Une vignette de blog large de 1200 pixels n'a jamais eu besoin de 4 mégapixels, et tu paies deux fois et demi le prix pour un fichier que tu vas redimensionner derrière.",
        "Confondre klein 9B et klein 9B Base. Le premier sort une image en 2 secondes, le second en 35. Presque le même nom, presque le même poids sur le disque.",
        "Prendre les poids ouverts pour du libre de droits. Deux variantes sur quatre sont non commerciales, et FLUX.2 [dev] demande une licence payante. Le fichier gratuit et le droit d'usage sont deux choses séparées.",
        "Écrire des prompts de 2023. Avec 32 000 tokens en entrée et un modèle vision-langage devant le générateur, une liste de mots-clés te fait rater la moitié du contrôle disponible.",
        "Rester sur FLUX.1 par habitude. Ces modèles marchent encore et restent facturés à l'image, mais ils n'ont ni les 10 références, ni la typographie, ni le suivi de prompt de FLUX.2.",
      ],
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes sur Flux",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Flux, c'est quoi exactement aujourd'hui ?",
    },
    {
      type: "p",
      text: "Une famille de modèles éditée par Black Forest Labs, pas un modèle unique. Sa page modèles aligne neuf entrées réparties en trois générations : FLUX.1 (2024), FLUX.2 pour l'image (annoncé le 25 novembre 2025) et FLUX 3 pour la vidéo et la robotique (2026). Quand quelqu'un dit « je génère avec Flux » en parlant d'images en 2026, il parle en principe d'une des cinq variantes de FLUX.2 : max, pro, flex, dev ou klein.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Quelle variante de FLUX.2 choisir ?",
    },
    {
      type: "p",
      text: "FLUX.2 [pro] couvre la grande majorité des besoins pro, avec le meilleur rapport qualité-prix de la gamme. FLUX.2 [max] sert quand la cohérence d'édition compte plus que la facture, par exemple sur une série longue qui doit garder le même personnage. FLUX.2 [flex] expose les paramètres de steps et de guidance, et rend la typographie plus fiable. FLUX.2 [klein] est le modèle rapide, à moins d'une seconde par image. FLUX.2 [dev] est la version à poids ouverts, 32 milliards de paramètres, à faire tourner chez toi.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Combien coûte une image générée avec Flux ?",
    },
    {
      type: "p",
      text: "Depuis FLUX.2, la facturation se fait au mégapixel de sortie, avec un premier mégapixel plus cher que les suivants. Sur FLUX.2 [pro], une image de 1024 × 1024 pixels revient à 0,03 $, et la même en 4 mégapixels à 0,075 $. Sur FLUX.2 [max], on passe à 0,07 $ et 0,16 $. Les modèles FLUX.1 restent facturés à l'image entière : 0,025 $ pour FLUX.1 [dev], 0,04 $ pour FLUX 1.1 [pro], 0,06 $ pour la version Ultra. Tarifs relevés le 26 septembre 2026 sur [la page tarifs de Black Forest Labs](https://bfl.ai/pricing).",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Peut-on faire tourner Flux sur son propre PC ?",
    },
    {
      type: "p",
      text: "Oui, et le ticket d'entrée est plus bas qu'on ne le croit. FLUX.2 [klein] 4B demande 8,4 Go de VRAM et sort une image en environ 1,2 seconde sur une RTX 5090. La version 9B distillée demande 19,6 Go pour environ 2 secondes. Les modèles Base, non distillés, sont faits pour le fine-tuning et mettent beaucoup plus de temps : environ 35 secondes pour le 9B Base sur la même carte.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Les poids ouverts de Flux sont-ils utilisables commercialement ?",
    },
    {
      type: "p",
      text: "Pas tous, et c'est le piège le plus coûteux de la gamme. Seuls FLUX.2 [klein] 4B et 4B Base sont sous licence Apache 2.0, donc libres d'usage commercial. Les versions 9B et 9B Base sont sous FLUX Non-Commercial License. FLUX.2 [dev] demande une licence commerciale payante, vendue par paliers avec des quotas d'images mensuels et un nombre de domaines et de clients limité.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Flux ou Midjourney ?",
    },
    {
      type: "p",
      text: "Les deux ne se jouent pas sur le même terrain. Midjourney reste plus fort en direction artistique spontanée, Flux en contrôle, en typographie et en cohérence multi-références, avec une API et des poids téléchargeables que Midjourney n'offre pas. Le face-à-face détaillé, DALL·E compris, est dans [le comparatif des trois générateurs](/blog/midjourney-vs-flux-vs-dalle).",
    },
    {
      type: "h2",
      id: "conclusion",
      text: "Ce que tu peux faire dans l'heure qui vient",
    },
    {
      type: "p",
      text: "Ouvre ton dernier lot de visuels générés et regarde deux chiffres : la résolution que tu as demandée, et celle à laquelle l'image est réellement affichée. Si la première est plus grande que la seconde, tu as une économie immédiate à faire, et elle ne coûte aucune qualité perçue.",
    },
    {
      type: "p",
      text: "Ensuite, décide une bonne fois entre l'API et les poids. L'API se paie au mégapixel et ne demande aucun matériel. Les poids demandent une carte, du temps d'installation, et une lecture sérieuse de la licence. Les deux tiennent la route. Choisis-en un et va au bout.",
    },
    {
      type: "p",
      text: "Note de fondateur : dans la formation IA gratuite d'AI Studios, la partie image commence par le cadrage et l'écriture du brief, avant le choix du modèle. C'est volontaire. Un prompt clair sur klein 4B bat un prompt flou sur max, et il coûte cinq fois moins cher.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-09-26 -->
