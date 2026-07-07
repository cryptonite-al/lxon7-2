import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { Preloader } from "@/components/home-v2/Preloader";
import { SignalTicker } from "@/components/home-v2/SignalTicker";
import { HeroBroadcast } from "@/components/home-v2/HeroBroadcast";
import { FeaturedSpread } from "@/components/home-v2/FeaturedSpread";
import { CategoryDial } from "@/components/home-v2/CategoryDial";
import { SignalRail } from "@/components/home-v2/SignalRail";
// import { CreatorSpotlight } from "@/components/home-v2/CreatorSpotlight"; // "Meet the Director" — hidden; re-enable here + below
import { SignalSpotlight } from "@/components/home-v2/SignalSpotlight";
import { TaglineBand } from "@/components/home-v2/TaglineBand";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { fetchMovies } from "@/lib/api";
import type { Movie } from "@/lib/movies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        property: "og:image",
        content: "https://lxon-7.com/og-broadcast.jpg",
      },
      { name: "twitter:image", content: "https://lxon-7.com/og-broadcast.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  // Real movies from the dashboard (newest lead the list). Sections that use
  // them hide gracefully until data arrives / if the API is unreachable.
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    let alive = true;
    fetchMovies({ homepage: true })
      .then((data) => { if (alive) setMovies(data); })
      .catch(() => { if (alive) setMovies([]); });
    return () => { alive = false; };
  }, []);

  const topSlug = movies[0]?.slug;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <TopNav />
      <main>
        <HeroBroadcast trailerSlug={topSlug} topTitle={movies[0]?.title} />
        <SignalTicker movies={movies} />
        <SignalSpotlight trailerSlug={topSlug} />
        <FeaturedSpread movies={movies} />
        <CategoryDial />
        <SignalRail code="03" title="Trending This Week" movies={movies} />
        {/* "Meet the Director" is hidden for now. To bring it back: uncomment this line
            AND the import at the top of this file. Nothing was deleted. */}
        {/* <CreatorSpotlight /> */}
        <SignalRail code="06" title="Just Added" movies={movies} />
        <TaglineBand />
      </main>
      <SiteFooter />
    </div>
  );
}
