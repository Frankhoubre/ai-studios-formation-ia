import type { Article } from "@/lib/types/article";

export const promptsSunoStyles: Article = {
  title: "Prompts Suno : 22 styles qui sonnent, prêts à copier",
  slug: "prompts-suno-styles",
  description:
    "22 prompts Suno classés par usage vidéo, la bonne façon de remplir le champ de style sur la v6, et quoi corriger quand le morceau sonne comme une banque de son.",
  excerpt:
    "Un prompt de style Suno qui marche se lit comme une note d'arrangeur : instruments, énergie, prise de son. Voici 22 exemples classés par usage vidéo, adaptés à la v6.",
  category: "prompting",
  tags: ["suno", "prompts musique", "suno v6", "musique ia", "champ de style"],
  date: "2026-10-08",
  updatedAt: "2026-10-08",
  readingTime: 11,
  author: { name: "Frank Houbre", url: "https://www.ai-studios.fr" },
  image: "/images/articles/prompts-suno-styles.webp",
  imageAlt:
    "Une femme aux cheveux bouclés écoute avec des écouteurs filaires dans un train au coucher du soleil et note des listes de mots raturées dans un carnet, un diapason posé à côté",
  keywords: [
    "prompt suno",
    "suno exemples",
    "prompt style suno",
    "suno v6 prompt",
    "exclude styles suno",
  ],
  relatedSlugs: [
    "suno-guide-complet",
    "prompts-video-ia-50-exemples",
    "udio-vs-suno",
  ],
  faq: [
    {
      question: "Comment écrire un bon prompt de style sur Suno ?",
      answer:
        "Nomme un genre précis, deux ou trois instruments, une énergie et un type de voix, puis arrête-toi. « Moderne » ou « entraînant » ne disent rien au modèle. « Andante acoustic folk, fingerpicked nylon guitar, brushed snare, soft female vocal » lui donne quatre décisions à appliquer. Le glossaire officiel de Suno recommande d'ailleurs de combiner un terme de tempo et un genre, comme « slow adagio ballad ».",
    },
    {
      question: "Qu'est-ce qui change pour les prompts avec Suno v6 ?",
      answer:
        "Depuis le 9 septembre 2026, tous les modèles antérieurs à la v6 sont retirés. La v6 comprend mieux le vocabulaire des musiciens et accepte des consignes complexes en mode simple, avec plusieurs sources à la fois. Elle permet aussi de corriger un morceau en langage courant, par exemple en demandant de faire chanter le refrain par une chorale gospel sans toucher au reste.",
    },
    {
      question: "Peut-on citer un artiste dans un prompt Suno ?",
      answer:
        "Non. La page d'aide de Suno sur la modération indique qu'une génération peut être bloquée si elle contient le nom d'un artiste ou d'une personne connue. Décris plutôt ce que tu entends chez cet artiste : l'époque, l'instrument principal, la façon de chanter, la prise de son. C'est plus long à écrire et beaucoup plus fiable.",
    },
    {
      question: "À quoi servent Weirdness et Style Influence ?",
      answer:
        "Ce sont les deux curseurs des options avancées du mode personnalisé. Weirdness va de Safe à Chaos, 50 % correspondant au résultat attendu. Style Influence règle à quel point le modèle colle à ton champ de style, de Loose à Strong. Pour une musique de vidéo qui doit rester sage, monte Style Influence et laisse Weirdness sous la moitié.",
    },
    {
      question: "Comment empêcher Suno d'ajouter un instrument ou une voix ?",
      answer:
        "Avec le champ Exclude des options avancées. Écrire « no drums » dans le style revient souvent à prononcer le mot drums. Mets « drums » dans Exclude. Suno conseille la même logique pour la voix : écrire [female vocals] dans les paroles et exclure « male vocals ».",
    },
    {
      question: "Faut-il écrire ses prompts Suno en anglais ?",
      answer:
        "Pour le champ de style, je te le conseille. Les termes de genre, de production et d'interprétation du glossaire officiel sont tous en anglais, et tu évites que le modèle traduise à sa façon. Les paroles, elles, s'écrivent dans la langue que tu veux entendre chanter, y compris en français.",
    },
  ],
  content: [
    {
      type: "p",
      text: "Tu tapes « musique cinématique épique » dans Suno, tu obtiens la même nappe de cordes que tout le monde, et ta vidéo sonne comme une démo de banque de son. Le modèle a fait exactement ce que tu as demandé. Tu lui as décrit une ambiance, et face à une ambiance il sort sa réponse la plus moyenne.",
    },
    {
      type: "p",
      text: "Cet article te donne 22 prompts de style classés par usage vidéo (voix off, pub, documentaire, tension, clip chanté), la façon de les régler dans la v6 sortie le 9 septembre 2026, et une méthode pour corriger un morceau qui rate au lieu de relancer dix fois.",
    },
    {
      type: "p",
      text: "Mon parti pris : un bon prompt Suno ressemble à une note d'arrangeur. Des instruments, un tempo, une voix, une prise de son. Les adjectifs d'humeur, le modèle les comble avec ce qu'il a de plus banal.",
    },
    {
      type: "h2",
      id: "core-concepts",
      text: "Ce que la v6 lit dans un prompt de style",
    },
    {
      type: "p",
      text: "Si tu reprends un vieux tuto, vérifie d'abord la version. Suno a lancé la famille v6 le 9 septembre 2026 et la [FAQ officielle de la v6](https://help.suno.com/en/articles/13924481) précise que tous les modèles antérieurs sont retirés. Tes anciens morceaux restent dans ta bibliothèque, mais tu ne peux plus générer avec la v5.5. Les astuces écrites pour la v4 ou la v5 marchent encore en partie, et certaines ne servent plus à rien.",
    },
    {
      type: "image",
      src: "/images/articles/prompts-suno-styles-v6.webp",
      alt: "Page officielle des notes de version de Suno datée du 9 septembre 2026, titrée Introducing v6, qui présente les modèles v6, v6-wild et v6-mini",
      caption: "*Source : suno.com/release-notes/introducing-v6, capture du 8 octobre 2026.*",
    },
    {
      type: "h3",
      text: "Trois modèles, trois façons de réagir à ton texte",
    },
    {
      type: "p",
      text: "La v6 est le modèle principal, décrit par Suno comme fiable et précis. La v6-wild s'éloigne volontairement de ton prompt pour proposer des résultats moins prévisibles. La v6-mini est plus rapide et c'est la seule ouverte au compte gratuit, la v6 et la v6-wild étant réservées aux abonnés Pro et Premier. Les trois génèrent jusqu'à 8 minutes d'un coup.",
    },
    {
      type: "p",
      text: "Concrètement, pour une musique de vidéo, travaille sur la v6. La wild sert à chercher une idée quand tu n'en as pas, puis à revenir sur la v6 pour la fixer, ce que Suno suggère lui-même. Sur un brief client, elle te fera perdre du temps.",
    },
    {
      type: "h3",
      text: "Mode simple ou mode personnalisé",
    },
    {
      type: "p",
      text: "Grosse nouveauté : le mode simple accepte désormais des consignes complexes et plusieurs sources à la fois (morceau Suno, fichier audio, image, vidéo). Tu peux y écrire une phrase complète, comme une demande à un compositeur. Le mode personnalisé garde ses champs séparés : le style, les paroles, et les options avancées avec Exclude, le choix du genre de la voix et les curseurs.",
    },
    {
      type: "p",
      text: "Pour livrer, je reste en personnalisé. Le champ de style est une fiche que tu peux réutiliser à l'identique d'un épisode à l'autre, alors qu'une phrase libre se réécrit à chaque fois un peu différemment. Le mode simple sert à explorer, et c'est déjà beaucoup.",
    },
    {
      type: "h3",
      text: "La recette des prompts de ce pack",
    },
    {
      type: "p",
      text: "Chaque prompt ci-dessous suit le même ordre : un genre précis avec son tempo, deux ou trois instruments nommés, une indication de dynamique ou de structure, puis la voix ou l'absence de voix. Le [glossaire musical publié par Suno](https://help.suno.com/en/articles/9010177) pousse dans ce sens, avec des combinaisons comme « slow adagio ballad » ou « sparse piano and vocals ». Les termes de tempo italiens y sont même chiffrés : andante couvre environ 76 à 108 BPM, allegro 120 à 168.",
    },
    {
      type: "p",
      text: "Les prompts sont en anglais, le vocabulaire du glossaire l'est aussi. Si tu as déjà une méthode pour les prompts d'images, c'est la même logique que [la structure en quatre blocs](/blog/prompt-structure-4-blocs-ia) : on décrit ce qui doit exister, dans un ordre stable.",
    },
    {
      type: "h2",
      id: "practical-workflow",
      text: "22 prompts Suno classés par usage vidéo",
    },
    {
      type: "table",
      caption: "Quel réglage selon le livrable (curseurs des options avancées, mode personnalisé)",
      headers: ["Livrable", "Familles de prompts", "Weirdness", "Style Influence", "Voix"],
      rows: [
        ["Fond sous voix off", "1 à 5", "Bas", "Haut", "Instrumental, exclure les voix"],
        ["Pub de 15 à 30 secondes", "6 à 9", "Moyen", "Haut", "Souvent instrumental"],
        ["Documentaire, film d'entreprise", "10 à 13", "Bas", "Haut", "Instrumental"],
        ["Tension, bande-annonce", "14 à 17", "Moyen à haut", "Moyen", "Chœurs possibles"],
        ["Clip chanté, générique", "18 à 22", "Moyen", "Moyen", "Paroles écrites par toi"],
      ],
    },
    {
      type: "p",
      text: "Les curseurs du tableau sont mes réglages d'habitude. Suno ne donne qu'un repère officiel, 50 % de Weirdness pour un résultat normal, le reste se règle à l'oreille.",
    },
    {
      type: "h3",
      id: "prompts-voix-off",
      text: "Sous une voix off : laisser de la place aux médiums",
    },
    {
      type: "p",
      text: "Une voix parlée occupe les médiums. Ta musique doit vivre au-dessus et en dessous : basses rondes, aigus discrets, peu de mélodie. Mets « vocals » dans Exclude pour ces cinq prompts.",
    },
    {
      type: "quote",
      text: "Andante lo-fi hip hop, warm Rhodes chords, soft vinyl crackle, muted kick, sparse arrangement, background chords only",
      cite: "1. Le fond de vidéo YouTube qui ne se fait jamais remarquer.",
    },
    {
      type: "quote",
      text: "Minimal ambient, low sustained synth pad, slow pulsing sub bass, distant felt piano notes, very sparse, pianissimo",
      cite: "2. Pour une voix posée sur un sujet sérieux, tutoriel ou explication.",
    },
    {
      type: "quote",
      text: "Acoustic folk instrumental, fingerpicked nylon guitar, light shaker, upright bass, andante, intimate close-miked recording",
      cite: "3. Le vlog de voyage ou d'artisan, chaleureux sans être niais.",
    },
    {
      type: "quote",
      text: "Downtempo electronic, round analog bass, brushed snare loop, airy pad in the background, steady groove, flat dynamics",
      cite: "4. Dynamique plate exprès : rien ne monte, donc rien ne vient couvrir la voix.",
    },
    {
      type: "quote",
      text: "Modern classical, solo cello ostinato, soft string ensemble, legato, slow adagio, warm hall reverb, sparse",
      cite: "5. L'ostinato tient le rythme sans voler la vedette au texte.",
    },
    {
      type: "h3",
      id: "prompts-pub",
      text: "Pour une pub courte : un motif reconnaissable tout de suite",
    },
    {
      type: "p",
      text: "Une pub n'a pas le temps d'installer une intro. Demande un motif dès la première mesure et une fin franche. La méthode complète pour caler la musique sur le montage est dans [l'article sur la musique de pub courte avec Suno](/blog/suno-musique-pub-courte).",
    },
    {
      type: "quote",
      text: "Upbeat allegro indie pop, bright palm-muted electric guitar, handclaps, tight kick and snare, catchy whistled hook from the first bar, clean ending",
      cite: "6. Le classique de la pub lifestyle, le sifflement fait office de logo sonore.",
    },
    {
      type: "quote",
      text: "Funk, slap bass riff, wah guitar, tight brass stabs, punchy drums, short and energetic, hard stop at the end",
      cite: "7. Pour un produit qui assume d'être fun. Le « hard stop » sert la cut finale.",
    },
    {
      type: "quote",
      text: "Minimal electronic, pulsing synth arpeggio, crisp hi-hats, deep sub bass, glossy production, crescendo into a short drop",
      cite: "8. Tech, appli, objet connecté. Le drop tombe pile sur le plan produit.",
    },
    {
      type: "quote",
      text: "French chanson inspired instrumental, accordion melody, pizzicato strings, light swing drums, playful, short",
      cite: "9. L'épicerie fine, la boulangerie, le commerce de quartier.",
    },
    {
      type: "h3",
      id: "prompts-documentaire",
      text: "Documentaire et film d'entreprise : sérieux sans être triste",
    },
    {
      type: "quote",
      text: "Cinematic minimalism, repeating piano motif, soft string swells, subtle electronic pulse, andante, hopeful, gradual crescendo",
      cite: "10. Le fond de film d'entreprise qui avance sans tambour ni trompette.",
    },
    {
      type: "quote",
      text: "Post-rock instrumental, clean delayed electric guitars, slow building drums, warm bass, crescendo into wide final section",
      cite: "11. Pour un portrait ou une histoire de fondateur, la montée raconte à ta place.",
    },
    {
      type: "quote",
      text: "Nordic ambient, solo piano with felt mute, field recording texture of wind, distant strings, very slow, melancholic but warm",
      cite: "12. Nature, territoire, plan large sur un paysage réel.",
    },
    {
      type: "quote",
      text: "Light orchestral, woodwinds melody, plucked strings, soft timpani, curious and gentle, homophonic arrangement",
      cite: "13. Science, pédagogie, vidéo pour enfants. Les bois apportent la curiosité.",
    },
    {
      type: "h3",
      id: "prompts-tension",
      text: "Tension, thriller et bande-annonce",
    },
    {
      type: "p",
      text: "Ici, la musique porte la structure. Si tu montes une bande-annonce, le découpage en trois temps est détaillé dans [le tutoriel de bande-annonce IA](/blog/bande-annonce-ia).",
    },
    {
      type: "quote",
      text: "Dark cinematic trailer, low brass hits, ticking clock percussion, rising string tremolo, crescendo, silence, then massive final hit",
      cite: "14. La structure de trailer en une ligne, silence compris.",
    },
    {
      type: "quote",
      text: "Dark synthwave, pulsing analog bass arpeggio, gated reverb drums, cold pads, 80s thriller mood, steady tension",
      cite: "15. La poursuite nocturne, la ville au néon.",
    },
    {
      type: "quote",
      text: "Suspense underscore, dissonant string clusters, sparse prepared piano notes, deep drones, rubato, unsettling",
      cite: "16. Le plan qui dure trop longtemps, exprès.",
    },
    {
      type: "quote",
      text: "Epic hybrid orchestral, taiko drums, staccato strings, full choir chanting vowels, distorted synth bass, fortissimo climax",
      cite: "17. « Chanting vowels » évite que le chœur chante des mots inventés.",
    },
    {
      type: "h3",
      id: "prompts-chantes",
      text: "Clip chanté et générique : style plus paroles",
    },
    {
      type: "p",
      text: "Pour les morceaux chantés, le style décrit le son et les paroles portent la structure, avec des balises entre crochets comme [Verse], [Chorus] ou [Bridge]. Suno utilise lui-même cette syntaxe dans ses conseils, en suggérant d'écrire [female vocals] dans les paroles. Tu peux aussi choisir le genre de la voix dans les options avancées et le préciser dans le style, comme le montre [l'aide de Suno sur le choix de la voix](https://help.suno.com/en/articles/10153473).",
    },
    {
      type: "quote",
      text: "French pop, intimate female vocal, close-miked, acoustic guitar and soft synth bass, minimal drums, verse-chorus-verse with short bridge",
      cite: "18. La chanson en français pour un clip ou une vidéo de mariage. Les paroles, elles, s'écrivent en français.",
    },
    {
      type: "quote",
      text: "Blues rock, gritty male vocal, overdriven guitar riff, Hammond organ, live room drums, call and response chorus",
      cite: "19. Calqué sur l'exemple officiel « blues rock with gritty male vocal », enrichi.",
    },
    {
      type: "quote",
      text: "Neo soul, smooth falsetto male vocal, lush vocal harmonization, Rhodes, round bass, laid-back groove, short vocal runs",
      cite: "20. Falsetto, harmonization et vocal run viennent du glossaire de Suno.",
    },
    {
      type: "quote",
      text: "Gospel choir, powerful lead belt, hand claps, Hammond organ, piano, call and response, joyful crescendo",
      cite: "21. Pour un générique de fin ou une célébration.",
    },
    {
      type: "quote",
      text: "Chiptune pop, 8-bit square wave lead, punchy drums, bright synth bass, cheerful male vocal with light auto-tune, short intro",
      cite: "22. Le générique de chaîne gaming ou de série animée courte.",
    },
    {
      type: "ol",
      items: [
        "Choisis la famille d'après ton livrable dans le tableau. Le prompt qui te plaît le plus à l'écoute n'est pas forcément celui qui tiendra sous une voix off.",
        "Colle le prompt dans le champ de style du mode personnalisé, sur le modèle v6.",
        "Remplace un seul élément à la fois : un instrument, le tempo ou la voix. Si tu changes tout, tu ne sauras pas ce qui a marché.",
        "Remplis Exclude avec ce que tu ne veux pas entendre, et règle les deux curseurs selon le tableau.",
        "Génère deux fois, écoute sur le haut-parleur d'un téléphone avec ta voix off par-dessus, puis tranche.",
        "Quand une version te convient, garde le prompt exact dans un fichier, avec la date et le modèle utilisé.",
      ],
    },
    {
      type: "p",
      text: "> Pro Tip : une fois le bon morceau trouvé, crée une Persona à partir de lui. D'après l'aide de Suno, ses détails de style remplissent automatiquement le champ Style of Music au prochain morceau. C'est le moyen le plus simple pour qu'une série de vidéos garde la même couleur sonore.",
    },
    {
      type: "p",
      text: "Sur les crédits, les offres et les quotas de téléchargement, tout est dans notre [guide complet de Suno](/blog/suno-guide-complet). Et si tu te demandes ce que tu as le droit de faire de ces morceaux dans une vidéo monétisée, lis [la musique IA libre de droits](/blog/musique-ia-droits-videos) avant de publier.",
    },
    {
      type: "h2",
      id: "trench-warfare",
      text: "Quand le morceau ne sonne pas : quatre corrections",
    },
    {
      type: "h3",
      text: "Le résultat sonne générique",
    },
    {
      type: "p",
      text: "Symptôme : tu reconnais la nappe, la batterie, la montée. Tout est propre et rien ne reste en tête. En général, ton prompt contient des adjectifs (epic, emotional, modern) et pas assez d'instruments.",
    },
    {
      type: "p",
      text: "Fix concret : supprime tous les adjectifs d'humeur sauf un. Ajoute à la place un instrument inattendu dans le genre (accordéon dans de l'électro, violoncelle dans du lo-fi) et une indication de prise de son comme « close-miked » ou « live room ».",
    },
    {
      type: "h3",
      text: "Le nom de l'artiste bloque la génération",
    },
    {
      type: "p",
      text: "Symptôme : la génération refuse de partir, ou tu obtiens un résultat qui n'a rien à voir. Suno l'écrit noir sur blanc dans sa page sur la modération : un morceau peut ne pas être généré s'il contient le nom d'un artiste ou d'une personne connue.",
    },
    {
      type: "image",
      src: "/images/articles/prompts-suno-styles-moderation.webp",
      alt: "Page d'aide de Suno intitulée Does Suno moderate songs, avec la liste des contenus qui peuvent empêcher une génération, dont les noms d'artistes ou de personnes connus",
      caption: "*Source : help.suno.com, article « Does Suno moderate songs? », capture du 8 octobre 2026.*",
    },
    {
      type: "p",
      text: "Fix concret : écoute le morceau de référence et note quatre choses. L'époque (« late 70s »), l'instrument qui porte le titre, la manière de chanter (« crooning », « belt », « rapping »), et le traitement du son (« gated reverb drums », « tape saturation »). Ces quatre mots en disent plus au modèle qu'un nom propre, et ils ne te mettent pas en tort.",
    },
    {
      type: "h3",
      text: "L'instrument interdit revient quand même",
    },
    {
      type: "p",
      text: "Symptôme : tu as écrit « no drums » ou « without vocals » dans le style, et la batterie est là. Le modèle a retenu le mot drums et ignoré le « no », exactement comme les générateurs d'images avec leurs [prompts négatifs](/blog/prompt-negatif-ia-images-propres).",
    },
    {
      type: "p",
      text: "Fix concret : retire toute négation du champ de style et passe par Exclude, dans les options avancées. Suno l'a lancé en septembre 2024 pour les abonnés Pro et Premier, les éléments exclus s'affichent ensuite avec un signe moins sur la page du morceau, par exemple -piano. Pour la voix, applique le conseil de Suno : [female vocals] dans les paroles, « male vocals » dans Exclude.",
    },
    {
      type: "h3",
      text: "Le morceau part dans tous les sens",
    },
    {
      type: "p",
      text: "Symptôme : changement de genre au milieu, instruments que tu n'as pas demandés, structure bizarre. Soit ton prompt empile trop de genres, soit tes curseurs sont mal réglés.",
    },
    {
      type: "image",
      src: "/images/articles/prompts-suno-styles-sliders.webp",
      alt: "Page d'aide de Suno sur les Creative Sliders, avec une capture des options avancées montrant Weirdness à 90 % et Style Influence à 20 %",
      caption: "*Source : help.suno.com, article « How to Use: Creative Sliders », capture du 8 octobre 2026.*",
    },
    {
      type: "p",
      text: "Fix concret : un genre, deux au maximum. Ensuite, regarde les curseurs. Weirdness va de Safe à Chaos, 50 % donnant le résultat attendu d'après Suno, et Style Influence règle ta fidélité au prompt, de Loose à Strong. L'exemple de la capture (Weirdness à 90 %, Style Influence à 20 %) est précisément le réglage qui produit un morceau surprenant. Pour une vidéo, fais l'inverse. Et si une seule section déraille, la v6 permet de la corriger en langage courant sans régénérer le reste, du genre « change the bridge to solo piano ».",
    },
    {
      type: "h2",
      id: "faq",
      text: "FAQ",
    },
    {
      type: "h3",
      id: "faq-1",
      text: "Comment écrire un bon prompt de style sur Suno ?",
    },
    {
      type: "p",
      text: "Nomme un genre précis, deux ou trois instruments, une énergie et un type de voix, puis arrête-toi. « Moderne » ou « entraînant » ne disent rien au modèle. « Andante acoustic folk, fingerpicked nylon guitar, brushed snare, soft female vocal » lui donne quatre décisions à appliquer. Le glossaire officiel de Suno recommande d'ailleurs de combiner un terme de tempo et un genre, comme « slow adagio ballad ».",
    },
    {
      type: "h3",
      id: "faq-2",
      text: "Qu'est-ce qui change pour les prompts avec Suno v6 ?",
    },
    {
      type: "p",
      text: "Depuis le 9 septembre 2026, tous les modèles antérieurs à la v6 sont retirés. La v6 comprend mieux le vocabulaire des musiciens et accepte des consignes complexes en mode simple, avec plusieurs sources à la fois. Elle permet aussi de corriger un morceau en langage courant, par exemple en demandant de faire chanter le refrain par une chorale gospel sans toucher au reste.",
    },
    {
      type: "h3",
      id: "faq-3",
      text: "Peut-on citer un artiste dans un prompt Suno ?",
    },
    {
      type: "p",
      text: "Non. La page d'aide de Suno sur la modération indique qu'une génération peut être bloquée si elle contient le nom d'un artiste ou d'une personne connue. Décris plutôt ce que tu entends chez cet artiste : l'époque, l'instrument principal, la façon de chanter, la prise de son. C'est plus long à écrire et beaucoup plus fiable.",
    },
    {
      type: "h3",
      id: "faq-4",
      text: "À quoi servent Weirdness et Style Influence ?",
    },
    {
      type: "p",
      text: "Ce sont les deux curseurs des options avancées du mode personnalisé. Weirdness va de Safe à Chaos, 50 % correspondant au résultat attendu. Style Influence règle à quel point le modèle colle à ton champ de style, de Loose à Strong. Pour une musique de vidéo qui doit rester sage, monte Style Influence et laisse Weirdness sous la moitié.",
    },
    {
      type: "h3",
      id: "faq-5",
      text: "Comment empêcher Suno d'ajouter un instrument ou une voix ?",
    },
    {
      type: "p",
      text: "Avec le champ Exclude des options avancées. Écrire « no drums » dans le style revient souvent à prononcer le mot drums. Mets « drums » dans Exclude. Suno conseille la même logique pour la voix : écrire [female vocals] dans les paroles et exclure « male vocals ».",
    },
    {
      type: "h3",
      id: "faq-6",
      text: "Faut-il écrire ses prompts Suno en anglais ?",
    },
    {
      type: "p",
      text: "Pour le champ de style, je te le conseille. Les termes de genre, de production et d'interprétation du glossaire officiel sont tous en anglais, et tu évites que le modèle traduise à sa façon. Les paroles, elles, s'écrivent dans la langue que tu veux entendre chanter, y compris en français.",
    },
    {
      type: "p",
      text: "Pour ta prochaine vidéo, prends un seul prompt de ce pack, celui de ton livrable, et fais trois versions en ne changeant qu'un mot à chaque fois. Note ce qui bouge. Au bout de trois générations, tu sauras lire un prompt de style comme une fiche d'arrangement, et tu n'auras plus besoin de listes comme celle-ci.",
    },
    {
      type: "p",
      text: "Note de fondateur : la musique est souvent ce qui sépare une vidéo IA amateur d'une vidéo qu'on regarde jusqu'au bout. Savoir décrire un son avec des mots précis, c'est le même muscle que décrire une lumière ou un cadre, et on le travaille sur des projets concrets dans la formation IA gratuite d'AI Studios.",
    },
  ],
};

// <!-- PUBLICATION DATE: 2026-10-08 -->
