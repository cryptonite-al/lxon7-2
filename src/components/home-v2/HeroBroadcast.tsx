import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-bg.mp4";
import heroPoster from "@/assets/hero-poster.jpg";
import { METRICS } from "@/lib/lxon-content";
import { Counter } from "./Counter";
import { Kicker } from "./primitives";

export function HeroBroadcast({ trailerSlug, topTitle }: { trailerSlug?: string; topTitle?: string }) {
  return (
    <section id="top" className="relative min-h-[88svh] overflow-hidden bg-void md:min-h-0">
      {/* Solid dark base so nothing shows through the contain gaps on mobile */}
      <div className="pointer-events-none absolute inset-0 bg-void" />
      {/* Background visual.
          Desktop: autoplaying video, object-cover (full-bleed, immersive).
          Mobile: object-contain so the whole frame is visible and never cut off. */}
      <video
        ref={(el) => {
          if (el) el.muted = true;
        }}
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-95"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-background/35 to-background/85" />
      <div className="starfield absolute inset-0 opacity-25" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-10" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-glow/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-magenta-glow/25 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 pt-16 md:px-8 md:pt-24 lg:pt-28">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <Kicker>{topTitle ? `Now Streaming \u00B7 ${topTitle}` : "AI Cinema \u00B7 MMXXVI"}</Kicker>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            48° 51&#8242; N &#183; 002° 21&#8242; E
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-display max-w-[18ch] text-[clamp(2.5rem,8vw,6.5rem)] font-black uppercase leading-[0.9] tracking-tight [text-shadow:0_2px_20px_rgba(5,4,15,0.85)]"
        >
          <span className="block text-foreground">LXON-7</span>
          <span className="block">
            <span className="text-foreground">AI </span>
            <span className="bg-gradient-to-r from-cyan-glow via-electric to-cyan-glow bg-clip-text text-transparent">
              Streaming Service
            </span>
          </span>
          <span className="block text-gradient-flare">worldwide.</span>
        </motion.h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg [text-shadow:0_1px_12px_rgba(5,4,15,0.9)]">
          LXON-7 is an AI film studio. We produce and stream original AI-made
          cinema &#8212; feature films, mini-series, documentaries, and style
          shorts &#8212; reaching audiences in 92 countries.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/browse"
            className="btn-wave font-display group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_40px_-8px] shadow-violet-glow/70 transition hover:shadow-magenta-glow/70"
          >
            Start Watching
            <span className="transition-transform group-hover:translate-x-1">&#8594;</span>
          </Link>
          {trailerSlug ? (
            <Link
              to="/movie/$slug"
              params={{ slug: trailerSlug }}
              className="font-display inline-flex items-center gap-3 rounded-full border border-violet-glow/50 bg-void/40 px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-foreground backdrop-blur transition hover:border-cyan-glow hover:text-cyan-glow"
            >
              <span className="text-magenta-glow">&#9654;</span> Watch Trailer
            </Link>
          ) : (
            <Link
              to="/browse"
              className="font-display inline-flex items-center gap-3 rounded-full border border-violet-glow/50 bg-void/40 px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-foreground backdrop-blur transition hover:border-cyan-glow hover:text-cyan-glow"
            >
              <span className="text-magenta-glow">&#9654;</span> Watch Trailer
            </Link>
          )}
        </div>

        {/* Metrics strip */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-violet-glow/25 bg-violet-glow/5 sm:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-void/60 p-4">
              <div className="font-display text-2xl text-foreground md:text-3xl">
                <Counter to={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="h-16 md:h-20" />
      </div>
    </section>
  );
}
