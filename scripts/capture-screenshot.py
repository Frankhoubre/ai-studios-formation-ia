#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Capture d'écran réelle d'un site/outil pour illustrer un article du blog.

Usage typique (la home d'un outil dont parle l'article) :
  python3 scripts/capture-screenshot.py \
    --url https://higgsfield.ai \
    --slug higgsfield-presentation --label home \
    --alt "Page d'accueil de Higgsfield"

Produit public/images/articles/<slug>-<label>.webp (1280px, léger), à intégrer
dans l'article via un bloc image :
  { type: "image", src: "/images/articles/<slug>-<label>.webp", alt: "<alt>" }

Pré-requis : Google Chrome installé + playwright (python) + cwebp.
N'utilise que des pages PUBLIQUES (home, page produit). Jamais derrière login,
paywall ou données privées.
"""

import argparse
import subprocess
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = REPO_ROOT / "public" / "images" / "articles"

COOKIE_SELECTORS = [
    "#onetrust-accept-btn-handler",
    "button:has-text('Accept all')", "button:has-text('Tout accepter')",
    "button:has-text('Accepter')", "button:has-text('Accept')",
    "button:has-text('I agree')", "button:has-text('Got it')",
    "button:has-text('Allow all')", "[aria-label='Accept cookies']",
]

# Popups promo / newsletter : on tente de fermer par le bouton de fermeture.
CLOSE_SELECTORS = [
    "[aria-label*='close' i]", "[aria-label*='fermer' i]",
    "button[class*='close' i]", "button:has-text('×')",
    "button:has-text('✕')", ".modal__close", "[data-dismiss='modal']",
]


def dismiss_overlays(page) -> None:
    """Ferme cookies + popups promo, en plusieurs passes (best effort)."""
    for _ in range(2):
        try:
            page.keyboard.press("Escape")
        except Exception:
            pass
        for sel in COOKIE_SELECTORS + CLOSE_SELECTORS:
            try:
                el = page.locator(sel).first
                if el.is_visible(timeout=400):
                    el.click(timeout=1000)
                    page.wait_for_timeout(500)
            except Exception:
                pass
        page.wait_for_timeout(400)


def capture_png(url: str, dest_png: Path, width: int, height: int,
                full_page: bool, wait_ms: int) -> None:
    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        # Utilise le Chrome installé (channel chrome), pas de download de navigateur.
        try:
            browser = p.chromium.launch(channel="chrome", headless=True)
        except Exception:
            browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(
            viewport={"width": width, "height": height},
            device_scale_factor=2,
            locale="fr-FR",
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0 Safari/537.36"
            ),
        )
        page = ctx.new_page()
        page.goto(url, wait_until="load", timeout=45000)
        page.wait_for_timeout(wait_ms)
        dismiss_overlays(page)
        page.screenshot(path=str(dest_png), full_page=full_page)
        browser.close()


def to_webp(src_png: Path, dest: Path, width: int, quality: int) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(["sips", "--resampleWidth", str(width), str(src_png)],
                   check=True, capture_output=True)
    subprocess.run(["cwebp", "-quiet", "-q", str(quality), str(src_png),
                    "-o", str(dest)], check=True, capture_output=True)


def main() -> None:
    ap = argparse.ArgumentParser(description="Capture d'écran d'un site en WebP.")
    ap.add_argument("--url", required=True, help="URL publique à capturer")
    ap.add_argument("--slug", help="slug de l'article (=> <slug>-<label>.webp)")
    ap.add_argument("--label", default="home", help="suffixe (home, pricing, app...)")
    ap.add_argument("--out", help="chemin de sortie explicite (sinon dérivé du slug)")
    ap.add_argument("--alt", default="", help="texte alt suggéré (affiché en sortie)")
    ap.add_argument("--full", action="store_true", help="page entière (sinon above-the-fold)")
    ap.add_argument("--vw", type=int, default=1440, help="largeur viewport navigateur")
    ap.add_argument("--vh", type=int, default=900, help="hauteur viewport navigateur")
    ap.add_argument("--width", type=int, default=1280, help="largeur d'export WebP")
    ap.add_argument("--quality", type=int, default=80, help="qualité WebP")
    ap.add_argument("--wait", type=int, default=2500, help="attente après load (ms)")
    args = ap.parse_args()

    if args.out:
        dest = Path(args.out)
    elif args.slug:
        dest = ARTICLES_DIR / f"{args.slug}-{args.label}.webp"
    else:
        sys.exit("Erreur : fournis --slug ou --out.")

    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp:
        tmp_png = Path(tmp.name)
    try:
        capture_png(args.url, tmp_png, args.vw, args.vh, args.full, args.wait)
        to_webp(tmp_png, dest, args.width, args.quality)
    finally:
        tmp_png.unlink(missing_ok=True)

    size_kb = dest.stat().st_size / 1024
    try:
        shown = dest.resolve().relative_to(REPO_ROOT)
    except ValueError:
        shown = dest
    print(f"✓ {shown} ({size_kb:.0f} Ko)")
    if args.slug:
        alt = args.alt or f"Capture d'écran de {args.url}"
        print("Bloc à insérer dans content :")
        print(f'    {{ type: "image", src: "/images/articles/{dest.name}", '
              f'alt: "{alt}" }},')


if __name__ == "__main__":
    main()
