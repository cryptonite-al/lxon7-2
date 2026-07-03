import type { ReactNode } from "react";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { PageBanner } from "@/components/home-v2/PageBanner";
import { Kicker } from "@/components/home-v2/primitives";

/**
 * Shared shell for policy/legal pages (Privacy, Terms, Copyright).
 * Keeps typography and spacing consistent across all of them.
 *
 * NOTE: the body text passed into these pages is plain-language boilerplate
 * and is NOT legal advice — have it reviewed before relying on it.
 */
export function LegalLayout({
  kicker = "Legal",
  title,
  updated,
  children,
}: {
  kicker?: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <PageBanner accent="on the record." />
      <main className="relative overflow-hidden">
        <div className="starfield absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-violet-glow/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[820px] px-4 py-16 md:px-8 md:py-24">
          <Kicker>{kicker}</Kicker>
          <h1 className="font-display mt-5 text-3xl uppercase leading-tight tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="font-mono mt-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Last updated · {updated}
          </p>

          <div className="mt-10 space-y-8 md:mt-14">{children}</div>

          <p className="mt-16 border-t border-violet-glow/15 pt-6 text-xs leading-relaxed text-muted-foreground/70">
            This document is a general template provided for convenience and is not legal
            advice. Have it reviewed by a qualified professional before publishing.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

/** A titled section inside a legal page. */
export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-sm uppercase tracking-[0.2em] text-cyan-glow">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}
