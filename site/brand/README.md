# Brand assets

| File | Use |
|---|---|
| `mark-dark.png` | The mark for **dark** backgrounds. Rendered on black with the glow baked in — composite it with `mix-blend-mode: screen` so it sits on the page ground with no visible edge. Used in the site header and footer. |
| `mark-light.png` | The mark for **light** backgrounds (transparent PNG). Not used on this site; here for documents, decks and email. |
| `wordmark.png` | "1402 Celsius" logotype, transparent PNG. Dark metal, so it needs a **light** background — it goes muddy on the dark site. |

Every icon on the site is generated from the real artwork — there is no
vector stand-in. Favicons are cut tight to the mark and unsharp-masked to
hold definition when downscaled; the 16px one is still soft, which is a
limit of the artwork, not the pipeline. See the repo notes on what a
purpose-drawn small-size mark would fix.
