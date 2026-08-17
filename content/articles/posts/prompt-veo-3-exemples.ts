import type { Article } from "@/lib/types/article";

export const promptVeo3Exemples: Article = {
  title: "Prompts Veo 3 : structure et exemples testés",
  slug: "prompt-veo-3-exemples",
  description:
    "25 prompts Veo 3 prêts à copier : dialogues, ambiances sonores, physique réaliste, plans cinématiques. La structure qui exploite l'audio natif de Veo.",
  excerpt:
    "Veo 3 génère le son en même temps que l'image, et ça change la façon d'écrire un prompt. Voici la structure et 25 exemples testés, du dialogue au plan cinématique.",
  category: "prompting",
  tags: ["Veo 3", "prompts vidéo", "audio natif", "Google", "vidéo IA"],
  date: "2026-08-17",
  updatedAt: "2026-08-17",
  readingTime: 12,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/prompt-veo-3-exemples.webp",
  imageAlt:
    "Créateur au casque devant un moniteur affichant un plan vidéo généré par IA, table de travail éclairée en teal et ambre, ambiance de studio de nuit",
  keywords: [
    "prompt veo 3",
    "prompts veo",
    "veo 3 exemples",
    "prompt veo audio",
    "veo 3 dialogue",
  ],
  relatedSlugs: [
    "veo-3-generer-videos-ia",
    "prompts-video-ia-50-exemples",
    "veo-3-vs-sora-comparatif",
  ],
  faq: [
    {
      question: "Quelle est la structure idéale d'un prompt Veo 3 ?",
      answer:
        "Six blocs : sujet, action, caméra, lumière, ambiance sonore, et dialogue si un personnage parle. Les quatre premiers sont communs à tous les modèles vidéo. Les deux derniers sont propres à Veo, qui génère l'audio en même temps que l'image. Un prompt qui ne décrit pas le son laisse Veo l'inventer, et il invente souvent une musique générique qui ne colle à rien.",
    },
    {
      question: "Comment faire parler un personnage dans Veo 3 ?",
      answer:
        "Écris la réplique entre guillemets, introduite par une formule du type « he says: » ou « she whispers: ». Tu peux écrire le prompt en anglais et la réplique en français, Veo gère très bien ce mélange et le personnage parlera français. Garde la réplique courte : le clip dure 8 secondes, au-delà d'une quinzaine de mots la diction devient précipitée ou coupée.",
    },
    {
      question: "Comment éviter les sous-titres incrustés dans la vidéo ?",
      answer:
        "Ajoute « no subtitles » à la fin de tout prompt qui contient un dialogue. Dès que Veo entend une réplique, il a tendance à l'incruster en sous-titre dans l'image, souvent avec des fautes. Cette simple mention règle le problème dans la grande majorité des cas. Si un texte parasite apparaît quand même, ajoute aussi « no text overlay » et régénère.",
    },
    {
      question: "Les prompts Veo 3 fonctionnent-ils en français ?",
      answer:
        "Oui, mais l'anglais reste plus fiable pour la partie description : le vocabulaire de cadrage et de lumière (dolly-in, backlight, shallow depth of field) est mieux compris en anglais. Le bon compromis : la scène, la caméra et le son en anglais, le dialogue en français entre guillemets. C'est le format utilisé dans tous les exemples de cet article.",
    },
    {
      question: "Ces prompts marchent-ils aussi sur Veo 3.1 ?",
      answer:
        "Oui. Veo 3.1, disponible depuis octobre 2025, s'écrit exactement comme Veo 3 : mêmes blocs, mêmes règles d'audio et de dialogue. La version 3.1 ajoute des contrôles autour du prompt plutôt que dans le prompt : images de référence pour tenir un personnage, première et dernière frame imposées, extension de scène pour enchaîner les clips. La base texte reste identique.",
    },
    {
      question: "Combien de temps dure un clip généré par Veo 3 ?",
      answer:
        "8 secondes par génération, avec l'audio inclus. C'est la contrainte qui dicte toute l'écriture du prompt : une seule action, un seul mouvement de caméra, une réplique courte. Pour un format plus long, tu génères plusieurs clips et tu les montes, ou tu utilises l'extension de scène de Veo 3.1 qui repart de la dernière seconde du clip précédent.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu as recopié dans Veo 3 un prompt vidéo qui marchait très bien ailleurs, et le résultat te laisse froid : l'image est correcte, mais une musique d'ascenseur sortie de nulle part écrase la scène, et ton personnage marmonne une bouillie sous-titrée avec des fautes. Le prompt n'était pas mauvais. Il était juste muet.",
    },
    {
      type: "p",
      text: "À la fin de cet article, tu sauras écrire un prompt qui pilote l'image ET le son, faire parler un personnage en français sans sous-titres parasites, et tu repartiras avec 25 prompts testés, classés par usage : dialogue, ambiance sonore, physique, plans cinématiques, formats sociaux.",
    },
    {
      type: "p",
      text: "Le point de départ : Veo se prompte comme un tournage avec un ingénieur du son sur le plateau, pas comme un générateur d'images qui bouge. Si tu ne lui dis pas quoi enregistrer, il enregistre n'importe quoi.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Un prompt Veo 3 s'écrit comme une fiche de tournage sonore",
    },
    {
      type: "h3",
      id: "structure-six-blocs",
      text: "La structure en six blocs : quatre pour l'image, deux pour le son",
    },
    {
      type: "p",
      text: "La base ne change pas par rapport aux autres modèles : sujet, action, caméra, lumière. Si cette structure ne te dit rien, commence par nos [50 prompts vidéo IA classés par genre](/blog/prompts-video-ia-50-exemples), qui la détaillent bloc par bloc. Veo ajoute deux blocs que les autres ignorent : l'ambiance sonore et le dialogue.",
    },
    {
      type: "table",
      caption: "Les six blocs d'un prompt Veo 3",
      headers: ["Bloc", "Ce que tu décris", "Exemple"],
      rows: [
        [
          "Sujet",
          "Qui ou quoi, avec 2 ou 3 attributs concrets",
          "an elderly lighthouse keeper in a wool sweater",
        ],
        [
          "Action",
          "Un verbe, un seul mouvement principal",
          "striking glowing metal on an anvil",
        ],
        [
          "Caméra",
          "Type de plan, mouvement, focale",
          "slow dolly-in, low angle, 35mm lens",
        ],
        [
          "Lumière",
          "Source, direction, température",
          "single warm pendant light, cold blue dawn",
        ],
        [
          "Audio",
          "Ambiance, effets, présence ou absence de musique",
          "rhythmic hammer blows, roaring forge fire, no music",
        ],
        [
          "Dialogue",
          "La réplique entre guillemets, avec le ton",
          "he says calmly: 'Quarante ans que j'allume cette lampe.'",
        ],
      ],
    },
    {
      type: "p",
      text: "Le bloc audio est celui que tout le monde oublie, et c'est pourtant lui qui sépare un clip Veo crédible d'un clip générique. Quand tu écris « sizzling grill, muffled city hum, distant siren », tu diriges la bande-son aussi précisément que l'image. Quand tu n'écris rien, Veo remplit le silence avec ce qu'il veut, et ce qu'il veut est rarement ce que tu veux.",
    },
    {
      type: "h3",
      id: "regles-propres-veo",
      text: "Les règles propres à Veo avant de copier le moindre prompt",
    },
    {
      type: "p",
      text: "Première règle : 8 secondes par clip. Une action, un mouvement de caméra, une réplique courte. Tout ce qui dépasse sera compressé en purée temporelle. Deux idées, deux générations, et tu assembles au montage.",
    },
    {
      type: "p",
      text: "Deuxième règle : le dialogue s'écrit entre guillemets, introduit par « he says: » ou « she whispers: », et tu termines le prompt par « no subtitles ». Sans cette mention, Veo incruste presque systématiquement la réplique en sous-titre dans l'image, avec une orthographe de fin de soirée. C'est le travers le plus documenté du modèle, et le plus simple à éviter.",
    },
    {
      type: "p",
      text: "Troisième règle : anglais pour la description, français possible pour la réplique. Veo comprend très bien un prompt anglais dont le dialogue est en français, et le personnage parlera français. C'est le format de tous les exemples ci-dessous.",
    },
    {
      type: "p",
      text: "Un mot sur les versions : depuis octobre 2025, la version courante est Veo 3.1, qui garde exactement les mêmes règles d'écriture et ajoute des contrôles autour du prompt (images de référence, première et dernière frame, extension de scène), comme le détaille [l'annonce officielle de Google](https://developers.googleblog.com/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/). Tout ce qui suit vaut donc pour Veo 3 et 3.1. Pour le tour complet du modèle, ses accès et ses tarifs, passe par notre [guide Veo 3 pour générer des vidéos réalistes](/blog/veo-3-generer-videos-ia).",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "25 prompts Veo 3 classés par usage",
    },
    {
      type: "p",
      text: "Chaque prompt est un bloc autonome à copier tel quel, avec une note qui t'explique pourquoi il marche. Tu peux démonter les blocs et les recombiner : un dialogue de la famille 1 avec une lumière de la famille 4, ça fonctionne.",
    },
    {
      type: "h3",
      id: "prompts-dialogue",
      text: "Dialogues et scènes parlées (1 à 5)",
    },
    {
      type: "p",
      text: "La famille signature de Veo. Personne d'autre ne fait parler un personnage avec cette qualité de synchronisation labiale dès la génération. La recette : une réplique courte, un ton précisé, une ambiance sonore derrière la voix, et « no subtitles » en garde-fou.",
    },
    {
      type: "quote",
      text: "A street interview in a busy Paris morning market, a cheerful baker in a flour-dusted apron looks at the reporter and says: 'Le secret, c'est le beurre, rien d'autre.' Handheld medium shot, soft daylight, ambient crowd chatter and distant traffic, no subtitles",
      cite: "1. Micro-trottoir : la réplique entre guillemets, la foule décrite derrière, et le garde-fou no subtitles.",
    },
    {
      type: "quote",
      text: "Two old friends playing chess in a quiet park, one moves a piece, smiles and says: 'Échec et mat, comme en 1998.' The other laughs softly. Static medium two-shot, late afternoon sun through leaves, birdsong and rustling leaves, no subtitles",
      cite: "2. Deux personnages : une seule réplique et une réaction, jamais un échange complet en 8 secondes.",
    },
    {
      type: "quote",
      text: "A woman in a dim kitchen answers her phone, pauses, then whispers: 'Il est revenu.' Slow push-in on her face, single warm pendant light, low room tone, refrigerator hum, no subtitles",
      cite: "3. Le chuchotement : préciser le ton (whispers) change la performance vocale du tout au tout.",
    },
    {
      type: "quote",
      text: "An elderly lighthouse keeper interviewed in front of a foggy coastline, he says calmly: 'Quarante ans que j'allume cette lampe.' Locked-off medium close-up, overcast diffused light, distant foghorn and waves, documentary style, no subtitles",
      cite: "4. Le faux documentaire : cadre fixe, lumière plate, corne de brume au loin. L'interview qui n'a jamais eu lieu.",
    },
    {
      type: "quote",
      text: "A confident chef in a bright modern kitchen looks straight at camera and says: 'Ce soir, on cuisine simple.' Slow dolly-in, clean key light, sizzling pan in the background, cooking show style, no subtitles",
      cite: "5. Face caméra : le regard adressé au spectateur, la base de tout format présentateur.",
    },
    {
      type: "h3",
      id: "prompts-ambiance-sonore",
      text: "Ambiances sonores et effets (6 à 10)",
    },
    {
      type: "p",
      text: "Ici, pas de dialogue : le son EST le sujet. La mention « no music » est ton meilleur outil dans cette famille, parce que Veo adore coller une nappe musicale générique dès qu'il hésite.",
    },
    {
      type: "quote",
      text: "An empty beach house porch as a storm approaches, wooden shutters rattling, wind chimes clinking wildly, heavy rain starting on the tin roof, slow pan across the porch, dark grey sky, cold diffused light, no music",
      cite: "6. La tempête : trois sources sonores hiérarchisées (volets, carillon, pluie), zéro musique.",
    },
    {
      type: "quote",
      text: "A misty pine forest at dawn, sunbeams cutting through fog, birdsong, a woodpecker hammering in the distance, soft footsteps on wet moss, slow forward tracking shot at ground level, cool morning light, no music",
      cite: "7. La forêt : le pic-vert « in the distance » crée la profondeur sonore, comme un arrière-plan visuel.",
    },
    {
      type: "quote",
      text: "A rain-soaked neon alley at night, steam rising from a small food stall, sizzling grill, muffled city hum, one distant siren, slow lateral tracking shot, teal and magenta reflections on wet asphalt, film grain",
      cite: "8. La ruelle de nuit : le grésillement proche contre la rumeur lointaine, un mixage écrit dans le prompt.",
    },
    {
      type: "quote",
      text: "A blacksmith striking glowing metal on an anvil, rhythmic hammer blows, roaring forge fire, sparks flying, low angle close-up, warm orange firelight against a dark workshop, film grain, no music",
      cite: "9. La forge : le rythme des coups de marteau structure le clip mieux qu'une musique.",
    },
    {
      type: "quote",
      text: "Extreme macro shot of a knife slicing slowly through a glossy chocolate cake, crisp cutting sound, quiet studio ambience, soft overhead light, shallow depth of field, ASMR style, no music",
      cite: "10. L'ASMR : un seul son, très proche, dans un silence décrit. Le format qui cartonne en vertical.",
    },
    {
      type: "h3",
      id: "prompts-physique",
      text: "Physique et matières (11 à 15)",
    },
    {
      type: "p",
      text: "La deuxième force de Veo après l'audio : la simulation physique. Eau, tissu, verre, poussière se comportent de façon crédible si tu décris la matière et la force qui s'y applique. Bonus : chaque interaction physique produit son propre son, pense à le nommer.",
    },
    {
      type: "quote",
      text: "A glass sphere dropping into a still pool of water in ultra slow motion, crown splash rising, droplets catching the light, high-speed camera look, side backlight, dark background, soft water splash sound",
      cite: "11. La couronne d'eau : le test physique classique, et Veo le passe proprement.",
    },
    {
      type: "quote",
      text: "A long silk scarf caught by the wind on a clothesline at golden hour, fabric rippling in slow waves, gentle breeze sound, static wide shot, warm backlight, film grain",
      cite: "12. La soie au vent : caméra fixe, c'est le tissu qui joue. Les plis crédibles font le réalisme.",
    },
    {
      type: "quote",
      text: "A wine glass shattering on a stone floor in extreme slow motion, shards scattering and sliding, sharp crack followed by ringing fragments, macro low angle, hard side light, dark studio",
      cite: "13. Le verre brisé : « sharp crack followed by ringing fragments », le son écrit en deux temps comme l'image.",
    },
    {
      type: "quote",
      text: "An off-road motorcycle drifting through desert sand, rear wheel throwing a curtain of dust backlit by the low sun, engine roar and spraying gravel, low tracking shot alongside, golden hour, cinematic",
      cite: "14. La poussière rétroéclairée : la matière en suspension dans un contre-jour, spectaculaire à chaque fois.",
    },
    {
      type: "quote",
      text: "Honey pouring slowly onto a stack of pancakes, thick golden ribbon folding on itself, soft morning window light from the left, quiet kitchen ambience, macro static shot, warm tones",
      cite: "15. Le miel : les fluides visqueux, un piège pour la plupart des modèles, un point fort de Veo.",
    },
    {
      type: "h3",
      id: "prompts-cinematiques",
      text: "Plans cinématiques signature (16 à 20)",
    },
    {
      type: "p",
      text: "Les recettes classiques du plan de cinéma, adaptées à Veo : contraste d'échelle, lumière motivée, et une couche sonore qui installe le lieu. Si le vocabulaire lumière te manque, notre méthode pour [décrire la lumière dans un prompt](/blog/decrire-lumiere-prompt-ia) s'applique mot pour mot ici.",
    },
    {
      type: "quote",
      text: "A lone hiker reaching a windy mountain ridge above a sea of clouds, jacket flapping, camera craning up to reveal the vast range, strong wind gusts and a distant eagle cry, cold blue hour light, epic scale, film grain",
      cite: "16. Le contraste d'échelle : un humain minuscule, un décor immense, et le vent qui porte le plan.",
    },
    {
      type: "quote",
      text: "A 1970s detective stepping out of a car into a rainy night street and closing the door, buzzing neon hotel sign, wet asphalt reflections, slow push-in from across the street, sodium orange streetlight, thriller mood, no music",
      cite: "17. Le polar : claquement de portière, néon qui grésille. Deux sons diégétiques et l'époque est posée.",
    },
    {
      type: "quote",
      text: "An abandoned theater with dust floating in a single shaft of light, a velvet curtain moving slightly in a draft, creaking wood, faint wind, slow dolly forward down the center aisle, high contrast chiaroscuro",
      cite: "18. Le théâtre vide : le craquement du bois fait plus pour l'atmosphère que dix adjectifs.",
    },
    {
      type: "quote",
      text: "A container ship passing under a huge steel bridge at dawn, seagulls, deep engine hum, aerial wide shot slowly pulling back, pastel morning haze, muted color palette, epic scale",
      cite: "19. Le pull-back aérien : la révélation progressive de l'échelle, avec la basse du moteur en fondation.",
    },
    {
      type: "quote",
      text: "A child releasing a paper lantern into a night sky already filled with hundreds of glowing lanterns, soft crowd murmur, camera tilting up following the lantern, warm candlelight against deep blue night, no music",
      cite: "20. Les lanternes : le tilt qui suit l'objet, le murmure de foule en nappe. L'émotion sans violons.",
    },
    {
      type: "h3",
      id: "prompts-formats-sociaux",
      text: "Formats sociaux : vlog, pub, food (21 à 25)",
    },
    {
      type: "p",
      text: "Les formats qui tournent sur TikTok et les Shorts. Le vlog selfie d'une créature impossible est devenu LE format viral de Veo : caméra tremblée, voix directe, décor crédible autour d'un sujet qui ne l'est pas.",
    },
    {
      type: "quote",
      text: "Selfie-style handheld video of a yeti hiking through a snowy forest, he talks to the camera with a friendly deep voice: 'Jour 12, toujours aucun humain en vue.' Snow crunching under his steps, wind in the trees, vlog style, slight camera shake, no subtitles",
      cite: "21. Le vlog impossible : le tremblé de caméra et la neige qui crisse vendent l'illusion documentaire.",
    },
    {
      type: "quote",
      text: "A matte black wireless earbuds case opening on a slowly rotating pedestal, satisfying magnetic click, soft whoosh, slow orbit shot, dark studio with a single cool rim light, premium tech commercial, no music",
      cite: "22. La pub tech : le clic magnétique « satisfying », un détail sonore qui fait toute la pub.",
    },
    {
      type: "quote",
      text: "A glass of iced tea filling in slow motion, ice cubes clinking, liquid fizzing, condensation forming on the glass, bright summer backlight, clean white background, crisp commercial look",
      cite: "23. La boisson : trois sons de matière (glaçons, pétillement, versement) au lieu d'un jingle.",
    },
    {
      type: "quote",
      text: "Close-up of smash burgers sizzling on a flat-top grill, loud sizzle, spatula press, steam bursting, handheld macro shot, warm tungsten light, street food documentary style, no music",
      cite: "24. Le food porn : le grésillement fort et assumé, c'est lui la voix off.",
    },
    {
      type: "quote",
      text: "Wildlife documentary shot of a tiny hamster building a dam of twigs across a garden stream, a calm narrator voice says: 'Ici, l'ingénieur ne dort jamais.' Telephoto compression look, soft evening light, gentle river sounds, no subtitles",
      cite: "25. Le faux docu animalier : la voix de narrateur posée sur une scène absurde, un classique du format court.",
    },
    {
      type: "p",
      text: "> Pro Tip : génère chaque prompt deux fois avant de juger. L'image varie peu entre deux générations, mais l'audio varie énormément : même prompt, une prise avec une voix juste et une prise avec une voix plate. Garde la meilleure, c'est le même réflexe qu'au tournage réel.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Déboguer un prompt Veo 3 : les quatre pannes classiques",
    },
    {
      type: "h3",
      id: "panne-sous-titres",
      text: "Panne 1 : des sous-titres incrustés que personne n'a demandés",
    },
    {
      type: "p",
      text: "Symptôme : ton personnage parle, et sa réplique s'affiche en bas de l'image, souvent avec des fautes, parfois dans une police différente à chaque génération. Impossible à retirer au montage sans recadrer.",
    },
    {
      type: "p",
      text: "Fix concret : « no subtitles » en fin de prompt, systématiquement dès qu'il y a un dialogue. Si un texte parasite survit, ajoute « no text overlay » et régénère. Ne perds pas de temps à retoucher : régénérer coûte moins cher que masquer.",
    },
    {
      type: "h3",
      id: "panne-musique-generique",
      text: "Panne 2 : une musique d'ascenseur écrase la scène",
    },
    {
      type: "p",
      text: "Symptôme : ta scène de forge ou ta ruelle de nuit arrive avec une nappe de piano positif, comme une pub d'assurance. L'ambiance que tu avais en tête a disparu sous la moquette sonore.",
    },
    {
      type: "p",
      text: "Fix concret : décris la bande-son que tu veux, puis ferme la porte avec « no music ». Veo ne compose une musique que quand tu ne lui dis rien. Trois sons diégétiques hiérarchisés (un proche, un moyen, un lointain) remplissent l'espace bien mieux qu'une nappe.",
    },
    {
      type: "h3",
      id: "panne-trop-actions",
      text: "Panne 3 : trois actions demandées, une bouillie livrée",
    },
    {
      type: "p",
      text: "Symptôme : tu as écrit « elle entre, s'assoit, ouvre son ordinateur et commence à taper », et Veo a tout compressé en une gesticulation confuse où rien n'est lisible. Les 8 secondes n'absorbent pas un enchaînement.",
    },
    {
      type: "p",
      text: "Fix concret : une action par clip, point. Découpe ta séquence en plans comme le ferait un monteur, génère chaque plan séparément, assemble ensuite. Sur Veo 3.1, l'extension de scène enchaîne les clips en repartant de la dernière seconde, ce qui rend ce découpage encore plus naturel.",
    },
    {
      type: "h3",
      id: "panne-prompt-muet",
      text: "Panne 4 : un prompt d'image recyclé tel quel",
    },
    {
      type: "p",
      text: "Symptôme : tu as collé ton meilleur prompt Midjourney, et le résultat est un plan figé, joli mais mort, avec un fond sonore aléatoire. Normal : rien dans le prompt ne décrit ni mouvement ni son.",
    },
    {
      type: "p",
      text: "Fix concret : ajoute les deux blocs manquants avant de régénérer, une action physique (même minime : vapeur qui monte, tissu qui bouge) et une ambiance sonore. Un prompt Veo sans verbe ni son gaspille précisément ce qui justifie de choisir Veo plutôt qu'un autre modèle. Et si tu hésites encore sur ce choix, notre [comparatif Veo 3 vs Sora](/blog/veo-3-vs-sora-comparatif) remet le duel en perspective depuis la fermeture de Sora.",
    },
    {
      type: "p",
      text: "Ces 25 prompts te donnent la matière première, mais la vraie compétence, c'est de savoir les adapter à TES sujets et enchaîner les plans en séquence qui raconte quelque chose. C'est exactement ce qu'on travaille pas à pas dans la [formation IA vidéo gratuite AI Studios](https://www.ai-studios.fr/formation-ia-gratuite-video), du premier prompt au montage final.",
    },
    {
      type: "h2",
      id: "faq",
      text: "Questions fréquentes",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Quelle est la structure idéale d'un prompt Veo 3 ?",
    },
    {
      type: "p",
      text: "Six blocs : sujet, action, caméra, lumière, ambiance sonore, et dialogue si un personnage parle. Les quatre premiers sont communs à tous les modèles vidéo. Les deux derniers sont propres à Veo, qui génère l'audio en même temps que l'image. Un prompt qui ne décrit pas le son laisse Veo l'inventer, et il invente souvent une musique générique qui ne colle à rien.",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Comment faire parler un personnage dans Veo 3 ?",
    },
    {
      type: "p",
      text: "Écris la réplique entre guillemets, introduite par une formule du type « he says: » ou « she whispers: ». Tu peux écrire le prompt en anglais et la réplique en français, Veo gère très bien ce mélange et le personnage parlera français. Garde la réplique courte : le clip dure 8 secondes, au-delà d'une quinzaine de mots la diction devient précipitée ou coupée.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Comment éviter les sous-titres incrustés dans la vidéo ?",
    },
    {
      type: "p",
      text: "Ajoute « no subtitles » à la fin de tout prompt qui contient un dialogue. Dès que Veo entend une réplique, il a tendance à l'incruster en sous-titre dans l'image, souvent avec des fautes. Cette simple mention règle le problème dans la grande majorité des cas. Si un texte parasite apparaît quand même, ajoute aussi « no text overlay » et régénère.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "Les prompts Veo 3 fonctionnent-ils en français ?",
    },
    {
      type: "p",
      text: "Oui, mais l'anglais reste plus fiable pour la partie description : le vocabulaire de cadrage et de lumière (dolly-in, backlight, shallow depth of field) est mieux compris en anglais. Le bon compromis : la scène, la caméra et le son en anglais, le dialogue en français entre guillemets. C'est le format utilisé dans tous les exemples de cet article.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Ces prompts marchent-ils aussi sur Veo 3.1 ?",
    },
    {
      type: "p",
      text: "Oui. Veo 3.1, disponible depuis octobre 2025, s'écrit exactement comme Veo 3 : mêmes blocs, mêmes règles d'audio et de dialogue. La version 3.1 ajoute des contrôles autour du prompt plutôt que dans le prompt : images de référence pour tenir un personnage, première et dernière frame imposées, extension de scène pour enchaîner les clips. La base texte reste identique.",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Combien de temps dure un clip généré par Veo 3 ?",
    },
    {
      type: "p",
      text: "8 secondes par génération, avec l'audio inclus. C'est la contrainte qui dicte toute l'écriture du prompt : une seule action, un seul mouvement de caméra, une réplique courte. Pour un format plus long, tu génères plusieurs clips et tu les montes, ou tu utilises l'extension de scène de Veo 3.1 qui repart de la dernière seconde du clip précédent.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-08-17 -->
