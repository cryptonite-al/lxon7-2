import logo from "@/assets/lxon7-logo-new.png";
import { WATCH_URL } from "@/lib/lxon-content";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-glow/20 bg-black/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-4 md:px-8">
        <a href="#top" className="flex shrink-0 items-center">
          <img src={logo} alt="LXON-7" className="h-10 w-auto md:h-12" />
        </a>
        <nav className="ml-6 hidden items-center gap-6 lg:flex">
          {["Films", "Series", "Documentaries", "Style"].map((n) => (
            <a
              key={n}
              href={WATCH_URL}
              className="font-display text-xs uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-cyan-glow"
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <a
            href="/apply"
            className="font-display rounded-full border border-violet-glow/60 bg-violet-glow/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-foreground shadow-[0_0_24px_-8px] shadow-violet-glow/60 transition hover:bg-violet-glow/25"
          >
            Creator Application
          </a>
        </div>
      </div>
    </header>
  );
}
