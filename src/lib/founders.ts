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
  // Lead paragraph(s) under the name. A single string or several paragraphs.
  intro: string | string[];
  sections: { heading: string; body: string[] }[];
};

export const FOUNDERS: Record<string, Founder> = {
  juma: {
    slug: "juma",
    name: "King'Juma",
    initial: "K",
    role: "Co-Founder · Creator & Producer",
    image: "/assets/juma.jpg?v=2",
    accent: "built from pressure.",
    intro: [
      "King’Juma did not come from comfort, powerful connections, or a life where opportunities were handed to him. He came out of poverty in Dallas, surrounded by struggle, street pressure, and the daily reality of having to survive before he could ever think about success.",
      "His story is not clean, safe, or perfect. It is the story of a man who made mistakes, took losses, faced hard situations, and kept fighting even when life gave him every reason to quit.",
      "Instead of allowing his environment to decide his future, King’Juma turned survival into ambition, pain into creativity, and street knowledge into business discipline. With God’s blessings, faith, hard work, and determination, he continued pushing forward. That same drive now powers LXON-7, an AI streaming service created to give independent filmmakers and overlooked creators a global platform.",
    ],
    sections: [
      {
        heading: "Born into the struggle",
        body: [
          "King’Juma discovered his creative ability through theater, studying performance throughout high school and college. His talent earned him an offer for a full scholarship in Theater Arts.",
          "But he did not accept it.",
          "At the time, he was young, distracted, and not mature enough to understand the value of the opportunity in front of him. Looking back, he recognizes that decision as one of the biggest mistakes of his life.",
          "Poverty, street life, and the pressure to survive eventually pulled him farther away from the path he had started building. The streets became another kind of classroom—one with no safety net, no guaranteed second chances, and consequences that could change a life overnight.",
          "Those years hardened him, but they also taught him how to read people, survive under pressure, recognize opportunity, and build something from almost nothing.",
          "There were many times when King’Juma wanted to stop trying altogether. There were moments when the struggle became so heavy that giving up felt easier than continuing.",
          "But his mother, Ms. Mary, refused to give up on him.",
          "She believed in him during the years when he struggled to believe in himself. Her faith, encouragement, and love reminded him that his mistakes did not have to become his final destination. Because she continued to see something greater in him, King’Juma slowly began to see it in himself.",
          "Through God’s grace and the love and belief of Ms. Mary, he found the strength to remain focused, determined, and moving forward.",
        ],
      },
      {
        heading: "Turning survival into purpose",
        body: [
          "King’Juma eventually made the decision to redirect the same energy that once pulled him toward the streets into ownership, filmmaking, business, and creating a future bigger than the environment he came from.",
          "He could not go backward and reclaim the opportunities he had lost, but he could stop wasting the ones still in front of him.",
          "He began rebuilding himself with the lessons earned through poverty, failure, rejection, and survival. Nothing came easily. He had to learn through experience, move without guarantees, trust God’s direction, and create opportunities in places where no doors appeared to be open.",
          "His past did not disappear, but it became fuel.",
        ],
      },
      {
        heading: "A creator across every lane",
        body: [
          "King’Juma built his creative career without waiting for permission.",
          "His work reaches across independent film, music, media, branding, and podcasting. He helped produce several independent films and made his on-screen debut in “THUGS.”",
          "He later entered the music industry, earned a recording deal, and learned firsthand how branding, promotion, discipline, image, and storytelling can determine whether talent is noticed or ignored.",
          "As a producer, he has taken projects from the idea stage through filming, editing, promotion, and release. His work focuses on real stories, raw experiences, underserved communities, and voices that mainstream entertainment often overlooks.",
          "He did not enter the industry through an open door. He fought his way in by learning every side of the business, trusting his faith, and creating his own opportunities.",
        ],
      },
      {
        heading: "Building LXON-7",
        body: [
          "King’Juma lives by one rule:",
          "“Never wait on opportunity. Always create opportunity.”",
          "That mindset is the foundation of LXON-7.",
          "LXON-7 was not created simply to become another streaming service. It was built to challenge an entertainment industry that too often ignores independent creators, unconventional stories, and people without powerful connections.",
          "The platform is focused on giving a new generation of AI filmmakers, producers, and storytellers a place to be seen worldwide.",
          "King’Juma understands what it feels like to have talent but no access, ambition but no financial backing, and a vision that other people cannot yet see. He also understands the pain of mishandling an opportunity and realizing its value after it is gone.",
          "That is why LXON-7 is being built to create opportunities for people who may never receive another one.",
          "For King’Juma, this is bigger than entertainment. It is about ownership, redemption, creating opportunities, honoring the faith his mother placed in him, walking in the purpose God gave him, and leaving behind something that can outlive him.",
          "He came from poverty, survived the streets, made costly mistakes, nearly gave up, and rebuilt his direction.",
          "Through it all, God blessed him, and Ms. Mary believed in him until he learned to believe in himself.",
          "His life proves that a bad decision can delay your purpose, but with God’s blessings, faith, and determination, it does not have to destroy it.",
        ],
      },
    ],
  },
  "dear-derrick": {
    slug: "dear-derrick",
    name: "Dear Derrick",
    initial: "D",
    role: "Co-Founder · Filmmaker & Producer",
    image: "/assets/derrick.jpg?v=2",
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
