#!/usr/bin/env python3
"""
Garde-fou registre d'articles.

Vérifie que TOUT ce que `content/articles/articles.ts` importe est bien suivi
par git (donc poussé sur le remote / clonable par Vercel) :
  - chaque module importé (`@/content/articles/posts/<slug>`) a son fichier .ts tracké
  - chaque hero référencé (`image: "/images/articles/<slug>.webp"`) est tracké

Pourquoi : un fichier présent en local mais jamais `git add`-é fait passer le
build local et casse le build Vercel (clone propre depuis git) avec
"Module not found". Ce script attrape le cas AVANT le push.

Sortie : code 0 si tout est bon, code 1 sinon (avec la liste des fautifs).
Usage : python3 scripts/check-registry.py   (lancé aussi par le hook pre-push)
"""

import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REGISTRY = os.path.join(ROOT, "content/articles/articles.ts")


def tracked_files(*paths):
    """Ensemble des fichiers suivis par git (index inclus) sous les chemins donnés."""
    try:
        out = subprocess.check_output(
            ["git", "ls-files", "--", *paths], cwd=ROOT
        ).decode("utf-8")
    except subprocess.CalledProcessError:
        return set()
    return set(line for line in out.splitlines() if line)


def main():
    with open(REGISTRY, encoding="utf-8") as fh:
        src = fh.read()

    imports = re.findall(r'from "@/content/articles/posts/([a-z0-9-]+)"', src)
    tracked_posts = tracked_files("content/articles/posts")
    tracked_imgs = tracked_files("public/images/articles")

    missing_modules = []
    missing_heroes = []

    for slug in imports:
        rel = f"content/articles/posts/{slug}.ts"
        if rel not in tracked_posts:
            missing_modules.append(rel)
            continue
        # le fichier est tracké : vérifier son hero
        with open(os.path.join(ROOT, rel), encoding="utf-8") as fh:
            body = fh.read()
        m = re.search(r'image:\s*"(/images/articles/[^"]+)"', body)
        if m:
            img_rel = "public" + m.group(1)
            if img_rel not in tracked_imgs:
                missing_heroes.append(f"{img_rel}  (référencé par {rel})")

    if not missing_modules and not missing_heroes:
        print(f"check-registry : OK, {len(imports)} imports + heros tous suivis par git.")
        return 0

    print("check-registry : ECHEC, articles.ts référence des fichiers NON suivis par git.")
    print("Ces fichiers existent peut-être en local mais casseront le build Vercel.\n")
    if missing_modules:
        print("Modules d'articles manquants (git add nécessaire) :")
        for p in missing_modules:
            print(f"  - {p}")
    if missing_heroes:
        print("Images hero manquantes (git add nécessaire) :")
        for p in missing_heroes:
            print(f"  - {p}")
    print('\nCorrige avec : git add <fichiers ci-dessus>  puis recommit avant de pousser.')
    return 1


if __name__ == "__main__":
    sys.exit(main())
