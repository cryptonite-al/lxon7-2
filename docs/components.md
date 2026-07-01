# Components

All homepage components live in `src/components/home-v2/`. Shared UI primitives (shadcn) live in `src/components/ui/`.

> **Naming note.** Earlier drafts referred to components as `Header`, `Footer`, `FeaturedSlider`, `Reveal`, `PosterCard`, `CategoryCard`, `SectionKicker`, `HeroVideo`. **None of those files exist.** The real components below cover the same responsibilities.
>
> | Draft name       | Actual                                                                     |
> | ---------------- | -------------------------------------------------------------------------- |
> | `Header`         | `TopNav` (`src/components/home-v2/TopNav.tsx`)                             |
> | `Footer`         | `SiteFooter` (`src/components/home-v2/SiteFooter.tsx`)                     |
> | `FeaturedSlider` | `FeaturedSpread` (tabbed, not a slider) — `src/components/home-v2/FeaturedSpread.tsx` |
> | `Reveal`         | Not implemented. Entry animations are declared inline with `framer-motion` `motion.*` on the target element. |
> | `PosterCard`     | Inline `<a>` inside `SignalRail`                                           |
> | `CategoryCard`   | Inline node inside `CategoryDial` (desktop) / accordion item (mobile)      |
> | `SectionKicker`  | `Kicker` and `SectionLabel` in `primitives.tsx`                            |
> | `HeroVideo`      | Bare `<video>` inside `HeroBroadcast` / `TaglineBand`                      |

---

## Layout / chrome

### `TopNav`
`src/components/home-v2/TopNav.tsx` — sticky black header (`bg-black/95 backdrop-blur-xl`) with the LXON-7 logo, four desktop nav links (Films / Series / Documentaries / Style, all → `WATCH_URL`), and a "Creator Application" pill → `/apply`.
- **Props**: none.
- **When**: rendered once at the top of every route.

### `SiteFooter`
`src/components/home-v2/SiteFooter.tsx` — black footer with the logo, three link columns (Browse / Studio / Legal), an Investor Relations CTA, and a copyright line.
- **Props**: none.
- **When**: rendered once at the bottom of every route.

### `Kicker` (primitive)
`src/components/home-v2/primitives.tsx:15` — small monospace uppercase label with a leading cyan hairline.
```tsx
interface Props { children: ReactNode; className?: string }
```
- **When**: above section titles inside hero / spotlight / featured to label the transmission.

### `SectionLabel` (primitive)
`src/components/home-v2/primitives.tsx:26` — the standard section header used across the homepage: mono code (`/ 03`) + display H2 title on a bottom-bordered row.
```tsx
interface Props { code: string; title: string }
```
- **When**: at the top of every section-scale block. Enforces one visual rhythm for headings.

### `CornerFrame` (primitive)
`src/components/home-v2/primitives.tsx:3` — wraps any child in a rectangle with 4 violet-glow corner brackets.
```tsx
interface Props { children: ReactNode; className?: string }
```
- **When**: on featured media frames (`FeaturedSpread`, `CreatorSpotlight`).

---

## Sections

### `HeroBroadcast`
`src/components/home-v2/HeroBroadcast.tsx` — the homepage hero: full-bleed ambient `<video>` (opacity 0.3), `starfield` + `scanlines` overlays, two orbital violet/magenta blurs, transmission kicker, two-line gradient headline (`"Movies made by AI. / Streaming worldwide."`), body copy, primary + secondary CTAs → `WATCH_URL`, and a 4-cell metrics strip powered by `Counter`.
- **Props**: none. Content sourced from `METRICS` in `src/lib/lxon-content.ts`.

### `SignalTicker`
`src/components/home-v2/SignalTicker.tsx` — thin marquee row under the hero. Loops the `TICKER` array twice and animates with `animate-marquee` (40s linear).
- **Props**: none.

### `FeaturedSpread`
`src/components/home-v2/FeaturedSpread.tsx` — "What's Playing Now". Left column shows the active movie (`CornerFrame` image, kicker, title, mono meta strip, synopsis, tag chips, primary CTA). Right column shows a trailer preview and a 2/4-col tab grid; picking a tab crossfades both sides in sync.
- **Props**: none. Data from `TRAILERS`.
- **State**: `useState<number>` (active tab index).

### `CategoryDial`
`src/components/home-v2/CategoryDial.tsx` — "Four Channels. One Home."
- **Desktop (lg+)**: an orbital SVG-free dial. Four planet nodes at N/E/S/W positions with permanent pulsing halos; hover/click updates the center sigil (code, name, tag, browse CTA) and swaps the fading background poster.
- **Mobile (<lg)**: same categories as an accordion of expandable cards.
- **Props**: none. Data from `CATEGORIES`.
- **State**: `useState<number>` (active category).

### `SignalRail`
`src/components/home-v2/SignalRail.tsx` — a horizontal snap-scrolling poster rail with edge fades. Used for both "Trending This Week" and "Just Added" — the section is data-driven.
```tsx
interface SignalRailProps {
  code: string;                        // "03", "06", …
  title: string;                       // section title
  items: Array<{ title: string; cat: string; runtime: string; image: string }>;
}
```
- **When**: any collection of poster cards on the homepage.

### `CreatorSpotlight`
`src/components/home-v2/CreatorSpotlight.tsx` — bordered dark section with the director portrait (`CornerFrame`, `signal-border`), a pull quote, bio, role meta, four selected works, and an "Explore Works" CTA → `WATCH_URL`.
- **Props**: none. Data from `CREATOR`.

### `SubmissionConsole`
`src/components/home-v2/SubmissionConsole.tsx` — terminal-styled application form (`grid-lines` overlay, mono field labels, `signal-border` frame). Right column lists why submit. The submit action is a link → `WATCH_URL`; the form is presentational only.
- **Props**: none.
- **Used on**: `/apply` (not on `/`).

### `TaglineBand`
`src/components/home-v2/TaglineBand.tsx` — full-bleed manifesto section: ambient cosmic `<video>`, pulsing central glow, three-line display headline using both `text-gradient-signal` and `text-gradient-flare`, single CTA → `WATCH_URL`.
- **Props**: none.

---

## Utilities

### `Counter`
`src/components/home-v2/Counter.tsx` — animated number roll-up.
```tsx
interface CounterProps { to: number; suffix?: string; duration?: number /* ms, default 1600 */ }
```
- Cubic-out easing via `requestAnimationFrame`.
- Honors `prefers-reduced-motion` (jumps straight to the final value).
- **Used by**: `HeroBroadcast` metrics strip.

---

## Composition on the homepage

`src/routes/index.tsx` — canonical order:

```tsx
<TopNav />
<HeroBroadcast />
<SignalTicker />
<FeaturedSpread />
<CategoryDial />
<SignalRail code="03" title="Trending This Week" items={TRENDING} />
<CreatorSpotlight />
<SignalRail code="06" title="Just Added" items={NEW_TRANSMISSIONS} />
<TaglineBand />
<SiteFooter />
```

`src/routes/apply.tsx` — TopNav + SubmissionConsole + SiteFooter.
