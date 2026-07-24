import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { PageBanner } from "@/components/home-v2/PageBanner";
import { Reveal } from "@/components/home-v2/Reveal";
import { Kicker, SectionLabel } from "@/components/home-v2/primitives";
import type { Founder } from "@/lib/founders";

export function FounderProfile({ founder }: { founder: Founder }) {
  const [imgOk, setImgOk] = useState(true);
  // The opening can be one paragraph or several. The first sits beside the
  // portrait (keeping that column level with the photo); any others run
  // full width underneath.
  const introParagraphs = Array.isArray(founder.intro) ? founder.intro : [founder.intro];
  const [leadParagraph, ...restParagraphs] = introParagraphs;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <PageBanner accent="one signal, many voices." />
      <main className="relative overflow-hidden">
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-violet-glow/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-[36rem] h-[500px] w-[500px] rounded-full bg-magenta-glow/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1100px] px-4 md:px-8">
          {/* Hero */}
          <section className="grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-center md:py-24">
            <Reveal>
              <div className="signal-border relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-void">
                {imgOk ? (
                  <img
                    src={founder.image}
                    alt={founder.name}
                    onError={() => setImgOk(false)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-violet-glow/10">
                    <span className="font-display text-6xl text-cyan-glow/70">{founder.initial}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Kicker>Founder</Kicker>
              <h1 className="font-display mt-4 text-4xl uppercase leading-[1.05] tracking-tight md:text-6xl">
                <span className="block text-foreground">{founder.name}</span>
                <span className="block text-gradient-signal">{founder.accent}</span>
              </h1>
              <div className="font-mono mt-4 text-[11px] uppercase tracking-[0.3em] text-cyan-glow/70">
                {founder.role}
              </div>
              {leadParagraph && (
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {leadParagraph}
                </p>
              )}
            </Reveal>
          </section>

          {/* Rest of the opening — full width below the portrait, so the hero
              text column stays level with the photo instead of running past it. */}
          {restParagraphs.length > 0 && (
            <Reveal delay={0.15}>
              <section className="max-w-3xl space-y-4 pb-4 md:pb-8">
                {restParagraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {p}
                  </p>
                ))}
              </section>
            </Reveal>
          )}

          {/* Story sections */}
          {founder.sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.05}>
              <section className="py-8 md:py-12">
                <SectionLabel code={String(i + 1).padStart(2, "0")} title={s.heading} />
                <div className="max-w-3xl space-y-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}

          {/* Footer nav */}
          <section className="flex flex-wrap items-center justify-between gap-4 py-16 md:py-20">
            <Link
              to="/about"
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-glow hover:underline"
            >
              ← Back to Our Story
            </Link>
            <Link
              to="/browse"
              className="btn-wave font-display rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-void transition hover:brightness-110"
            >
              Start Watching →
            </Link>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
