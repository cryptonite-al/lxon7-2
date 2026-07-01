import type { ReactNode } from "react";

export function CornerFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span className="pointer-events-none absolute -left-px -top-px h-4 w-4 border-l border-t border-violet-glow/70" />
      <span className="pointer-events-none absolute -right-px -top-px h-4 w-4 border-r border-t border-violet-glow/70" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-4 w-4 border-b border-l border-violet-glow/70" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 border-b border-r border-violet-glow/70" />
      {children}
    </div>
  );
}

export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`font-display inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-cyan-glow/80 ${className}`}
    >
      <span className="inline-block h-px w-6 bg-cyan-glow/60" />
      {children}
    </span>
  );
}

export function SectionLabel({ code, title }: { code: string; title: string }) {
  return (
    <div className="mb-8 flex items-end gap-6 border-b border-violet-glow/20 pb-4 md:mb-12">
      <div className="flex items-baseline gap-4 min-w-0">
        <span className="font-mono text-xs text-cyan-glow/70">/ {code}</span>
        <h2 className="font-display truncate text-2xl uppercase tracking-widest text-foreground md:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
