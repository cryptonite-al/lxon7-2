// Founder profiles — adapted from the founders' Bold Vision bios to the LXON-7
// vision. Images load from /assets/<file> (drop juma.jpg / derrick.jpg into
// public/assets/); a missing image falls back gracefully to an initial.

export type Founder = {
  slug: string;
  name: string;
  initial: string;
  role: string;
  image: string;
  accent: string; // hero two-tone accent line
  intro: string;
  sections: { heading: string; body: string[] }[];
};

export const FOUNDERS: Record<string, Founder> = {
  juma: {
    slug: "juma",
    name: "King'Juma",
    initial: "K",
    role: "Co-Founder · Creator & Producer",
    image: "/assets/juma.jpg",
    accent: "a builder of opportunity.",
    intro:
      "A Dallas-born creator, entrepreneur, and community builder, King'Juma has spent his life turning opportunity into art — and now channels that drive into LXON-7, a studio and platform built to give a new generation of AI filmmakers a global stage.",
    sections: [
      {
        heading: "Path to the arts",
        body: [
          "Juma found his earliest voice in theater, studying performance through high school and college and earning a full scholarship in the arts.",
          "A period focused on street life pulled him away from that path — but the detour ultimately sharpened his purpose. He redirected his energy into building a brand, nurturing his creativity, and chasing the dreams he'd once paused.",
        ],
      },
      {
        heading: "A creator across mediums",
        body: [
          "His work spans independent film, music, and podcasting. He helped produce several indie films and made his on-screen debut in \u201cTHUGS,\u201d then entered the music industry — earning a record deal and learning branding, discipline, and storytelling from a new angle.",
          "As a producer, he has led filming, editing, and release across a growing slate, amplifying community voices and culture.",
        ],
      },
      {
        heading: "Building LXON-7",
        body: [
          "His guiding line — \u201cnever wait on opportunity, always create opportunity\u201d — is the engine behind LXON-7. He is focused on creating opportunity for overlooked creators and proving that AI cinema can be both bold and deeply human.",
          "For Juma, LXON-7 is about building something that outlives him: a creative home that inspires the next generation of storytellers.",
        ],
      },
    ],
  },
  "dear-derrick": {
    slug: "dear-derrick",
    name: "Dear Derrick",
    initial: "D",
    role: "Co-Founder · Filmmaker & Producer",
    image: "/assets/derrick.jpg",
    accent: "the courage to create.",
    intro:
      "Born and raised in Dallas, Dear Derrick turned a childhood of hardship into a 25-year career in film — and brings that same courage-to-create to LXON-7, using AI to keep making cinema for the overlooked and underestimated.",
    sections: [
      {
        heading: "Rising above",
        body: [
          "Derrick grew up a poor kid with big dreams, facing undiagnosed dyslexia that made school reading painful and being bullied for his struggles. With relentless encouragement from his mother, he refused to give up.",
          "He turned every hardship into fuel — becoming a self-taught writer who has authored several books, writing every word himself.",
        ],
      },
      {
        heading: "Industry leadership",
        body: [
          "Derrick has worked in film for more than 25 years as a writer, actor, producer, and executive producer. In 2001 he founded his own production company, growing its creative output and value.",
          "In 2012 he sold a library of films to a major distributor for a significant profit — a milestone in a long producing career that has also seen him star in multiple films.",
        ],
      },
      {
        heading: "Vision at LXON-7",
        body: [
          "For Derrick, filmmaking is more than entertainment — it is freedom: a way to express his vision, explore humanity, and share his experience with the world. He believes there is no right or wrong way to make a film, only the courage to create.",
          "AI is simply the next frontier of that freedom. His mission at LXON-7 is to inspire those who feel overlooked, underestimated, or afraid — proof that adversity is temporary and perseverance transforms destinies.",
        ],
      },
    ],
  },
};
