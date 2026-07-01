import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, WATCH_URL } from "@/lib/lxon-content";
import { SectionLabel } from "./primitives";

const POSITIONS = [
  { x: 50, y: 8 },
  { x: 92, y: 50 },
  { x: 50, y: 92 },
  { x: 8, y: 50 },
];

const ACCENT_TEXT: Record<string, string> = {
  violet: "text-violet-glow",
  electric: "text-electric",
  cyan: "text-cyan-glow",
  magenta: "text-magenta-glow",
};

const ACCENT_BORDER: Record<string, string> = {
  violet: "border-violet-glow/70",
  electric: "border-electric/70",
  cyan: "border-cyan-glow/70",
  magenta: "border-magenta-glow/70",
};

const ACCENT_GLOW: Record<string, string> = {
  violet: "shadow-[0_0_40px_4px_rgba(139,92,246,0.55),inset_0_0_20px_rgba(139,92,246,0.35)]",
  electric: "shadow-[0_0_40px_4px_rgba(59,130,246,0.55),inset_0_0_20px_rgba(59,130,246,0.35)]",
  cyan: "shadow-[0_0_40px_4px_rgba(34,211,238,0.55),inset_0_0_20px_rgba(34,211,238,0.35)]",
  magenta: "shadow-[0_0_40px_4px_rgba(236,72,153,0.55),inset_0_0_20px_rgba(236,72,153,0.35)]",
};

const ACCENT_HALO: Record<string, string> = {
  violet: "bg-violet-glow/30",
  electric: "bg-electric/30",
  cyan: "bg-cyan-glow/30",
  magenta: "bg-magenta-glow/30",
};

const ACCENT_GLOW_ACTIVE: Record<string, string> = {
  violet: "shadow-[0_0_70px_10px_rgba(139,92,246,0.75),inset_0_0_28px_rgba(139,92,246,0.5)]",
  electric: "shadow-[0_0_70px_10px_rgba(59,130,246,0.75),inset_0_0_28px_rgba(59,130,246,0.5)]",
  cyan: "shadow-[0_0_70px_10px_rgba(34,211,238,0.75),inset_0_0_28px_rgba(34,211,238,0.5)]",
  magenta: "shadow-[0_0_70px_10px_rgba(236,72,153,0.75),inset_0_0_28px_rgba(236,72,153,0.5)]",
};

export function CategoryDial() {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];

  return (
    <section className="relative overflow-hidden border-y border-violet-glow/20 bg-void/40 py-20 md:py-28">
      <div className="starfield absolute inset-0 opacity-40" />
      <AnimatePresence mode="wait">
        <motion.div
          key={cat.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cat.bg})` }}
        />
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/70 via-void/40 to-void/80" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-glow/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <SectionLabel code="02" title="Four Channels. One Home." />

        {/* Desktop: dial */}
        <div className="hidden lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-[640px]">
            <div className="absolute inset-0 rounded-full border border-violet-glow/30" />
            <div className="absolute inset-[8%] rounded-full border border-dashed border-cyan-glow/25" />
            <div className="absolute inset-[18%] animate-orbit rounded-full border border-magenta-glow/20" style={{ animationDuration: "80s" }} />

            {/* Center sigil */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-cyan-glow/70">Channel</div>
              <div className={`font-display text-6xl ${ACCENT_TEXT[cat.accent]}`}>{cat.code}</div>
              <div className="font-display text-2xl uppercase tracking-widest text-foreground">{cat.name}</div>
              <div className="max-w-[260px] px-4 text-xs text-muted-foreground">{cat.tag}</div>
              <a
                href={WATCH_URL}
                className="font-display mt-2 rounded-full border border-violet-glow/60 bg-void/70 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-foreground transition hover:bg-violet-glow/20"
              >
                Browse →
              </a>
            </div>

            {/* Planet nodes with permanent glow */}
            {CATEGORIES.map((c, i) => {
              const p = POSITIONS[i];
              const isActive = i === active;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  aria-label={c.name}
                >
                  {/* pulsing halo */}
                  <span
                    className={`pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl animate-pulse ${ACCENT_HALO[c.accent]}`}
                  />
                  <span
                    className={`relative font-display flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 bg-gradient-to-br from-void via-void/80 to-black/80 backdrop-blur transition-all duration-500 ${
                      ACCENT_BORDER[c.accent]
                    } ${ACCENT_TEXT[c.accent]} ${
                      isActive ? `scale-110 ${ACCENT_GLOW_ACTIVE[c.accent]}` : ACCENT_GLOW[c.accent]
                    }`}
                  >
                    <span className="font-mono text-[9px] tracking-[0.3em] opacity-80">/{c.code}</span>
                    <span className="mt-1 max-w-[88px] text-center text-[10px] uppercase leading-tight tracking-wider">
                      {c.name}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={cat.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {cat.desc}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: stack with bg images */}
        <div className="grid gap-4 lg:hidden">
          {CATEGORIES.map((c, i) => {
            const isActive = i === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(isActive ? -1 : i)}
                className={`signal-border relative overflow-hidden rounded-2xl bg-void/60 p-5 text-left transition ${
                  isActive ? "border-cyan-glow/60" : ""
                }`}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: `url(${c.bg})` }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/90 via-void/60 to-void/30" />
                <div className="relative flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">/ {c.code}</div>
                    <div className="font-display mt-1 truncate text-xl uppercase text-foreground">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.tag}</div>
                  </div>
                  <span className={`font-display text-2xl ${ACCENT_TEXT[c.accent]}`}>{isActive ? "−" : "+"}</span>
                </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="relative overflow-hidden"
                    >
                      <p className="mt-4 text-sm text-muted-foreground">{c.desc}</p>
                      <a
                        href={WATCH_URL}
                        className="font-display mt-3 inline-block text-[10px] uppercase tracking-[0.3em] text-magenta-glow"
                      >
                        Browse channel →
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
