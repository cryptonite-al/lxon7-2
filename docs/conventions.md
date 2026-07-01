# Code Conventions

## 1. Routing — TanStack Start (file-based)

- Every page is a file in `src/routes/`. Filename ↔ URL follows TanStack conventions (dots = slashes, `index.tsx` = leaf, `$param` = dynamic).
- `src/routeTree.gen.ts` is auto-generated. **Never edit it.**
- `src/routes/__root.tsx` owns: HTML shell (`RootShell`), sitewide `head()` (charset, viewport, default title/description, Open Graph, Twitter), stylesheet + font `<link>` tags, `<QueryClientProvider>` wrapping `<Outlet />`, and the `NotFoundComponent` / `ErrorComponent`.
- Do not create `src/pages/`, `_app`, or `app/layout.tsx`. Do not add a second root layout.
- Never write React Router or Next.js imports; use `@tanstack/react-router` only.

### Minimal route template

```tsx
// src/routes/<name>.tsx
import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";

export const Route = createFileRoute("/<name>")({
  head: () => ({
    meta: [
      { title: "<Page> · LXON-7" },
      { name: "description", content: "<One-line page description.>" },
      { property: "og:title", content: "<Page> · LXON-7" },
      { property: "og:description", content: "<Same one-liner.>" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/<name>" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/<name>" }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <main>{/* sections */}</main>
      <SiteFooter />
    </div>
  );
}
```

### `head()` rules

- Title lives inside `meta` (`{ title: "…" }`) — never as a top-level field.
- Every shareable route sets its own `title`, `description`, `og:title`, `og:description`. Do not reuse the home page's copy.
- `canonical` and `og:url` go on the **leaf** route only. Use relative paths (`href="/apply"`) — the project has no fixed domain.
- Add `og:image` only when a meaningful hero image exists — never a placeholder, and never on `__root.tsx` (root `head()` concatenates into every match).
- `robots: noindex` per route only when a page must be hidden.

Reference implementations: `src/routes/index.tsx`, `src/routes/apply.tsx`, `src/routes/__root.tsx`.

---

## 2. The `WATCH_URL` rule

Every "external" action — Watch, Browse, Explore, Subscribe, Trailer, Submit — links to a single constant.

- Declared in `src/lib/lxon-content.ts`:
  ```ts
  export const WATCH_URL = "https://watch.lxon-7.com";
  ```
- Every CTA is a plain `<a href={WATCH_URL}>` (no target="_blank" unless the component explicitly opens a trailer via `window.open(WATCH_URL, "_blank")` — currently only `FeaturedSpread`).
- The only in-app link that does **not** point at `WATCH_URL` is the "Creator Application" button in `TopNav`, which routes to `/apply`.

Grep before shipping a new page:

```bash
rg -n "href=\"http" src/routes src/components/home-v2
```

Every hit should be `WATCH_URL` or a documented exception.

---

## 3. Framer Motion — animation patterns

Framer Motion is imported directly per-file: `import { motion, AnimatePresence } from "framer-motion";`. There is no shared `Reveal` wrapper — animations are declared on the element.

### Standard entry animation (headings, blocks)

```tsx
<motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
>…</motion.h1>
```

Used by `HeroBroadcast.tsx:33`.

### Content swap (image / paragraph tied to a tab state)

Wrap in `<AnimatePresence mode="wait">` and key the child by the state id:

```tsx
<AnimatePresence mode="wait">
  <motion.img
    key={movie.id}
    initial={{ opacity: 0, scale: 1.04 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    …
  />
</AnimatePresence>
```

Used by `FeaturedSpread.tsx` (image) and `CategoryDial.tsx` (background poster + description).

### Timing conventions

| Purpose            | Duration | Ease         |
| ------------------ | -------- | ------------ |
| Hero heading entry | `0.9s`   | `easeOut`    |
| Image crossfade    | `0.5s`   | default      |
| Text swap          | `0.35s`  | default      |
| Poster hover zoom  | `900ms`  | Tailwind default |

Respect `prefers-reduced-motion` when animating raw values in JS (see `Counter.tsx`). Framer Motion respects the OS setting on standard tween easings.

---

## 4. Assets

### Lovable Assets (large/binary)

Videos and hero binaries are externalized via `.asset.json` pointers. Import the JSON and use `.url`:

```tsx
import heroVideo from "@/assets/hero-loop.mp4.asset.json";
<video src={heroVideo.url} autoPlay loop muted playsInline … />
```

Used by `HeroBroadcast` and `TaglineBand`.

### Regular imports (posters, portraits, logo)

Static JPG/PNG in `src/assets/` are imported as ES modules:

```tsx
import portrait from "@/assets/creator-portrait.jpg";
import logo from "@/assets/lxon7-logo-new.png";
<img src={portrait} … />
```

### Aliases

- `@/` resolves to `src/`. Always use `@/…` in imports — never relative deep paths like `../../assets/…`.

### Adding a new asset

- Uploaded via the sandbox: prefer `lovable-assets create --file /mnt/user-uploads/x --filename x > src/assets/x.asset.json` and import the JSON.
- Committed to repo (e.g. logo/poster): drop the file in `src/assets/` and import it directly.

---

## 5. Responsive layout rules

- **Container**: every section uses `mx-auto max-w-[1400px] px-4 md:px-8`. Do not introduce a second container width.
- **Mobile-first**: default classes render mobile; add `md:` / `lg:` upward.
- **Two-column layouts**: use CSS grid with explicit fractional templates, e.g. `grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12`. Prefer fractional templates over `grid-cols-2` for editorial balance.
- **Section rhythm**: use one of the standard paddings from `docs/design-system.md §7`. Do not invent new vertical rhythms.
- **Overflow**: never let text overflow. Long labels use `truncate` + `min-w-0` on flex/grid children (see `SectionLabel`).
- **Images**: always `loading="lazy"` unless above the fold. Set explicit `alt`.
- **Motion opt-outs**: hover animations use `group` + `group-hover:*` on the anchor; the transform is on the child image.

---

## 6. TypeScript / imports

- Strict mode is on. Never import a non-existent file — the build fails hard.
- Install packages via `bun add <pkg>` **before** writing the import.
- All components are function components with typed inline prop interfaces (see `SignalRail`, `Counter`).
- Component files export **named** components (no default exports in `home-v2/`).

---

## 7. Styling

- Tailwind v4, CSS-first. Tokens live in `src/styles.css` — never create `tailwind.config.js`.
- Use semantic tokens (`bg-background`, `text-foreground`, `text-muted-foreground`) — never `text-white` / `bg-black` in components, except for header/footer where "cinema black" is intentional.
- Custom utilities (`font-display`, `text-gradient-signal`, `starfield`, `signal-border`, …) are declared via `@utility` in `src/styles.css`. Add new ones there, never inline `<style>` blocks.
- `className` composition is done with template strings; there is no `cn()` in the home-v2 components.
