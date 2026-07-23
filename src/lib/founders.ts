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
      "Derrick’s life is a testament to the extraordinary strength of the human spirit. Rather than allowing adversity to define him, he chose to rise above it. Every obstacle became an opportunity, every setback became a lesson, and every hardship became the foundation upon which he built his future.",
    sections: [
      {
        heading: "Rising above",
        body: [
          "As he matured, Derrick developed a deep sense of purpose. He became a voice for those who had been silenced and a defender of those who could not defend themselves. He refused to be limited by circumstance, choosing courage, compassion, and conviction over fear and complacency.",
          "Entirely self-taught, Derrick discovered the power of storytelling as a means of healing, inspiring, and creating change. He has authored several books, personally writing every word himself—a reflection of his unwavering commitment to authenticity, discipline, and truth.",
          "Standing 6 feet 4 inches tall and weighing 275 pounds, Derrick’s greatest strength has never been his physical presence, but the resilience of his character. Throughout his life, he has consistently overcome expectations, shattered barriers, and proven that determination is far more powerful than circumstance.",
        ],
      },
      {
        heading: "Industry leadership",
        body: [
          "For more than twenty-five years, Derrick has dedicated his life to the film industry as a creator, writer, actor, producer, and executive producer. His passion for storytelling has driven a career built on vision, perseverance, and innovation.",
          "In 2001, he founded New Era Pictures, where his leadership and creative direction played a significant role in expanding the company’s value, reputation, and body of work. In 2012, he reached another important milestone by successfully selling a library of films to Maverick Entertainment, a defining achievement that further established his reputation as a producer and entrepreneur.",
          "Throughout his career, Derrick has appeared in numerous films, frequently collaborating with acclaimed director GuGu E. Michaels. Together, they have brought compelling stories to audiences through a shared commitment to authentic and meaningful filmmaking.",
        ],
      },
      {
        heading: "Beyond the screen",
        body: [
          "For Derrick, filmmaking has never been merely a profession—it is a calling. It is the freedom to give voice to untold stories, to explore the depth of the human experience, and to transform life’s greatest challenges into messages of hope. He believes that there is no single formula for creating great films; there is only the courage to create with honesty, passion, and purpose.",
          "Today, Derrick’s mission reaches far beyond the screen. He strives to inspire those who feel overlooked, underestimated, or forgotten—to remind them that their past does not determine their future. His journey stands as powerful evidence that adversity is never the end of the story. With faith, perseverance, and unwavering determination, even the greatest obstacles can become the foundation for an extraordinary legacy.",
        ],
      },
    ],
  },
};
