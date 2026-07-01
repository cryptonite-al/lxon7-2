import logo from "@/assets/lxon7-logo-new.png";
import { WATCH_URL } from "@/lib/lxon-content";

const COLUMNS = [
  { title: "Browse", links: ["Films", "Series", "Docs", "Style"] },
  { title: "Studio", links: ["Submit", "Creators", "Press"] },
  { title: "Legal", links: ["Terms", "Privacy", "Cookies"] },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-violet-glow/20 bg-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-glow to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-violet-glow/15 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1.6fr_1fr]">
          {/* Logo + tagline */}
          <div>
            <img src={logo} alt="LXON-7" className="h-20 w-auto md:h-24" />
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              A broadcast channel for AI-native cinema.
            </p>
            <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
              <span className="h-1.5 w-1.5 rounded-full bg-magenta-glow shadow-[0_0_10px] shadow-magenta-glow" />
              Signal · Live
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-3 gap-6">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="font-display mb-4 text-[10px] uppercase tracking-[0.3em] text-cyan-glow/80">
                  / {col.title}
                </div>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href={WATCH_URL}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Investor */}
          <div>
            <div className="font-display mb-4 text-[10px] uppercase tracking-[0.3em] text-cyan-glow/80">
              / Investor Relations
            </div>
            <a
              href={WATCH_URL}
              className="font-display inline-flex w-fit items-center gap-2 rounded-full border border-violet-glow/60 bg-violet-glow/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-foreground transition hover:bg-violet-glow/25"
            >
              Request Deck →
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-violet-glow/15 pt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} LXON-7. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
