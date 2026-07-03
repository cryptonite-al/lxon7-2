import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { PageBanner } from "@/components/home-v2/PageBanner";
import { Kicker } from "@/components/home-v2/primitives";
import { siteEmail } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · LXON-7" },
      { name: "description", content: "Get in touch with the LXON-7 team." },
      { property: "og:title", content: "Contact · LXON-7" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

// Central config drives this. When the email is empty the send UI hides.
// (No backend — with an email set, submit opens the visitor's mail client.)
const CONTACT_EMAIL = siteEmail("contact");

const inputClass =
  "w-full rounded-lg border border-violet-glow/25 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-cyan-glow/60";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = CONTACT_EMAIL
    ? `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        `LXON-7 enquiry from ${name || "website"}`,
      )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`
    : "";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <PageBanner accent="always listening." />
      <main className="relative overflow-hidden">
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-violet-glow/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-magenta-glow/15 blur-[120px]" />

        <div className="relative mx-auto max-w-[760px] px-4 py-20 md:px-8 md:py-28">
          <Kicker>Contact</Kicker>
          <h1 className="font-display mt-5 text-4xl uppercase leading-[1.05] tracking-tight md:text-5xl">
            <span className="text-gradient-signal">Reach the studio.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Questions, partnerships, or press? Send us a message and we'll get back to you. Creators
            looking to submit work should use the Submit page.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className={inputClass}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className={inputClass}
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              className={`${inputClass} min-h-[160px] resize-y`}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {CONTACT_EMAIL ? (
              <>
                <a
                  href={mailto}
                  className="btn-wave font-display inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-void transition hover:brightness-110"
                >
                  Send Message →
                </a>
                <p className="font-mono mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                  Or email us directly · {CONTACT_EMAIL}
                </p>
              </>
            ) : (
              <p className="font-mono mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                Contact details coming soon
              </p>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
