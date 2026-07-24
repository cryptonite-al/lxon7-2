import type { Movie, CategoryId, Badge } from "@/lib/movies";

// Same-origin PHP API (dashboard + site live on the same host).
const API_BASE = "/api/movies.php";

// ── Data contract guards ────────────────────────────────────────────────────
// Movies are entered by hand in the dashboard, so one can legitimately arrive
// with no tags, no badges, or a missing image — and if the backend is ever a
// version behind, a field may not be there at all. Components call things like
// movie.tags.map(), which throws on undefined and blanks the entire page.
// Normalizing here — the one place data enters the app — keeps every page
// rendering no matter what the API returns.

const str = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v : v == null ? fallback : String(v);

const optStr = (v: unknown): string | null =>
  typeof v === "string" && v.length > 0 ? v : null;

const strArray = (v: unknown): string[] =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];

function normalize(raw: unknown): Movie {
  const r = (raw ?? {}) as Record<string, unknown>;
  return {
    slug: str(r.slug),
    title: str(r.title),
    category: str(r.category, "film") as CategoryId,
    year: str(r.year),
    runtime: str(r.runtime),
    rating: str(r.rating),
    director: str(r.director),
    synopsis: str(r.synopsis),
    poster: str(r.poster),
    poster2: optStr(r.poster2),
    backdrop: optStr(r.backdrop),
    trailerUrl: str(r.trailerUrl),
    watchUrl: str(r.watchUrl),
    tags: strArray(r.tags),
    badges: strArray(r.badges) as Badge[],
  };
}

/** All published movies, optionally filtered by category, badge, or homepage set. */
export async function fetchMovies(opts?: { category?: string; badge?: string; homepage?: boolean }): Promise<Movie[]> {
  const qs = new URLSearchParams();
  if (opts?.category) qs.set("category", opts.category);
  if (opts?.badge) qs.set("badge", opts.badge);
  if (opts?.homepage) qs.set("homepage", "1");
  const url = qs.toString() ? `${API_BASE}?${qs.toString()}` : API_BASE;

  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Failed to load movies (${res.status})`);
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  // Drop entries with no slug/title — they'd render as broken, unclickable cards.
  return data.map(normalize).filter((m) => m.slug !== "" && m.title !== "");
}

/** A single published movie by slug, or null if it doesn't exist. */
export async function fetchMovie(slug: string): Promise<Movie | null> {
  const res = await fetch(`${API_BASE}?slug=${encodeURIComponent(slug)}`, {
    headers: { Accept: "application/json" },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load movie (${res.status})`);
  const data = await res.json();
  if (!data || typeof data !== "object" || Array.isArray(data)) return null;
  const movie = normalize(data);
  return movie.slug ? movie : null;
}
