# LXON-7 Design System

Source of truth: [`src/styles.css`](../src/styles.css). Tailwind v4, CSS-first — no `tailwind.config.js`. All tokens are declared with `@theme inline` / `:root` and consumed as Tailwind utilities (`bg-violet-glow`, `text-cyan-glow`, etc.).

---

## 1. Color tokens

All colors are OKLCH. Declared on `:root` in `src/styles.css` and mapped to Tailwind color utilities via `@theme inline`.

### Brand palette (cosmic core)

| Token             | Value                    | Utility class           | Purpose                                           |
| ----------------- | ------------------------ | ----------------------- | ------------------------------------------------- |
| `--space`         | `oklch(0.08 0.04 285)`   | `bg-space`              | Primary dark background (== `--background`)       |
| `--void`          | `oklch(0.05 0.03 285)`   | `bg-void`               | Deepest black-violet — cards, wells, hero base    |
| `--nebula`        | `oklch(0.28 0.18 295)`   | `bg-nebula`             | Mid-tone violet for depth layers                  |
| `--violet-glow`   | `oklch(0.55 0.28 295)`   | `text/bg-violet-glow`   | Primary brand accent, borders, CTAs               |
| `--electric`      | `oklch(0.62 0.24 265)`   | `text/bg-electric`      | Cool blue accent, mid-gradient stop               |
| `--cyan-glow`     | `oklch(0.82 0.16 210)`   | `text/bg-cyan-glow`     | HUD text, kicker labels, focus rings              |
| `--magenta-glow`  | `oklch(0.68 0.28 340)`   | `text/bg-magenta-glow`  | Warm accent — live dot, hover states              |
| `--signal`        | `oklch(0.85 0.15 195)`   | `text/bg-signal`        | Reserved bright signal color                      |

### Semantic tokens (shadcn)

Wired via `@theme inline` — every one below has a matching `bg-*` / `text-*` utility.

| Token                    | Value / Source                     | Purpose                        |
| ------------------------ | ---------------------------------- | ------------------------------ |
| `--background`           | `var(--space)`                     | Page background                |
| `--foreground`           | `oklch(0.97 0.01 285)`             | Primary text                   |
| `--card` / `--popover`   | `oklch(0.12 0.05 285)`             | Elevated surfaces              |
| `--primary`              | `var(--violet-glow)`               | Primary UI color               |
| `--primary-foreground`   | `oklch(0.99 0 0)`                  | Text on primary                |
| `--secondary`            | `oklch(0.18 0.06 285)`             | Secondary surfaces             |
| `--muted`                | `oklch(0.16 0.04 285)`             | Muted surfaces                 |
| `--muted-foreground`     | `oklch(0.72 0.03 285)`             | Secondary/label text           |
| `--accent`               | `var(--magenta-glow)`              | Accent hover/highlight         |
| `--destructive`          | `oklch(0.6 0.25 20)`               | Error / destructive            |
| `--border` / `--input`   | `oklch(0.28 0.08 285 / 40%)`       | Borders, inputs                |
| `--ring`                 | `var(--violet-glow)`               | Focus ring                     |

### Selection

`::selection` uses `color-mix(in oklab, var(--violet-glow) 40%, transparent)` on white text (`src/styles.css:94`).

---

## 2. Gradients

There are **no** `--gradient-*` tokens. Gradients are composed inline with the brand colors. The canonical three are:

### 2.1 `text-gradient-signal` (utility, `src/styles.css:105`)

Cool signal gradient — used on hero words, section headings, "broadcast" callouts.

```css
linear-gradient(100deg,
  var(--violet-glow) 0%,
  var(--electric)   45%,
  var(--cyan-glow) 100%);
```

Apply with `className="text-gradient-signal"`. Used in `HeroBroadcast.tsx:41`, `TaglineBand.tsx:27`, `SubmissionConsole.tsx:81`.

### 2.2 `text-gradient-flare` (utility, `src/styles.css:117`)

Warm flare gradient — pairs with signal for a two-line hero.

```css
linear-gradient(100deg,
  var(--magenta-glow) 0%,
  var(--violet-glow) 60%,
  var(--electric)   100%);
```

Used in `HeroBroadcast.tsx:42`, `TaglineBand.tsx:28`.

### 2.3 CTA gradient (inline)

Primary "Start Watching / Transmit" pill:

```tsx
bg-gradient-to-r from-violet-glow via-electric to-cyan-glow
```

Warm variant on the submission CTA:

```tsx
bg-gradient-to-r from-magenta-glow via-violet-glow to-electric
```

CTA shadow is `shadow-[0_0_40px_-8px] shadow-violet-glow/70` (hover: `shadow-magenta-glow/70`).

---

## 3. Shadows / glows

There are no shadow tokens — glows are declared inline per element:

| Pattern                                                           | Where                          |
| ----------------------------------------------------------------- | ------------------------------ |
| `shadow-[0_0_40px_-8px] shadow-violet-glow/70`                    | Primary CTA glow               |
| `shadow-[0_0_24px_-8px] shadow-violet-glow/60`                    | Secondary pill (TopNav)        |
| `shadow-[0_0_50px_-8px] shadow-violet-glow/70`                    | Manifesto CTA                  |
| `shadow-[0_0_10px] shadow-magenta-glow`                           | Live-signal dot (footer)       |
| `signal-border` utility (see §5)                                  | Cards, frames                  |

Radial glow orbs are placed with plain divs, e.g.:
`h-[500px] w-[500px] rounded-full bg-violet-glow/25 blur-[120px]`
(see `HeroBroadcast.tsx:22-23`, `CreatorSpotlight.tsx:8-9`).

---

## 4. Radii

From `@theme inline` (`src/styles.css:12-16`), rooted on `--radius: 0.75rem`:

| Token          | Value                        | Utility     |
| -------------- | ---------------------------- | ----------- |
| `--radius-sm`  | `calc(var(--radius) - 4px)`  | `rounded-sm`  |
| `--radius-md`  | `calc(var(--radius) - 2px)`  | `rounded-md`  |
| `--radius-lg`  | `var(--radius)` = 12px       | `rounded-lg`  |
| `--radius-xl`  | `calc(var(--radius) + 4px)`  | `rounded-xl`  |
| `--radius-2xl` | `calc(var(--radius) + 8px)`  | `rounded-2xl` |

Conventions in use:
- Poster cards / featured frames: `rounded-xl` / `rounded-2xl`
- Pill CTAs: `rounded-full`
- Terminal/console blocks: `rounded-2xl`
- Small chips / tags: `rounded-full` or `rounded-md`

---

## 5. Custom utilities

All declared in `src/styles.css` via `@utility` (Tailwind v4).

| Utility                | File / line                | Purpose                                                                                                                            |
| ---------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `font-display`         | `styles.css:100`           | Orbitron font-family + `letter-spacing: 0.02em`. Use on every heading/label/CTA.                                                   |
| `text-gradient-signal` | `styles.css:105`           | Cool violet→electric→cyan text gradient (see §2.1).                                                                                |
| `text-gradient-flare`  | `styles.css:117`           | Warm magenta→violet→electric text gradient (see §2.2).                                                                             |
| `starfield`            | `styles.css:129`           | Layered radial gradients + tiny star dots on `--void`. Full-bleed background for hero, dial, apply page.                           |
| `scanlines`            | `styles.css:147`           | Faint 1-px violet horizontal repeat. CRT overlay for hero, trailer frames.                                                         |
| `grid-lines`           | `styles.css:157`           | 64×64 violet grid. Overlaid inside the submission console card.                                                                    |
| `signal-border`        | `styles.css:164`           | 1-px violet border + inner electric hairline + outer violet-glow drop. Used on all frames/cards.                                    |
| `animate-marquee`      | `styles.css:175`           | 40s linear x-scroll (used by `SignalTicker`).                                                                                      |
| `animate-twinkle`      | `styles.css:183`           | 3s opacity pulse (available for star accents).                                                                                     |
| `animate-orbit`        | `styles.css:191`           | 40s rotation (used inside `CategoryDial`).                                                                                         |
| `animate-pulse-glow`   | `styles.css:199`           | 4s blur/opacity pulse (used behind `TaglineBand`).                                                                                 |

### Naming note

Earlier drafts used names like `.heading-gradient`, `.brand-gradient`, `.kicker`, `.scrim-bottom`, `.neon-border`, `.neon-glow`. **None exist in code.** The current equivalents are:

| Legacy name        | Actual                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| `.heading-gradient`| `text-gradient-signal`                                                                          |
| `.brand-gradient`  | `text-gradient-flare` (or the inline CTA gradient)                                              |
| `.kicker`          | The `<Kicker>` component in `src/components/home-v2/primitives.tsx` (label + cyan-glow hair)    |
| `.scrim-bottom`    | Inline `bg-gradient-to-t from-void via-void/30 to-transparent` on frames                        |
| `.neon-border`     | `signal-border` utility                                                                         |
| `.neon-glow`       | Inline `shadow-[0_0_40px_-8px] shadow-violet-glow/70` (and siblings)                            |

---

## 6. Typography

Font families (`@theme inline`, `src/styles.css:8-10`):

| Token            | Family                                     | Utility        | Use                                          |
| ---------------- | ------------------------------------------ | -------------- | -------------------------------------------- |
| `--font-display` | `"Orbitron", ui-sans-serif, system-ui`     | `font-display` | Headings, kickers, CTAs, brand type          |
| `--font-sans`    | `"Inter", ui-sans-serif, system-ui`        | `font-sans` (default on `<body>`) | Body copy, paragraphs, everything else |
| `--font-mono`    | `"JetBrains Mono", ui-monospace`           | `font-mono`    | HUD labels, metadata, terminal, ticker       |

Fonts are loaded via `<link>` in `src/routes/__root.tsx:104-109` (Google Fonts). Never `@import` a font URL in `styles.css` (Tailwind v4 / Lightning CSS restriction).

### Scale (as used)

Not a rigid scale — sizes are chosen per section. Common patterns:

| Purpose                | Classes                                                                                       | Example                            |
| ---------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------- |
| Hero display           | `font-display font-black uppercase leading-[0.9] tracking-tight text-[clamp(2.75rem,8.5vw,7rem)]` | `HeroBroadcast.tsx:37`             |
| Manifesto display      | `font-display font-black uppercase leading-[0.95] text-[clamp(2rem,7vw,5.5rem)]`              | `TaglineBand.tsx:25`               |
| Section heading (H2)   | `font-display uppercase tracking-widest text-2xl md:text-3xl`                                 | `SectionLabel` in `primitives.tsx` |
| Card title (H3/H4)     | `font-display uppercase text-base md:text-lg` (or `text-3xl md:text-4xl` for featured)         | `SignalRail.tsx:46`, `FeaturedSpread.tsx:31` |
| Body copy              | `text-sm md:text-base text-muted-foreground leading-relaxed`                                  | `HeroBroadcast.tsx:46`             |
| HUD label / kicker     | `font-mono text-[10px] uppercase tracking-[0.28em]–[0.4em] text-cyan-glow/70–80`              | `Kicker` component, everywhere     |
| Meta / metadata        | `font-mono text-[10px]–[11px] uppercase tracking-[0.25em]–[0.3em] text-muted-foreground`      | Footer copyright, ticker           |

### Tracking rules of thumb

- Display headings: `tracking-tight` / `tracking-tighter`
- Uppercase labels: `tracking-widest` on section titles, explicit `tracking-[0.25em]`→`0.4em` for kickers and HUD
- Body: default

---

## 7. Layout, rhythm & container

### Container

The **single canonical container** across every section:

```tsx
<div className="mx-auto max-w-[1400px] px-4 md:px-8"> … </div>
```

Used in every route/section — `HeroBroadcast`, `FeaturedSpread`, `CategoryDial`, `SignalRail`, `CreatorSpotlight`, `SubmissionConsole`, `TaglineBand`, `SiteFooter`, `TopNav`.

### Section padding

Two standard vertical rhythms:

| Density       | Classes                             | Where                                      |
| ------------- | ----------------------------------- | ------------------------------------------ |
| Standard      | `py-16 md:py-20`                    | Content rails (`SignalRail`)               |
| Editorial     | `py-20 md:py-28`                    | Featured, category, submission             |
| Bordered dark | `py-20 md:py-24 border-y bg-void/…` | Spotlight, dial                            |
| Manifesto     | `py-28 md:py-40`                    | Tagline band only                          |
| Hero          | `pt-16 md:pt-24 lg:pt-28` + spacer  | Hero only                                  |

### Grid gaps

| Context                             | Gap                              |
| ----------------------------------- | -------------------------------- |
| Two-column feature (image + text)   | `gap-8 lg:gap-12` / `gap-10 lg:gap-14` |
| Footer master grid                  | `gap-10`                         |
| Horizontal rail cards               | `gap-4 md:gap-6`                 |
| Trailer thumb grid                  | `gap-2` (2- and 4-col responsive) |
| Metrics strip                       | `gap-px` (hairline dividers)     |

---

## 8. Breakpoints

Default Tailwind v4 breakpoints (no custom overrides):

| Prefix | Min-width | Meaning in this codebase                                        |
| ------ | --------- | --------------------------------------------------------------- |
| _(base)_ | 0       | Mobile-first; single column, stacked                            |
| `sm:`  | 640px     | 2-col metrics strip, small grid transitions                     |
| `md:`  | 768px     | Larger padding, larger typography, most 2-col shifts            |
| `lg:`  | 1024px    | Full multi-column layouts, hero grid, dial (desktop-only)       |
| `xl:`  | 1280px    | Rarely used — 1400 max-width container handles this             |
| `2xl:` | 1536px    | Not used                                                        |

Content site max width: **1400px** (`max-w-[1400px]`).

---

## 9. Motion tokens

Framer-motion timings are not centralized — the consistent values are:

| Purpose            | Values                                                             |
| ------------------ | ------------------------------------------------------------------ |
| Hero heading entry | `{ opacity: 0, y: 24 } → { opacity: 1, y: 0 }`, `duration: 0.9, ease: "easeOut"` |
| Image crossfade    | `{ opacity: 0, scale: 1.04 } → { opacity: 1, scale: 1 }`, `duration: 0.5` |
| Text swap          | `{ opacity: 0, y: 6-8 } → { opacity: 1, y: 0 }`, `duration: 0.35` |
| Slow poster zoom   | `duration-[900ms] group-hover:scale-110`                          |
| Counter ease       | Cubic-out over `1600ms` (`Counter.tsx`)                            |

Reduced motion: honored in `Counter.tsx` via `prefers-reduced-motion`.
