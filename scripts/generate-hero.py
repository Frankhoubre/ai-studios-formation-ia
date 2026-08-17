#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Génère un visuel hero cinématique pour un article du blog AI Studios.

Style imposé : film still photoréaliste, angle dynamique, 50mm (ou 85mm),
bokeh crémeux, lumière motivée, grain 35mm, palette teal/amber, anti-look-IA.

Modèle : **Nano Banana 2** (`google/gemini-3.1-flash-image`) via le **Vercel AI
Gateway**, appelé en REST sur `/v1/chat/completions`. C'est le SEUL pipeline de
génération d'image du blog : Higgsfield MCP ne doit plus être utilisé pour les
heroes d'articles.

Le modèle ne garantit pas un ratio exact en sortie : le script demande le ratio
dans le prompt ET recadre systématiquement au ratio cible avant l'export WebP,
donc le rendu final est toujours au bon format quoi que renvoie le modèle.

Pré-requis :
  - ffmpeg dans le PATH (recadrage + export WebP, aucune autre dépendance)
  - une clé Vercel AI Gateway dans AI_GATEWAY_API_KEY (env ou .env racine,
    git-ignoré). Clé : https://vercel.com/dashboard puis AI Gateway > API Keys

Exemples :
  # défaut : Nano Banana 2, 16:9, 50mm, export 1600px
  python scripts/generate-hero.py \
    --slug prompt-negatif-ia-images-propres \
    --prompt "A focused creative in a dark studio reviewing images on a monitor"

  # portrait plus serré en 85mm
  python scripts/generate-hero.py --slug mon-article --prompt "..." --lens 85mm

  # variante preview du modèle si la version GA pose problème
  python scripts/generate-hero.py --slug mon-article --prompt "..." --preview
"""

import argparse
import base64
import json
import os
import subprocess
import sys
import tempfile
import urllib.error
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = REPO_ROOT / "public" / "images" / "articles"

AI_GATEWAY_URL = "https://ai-gateway.vercel.sh/v1/chat/completions"

# Nano Banana 2 (Gemini 3.1 Flash Image). --preview bascule sur la variante
# preview si la version GA a un souci ponctuel.
MODEL_GA = "google/gemini-3.1-flash-image"
MODEL_PREVIEW = "google/gemini-3.1-flash-image-preview"


def build_style(lens: str = "50mm", ratio: str = "16:9") -> str:
    """Style cinématique de marque, anti-look-IA. Lentille : 50mm ou 85mm."""
    return (
        f"Cinematic film still, dynamic angle, shot on a {lens} prime lens, "
        "shallow depth of field with creamy natural bokeh, photorealistic, "
        "motivated practical lighting, soft volumetric light, natural skin and "
        "material texture, subtle 35mm film grain, professional color grading, "
        "teal and amber palette, anamorphic feel, high dynamic range, looks "
        "like a real photograph from a movie, NOT AI-looking, no text, no "
        f"words, no logos, no watermark. Strict {ratio} widescreen composition."
    )


def load_dotenv() -> None:
    """Charge un .env à la racine du repo si présent (clé=valeur par ligne)."""
    env_path = REPO_ROOT / ".env"
    if not env_path.exists():
        return
    for line in env_path.read_text().splitlines():
        line = line.strip()
        if line and not line.startswith("#") and "=" in line:
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip("\"'"))


def ratio_to_float(ratio: str) -> float:
    w, h = ratio.split(":")
    return float(w) / float(h)


def generate(prompt: str, model: str, ratio: str, style: str) -> bytes:
    api_key = os.environ.get("AI_GATEWAY_API_KEY")
    if not api_key:
        sys.exit("Erreur : AI_GATEWAY_API_KEY absente (env ou .env).")

    body = {
        "model": model,
        "messages": [
            {"role": "user", "content": f"{prompt}. {style}"},
        ],
        "modalities": ["text", "image"],
        "stream": False,
        # Passthrough best-effort ; ignoré si le provider ne le supporte pas
        # encore côté REST, le recadrage post-génération corrige de toute
        # façon le ratio final.
        "providerOptions": {
            "google": {
                "responseModalities": ["TEXT", "IMAGE"],
                "imageConfig": {"aspectRatio": ratio, "imageSize": "2K"},
            }
        },
    }
    req = urllib.request.Request(
        AI_GATEWAY_URL,
        data=json.dumps(body).encode("utf-8"),
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            payload = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", errors="replace")
        sys.exit(f"Erreur AI Gateway HTTP {e.code} : {detail}")
    except urllib.error.URLError as e:
        sys.exit(f"Erreur réseau AI Gateway : {e}")

    try:
        message = payload["choices"][0]["message"]
        images = message.get("images") or []
        if not images:
            sys.exit(f"Erreur : aucune image renvoyée par le modèle. Réponse : {payload}")
        data_url = images[0]["image_url"]["url"]
    except (KeyError, IndexError) as e:
        sys.exit(f"Erreur : réponse AI Gateway inattendue ({e}). Réponse : {payload}")

    if not data_url.startswith("data:"):
        sys.exit(f"Erreur : format d'image inattendu (pas de data URI) : {data_url[:80]}")
    b64_data = data_url.split(",", 1)[1]
    return base64.b64decode(b64_data)


def to_webp(raw: bytes, dest: Path, ratio: str, width: int, quality: int) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    target = ratio_to_float(ratio)
    # Recadre au centre sur le ratio cible quoi que renvoie le modèle, puis
    # redimensionne à la largeur d'export. Garantit un rendu toujours au bon
    # format, même si le modèle ignore la consigne de ratio dans le prompt.
    crop_filter = (
        f"crop='if(gt(iw/ih,{target}),ih*{target},iw)':"
        f"'if(gt(iw/ih,{target}),ih,iw/{target})',scale={width}:-2"
    )
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
        tmp.write(raw)
        tmp_path = tmp.name
    try:
        subprocess.run(
            [
                "ffmpeg", "-y", "-i", tmp_path,
                "-vf", crop_filter,
                "-quality", str(quality),
                str(dest),
            ],
            check=True, capture_output=True,
        )
    except subprocess.CalledProcessError as e:
        sys.exit(f"Erreur ffmpeg : {e.stderr.decode('utf-8', errors='replace')}")
    finally:
        os.unlink(tmp_path)


def main() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    p = argparse.ArgumentParser(description="Génère un hero cinématique WebP via Nano Banana 2.")
    p.add_argument("--slug", help="slug de l'article (=> <slug>.webp)")
    p.add_argument("--out", help="chemin de sortie explicite (sinon dérivé du slug)")
    p.add_argument("--prompt", required=True, help="description de la scène (en anglais)")
    p.add_argument("--preview", action="store_true",
                   help="utilise la variante preview du modèle (défaut = GA)")
    p.add_argument("--lens", default="50mm", choices=["50mm", "85mm"],
                   help="focale du rendu (défaut 50mm)")
    p.add_argument("--ratio", default="16:9", help="ratio cible, ex. 16:9 (défaut)")
    p.add_argument("--width", type=int, default=1600,
                   help="largeur d'export WebP en px (défaut 1600)")
    p.add_argument("--quality", type=int, default=82, help="qualité WebP")
    args = p.parse_args()

    if args.out:
        dest = Path(args.out)
    elif args.slug:
        dest = ARTICLES_DIR / f"{args.slug}.webp"
    else:
        sys.exit("Erreur : fournis --slug ou --out.")

    load_dotenv()
    model = MODEL_PREVIEW if args.preview else MODEL_GA
    style = build_style(args.lens, args.ratio)
    print(f"Modèle : {model} | {args.lens} | ratio cible {args.ratio} | export {args.width}px")
    raw = generate(args.prompt, model, args.ratio, style)
    to_webp(raw, dest, args.ratio, args.width, args.quality)
    size_kb = dest.stat().st_size / 1024
    try:
        shown = dest.resolve().relative_to(REPO_ROOT)
    except ValueError:
        shown = dest
    print(f"✓ {shown} ({size_kb:.0f} Ko)")


if __name__ == "__main__":
    main()
