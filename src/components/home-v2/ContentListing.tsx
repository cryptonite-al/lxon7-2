import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CATEGORY_META } from "@/lib/movies";
import type { Movie, CategoryId } from "@/lib/movies";
import { fetchMovies } from "@/lib/api";
import { Kicker } from "./primitives";

// A single movie card → links to its detail page.
function MovieCard({ movie, index }: { movie: Movie; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.4), ease: "easeOut" }}
    >
      <Link
        to="/movie/$slug"
        params={{ slug: movie.slug }}
        className="group relative block overflow-hidden rounded-lg border border-violet-glow/20 bg-void/60 transition hover:border-cyan-glow/50"
      >
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={movie.poster}
            alt={movie.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
          {movie.badges.length > 0 && (
            <div className="absolute left-2 top-2 flex flex-wrap gap-1">
              {movie.badges.slice(0, 2).map((b) => (
                <span
                  key={b}
                  className="font-mono rounded-full border border-cyan-glow/40 bg-void/70 px-2 py-0.5 text-[8px] uppercase tracking-[0.2em] text-cyan-glow/90 backdrop-blur"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 p-3">
            <div className="font-display text-sm uppercase tracking-wide text-foreground">
              {movie.title}
            </div>
            <div className="font-mono mt-1 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>{CATEGORY_META[movie.category]?.label ?? movie.category}</span>
              <span className="h-1 w-1 rounded-full bg-cyan-glow/50" />
              <span>{movie.runtime}</span>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_40px_-8px] shadow-cyan-glow/60 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>
    </motion.div>
  );
}

// Shared listing template — now reads live from the dashboard API.
//  - `category` set  → a category page (Films/Series/etc.)
//  - `category` null → the Browse page (everything)
export function ContentListing({
  category,
  kicker,
  title,
  subtitle,
}: {
  category: CategoryId | null;
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  const [movies, setMovies] = useState<Movie[] | null>(null); // null = loading
  const [failed, setFailed] = useState(false);
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setMovies(null);
    setFailed(false);
    setActiveBadge(null);
    fetchMovies(category ? { category } : undefined)
      .then((data) => { if (alive) setMovies(data); })
      .catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, [category]);

  const base = movies ?? [];
  const visible = activeBadge
    ? base.filter((m) => (m.badges as string[]).includes(activeBadge))
    : base;

  const availableBadges = useMemo(() => {
    const set = new Set<string>();
    base.forEach((m) => m.badges.forEach((b) => set.add(b)));
    return Array.from(set);
  }, [base]);

  return (
    <section className="relative mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
      <Kicker>{kicker}</Kicker>
      <h1 className="font-display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight">
        <span className="text-gradient-signal">{title}</span>
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {subtitle}
        </p>
      )}

      {/* Filter chips (only when we have data) */}
      {movies && movies.length > 0 && (
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveBadge(null)}
            className={`font-mono rounded-full border px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] transition ${
              activeBadge === null
                ? "border-cyan-glow bg-cyan-glow/15 text-cyan-glow"
                : "border-violet-glow/30 text-muted-foreground hover:border-cyan-glow/50 hover:text-foreground"
            }`}
          >
            All
          </button>
          {availableBadges.map((b) => (
            <button
              key={b}
              onClick={() => setActiveBadge(b)}
              className={`font-mono rounded-full border px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] transition ${
                activeBadge === b
                  ? "border-cyan-glow bg-cyan-glow/15 text-cyan-glow"
                  : "border-violet-glow/30 text-muted-foreground hover:border-cyan-glow/50 hover:text-foreground"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      )}

      {/* States */}
      {movies === null && !failed ? (
        <div className="font-mono mt-16 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Loading transmissions…
        </div>
      ) : failed ? (
        <div className="font-mono mt-16 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Couldn’t reach the catalog right now. Please refresh in a moment.
        </div>
      ) : visible.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {visible.map((m, i) => (
            <MovieCard key={m.slug} movie={m} index={i} />
          ))}
        </div>
      ) : (
        <div className="font-mono mt-16 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          No transmissions here yet.
        </div>
      )}
    </section>
  );
}
