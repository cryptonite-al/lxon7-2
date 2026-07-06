import { Link } from "@tanstack/react-router";
import logo from "@/assets/lxon7-logo-new.png";

// Internal links resolve via TanStack Router; anything starting with "http" is external.
const COLUMNS = [
  {
    title: "Browse",
    links: [
      { label: "Explore All", to: "/browse" },
      { label: "Films", to: "/films" },
      { label: "Series", to: "/series" },
      { label: "Documentaries", to: "/documentaries" },
      { label: "Style", to: "/style" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Submit Your Film", to: "/apply" },
      { label: "Our Story", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
      { label: "Copyright", to: "/copyright" },
    ],
  },
] as const;

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-violet-glow/20 bg-black">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-glow to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[300px] w-[300px] rounded-full bg-violet-glow/15 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1.6fr_1fr]">
          {/* Logo + tagline */}
          <div>
            <Link to="/" className="inline-flex">
              <img src={logo} alt="LXON-7" className="h-20 w-auto md:h-24" />
            </Link>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              An AI film studio — original cinema, streaming worldwide.
            </p>
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
                    <li key={l.label}>
                      <Link to={l.to} className={linkClass}>
                        {l.label}
                      </Link>
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
            <Link
              to="/investor"
              className="btn-wave font-display inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-void transition hover:brightness-110"
            >
              Investor Relations →
            </Link>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-violet-glow/15 pt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>© {new Date().getFullYear()} LXON-7. All rights reserved.</span>
          {/* Discreet admin entry — full-page link so Apache serves /secureaccess (PHP login) */}
          <a
            href="/secureaccess"
            aria-label="Admin login"
            title="Admin"
            className="inline-flex items-center gap-1.5 text-muted-foreground/50 transition-colors hover:text-cyan-glow"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Admin</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
