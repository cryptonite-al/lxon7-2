import { CATEGORY_META } from "@/lib/movies";
import type { Movie } from "@/lib/movies";

// Scrolling ticker built from real dashboard movies (falls back to brand lines).
export function SignalTicker({ movies = [] }: { movies?: Movie[] }) {
  const lines = movies.length
    ? [
        ...movies.slice(0, 8).map((m) => {
          const cat = CATEGORY_META[m.category]?.label ?? "LXON-7";
          const tag = m.badges.includes("Featured") ? "Featured" : "Now Streaming";
          return `${tag} · ${m.title} · ${cat}`;
        }),
        "Live channel · watch.lxon-7.com",
      ]
    : [
        "ON AIR · LXON-7",
        "AI Cinema · streaming worldwide",
        "Live channel · watch.lxon-7.com",
      ];

  const items = [...lines, ...lines];

  return (
    <div className="relative overflow-hidden border-b border-violet-glow/20 bg-void/60">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {items.map((t, i) => (
          <span
            key={i}
            className="font-mono flex items-center gap-3 px-6 text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
          >
            <span className="text-magenta-glow">◆</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
