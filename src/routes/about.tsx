import { createFileRoute, Link } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { Kicker, SectionLabel, CornerFrame } from "@/components/home-v2/primitives";
import { WATCH_URL } from "@/lib/lxon-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story · LXON-7" },
      {
        name: "description",
        content:
          "The story behind LXON-7 — a broadcast home for AI-native cinema, built to give creators a global stage.",
      },
      { property: "og:title", content: "Our Story · LXON-7" },
      { property: "og:description", content: "The vision and the people behind LXON-7." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

// ── PLACEHOLDER COPY ─────────────────────────────────────────────────────────
// Swap the text below for the client's real About / founder copy.
const FOUNDERS = [
  {
    name: "King'Juma",
    role: "Co-Founder",
    initial: "K",
    bio: "Placeholder bio — replace with King'Juma's real story: background, why LXON-7, and the vision for AI-native cinema.",
  },
  {
    name: "Dear Derrick",
    role: "Co-Founder",
    initial: "D",
    bio: "Placeholder bio — replace with Dear Derrick's real story and role in building the LXON-7 platform.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <main className="relative overflow-hidden">
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-violet-glow/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-[40rem] h-[500px] w-[500px] rounded-full bg-magenta-glow/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
          {/* Hero */}
          <section className="py-20 md:py-28">
            <Kicker>Our Story</Kicker>
            <h1 className="font-display mt-5 max-w-4xl text-4xl uppercase leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient-signal">A broadcast channel</span>
              <br />
              for AI-native cinema.
            </h1>
            {/* PLACEHOLDER COPY — replace with the client's real brand story. */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              LXON-7 is a streaming home for AI-generated films, series, documentaries, and style —
              built to give a new generation of creators a global stage. This is placeholder copy;
              replace it with the real brand story and mission.
            </p>
          </section>

          {/* Mission */}
          <section className="py-10 md:py-16">
            <SectionLabel code="01" title="Mission" />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  h: "Champion creators",
                  p: "Give AI filmmakers worldwide a premium place to be seen and discovered.",
                },
                {
                  h: "Curate the signal",
                  p: "Surface the best AI-native films, series, docs, and style — cleanly presented.",
                },
                {
                  h: "Stream worldwide",
                  p: "One cinematic front door; watching and subscriptions handled seamlessly.",
                },
              ].map((c) => (
                <CornerFrame
                  key={c.h}
                  className="rounded-xl border border-violet-glow/15 bg-white/[0.02] p-6"
                >
                  <h3 className="font-display text-sm uppercase tracking-[0.2em] text-cyan-glow">{c.h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.p}</p>
                </CornerFrame>
              ))}
            </div>
          </section>

          {/* Founders */}
          <section className="py-10 md:py-16">
            <SectionLabel code="02" title="Founders" />
            <div className="grid gap-6 md:grid-cols-2">
              {FOUNDERS.map((f) => (
                <div
                  key={f.name}
                  className="flex gap-5 rounded-xl border border-violet-glow/15 bg-white/[0.02] p-6"
                >
                  <div className="font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-violet-glow/50 bg-violet-glow/10 text-xl text-cyan-glow shadow-[0_0_30px_-10px] shadow-violet-glow">
                    {f.initial}
                  </div>
                  <div>
                    <h3 className="font-display text-lg uppercase tracking-wide text-foreground">{f.name}</h3>
                    <div className="font-mono mt-0.5 text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
                      {f.role}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
                  </div>
                </div>
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
                  Creators — submit your work. Viewers — start watching AI-native cinema now.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/apply"
                    className="font-display rounded-full border border-violet-glow/60 bg-violet-glow/15 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-foreground transition hover:bg-violet-glow/25"
                  >
                    Submit Your Film
                  </Link>
                  <a
                    href={WATCH_URL}
                    className="font-display rounded-full border border-cyan-glow/50 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-cyan-glow transition hover:bg-cyan-glow/10"
                  >
                    Start Watching →
                  </a>
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
