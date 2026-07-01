import { TICKER } from "@/lib/lxon-content";

export function SignalTicker() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="relative overflow-hidden border-b border-violet-glow/20 bg-void/60">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {items.map((t, i) => (
          <span
            key={i}
            className="font-mono flex items-center gap-3 px-6 text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
          >
            <span className="text-magenta-glow">◆</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
