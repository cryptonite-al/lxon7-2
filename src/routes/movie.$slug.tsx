import { useRef, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { PageBanner } from "@/components/home-v2/PageBanner";
import { Kicker } from "@/components/home-v2/primitives";
import { CATEGORY_META, WATCH_URL } from "@/lib/movies";
import type { Movie } from "@/lib/movies";
import { fetchMovie, fetchMovies } from "@/lib/api";

const prettySlug = (s: string) =>
  s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const Route = createFileRoute("/movie/$slug")({
  head: ({ params }) => {
    const title = params.slug ? `${prettySlug(params.slug)} · LXON-7` : "LXON-7";
    return {
      meta: [
        { title },
        { name: "description", content: "An AI-native transmission on LXON-7." },
        { property: "og:title", content: title },
        { property: "og:type", content: "video.movie" },
      ],
    };
  },
  loader: async ({ params }) => {
    const movie = await fetchMovie(params.slug);
    if (!movie) throw notFound();
    const inCategory = await fetchMovies({ category: movie.category });
    const related = inCategory.filter((m) => m.slug !== movie.slug).slice(0, 5);
    return { movie, related };
  },
  component: MoviePage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <PageBanner accent="rendered into cinema." />
      <div className="mx-auto max-w-[1400px] px-4 py-40 text-center md:px-8">
        <Kicker>Signal lost</Kicker>
        <h1 className="font-display mt-4 text-4xl uppercase tracking-tight">Transmission not found</h1>
        <Link to="/browse" className="font-mono mt-8 inline-block text-xs uppercase tracking-[0.3em] text-cyan-glow hover:underline">
          ← Back to browse
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function MoviePage() {
  // This router version types Route.useLoaderData() as undefined — assert the
  // loader's known return shape so the file typechecks. (Do not remove.)
  const { movie, related } = Route.useLoaderData() as { movie: Movie; related: Movie[] };
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const cat = CATEGORY_META[movie.category];
  const watch = movie.watchUrl || WATCH_URL;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <PageBanner accent="rendered into cinema." />
      <main className="relative overflow-hidden">
        <div className="starfield absolute inset-0 opacity-25" />

        {/* Backdrop / hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={movie.poster} alt="" className="h-full w-full object-cover object-top opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
          </div>

          <div className={`relative mx-auto grid max-w-[1400px] gap-10 px-4 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 ${movie.poster2 ? "md:grid-cols-[440px_1fr]" : "md:grid-cols-[320px_1fr]"}`}>
            {/* Poster(s) — one centered, or two side by side when a second exists */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={movie.poster2 ? "grid grid-cols-2 gap-3 md:mx-0" : "mx-auto w-full max-w-[280px] md:mx-0"}
            >
              <div className="signal-border overflow-hidden rounded-xl">
                <img src={movie.poster} alt={movie.title} className="aspect-[2/3] w-full object-cover object-top" />
              </div>
              {movie.poster2 && (
                <div className="signal-border overflow-hidden rounded-xl">
                  <img src={movie.poster2} alt={`${movie.title} — alternate poster`} className="aspect-[2/3] w-full object-cover object-top" />
                </div>
              )}
            </motion.div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2">
                <Kicker>{cat.label}</Kicker>
                {movie.badges.map((b) => (
                  <span key={b} className="font-mono rounded-full border border-cyan-glow/40 bg-void/60 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.2em] text-cyan-glow/90">
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="font-display mt-4 text-[clamp(2.25rem,6vw,4.5rem)] font-black uppercase leading-[0.92] tracking-tight">
                {movie.title}
              </h1>

              <div className="font-mono mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                <span className="text-foreground">{movie.year}</span>
                <span className="h-1 w-1 rounded-full bg-cyan-glow/50" />
                <span>{movie.runtime}</span>
                <span className="h-1 w-1 rounded-full bg-cyan-glow/50" />
                <span>{movie.rating}</span>
                <span className="h-1 w-1 rounded-full bg-cyan-glow/50" />
                <span>Dir. {movie.director}</span>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {movie.synopsis}
              </p>

              {movie.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {movie.tags.map((t) => (
                    <span key={t} className="font-mono rounded border border-violet-glow/30 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Watch button → Uscreen (per-title link) */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={watch}
                  className="btn-wave font-display group inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_40px_-8px] shadow-violet-glow/70 transition hover:shadow-magenta-glow/70"
                >
                  Watch Full Film
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <Link
                  to="/browse"
                  className="font-mono inline-flex items-center gap-2 rounded-full border border-violet-glow/40 px-6 py-4 text-[10px] uppercase tracking-[0.3em] text-foreground transition hover:border-cyan-glow hover:text-cyan-glow"
                >
                  ← Browse all
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trailer — the big cinema screen */}
        <section className="relative mx-auto max-w-[1400px] px-4 pb-20 md:px-8">
          {/* ambient glow behind the screen */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-glow/20 blur-[120px]" />
          <div className="relative mb-6 flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-glow/70">Now screening</span>
            <h2 className="font-display text-2xl uppercase tracking-[0.15em] text-foreground md:text-3xl">
              Official Trailer
            </h2>
          </div>
          <div className="signal-border relative mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-2xl bg-black shadow-[0_0_80px_-20px] shadow-violet-glow/60 ring-1 ring-violet-glow/30">
            {movie.trailerUrl ? (
              <>
                <video
                  ref={videoRef}
                  src={movie.trailerUrl}
                  poster={movie.poster}
                  controls={playing}
                  playsInline
                  preload="metadata"
                  className="h-full w-full bg-black object-contain"
                  onPlay={() => setPlaying(true)}
                />
                {!playing && (
                  <button
                    type="button"
                    aria-label="Play trailer"
                    onClick={() => {
                      videoRef.current?.play().catch(() => {});
                      setPlaying(true);
                    }}
                    className="group absolute inset-0 flex items-center justify-center"
                  >
                    <span className="absolute inset-0 bg-void/40 transition group-hover:bg-void/25" />
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-glow/70 bg-void/60 pl-1 text-3xl text-cyan-glow shadow-[0_0_40px_-6px] shadow-cyan-glow/70 backdrop-blur transition group-hover:scale-110 md:h-24 md:w-24">
                      ▶
                    </span>
                  </button>
                )}
              </>
            ) : (
              // Placeholder until a trailer is uploaded from the backend.
              <div className="relative flex h-full w-full items-center justify-center">
                <img src={movie.poster} alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-30" />
                <div className="absolute inset-0 bg-void/50" />
                <div className="relative flex flex-col items-center gap-3 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-glow/50 text-2xl text-cyan-glow">▶</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Trailer coming soon</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Related in category */}
        {related.length > 0 && (
          <section className="relative mx-auto max-w-[1400px] px-4 pb-24 md:px-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-lg uppercase tracking-[0.2em] text-foreground">More in {cat.label}</h2>
              <Link to={cat.route} className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-glow hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {related.map((m) => (
                <Link
                  key={m.slug}
                  to="/movie/$slug"
                  params={{ slug: m.slug }}
                  className="group relative block overflow-hidden rounded-lg border border-violet-glow/20 transition hover:border-cyan-glow/50"
                >
                  <div className="relative aspect-[2/3]">
                    <img src={m.poster} alt={m.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-2">
                      <div className="font-display text-xs uppercase tracking-wide text-foreground">{m.title}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
