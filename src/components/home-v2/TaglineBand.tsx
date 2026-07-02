import cosmicVideo from "@/assets/cosmic-loop.mp4";
import { WATCH_URL } from "@/lib/lxon-content";

export function TaglineBand() {
  return (
    <section className="relative overflow-hidden">
      <video
        ref={(el) => { if (el) el.muted = true; }}
        src={cosmicVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-void/30 to-background/80" />
      <div className="starfield absolute inset-0 opacity-25 mix-blend-screen" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-violet-glow/20" />

      <div className="relative mx-auto max-w-[1400px] px-4 py-28 text-center md:px-8 md:py-40">
        <div className="font-mono mb-6 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.4em] text-cyan-glow/70">
          <span className="h-px w-10 bg-cyan-glow/50" />
          Manifesto
          <span className="h-px w-10 bg-cyan-glow/50" />
        </div>
        <h2 className="font-display text-[clamp(2rem,7vw,5.5rem)] font-black uppercase leading-[0.95] tracking-tight">
          <span className="block text-foreground">One Platform.</span>
          <span className="block text-gradient-signal">Endless Creators.</span>
          <span className="block text-gradient-flare">Limitless Possibilities.</span>
        </h2>
        <a
          href={WATCH_URL}
          className="font-display mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-glow via-electric to-cyan-glow px-8 py-4 text-xs uppercase tracking-[0.3em] text-void shadow-[0_0_50px_-8px] shadow-violet-glow/70 transition hover:shadow-magenta-glow/70"
        >
          Enter the Stream →
        </a>
      </div>
    </section>
  );
}
