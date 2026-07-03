import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { PageBanner } from "@/components/home-v2/PageBanner";
import { ContentListing } from "@/components/home-v2/ContentListing";

export const Route = createFileRoute("/series")({
  head: () => ({
    meta: [
      { title: "AI Mini Series · LXON-7" },
      { name: "description", content: "Serialized cosmic arcs — binge a full world across a single cycle." },
      { property: "og:title", content: "AI Mini Series · LXON-7" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SeriesPage,
});

function SeriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <PageBanner accent="rendered into cinema." />
      <main className="relative overflow-hidden">
        <div className="starfield absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-violet-glow/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-40 h-[500px] w-[500px] rounded-full bg-magenta-glow/15 blur-[120px]" />
        <div className="relative">
          <ContentListing
            category="series"
            kicker="Category"
            title="AI Mini Series"
            subtitle="Serialized cosmic arcs — binge a full world across a single cycle."
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
