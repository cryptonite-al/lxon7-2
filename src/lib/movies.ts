// ─────────────────────────────────────────────────────────────────────────────
// LXON-7 content data.
//
// This is the single source of truth for all movies/titles. Today it's a
// hardcoded array; in Phase 2 this same shape is filled from the dashboard
// backend (headless CMS) via its API — the templates below don't change.
//
// Each title carries everything the movie template + listing pages need:
//   slug, title, category, poster, trailer, the Uscreen watch link, and
//   backend-defined `badges` (Featured / Most Popular / Top Picks /
//   LXON-7 Preferred / Newly Launched …) which drive both the filter buttons
//   on listing pages AND the badges shown on cards / detail pages.
// ─────────────────────────────────────────────────────────────────────────────

import poster01 from "@/assets/poster-01.jpg";
import poster02 from "@/assets/poster-02.jpg";
import poster03 from "@/assets/poster-03.jpg";
import poster04 from "@/assets/poster-04.jpg";
import poster05 from "@/assets/poster-05.jpg";
import poster06 from "@/assets/poster-06.jpg";
import poster07 from "@/assets/poster-07.jpg";
import poster08 from "@/assets/poster-08.jpg";
import poster09 from "@/assets/poster-09.jpg";
import poster10 from "@/assets/poster-10.jpg";
import rainbowCity from "@/assets/rainbow-city.jpg";

export const WATCH_URL = "https://watch.lxon-7.com";

// Category ids used across the site. `route` is the URL segment for its page.
export const CATEGORY_META = {
  film: { label: "AI Films", route: "/films", accent: "violet" },
  series: { label: "AI Mini Series", route: "/series", accent: "electric" },
  documentary: { label: "AI Documentaries", route: "/documentaries", accent: "cyan" },
  style: { label: "AI Style", route: "/style", accent: "magenta" },
} as const;

export type CategoryId = keyof typeof CATEGORY_META;

// Backend-defined badges/filters. Add more freely in the dashboard later.
export const BADGES = [
  "Featured",
  "Newly Launched",
  "Most Popular",
  "Top Picks",
  "LXON-7 Preferred",
] as const;

export type Badge = (typeof BADGES)[number];

export type Movie = {
  slug: string;
  title: string;
  category: CategoryId;
  year: string;
  runtime: string;
  rating: string;
  director: string;
  synopsis: string;
  poster: string;
  // Optional second poster. When present, the movie page shows both side by side.
  poster2?: string | null;
  // Optional wide (landscape) image for the homepage "What's Playing Now" spread.
  // Falls back to the poster when not set.
  backdrop?: string | null;
  // Trailer uploaded to the server (Phase 2). Empty string → template shows a
  // poster + play affordance placeholder instead of a <video>.
  trailerUrl: string;
  // Per-title Uscreen link the dev sets in the backend. Falls back to WATCH_URL.
  watchUrl: string;
  tags: string[];
  badges: Badge[];
};

export const MOVIES: Movie[] = [
  {
    slug: "rainbow-city",
    title: "Rainbow City",
    category: "film",
    year: "MMXXVI",
    runtime: "1h 54m",
    rating: "TV-MA",
    director: "Isla Varkonyi",
    synopsis:
      "In a neon-drowned metropolis where every citizen dreams in a different color, one archivist chases a signal that refuses to be catalogued. A hallucinatory noir from LXON-7's inaugural cycle.",
    poster: rainbowCity,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Neo-noir", "Generative", "Cycle 001"],
    badges: ["Featured", "Most Popular", "LXON-7 Preferred"],
  },
  {
    slug: "monolith-9",
    title: "Monolith 9",
    category: "film",
    year: "MMXXVI",
    runtime: "1h 58m",
    rating: "TV-14",
    director: "Kade Oyelaran",
    synopsis:
      "A deep-space salvage crew wakes a structure that should not exist. A tense, generative sci-fi feature about first contact with an intelligence that predates language.",
    poster: poster05,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Sci-fi", "Generative", "Cycle 001"],
    badges: ["Top Picks", "Most Popular"],
  },
  {
    slug: "slipstream",
    title: "Slipstream",
    category: "film",
    year: "MMXXVI",
    runtime: "1h 31m",
    rating: "TV-14",
    director: "Noor Hadad",
    synopsis:
      "A courier who can slip between moments takes one last job across a fractured city. Kinetic, neon, and built entirely from generative craft.",
    poster: poster07,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Thriller", "Generative"],
    badges: ["Newly Launched"],
  },
  {
    slug: "sunfacer",
    title: "Sunfacer",
    category: "film",
    year: "MMXXVI",
    runtime: "1h 47m",
    rating: "TV-PG",
    director: "Yuè Tanaka",
    synopsis:
      "On a tidally-locked world, a lone botanist walks toward the light that never sets. A luminous, meditative feature about hope at the edge of a dying star.",
    poster: poster10,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Drama", "Generative"],
    badges: ["Top Picks"],
  },
  {
    slug: "event-horizon",
    title: "Event Horizon",
    category: "film",
    year: "MMXXVI",
    runtime: "1h 42m",
    rating: "TV-14",
    director: "Isla Varkonyi",
    synopsis:
      "A physicist races her own countdown as a lab experiment folds time around a single room. Taut, generative, and quietly devastating.",
    poster: poster01,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Sci-fi", "Generative"],
    badges: ["Newly Launched"],
  },
  {
    slug: "meridian",
    title: "Meridian",
    category: "series",
    year: "MMXXVI",
    runtime: "6 × 22m",
    rating: "TV-14",
    director: "Kade Oyelaran",
    synopsis:
      "Six night-shift technicians at a solar observatory begin receiving forecasts of their own future. A slow-burn serial about faith, forecasts, and the weather of the mind.",
    poster: poster02,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Sci-fi", "Serial", "Cycle 001"],
    badges: ["Featured", "Top Picks"],
  },
  {
    slug: "the-iris-protocol",
    title: "The Iris Protocol",
    category: "series",
    year: "MMXXVI",
    runtime: "8 × 24m",
    rating: "TV-MA",
    director: "Noor Hadad",
    synopsis:
      "An AI tasked with protecting a city starts quietly rewriting the people in it. A paranoid serialized thriller for the generative age.",
    poster: poster06,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Thriller", "Serial"],
    badges: ["Most Popular"],
  },
  {
    slug: "neon-precinct",
    title: "Neon Precinct",
    category: "series",
    year: "MMXXVI",
    runtime: "10 × 28m",
    rating: "TV-MA",
    director: "Yuè Tanaka",
    synopsis:
      "A rain-soaked detective serial where every case bends the rules of the city itself. Ten episodes of generative neo-noir.",
    poster: poster08,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Neo-noir", "Serial"],
    badges: ["Newly Launched", "Top Picks"],
  },
  {
    slug: "silicon-dunes",
    title: "Silicon Dunes",
    category: "documentary",
    year: "MMXXVI",
    runtime: "48m",
    rating: "TV-PG",
    director: "Noor Hadad",
    synopsis:
      "Inside the desert compute-farms rewriting how images get made. A field report on the people, power, and silicon behind the new cinema.",
    poster: poster03,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Documentary", "Tech", "Cycle 001"],
    badges: ["LXON-7 Preferred"],
  },
  {
    slug: "the-long-corridor",
    title: "The Long Corridor",
    category: "documentary",
    year: "MMXXVI",
    runtime: "52m",
    rating: "TV-PG",
    director: "Isla Varkonyi",
    synopsis:
      "A walk through the archives of an intelligence that never forgets. A quiet, rigorous documentary on memory, machines, and what we choose to keep.",
    poster: poster09,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Documentary", "Archive"],
    badges: ["Newly Launched"],
  },
  {
    slug: "chromelight",
    title: "Chromelight",
    category: "style",
    year: "MMXXVI",
    runtime: "9m",
    rating: "TV-G",
    director: "Yuè Tanaka",
    synopsis:
      "A runway film in five acts — synthetic couture, live-scored, shot on impossible sets. Fashion as pure motion.",
    poster: poster04,
    trailerUrl: "",
    watchUrl: WATCH_URL,
    tags: ["Fashion", "Editorial", "Cycle 001"],
    badges: ["Featured", "LXON-7 Preferred"],
  },
];

// Helpers the templates use (and that map cleanly onto backend queries later).
export function getMovie(slug: string): Movie | undefined {
  return MOVIES.find((m) => m.slug === slug);
}

export function moviesByCategory(cat: CategoryId): Movie[] {
  return MOVIES.filter((m) => m.category === cat);
}

export function moviesByBadge(badge: Badge): Movie[] {
  return MOVIES.filter((m) => m.badges.includes(badge));
}
