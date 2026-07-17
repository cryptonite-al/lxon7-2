import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/lxon7-logo-new.png";
import { WATCH_URL } from "@/lib/lxon-content";

// "Explore LXON-7" menu. Clicking the label goes to /browse (all content);
// hovering reveals these. Short labels on purpose for the nav.
const EXPLORE = [
  { label: "Films", to: "/films" },
  { label: "Series", to: "/series" },
  { label: "Documentaries", to: "/documentaries" },
  { label: "Style", to: "/style" },
] as const;

// The About page's nav label. Change this ONE value to "Founders" or "Origin"
// if you prefer — the route stays /about either way.
const ABOUT_LABEL = "Our Story";

const linkClass =
  "font-display text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-cyan-glow";

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-violet-glow/20 bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center gap-4 px-4 md:h-16 md:px-8">
        {/* Logo → home */}
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="LXON-7" className="h-14 w-auto md:h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="ml-6 hidden items-center gap-7 lg:flex">
          {/* Explore LXON-7 (click → /browse, hover → dropdown) */}
          <div className="group relative">
            <Link to="/browse" className={`${linkClass} inline-flex items-center gap-1.5`}>
              Explore LXON-7
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                className="mt-px opacity-70 transition-transform duration-200 group-hover:rotate-180"
              >
                <path
                  d="M1 1l3.5 3.5L8 1"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Dropdown (pt-3 keeps hover bridged to the label) */}
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="min-w-[190px] rounded-xl border border-violet-glow/25 bg-black/95 p-2 shadow-[0_20px_60px_-20px] shadow-violet-glow/50 backdrop-blur-xl">
                {EXPLORE.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="font-display block rounded-lg px-3 py-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:bg-violet-glow/10 hover:text-cyan-glow"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About / Our Story */}
          <Link to="/about" className={linkClass}>
            {ABOUT_LABEL}
          </Link>
        </nav>

        {/* Right CTAs (desktop) */}
        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Link
            to="/apply"
            className="btn-wave font-display rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-void shadow-[0_0_24px_-8px] shadow-violet-glow/60 transition hover:brightness-110"
          >
            Submit Your Film
          </Link>
          <a
            href={WATCH_URL}
            className="font-display rounded-full border border-cyan-glow/50 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-cyan-glow transition hover:bg-cyan-glow/10"
          >
            Start Watching
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-violet-glow/30 text-foreground lg:hidden"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-violet-glow/20 bg-black/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto max-w-[1400px] px-4 py-4">
            <div className="font-display mb-1 text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
              Explore LXON-7
            </div>
            <div className="mb-3 grid gap-1 border-l border-violet-glow/20 pl-3">
              {EXPLORE.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-display py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-cyan-glow"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="font-display block py-2 text-xs uppercase tracking-[0.28em] text-muted-foreground hover:text-cyan-glow"
            >
              {ABOUT_LABEL}
            </Link>

            <div className="mt-4 grid gap-2">
              <Link
                to="/apply"
                onClick={() => setOpen(false)}
                className="btn-wave font-display rounded-full px-4 py-2.5 text-center text-[11px] uppercase tracking-[0.28em] text-void"
              >
                Submit Your Film
              </Link>
              <a
                href={WATCH_URL}
                className="font-display rounded-full border border-cyan-glow/50 px-4 py-2.5 text-center text-[11px] uppercase tracking-[0.28em] text-cyan-glow"
              >
                Start Watching
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
