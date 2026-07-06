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

export const CATEGORIES = [
  {
    id: "films",
    code: "01",
    name: "AI Films",
    tag: "Feature-length transmissions",
    desc: "Cinematic, single-arc journeys built entirely with generative craft. Directors ship worlds you've never seen — in one sitting.",
    accent: "violet",
    bg: poster05,
  },
  {
    id: "series",
    code: "02",
    name: "AI Mini Series",
    tag: "Serialized cosmic arcs",
    desc: "Episodic universes with cliffhanger cadence. Bite-sized broadcasts you can binge across a single lunar cycle.",
    accent: "electric",
    bg: poster06,
  },
  {
    id: "docs",
    code: "03",
    name: "AI Documentaries",
    tag: "Field reports from the frontier",
    desc: "Rigorous, generative-first documentary work. Real subjects, real research, reimagined through synthetic cinematography.",
    accent: "cyan",
    bg: poster09,
  },
  {
    id: "style",
    code: "04",
    name: "AI Style",
    tag: "Editorial & fashion transmissions",
    desc: "Runway films, look-books, and moving editorials from creators redefining synthetic couture.",
    accent: "magenta",
    bg: poster04,
  },
] as const;

// Rainbow City is the flagship feature. Trailers switch between titles.
export const FEATURE_MOVIE = {
  title: "Rainbow City",
  kicker: "Featured Broadcast · AI Film",
  runtime: "1h 54m",
  year: "MMXXVI",
  director: "Isla Varkonyi",
  rating: "TV-MA",
  synopsis:
    "In a neon-drowned metropolis where every citizen dreams in a different color, one archivist chases a signal that refuses to be catalogued. A hallucinatory noir from LXON-7's inaugural cycle.",
  image: rainbowCity,
  tags: ["Neo-noir", "Generative", "Cycle 001"],
};

export const TRAILERS = [
  {
    id: "rainbow",
    label: "Rainbow City",
    kicker: "Featured Broadcast · AI Film",
    cat: "AI Film",
    runtime: "2:14",
    fullRuntime: "1h 54m",
    year: "MMXXVI",
    director: "Isla Varkonyi",
    rating: "TV-MA",
    synopsis:
      "In a neon-drowned metropolis where every citizen dreams in a different color, a lone archivist chases a signal that refuses to be catalogued. A hallucinatory noir from LXON-7's first cycle.",
    tags: ["Neo-noir", "Generative", "Cycle 001"],
    image: rainbowCity,
  },
  {
    id: "meridian",
    label: "Meridian",
    kicker: "New Mini Series · AI Original",
    cat: "AI Mini Series",
    runtime: "1:48",
    fullRuntime: "6 × 22m",
    year: "MMXXVI",
    director: "Kade Oyelaran",
    rating: "TV-14",
    synopsis:
      "Six night-shift technicians at a solar observatory begin receiving forecasts of their own future. A slow-burn serial about faith, forecasts, and the weather of the mind.",
    tags: ["Sci-fi", "Serial", "Cycle 001"],
    image: poster02,
  },
  {
    id: "silicon",
    label: "Silicon Dunes",
    kicker: "New Documentary · AI Field Report",
    cat: "AI Documentary",
    runtime: "2:02",
    fullRuntime: "48m",
    year: "MMXXVI",
    director: "Noor Hadad",
    rating: "TV-PG",
    synopsis:
      "Inside the desert compute-farms rewriting how images get made. A field report on the people, power, and silicon behind the new cinema.",
    tags: ["Documentary", "Tech", "Cycle 001"],
    image: poster03,
  },
  {
    id: "chromelight",
    label: "Chromelight",
    kicker: "Style Transmission · AI Editorial",
    cat: "AI Style",
    runtime: "0:58",
    fullRuntime: "9m",
    year: "MMXXVI",
    director: "Yuè Tanaka",
    rating: "TV-G",
    synopsis:
      "A runway film in five acts — synthetic couture, live-scored, shot on impossible sets. Fashion as pure motion.",
    tags: ["Fashion", "Editorial", "Cycle 001"],
    image: poster04,
  },
];

export const TRENDING = [
  { title: "Rainbow City", cat: "AI Films", runtime: "1h 54m", image: rainbowCity },
  { title: "Monolith 9", cat: "AI Films", runtime: "1h 58m", image: poster05 },
  { title: "The Iris Protocol", cat: "AI Mini Series", runtime: "8 × 24m", image: poster06 },
  { title: "Slipstream", cat: "AI Films", runtime: "1h 31m", image: poster07 },
  { title: "Neon Precinct", cat: "AI Mini Series", runtime: "10 × 28m", image: poster08 },
  { title: "The Long Corridor", cat: "AI Documentary", runtime: "52m", image: poster09 },
  { title: "Sunfacer", cat: "AI Films", runtime: "1h 47m", image: poster10 },
];

export const NEW_TRANSMISSIONS = [
  { title: "Chromelight", cat: "AI Style", runtime: "9m", image: poster04 },
  { title: "Silicon Dunes", cat: "AI Documentary", runtime: "48m", image: poster03 },
  { title: "Meridian", cat: "AI Mini Series", runtime: "6 × 22m", image: poster02 },
  { title: "Event Horizon", cat: "AI Films", runtime: "1h 42m", image: poster01 },
  { title: "Sunfacer", cat: "AI Films", runtime: "1h 47m", image: poster10 },
  { title: "Neon Precinct", cat: "AI Mini Series", runtime: "10 × 28m", image: poster08 },
];

export const CREATOR = {
  name: "Isla Varkonyi",
  handle: "@varkonyi.studio",
  role: "Director · LXON-7 Resident",
  quote: "Generative filmmaking is finally an author's medium.",
  bio: "Isla's work maps quiet, cosmic solitude. Her four transmissions this cycle span a feature, a mini-series, and two style films.",
  works: [poster02, poster07, poster04, poster10],
};

export const METRICS = [
  { label: "Original Films", value: 4, suffix: "" },
  { label: "AI-Crafted", value: 100, suffix: "%" },
  { label: "Genres", value: 4, suffix: "" },
  { label: "Countries", value: 92, suffix: "" },
];

export const TICKER = [
  "NOW STREAMING · White Women Love Black Men",
  "NEW · Dear Derrick",
  "FEATURED · Stolen Moment",
  "NOW PLAYING · Rainbow City",
  "Original AI cinema · streaming worldwide",
  "Live channel · watch.lxon-7.com",
];
