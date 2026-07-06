import type { Movie } from "@/lib/movies";

// Same-origin PHP API (dashboard + site live on the same host).
const API_BASE = "/api/movies.php";

/** All published movies, optionally filtered by category and/or badge. */
export async function fetchMovies(opts?: { category?: string; badge?: string }): Promise<Movie[]> {
  const qs = new URLSearchParams();
  if (opts?.category) qs.set("category", opts.category);
  if (opts?.badge) qs.set("badge", opts.badge);
  const url = qs.toString() ? `${API_BASE}?${qs.toString()}` : API_BASE;

  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`Failed to load movies (${res.status})`);
  const data = await res.json();
  return Array.isArray(data) ? (data as Movie[]) : [];
}

/** A single published movie by slug, or null if it doesn't exist. */
export async function fetchMovie(slug: string): Promise<Movie | null> {
  const res = await fetch(`${API_BASE}?slug=${encodeURIComponent(slug)}`, {
    headers: { Accept: "application/json" },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load movie (${res.status})`);
  return (await res.json()) as Movie;
}
