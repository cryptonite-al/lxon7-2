import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CATEGORY_META } from "@/lib/movies";
import type { Movie } from "@/lib/movies";
import { Kicker, SectionLabel } from "./primitives";

// "What's Playing Now" — two FULL posters (left = poster, right = poster 2, or the
// same poster on both sides when there's only one), shown uncropped, with info beside.
export function FeaturedSpread({ movies }: { movies: Movie[] }) {
  const [active, setActive] = useState(0);
  if (!movies || movies.length === 0) return null;

  const idx = Math.min(active, movies.length - 1);
  const movie = movies[idx];
  const catLabel = CATEGORY_META[movie.category]?.label ?? "Now Streaming";
  const posterA = movie.poster;
  const posterB = movie.poster2 || movie.poster;
  const tabs = movies.slice(0, 4);

  return (
    <section className="relative mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
      <SectionLabel code="01" title="What's Playing Now" />

      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        {/* Left: two full posters, uncropped */}
        <div className="grid grid-cols-2 items-start gap-3 sm:gap-4">
          <Link
            to="/movie/$slug"
            params={{ slug: movie.slug }}
            aria-label={movie.title}
            className="signal-border block overflow-hidden rounded-xl bg-void"
          >
            <img src={posterA} alt={movie.title} className="h-auto w-full" loading="lazy" />
          </Link>
          <Link
            to="/movie/$slug"
            params={{ slug: movie.slug }}
            aria-label={movie.title}
            className="signal-border block overflow-hidden rounded-xl bg-void"
          >
            <img src={posterB} alt={movie.title} className="h-auto w-full" loading="lazy" />
          </Link>
        </div>

        {/* Right: info */}
        <div className="flex flex-col justify-center">
          <div className="font-mono mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
            <span>· Featured</span>
            <span className="text-muted-foreground">Now streaming</span>
          </div>

          <Kicker>{catLabel}</Kicker>
          <h3 className="font-display mt-2 text-3xl uppercase tracking-tight text-foreground md:text-4xl">
            {movie.title}
          </h3>

          <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-glow/80">
            {movie.runtime && <span>{movie.runtime}</span>}
            {movie.year && <><span className="h-1 w-1 rounded-full bg-cyan-glow/50" /><span>{movie.year}</span></>}
            {movie.director && <><span className="h-1 w-1 rounded-full bg-cyan-glow/50" /><span>Dir. {movie.director}</span></>}
            {movie.rating && <><span className="h-1 w-1 rounded-full bg-cyan-glow/50" /><span className="rounded border border-violet-glow/50 px-1.5 py-0.5">{movie.rating}</span></>}
          </div>

          <p className="mt-5 max-w-xl text-sm text-muted-foreground md:text-base">{movie.synopsis}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {movie.tags.map((t) => (
              <span
                key={t}
                className="font-mono rounded-full border border-violet-glow/40 bg-void/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <Link
            to="/movie/$slug"
            params={{ slug: movie.slug }}
            className="btn-wave font-display group mt-7 inline-flex w-fit items-center gap-3 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_40px_-8px] shadow-violet-glow/70 transition hover:brightness-110"
          >
            Watch on LXON-7
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Picker: switch the featured title */}
      {tabs.length > 1 && (
        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {tabs.map((t, i) => {
            const isActive = i === idx;
            return (
              <button
                key={t.slug}
                onClick={() => setActive(i)}
                className={`group relative flex items-center gap-3 overflow-hidden rounded-lg border p-2 text-left transition ${
                  isActive
                    ? "border-cyan-glow/70 bg-cyan-glow/10"
                    : "border-violet-glow/25 bg-void/40 hover:border-violet-glow/50"
                }`}
              >
                <img
                  src={t.poster}
                  alt={t.title}
                  className="h-14 w-10 shrink-0 rounded object-cover object-top"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="font-display truncate text-[11px] uppercase tracking-wider text-foreground">
                    {t.title}
                  </div>
                  <div className="font-mono truncate text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    {CATEGORY_META[t.category]?.label ?? t.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
