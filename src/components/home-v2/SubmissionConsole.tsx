import { useState } from "react";
import { WATCH_URL } from "@/lib/lxon-content";
import { SectionLabel } from "./primitives";

type Field = { label: string; placeholder: string; options?: string[] };

const FIELDS: Field[] = [
  { label: "> NAME", placeholder: "Your name" },
  { label: "> HANDLE", placeholder: "@studio" },
  { label: "> TITLE", placeholder: "Working title of your transmission" },
  {
    label: "> CATEGORY",
    placeholder: "Select a category",
    options: ["Film", "Series", "Documentary", "Style"],
  },
  { label: "> LINK", placeholder: "Screener URL" },
];

const BULLETS = [
  "Distribution across 92 countries on day one.",
  "Editorial promotion — trailers, features, spotlights.",
  "Revenue share on every stream, transparently.",
  "Direct pipeline to LXON-7 studio commissioning.",
];

// Custom, fully-themed dropdown (native <select> option lists can't be dark-themed
// reliably across browsers, which is why the category picker looked off).
function CategorySelect({ options, placeholder }: { options: string[]; placeholder: string }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative mt-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="font-mono flex w-full items-center justify-between rounded-md border border-violet-glow/30 bg-void/60 px-3 py-3 text-sm text-foreground transition focus:border-cyan-glow focus:outline-none focus:ring-1 focus:ring-cyan-glow/50"
      >
        <span className={value ? "text-foreground" : "text-muted-foreground/60"}>
          {value || placeholder}
        </span>
        <span className={`text-cyan-glow/70 transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <ul className="absolute z-30 mt-1 w-full overflow-hidden rounded-md border border-violet-glow/40 bg-void shadow-[0_20px_60px_-20px] shadow-violet-glow/60">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onMouseDown={() => {
                  setValue(opt);
                  setOpen(false);
                }}
                className="font-mono block w-full px-3 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-violet-glow/15 hover:text-cyan-glow"
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SubmissionConsole() {  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <SectionLabel code="05" title="Join the AI Cinema Movement" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* Terminal card */}
          <div className="signal-border relative overflow-hidden rounded-2xl bg-void/70 p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between border-b border-violet-glow/20 pb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-glow/80">
                <span>lxon-7 :: submissions.console</span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-magenta-glow" />
                  READY
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {FIELDS.map((f) => (
                  <label key={f.label} className={`block ${f.label.includes("TITLE") || f.label.includes("LINK") ? "md:col-span-2" : ""}`}>
                    <span className="font-mono block text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
                      {f.label}
                    </span>
                    {f.options ? (
                      <CategorySelect options={f.options} placeholder={f.placeholder} />
                    ) : (
                      <input
                        type="text"
                        placeholder={f.placeholder}
                        className="font-mono mt-2 w-full rounded-md border border-violet-glow/30 bg-void/60 px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-glow focus:outline-none focus:ring-1 focus:ring-cyan-glow/50"
                      />
                    )}
                  </label>
                ))}
                <label className="block md:col-span-2">
                  <span className="font-mono block text-[10px] uppercase tracking-[0.3em] text-cyan-glow/70">
                    &gt; SYNOPSIS
                  </span>
                  <textarea
                    rows={4}
                    placeholder="150 words on the transmission."
                    className="font-mono mt-2 w-full resize-none rounded-md border border-violet-glow/30 bg-void/60 px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-glow focus:outline-none focus:ring-1 focus:ring-cyan-glow/50"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Response cycle · 14 days
                </div>
                <a
                  href={WATCH_URL}
                  className="btn-wave font-display group inline-flex items-center gap-3 rounded-full px-7 py-3 text-[11px] uppercase tracking-[0.3em] text-void shadow-[0_0_40px_-8px] shadow-magenta-glow/60 transition hover:brightness-110"
                >
                  Transmit Submission
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Why submit */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl uppercase tracking-tight text-foreground md:text-3xl">
              Why <span className="text-gradient-signal">broadcast</span> with us
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              LXON-7 is built by AI filmmakers, for AI filmmakers. Your work reaches a curated,
              global audience that treats generative cinema as its primary art form.
            </p>
            <ul className="mt-6 space-y-3">
              {BULLETS.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow shadow-[0_0_10px] shadow-cyan-glow" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
