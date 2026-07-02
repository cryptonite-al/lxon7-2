import { motion } from "framer-motion";
import spotlightVideo from "@/assets/spotlight-loop.mp4";
import { WATCH_URL } from "@/lib/lxon-content";
import { CornerFrame, Kicker } from "./primitives";

export function SignalSpotlight() {
  return (
    <section className="relative overflow-hidden border-y border-violet-glow/20 bg-void/60 py-20 md:py-24">
      {/* ambient glows to match 7-2 sections */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-violet-glow/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-magenta-glow/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Left — looping video in a signal-framed panel */}
        <CornerFrame className="signal-border relative aspect-square w-full overflow-hidden rounded-2xl bg-void">
          <video
            src={spotlightVideo}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-void/60 via-transparent to-transparent" />
          <div className="scanlines pointer-events-none absolute inset-0 opacity-20" />
        </CornerFrame>

        {/* Right — spotlight copy */}
        <div className="flex flex-col">
          <Kicker>Signal Spotlight · Cycle 001</Kicker>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display mt-5 text-[clamp(2rem,4.5vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight"
          >
            <span className="block text-foreground">Intelligence,</span>
            <span className="block">
              <span className="text-gradient-signal">rendered into </span>
              <span className="text-gradient-flare">cinema.</span>
            </span>
          </motion.h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Every frame on LXON-7 is generated, not filmed — a new visual grammar
            built by machine intelligence and shaped by human directors. From
            experimental loops to feature-length odysseys, this is what synthetic
            cinema looks like when the signal goes live.
          </p>

          <div className="font-mono mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-foreground">Generative Cinema</span>
            <span className="h-1 w-1 rounded-full bg-cyan-glow/50" />
            <span>Streaming in 92 countries</span>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={WATCH_URL}
              className="font-display group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-glow via-electric to-cyan-glow px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_40px_-8px] shadow-violet-glow/70 transition hover:shadow-magenta-glow/70"
            >
              Explore the Catalog
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={WATCH_URL}
              className="font-display inline-flex items-center gap-3 rounded-full border border-violet-glow/50 bg-void/40 px-7 py-3.5 text-xs uppercase tracking-[0.3em] text-foreground backdrop-blur transition hover:border-cyan-glow hover:text-cyan-glow"
            >
              <span className="text-magenta-glow">▶</span> Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
