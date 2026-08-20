# Brand assets

`symbol.png` is the **authority asset** — the supplied render, unretouched.
Only fully-transparent-margin cropping was applied; no pixel of the symbol
is altered. Everything on the site is generated from it by resizing alone:
no redrawing, no vector reconstruction, no colour or sharpening passes.

| File | Use |
|---|---|
| `symbol.png` | Authority master, 697×635, transparent. Source for every other size. |
| `symbol-240.png` | Header and footer lockup (displayed at 44×40). |
| `wordmark.png` | "1402 Celsius" logotype. Dark metal — needs a **light** background. Not used on this site. |

The symbol is transparent, so it composites on any ground and needs no
blend mode. Favicons (16/32/64) are transparent; app icons (192/512) sit on
the dark rounded tile.

The supplied `1402celsius_symbol_editable.svg` is **not** used — it is a
three-band reconstruction that does not match the authority. The supplied
`_exact.svg` is this same PNG wrapped in an SVG container, so the PNG is
stored directly instead.
