import { Link } from "@tanstack/react-router";
import { CATEGORY_META } from "@/lib/movies";
import type { Movie } from "@/lib/movies";
import { SectionLabel } from "./primitives";

function RailCard({ movie, i, fixed }: { movie: Movie; i: number; fixed: boolean }) {
  return (
    <Link
      to="/movie/$slug"
      params={{ slug: movie.slug }}
      className={`group signal-border relative snap-start overflow-hidden rounded-xl bg-void ${
        fixed ? "w-[220px] shrink-0 md:w-[260px]" : "w-[220px] shrink-0 md:w-auto"
      }`}
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
        <span className="font-mono absolute left-3 top-3 rounded bg-void/70 px-2 py-1 text-[9px] uppercase tracking-[0.25em] text-cyan-glow backdrop-blur">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-glow/80">
          {CATEGORY_META[movie.category]?.label ?? movie.category}
        </div>
        <h4 className="font-display mt-1 truncate text-base uppercase text-foreground md:text-lg">
          {movie.title}
        </h4>
        <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <span>{movie.runtime}</span>
          <span className="text-foreground transition-colors group-hover:text-magenta-glow">Watch →</span>
        </div>
      </div>
    </Link>
  );
}

export function SignalRail({
  code,
  title,
  movies,
}: {
  code: string;
  title: string;
  movies: Movie[];
}) {
  if (!movies || movies.length === 0) return null;

  // 5 or fewer → fill the full width on desktop (no empty space).
  // More than 5 → horizontal slider (shows ~5, rest slide in).
  const fill = movies.length <= 5;

  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <SectionLabel code={code} title={title} />
      </div>

      {fill ? (
        <div
          className="mx-auto flex max-w-[1400px] gap-4 overflow-x-auto px-4 pb-4 md:grid md:gap-6 md:overflow-visible md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ gridTemplateColumns: `repeat(${movies.length}, minmax(0, 1fr))` }}
        >
          {movies.map((m, i) => (
            <RailCard key={m.slug} movie={m} i={i} fixed={false} />
          ))}
        </div>
      ) : (
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 md:gap-6 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {movies.map((m, i) => (
              <RailCard key={m.slug} movie={m} i={i} fixed={true} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
