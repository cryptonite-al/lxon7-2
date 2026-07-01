import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TRAILERS, WATCH_URL } from "@/lib/lxon-content";
import { CornerFrame, Kicker, SectionLabel } from "./primitives";

export function FeaturedSpread() {
  const [active, setActive] = useState(0);
  const movie = TRAILERS[active];

  return (
    <section className="relative mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
      <SectionLabel code="01" title="What's Playing Now" />

      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        {/* Left: active movie info */}
        <div className="flex flex-col">
          <CornerFrame className="signal-border relative aspect-[16/10] overflow-hidden rounded-2xl bg-void">
            <AnimatePresence mode="wait">
              <motion.img
                key={movie.id}
                src={movie.image}
                alt={movie.label}
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
              <Kicker>{movie.kicker}</Kicker>
              <h3 className="font-display mt-2 text-3xl uppercase tracking-tight text-foreground md:text-4xl">
                {movie.label}
              </h3>
            </div>
          </CornerFrame>

          <div className="mt-5 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-glow/80">
            <span>{movie.fullRuntime}</span>
            <span className="h-1 w-1 rounded-full bg-cyan-glow/50" />
            <span>{movie.year}</span>
            <span className="h-1 w-1 rounded-full bg-cyan-glow/50" />
            <span>Dir. {movie.director}</span>
            <span className="h-1 w-1 rounded-full bg-cyan-glow/50" />
            <span className="rounded border border-violet-glow/50 px-1.5 py-0.5">{movie.rating}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={movie.id}
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

          <a
            href={WATCH_URL}
            className="font-display group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-violet-glow via-electric to-cyan-glow px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_40px_-8px] shadow-violet-glow/70"
          >
            Watch on LXON-7
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Right: Trailer tabs */}
        <div className="flex flex-col">
          <div className="font-mono mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
            <span>· Trailers</span>
            <span className="text-muted-foreground">Preview reel</span>
          </div>

          <CornerFrame className="signal-border relative aspect-video overflow-hidden rounded-2xl bg-void">
            <AnimatePresence mode="wait">
              <motion.img
                key={movie.id}
                src={movie.image}
                alt={movie.label}
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

            <button
              aria-label={`Play ${movie.label} trailer`}
              onClick={() => window.open(WATCH_URL, "_blank")}
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-glow/60 bg-void/60 backdrop-blur transition group-hover:scale-110 group-hover:border-magenta-glow">
                <span className="ml-1 text-2xl text-cyan-glow">▶</span>
              </span>
            </button>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-glow/80">
              <span>{movie.cat}</span>
              <span>{movie.runtime}</span>
            </div>
          </CornerFrame>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {TRAILERS.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`group relative overflow-hidden rounded-lg border p-2 text-left transition ${
                    isActive
                      ? "border-cyan-glow/70 bg-cyan-glow/10"
                      : "border-violet-glow/25 bg-void/40 hover:border-violet-glow/50"
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden rounded">
                    <img src={t.image} alt={t.label} className="h-full w-full object-cover" loading="lazy" />
                    {isActive && <div className="absolute inset-0 border-2 border-cyan-glow/60" />}
                  </div>
                  <div className="font-display mt-2 truncate text-[11px] uppercase tracking-wider text-foreground">
                    {t.label}
                  </div>
                  <div className="font-mono truncate text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    {t.cat}
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
