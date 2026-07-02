import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-loop.mp4";
import { WATCH_URL, METRICS } from "@/lib/lxon-content";
import { Counter } from "./Counter";
import { Kicker } from "./primitives";

export function HeroBroadcast() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient background video — full bleed, low opacity */}
      <video
        ref={(el) => { if (el) el.muted = true; }}
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
      <div className="starfield absolute inset-0 opacity-40" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-glow/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-magenta-glow/25 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 pt-16 md:px-8 md:pt-24 lg:pt-28">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <Kicker>Transmission 001 · MMXXVI</Kicker>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            48° 51′ N · 002° 21′ E
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="font-display max-w-[16ch] text-[clamp(2.75rem,8.5vw,7rem)] font-black uppercase leading-[0.9] tracking-tight"
        >
          <span className="block text-foreground">Movies made by AI.</span>
          <span className="block">
            <span className="text-gradient-signal">Streaming </span>
            <span className="text-gradient-flare">worldwide.</span>
          </span>
        </motion.h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          LXON-7 is the home for AI-made cinema — feature films, mini-series,
          documentaries, and style shorts from a new wave of directors, streaming
          in 92 countries.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={WATCH_URL}
            className="font-display group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-glow via-electric to-cyan-glow px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_40px_-8px] shadow-violet-glow/70 transition hover:shadow-magenta-glow/70"
          >
            Start Watching
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={WATCH_URL}
            className="font-display inline-flex items-center gap-3 rounded-full border border-violet-glow/50 bg-void/40 px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-foreground backdrop-blur transition hover:border-cyan-glow hover:text-cyan-glow"
          >
            <span className="text-magenta-glow">▶</span> Watch Trailer
          </a>
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
