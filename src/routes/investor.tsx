import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { PageBanner } from "@/components/home-v2/PageBanner";
import { Kicker, SectionLabel, CornerFrame } from "@/components/home-v2/primitives";
import { siteEmail } from "@/lib/site";

export const Route = createFileRoute("/investor")({
  head: () => ({
    meta: [
      { title: "Investor Relations · LXON-7" },
      {
        name: "description",
        content:
          "LXON-7 — a streaming platform for AI-generated cinema. Investor information and opportunities.",
      },
      { property: "og:title", content: "Investor Relations · LXON-7" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: InvestorPage,
});

// Investor enquiries email — from central config (empty → line hides).
const INVESTOR_EMAIL = siteEmail("investors");

function InvestorPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <PageBanner accent="rendered into an industry." />
      <main className="relative overflow-hidden">
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-violet-glow/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-[38rem] h-[500px] w-[500px] rounded-full bg-electric/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[1100px] px-4 md:px-8">
          {/* Hero */}
          <section className="py-20 md:py-28">
            <Kicker>Investor Relations</Kicker>
            <h1 className="font-display mt-5 max-w-4xl text-4xl uppercase leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient-signal">Invest in the future</span>
              <br />
              of entertainment.
            </h1>
            {/* Client-provided copy (rebranded to LXON-7). */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Welcome to LXON-7 AI Cinema — a streaming platform dedicated to AI-generated movies,
              TV series, documentaries, short films, and original creator content. Our mission is to
              become the world's premier destination for AI-powered entertainment while giving
              creators a platform to distribute their work worldwide.
            </p>
          </section>

          {/* Opportunity highlights — PLACEHOLDER figures, replace with real numbers. */}
          <section className="py-8 md:py-12">
            <SectionLabel code="01" title="The Opportunity" />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  h: "A new category",
                  p: "AI-generated cinema is an emerging medium. LXON-7 is positioned as a dedicated home for it, not a side-catalog.",
                },
                {
                  h: "Creator-driven supply",
                  p: "A global community of AI creators supplies original films, series, documentaries, and style content.",
                },
                {
                  h: "Lean distribution",
                  p: "A premium brand front paired with proven streaming infrastructure keeps operations focused and scalable.",
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

          {/* Download the deck */}
          <section className="py-16 md:py-24">
            <div className="relative overflow-hidden rounded-2xl border border-violet-glow/25 bg-gradient-to-br from-violet-glow/10 to-transparent p-10 text-center md:p-14">
              <div className="starfield absolute inset-0 opacity-30" />
              <div className="relative">
                <h2 className="font-display text-2xl uppercase tracking-wide md:text-3xl">
                  Download the <span className="text-gradient-flare">investor deck</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                  The full LXON-7 vision, business model, and roadmap.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="/assets/LXON-7-Investor-Deck.pdf"
                    download
                    className="btn-wave font-display inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-void transition hover:brightness-110"
                  >
                    Download Investor Deck (PDF) →
                  </a>
                  <a
                    href="/assets/LXON-7-Investor-Deck.pptx"
                    download
                    className="font-display inline-flex items-center gap-2 rounded-full border border-violet-glow/60 bg-violet-glow/10 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-foreground transition hover:bg-violet-glow/25"
                  >
                    PPTX
                  </a>
                </div>
                {INVESTOR_EMAIL && (
                  <p className="font-mono mt-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                    Questions? {INVESTOR_EMAIL}
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
