# LXON-7 Brand

## Name

**LXON-7** — always uppercase, always hyphenated. Never "Lxon 7", "LXON7", or "lxon-7" outside URLs.

Extended lockup: **LXON-7 — AI Streaming Service** (em-dash, with spaces).

The current sitewide title reflects this: `"LXON-7 — AI Streaming Service"` (`src/routes/__root.tsx:80`).

## Logo

- File: `src/assets/lxon7-logo-new.png`
- Native background: **black** — the logo image includes its own black field with the electric-violet mark.
- Because the background is already black, the logo lives on a black surface in both places it appears:
  - `TopNav` header: `bg-black/95 backdrop-blur-xl` with the logo at `h-10 md:h-12` and **no wrapper tile** (blends into the header).
  - `SiteFooter`: `bg-black` with the logo at `h-20 md:h-24`, **no wrapper tile** (blends into the footer).
- Never place the logo on a light or gradient background — the black field will show through.
- Never re-color, blur, or restyle the logo pixels. If it needs to feel larger or smaller, change the CSS height only.

## Color palette

Full token list is in [`docs/design-system.md §1`](./design-system.md#1-color-tokens). Brand pillars:

| Role                     | Token             | Notes                              |
| ------------------------ | ----------------- | ---------------------------------- |
| Cinema black             | `--void`          | Everywhere the logo touches        |
| Page background          | `--space`         | Slightly warmer than void          |
| Primary brand            | `--violet-glow`   | Primary CTAs, borders, focus       |
| Cool accent              | `--electric`      | Gradient middle stop, hover        |
| HUD / signal             | `--cyan-glow`     | Labels, kickers, focus rings       |
| Warm accent              | `--magenta-glow`  | Live dot, hover flare, secondary CTA gradient |

The two canonical gradients — `text-gradient-signal` (cool) and `text-gradient-flare` (warm) — are the brand's motion in color. Every hero and manifesto uses both, in that order.

## Typography voice

| Family        | Use                                          |
| ------------- | -------------------------------------------- |
| **Orbitron**  | Every heading, label, and CTA. Uppercase.    |
| **Inter**     | All body copy.                               |
| **JetBrains Mono** | HUD, meta, ticker, terminal, timecodes. |

Tracking:
- Uppercase labels always widen (`tracking-[0.25em]`–`0.4em`).
- Display headings tighten (`tracking-tight` / `tracking-tighter`).

Do not introduce a fourth typeface.

## Tone of voice

Cinematic, quiet, technical, confident. Never marketing-loud.

- **Say**: "Movies made by AI. Streaming worldwide." · "Four Channels. One Home." · "A broadcast channel for AI-native cinema." · "Open a Channel."
- **Don't say**: "Revolutionary." · "AI-powered [anything]." · "The Netflix of…" · exclamation marks.

Rules of thumb:
- One idea per line in a hero. Two short sentences beat one long one.
- Sentence case in body copy; **uppercase in labels only**.
- Prefer nouns over verbs in section titles ("Meet the Director", not "Learn about our directors").
- Numerals are Arabic in body ("92 countries"), Roman in cinema metadata ("MMXXVI").
- Section codes are 2-digit strings: `/ 01`, `/ 02`, `/ 03` (see `SectionLabel`).

## Creator / title naming

- **Directors**: real-feeling international full names — first + surname. Examples currently in use: Isla Varkonyi, Kade Oyelaran, Noor Hadad, Yuè Tanaka. Avoid single-word aliases and celebrity references.
- **Studio handles**: dotted lowercase — `@varkonyi.studio`.
- **Titles**: 1–3 words, evocative, no franchise vibes — Rainbow City, Meridian, Silicon Dunes, Chromelight, Monolith 9.
- **Cycle labels**: Roman numeral + label — "Cycle 001", "Transmission 001".
- **Ratings**: US TV rating strings — `TV-G`, `TV-PG`, `TV-14`, `TV-MA`.
- **Runtimes**: `1h 54m` for features · `6 × 22m` for series · `48m` for docs · trailer previews in `m:ss`.

## Two-surface architecture

LXON-7 is two products with a clean split:

1. **Marketing site** — this repo. Public, SSR, SEO-indexed, no user data. Every route explains the brand, showcases titles, and pushes visitors toward the streaming product.
2. **watch.lxon-7.com** — the actual streaming app (external). Owns auth, playback, subscriptions, search.

The seam is `WATCH_URL` (see [`docs/conventions.md §2`](./conventions.md#2-the-watch_url-rule)). Every action from the marketing site that would create/require an account or start playback is a link to `WATCH_URL`. The one exception is the internal `/apply` route (creator submissions) which is part of the marketing surface.

Practical implications:
- No auth code, no user state, no Supabase on this site.
- No forms that persist data — even `SubmissionConsole` is presentational and the submit button links out.
- Product screenshots or app UI belong on `watch.lxon-7.com`, not here.
