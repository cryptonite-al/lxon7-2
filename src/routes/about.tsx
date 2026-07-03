import { createFileRoute, Link } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { PageBanner } from "@/components/home-v2/PageBanner";
import { Reveal } from "@/components/home-v2/Reveal";
import { Kicker, SectionLabel, CornerFrame } from "@/components/home-v2/primitives";
import { WATCH_URL } from "@/lib/lxon-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story · LXON-7" },
      {
        name: "description",
        content:
          "LXON-7 is an AI film studio — we produce and stream original AI-made cinema, and open our stage to a new wave of AI directors.",
      },
      { property: "og:title", content: "Our Story · LXON-7" },
      { property: "og:description", content: "The vision and the people behind LXON-7." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

// Founder bios — adapted from the founders' Bold Vision profiles to the LXON-7 vision.
const FOUNDERS = [
  {
    name: "King'Juma",
    role: "Co-Founder · Creator & Producer",
    initial: "K",
    to: "/founders/juma",
    bio: "A Dallas-born creator, entrepreneur, and community builder, King'Juma has spent his life turning opportunity into art — across theater, independent film, music, and podcasting. His guiding line, \u201cnever wait on opportunity, always create opportunity,\u201d is the engine behind LXON-7: a studio and platform built to give a new generation of AI filmmakers a global stage. He is focused on building something that outlives him — amplifying overlooked voices and proving AI cinema can be both bold and deeply human.",
  },
  {
    name: "Dear Derrick",
    role: "Co-Founder · Filmmaker & Producer",
    initial: "D",
    to: "/founders/dear-derrick",
    bio: "Born and raised in Dallas, Dear Derrick turned a childhood of hardship into a 25-year career in film as a writer, actor, and producer — founding his first production company in 2001 and later selling a film library to a major distributor. A self-taught storyteller who wrote every word himself, he now brings that same courage-to-create to LXON-7, using AI to keep making cinema for the overlooked and underestimated. For Derrick, filmmaking has always been freedom; AI is simply the next frontier of it.",
  },
] as const;

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <PageBanner accent="rendered into a studio." />
      <main className="relative overflow-hidden">
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-violet-glow/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-[40rem] h-[500px] w-[500px] rounded-full bg-magenta-glow/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
          {/* Hero */}
          <section className="py-20 md:py-28">
            <Kicker>Our Story</Kicker>
            <h1 className="font-display mt-5 max-w-4xl text-4xl uppercase leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient-signal">An AI film studio,</span>
              <br />
              built for the future of cinema.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              LXON-7 is an AI film studio. We produce and stream original AI-made cinema — feature
              films, mini-series, documentaries, and style shorts — and open our stage to a new
              wave of AI directors. Every frame is generated, not filmed: a new visual grammar
              shaped by machine intelligence and human vision.
            </p>
          </section>

          {/* Mission */}
          <section className="py-10 md:py-16">
            <SectionLabel code="01" title="Mission" />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  h: "Produce AI cinema",
                  p: "We make original AI-generated films, series, documentaries, and style work — the studio is the storyteller.",
                },
                {
                  h: "Curate the signal",
                  p: "Alongside our own work, we champion a new wave of AI directors and give their best work a premium home.",
                },
                {
                  h: "Stream worldwide",
                  p: "Our films reach audiences across the globe, delivered through trusted streaming partners.",
                },
              ].map((c, i) => (
                <Reveal key={c.h} delay={i * 0.08}>
                  <CornerFrame className="rounded-xl border border-violet-glow/15 bg-white/[0.02] p-6">
                    <h3 className="font-display text-sm uppercase tracking-[0.2em] text-cyan-glow">{c.h}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.p}</p>
                  </CornerFrame>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Founders */}
          <section className="py-10 md:py-16">
            <SectionLabel code="02" title="Founders" />
            <div className="grid gap-6 md:grid-cols-2">
              {FOUNDERS.map((f, i) => (
                <Reveal key={f.name} delay={i * 0.08}>
                  <Link
                    to={f.to}
                    className="group block rounded-xl border border-violet-glow/15 bg-white/[0.02] p-6 transition hover:border-cyan-glow/40 hover:bg-white/[0.04] md:p-7"
                  >
                  <div className="flex items-center gap-4">
                    <div className="font-display flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-violet-glow/50 bg-violet-glow/10 text-xl text-cyan-glow shadow-[0_0_30px_-10px] shadow-violet-glow">
                      {f.initial}
                    </div>
                    <div>
                      <h3 className="font-display text-lg uppercase tracking-wide text-foreground">{f.name}</h3>
                      <div className="font-mono mt-0.5 text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
                        {f.role}
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
                  <span className="font-mono mt-4 inline-block text-[10px] uppercase tracking-[0.3em] text-cyan-glow transition group-hover:translate-x-1">
                    Read full story →
                  </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24">
            <div className="relative overflow-hidden rounded-2xl border border-violet-glow/25 bg-gradient-to-br from-violet-glow/10 to-transparent p-10 text-center md:p-16">
              <div className="starfield absolute inset-0 opacity-30" />
              <div className="relative">
                <h2 className="font-display text-2xl uppercase tracking-wide md:text-4xl">
                  Join the <span className="text-gradient-flare">signal</span>.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                  Watch our cinema, or bring your own AI films to the LXON-7 stage.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={WATCH_URL}
                    className="btn-wave font-display rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-void transition hover:brightness-110"
                  >
                    Start Watching →
                  </a>
                  <Link
                    to="/apply"
                    className="font-display rounded-full border border-violet-glow/60 bg-violet-glow/10 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-foreground transition hover:bg-violet-glow/25"
                  >
                    Submit Your Film
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
