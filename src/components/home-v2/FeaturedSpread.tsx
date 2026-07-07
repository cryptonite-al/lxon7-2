import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CATEGORY_META } from "@/lib/movies";
import type { Movie } from "@/lib/movies";
import { CornerFrame, Kicker, SectionLabel } from "./primitives";

// "What's Playing Now" — driven by real dashboard movies (newest first).
export function FeaturedSpread({ movies }: { movies: Movie[] }) {
  const [active, setActive] = useState(0);
  if (!movies || movies.length === 0) return null; // graceful: hide if none

  const idx = Math.min(active, movies.length - 1);
  const movie = movies[idx];
  const catLabel = CATEGORY_META[movie.category]?.label ?? "Now Streaming";
  const heroImg = movie.poster;
  const tabs = movies.slice(0, 4);

  return (
    <section className="relative mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
      <SectionLabel code="01" title="What's Playing Now" />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Left: active movie info */}
        <div className="flex flex-col">
          <CornerFrame className="signal-border relative aspect-[16/10] overflow-hidden rounded-2xl bg-void">
            <AnimatePresence mode="wait">
              <motion.img
                key={movie.slug}
                src={heroImg}
                alt={movie.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <Kicker>{catLabel}</Kicker>
              <h3 className="font-display mt-2 text-3xl uppercase tracking-tight text-foreground md:text-4xl">
                {movie.title}
              </h3>
            </div>
          </CornerFrame>

          <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-glow/80">
            {movie.runtime && <span>{movie.runtime}</span>}
            {movie.year && <><span className="h-1 w-1 rounded-full bg-cyan-glow/50" /><span>{movie.year}</span></>}
            {movie.director && <><span className="h-1 w-1 rounded-full bg-cyan-glow/50" /><span>Dir. {movie.director}</span></>}
            {movie.rating && <><span className="h-1 w-1 rounded-full bg-cyan-glow/50" /><span className="rounded border border-violet-glow/50 px-1.5 py-0.5">{movie.rating}</span></>}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={movie.slug}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-5 max-w-xl text-sm text-muted-foreground md:text-base"
            >
              {movie.synopsis}
            </motion.p>
          </AnimatePresence>

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

        {/* Right: preview + picker */}
        <div className="flex flex-col">
          <div className="font-mono mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
            <span>· Featured</span>
            <span className="text-muted-foreground">Now streaming</span>
          </div>

          <CornerFrame className="signal-border relative aspect-video overflow-hidden rounded-2xl bg-void">
            <AnimatePresence mode="wait">
              <motion.img
                key={movie.slug}
                src={heroImg}
                alt={movie.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
            <div className="scanlines pointer-events-none absolute inset-0 opacity-30" />

            <Link
              to="/movie/$slug"
              params={{ slug: movie.slug }}
              aria-label={`Open ${movie.title}`}
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-glow/60 bg-void/60 backdrop-blur transition group-hover:scale-110 group-hover:border-magenta-glow">
                <span className="ml-1 text-2xl text-cyan-glow">▶</span>
              </span>
            </Link>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-glow/80">
              <span>{catLabel}</span>
              <span>{movie.runtime}</span>
            </div>
          </CornerFrame>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {tabs.map((t, i) => {
              const isActive = i === idx;
              return (
                <button
                  key={t.slug}
                  onClick={() => setActive(i)}
                  className={`group relative overflow-hidden rounded-lg border p-2 text-left transition ${
                    isActive
                      ? "border-cyan-glow/70 bg-cyan-glow/10"
                      : "border-violet-glow/25 bg-void/40 hover:border-violet-glow/50"
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden rounded">
                    <img src={t.poster} alt={t.title} className="h-full w-full object-cover" loading="lazy" />
                    {isActive && <div className="absolute inset-0 border-2 border-cyan-glow/60" />}
                  </div>
                  <div className="font-display mt-2 truncate text-[11px] uppercase tracking-wider text-foreground">
                    {t.title}
                  </div>
                  <div className="font-mono truncate text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    {CATEGORY_META[t.category]?.label ?? t.category}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
