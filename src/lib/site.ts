// ─────────────────────────────────────────────────────────────────────────────
// LXON-7 site config — the ONE place for contact details.
//
// Fill these in when the client provides them; every page that uses them updates
// automatically. Leave a field as "" (empty) and the UI that shows it hides
// gracefully — no placeholder email/phone is ever displayed.
//
// (Later this can be populated from the dashboard instead of hard-coded here.)
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  emails: {
    general: "", // used as the fallback for any specific email left empty
    contact: "",
    investors: "",
    privacy: "",
    legal: "",
    copyright: "",
  },
  phone: "",
  jurisdiction: "", // for legal pages; empty → "applicable law"
  websiteLabel: "lxon-7.com",
} as const;

type EmailKind = keyof typeof SITE.emails;

/** Email for a given kind, falling back to `general`, then "" (empty = hide UI). */
export function siteEmail(kind: EmailKind): string {
  return SITE.emails[kind] || SITE.emails.general || "";
}

/** Governing-law phrase for legal pages. */
export function governingLaw(): string {
  return SITE.jurisdiction || "applicable law";
}
