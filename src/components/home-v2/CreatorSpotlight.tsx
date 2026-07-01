import portrait from "@/assets/creator-portrait.jpg";
import { CREATOR, WATCH_URL } from "@/lib/lxon-content";
import { CornerFrame, Kicker, SectionLabel } from "./primitives";

export function CreatorSpotlight() {
  return (
    <section className="relative overflow-hidden border-y border-violet-glow/20 bg-void/60 py-20 md:py-24">
      <div className="pointer-events-none absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-magenta-glow/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-electric/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <SectionLabel code="04" title="Meet the Director" />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
          {/* Portrait */}
          <CornerFrame className="signal-border relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-void">
            <img src={portrait} alt={CREATOR.name} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="font-display text-lg uppercase tracking-wider text-foreground">{CREATOR.name}</div>
              <div className="font-mono mt-1 text-[10px] uppercase tracking-[0.3em] text-cyan-glow/80">
                {CREATOR.handle}
              </div>
            </div>
          </CornerFrame>

          {/* Content */}
          <div className="flex flex-col">
            <Kicker>Featured Director · Cycle 001</Kicker>

            <blockquote className="mt-5 border-l-2 border-cyan-glow/60 pl-5">
              <span className="font-display text-cyan-glow/70">“</span>
              <span className="font-display text-xl leading-snug tracking-tight text-foreground md:text-2xl">
                {CREATOR.quote}
              </span>
              <span className="font-display text-cyan-glow/70">”</span>
            </blockquote>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {CREATOR.bio}
            </p>

            <div className="font-mono mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="text-foreground">{CREATOR.role}</span>
              <span className="h-1 w-1 rounded-full bg-cyan-glow/50" />
              <span>4 transmissions · Cycle 001</span>
            </div>

            <div className="mt-8">
              <div className="font-mono mb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Selected Transmissions
              </div>
              <div className="flex gap-3">
                {CREATOR.works.map((w, i) => (
                  <a
                    key={i}
                    href={WATCH_URL}
                    className="signal-border relative aspect-[2/3] w-20 shrink-0 overflow-hidden rounded-md md:w-24"
                  >
                    <img
                      src={w}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>

            <a
              href={WATCH_URL}
              className="font-display mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-violet-glow/60 bg-violet-glow/10 px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-foreground transition hover:bg-violet-glow/25"
            >
              Explore Works →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
