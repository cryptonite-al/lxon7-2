import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { Preloader } from "@/components/home-v2/Preloader";
import { SignalTicker } from "@/components/home-v2/SignalTicker";
import { HeroBroadcast } from "@/components/home-v2/HeroBroadcast";
import { FeaturedSpread } from "@/components/home-v2/FeaturedSpread";
import { CategoryDial } from "@/components/home-v2/CategoryDial";
import { SignalRail } from "@/components/home-v2/SignalRail";
import { CreatorSpotlight } from "@/components/home-v2/CreatorSpotlight";
import { SignalSpotlight } from "@/components/home-v2/SignalSpotlight";
import { TaglineBand } from "@/components/home-v2/TaglineBand";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { TRENDING, NEW_TRANSMISSIONS } from "@/lib/lxon-content";

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Preloader />
      <TopNav />
      <main>
        <HeroBroadcast />
        <SignalTicker />
        <SignalSpotlight />
        <FeaturedSpread />
        <CategoryDial />
        <SignalRail code="03" title="Trending This Week" items={TRENDING} />
        <CreatorSpotlight />
        <SignalRail code="06" title="Just Added" items={NEW_TRANSMISSIONS} />
        <TaglineBand />
      </main>
      <SiteFooter />
    </div>
  );
}
