# How to build a new page

A step-by-step guide for adding a route to the LXON-7 marketing site. Mirrors the patterns in [`conventions.md`](./conventions.md), [`design-system.md`](./design-system.md), and [`components.md`](./components.md).

## Prerequisites

- The page lives at a single URL (e.g. `/about`, `/press`).
- If content needs external accounts, playback, or user data → don't build it here. Link out to `WATCH_URL` instead.

## Step 1 — Create the route file

Filename ↔ URL:

| URL         | File                        | `createFileRoute` string |
| ----------- | --------------------------- | ------------------------- |
| `/about`    | `src/routes/about.tsx`      | `"/about"`                |
| `/press`    | `src/routes/press.tsx`      | `"/press"`                |
| `/team/$id` | `src/routes/team.$id.tsx`   | `"/team/$id"`             |

The Vite plugin regenerates `src/routeTree.gen.ts` — never edit that file by hand.

## Step 2 — Standard imports

Any new marketing page needs:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { Kicker, SectionLabel } from "@/components/home-v2/primitives";
import { WATCH_URL } from "@/lib/lxon-content";
```

Only add `motion` / `AnimatePresence` if the page actually animates:

```tsx
import { motion } from "framer-motion";
```

## Step 3 — `head()` metadata

- Title inside `meta`, never top-level.
- Distinct `title`, `description`, `og:title`, `og:description` — do not copy the home page's copy.
- `canonical` and `og:url` on the leaf, relative paths.
- `og:image` only when a real page-specific image exists.

## Step 4 — Page shell

Every page uses the same top-level structure:

```tsx
<div className="min-h-screen bg-background text-foreground">
  <TopNav />
  <main>{/* sections */}</main>
  <SiteFooter />
</div>
```

For pages that want the cosmic ambience (like `/apply`), add a starfield layer inside `<main>`:

```tsx
<main className="relative">
  <div className="starfield absolute inset-0 opacity-40" />
  <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-violet-glow/20 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-40 h-[500px] w-[500px] rounded-full bg-magenta-glow/20 blur-[120px]" />
  <div className="relative pt-10 md:pt-14">{/* sections */}</div>
</main>
```

## Step 5 — Sections

Every section uses the canonical container and one of the standard vertical rhythms:

```tsx
<section className="relative py-20 md:py-28">
  <div className="mx-auto max-w-[1400px] px-4 md:px-8">
    <SectionLabel code="01" title="Section Title" />
    {/* content */}
  </div>
</section>
```

Rhythm quick reference:

| Density   | Padding                    | Use                                  |
| --------- | -------------------------- | ------------------------------------ |
| Standard  | `py-16 md:py-20`           | Content rails                        |
| Editorial | `py-20 md:py-28`           | Featured / long-form sections        |
| Manifesto | `py-28 md:py-40`           | Full-bleed CTA bands only            |

## Step 6 — Headings with a kicker + gradient

The house heading pattern is a `Kicker` above a two-part gradient headline:

```tsx
<Kicker>Chapter 01 · About</Kicker>
<h1 className="font-display mt-4 text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tight">
  <span className="block text-foreground">Cinema, made by</span>
  <span className="block">
    <span className="text-gradient-signal">a new </span>
    <span className="text-gradient-flare">wave.</span>
  </span>
</h1>
```

For a smaller in-body section title, use `<SectionLabel code="XX" title="…" />` instead of a raw `<h2>`.

## Step 7 — Entry animation (optional, no `Reveal` component)

There is no shared `Reveal` wrapper. Animate the element directly with `motion`:

```tsx
<motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="…"
>
  …
</motion.h1>
```

For state-driven swaps (tabs, category picks), wrap in `<AnimatePresence mode="wait">` and key the child by the state id.

## Step 8 — Wire every CTA to `WATCH_URL`

```tsx
<a
  href={WATCH_URL}
  className="font-display group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-glow via-electric to-cyan-glow px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_40px_-8px] shadow-violet-glow/70 transition hover:shadow-magenta-glow/70"
>
  Start Watching
  <span className="transition-transform group-hover:translate-x-1">→</span>
</a>
```

Secondary CTA (outlined):

```tsx
<a
  href={WATCH_URL}
  className="font-display inline-flex items-center gap-3 rounded-full border border-violet-glow/60 bg-violet-glow/10 px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-foreground transition hover:bg-violet-glow/25"
>
  Browse the Catalog →
</a>
```

Never link to a placeholder route (`/soon`, `#`). Either link `WATCH_URL` or route to a real in-app page (currently just `/apply`).

---

## Full reference: a working "About" page

Copy this file as `src/routes/about.tsx` and adjust the copy:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { Kicker, SectionLabel } from "@/components/home-v2/primitives";
import { WATCH_URL } from "@/lib/lxon-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · LXON-7" },
      {
        name: "description",
        content:
          "LXON-7 is a broadcast channel for AI-native cinema — a home for a new generation of directors working entirely in generative craft.",
      },
      { property: "og:title", content: "About · LXON-7" },
      {
        property: "og:description",
        content:
          "A broadcast channel for AI-native cinema. Meet the mission and the makers behind LXON-7.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    code: "01",
    title: "Made by AI",
    body: "Every frame on LXON-7 is generative. No stock footage, no compositing crutches — cinema authored end-to-end by directors working in synthetic media.",
  },
  {
    code: "02",
    title: "Curated, not fed",
    body: "A small editorial team programs each cycle. Fewer titles, more attention, less algorithm.",
  },
  {
    code: "03",
    title: "Global from day one",
    body: "New broadcasts stream in 92 countries the moment they drop. No windows, no regions.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <main className="relative">
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-violet-glow/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-40 h-[500px] w-[500px] rounded-full bg-magenta-glow/20 blur-[120px]" />

        {/* Hero */}
        <section className="relative">
          <div className="mx-auto max-w-[1400px] px-4 pt-20 md:px-8 md:pt-28">
            <Kicker>Chapter 01 · About</Kicker>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="font-display mt-6 max-w-[18ch] text-[clamp(2.25rem,6.5vw,5.5rem)] font-black uppercase leading-[0.95] tracking-tight"
            >
              <span className="block text-foreground">A broadcast channel for</span>
              <span className="block">
                <span className="text-gradient-signal">AI-native </span>
                <span className="text-gradient-flare">cinema.</span>
              </span>
            </motion.h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              LXON-7 is a home for directors working entirely in generative craft.
              We program four channels — films, mini-series, documentaries, and
              style — and stream them worldwide, one cycle at a time.
            </p>
            <div className="mt-10">
              <a
                href={WATCH_URL}
                className="font-display group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-glow via-electric to-cyan-glow px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_40px_-8px] shadow-violet-glow/70 transition hover:shadow-magenta-glow/70"
              >
                Start Watching
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-4 md:px-8">
            <SectionLabel code="02" title="What We Broadcast" />
            <div className="grid gap-6 md:grid-cols-3">
              {PILLARS.map((p) => (
                <div
                  key={p.code}
                  className="signal-border relative rounded-2xl bg-void/60 p-6 md:p-8"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
                    / {p.code}
                  </div>
                  <h3 className="font-display mt-3 text-xl uppercase tracking-tight text-foreground md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative py-20 md:py-28">
          <div className="mx-auto max-w-[1400px] px-4 text-center md:px-8">
            <h2 className="font-display text-[clamp(2rem,6vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tight">
              <span className="block text-foreground">Tune in.</span>
              <span className="block text-gradient-signal">Every cycle, everywhere.</span>
            </h2>
            <a
              href={WATCH_URL}
              className="font-display mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-magenta-glow via-violet-glow to-electric px-8 py-4 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_50px_-8px] shadow-magenta-glow/70"
            >
              Enter the Stream →
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
```

## Pre-ship checklist

- [ ] `createFileRoute("...")` string matches the filename.
- [ ] `head()` has unique `title` / `description` / `og:title` / `og:description`.
- [ ] `canonical` + `og:url` present on the leaf, relative paths.
- [ ] Container `mx-auto max-w-[1400px] px-4 md:px-8` on every section.
- [ ] Padding matches one of the standard rhythms.
- [ ] Every CTA is either `WATCH_URL` or a real in-app route.
- [ ] No custom color utilities (`text-white`, `bg-black` outside header/footer).
- [ ] All images have `alt=` and (below-the-fold) `loading="lazy"`.
- [ ] Page passes at 375px / 768px / 1280px+ without overflow.
