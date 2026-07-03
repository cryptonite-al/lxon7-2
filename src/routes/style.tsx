import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { ContentListing } from "@/components/home-v2/ContentListing";

export const Route = createFileRoute("/style")({
  head: () => ({
    meta: [
      { title: "AI Style · LXON-7" },
      { name: "description", content: "Runway films and moving editorials from creators redefining synthetic couture." },
      { property: "og:title", content: "AI Style · LXON-7" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: StylePage,
});

function StylePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <main className="relative">
        <div className="starfield absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-violet-glow/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-40 h-[500px] w-[500px] rounded-full bg-magenta-glow/15 blur-[120px]" />
        <div className="relative">
          <ContentListing
            category="style"
            kicker="Category"
            title="AI Style"
            subtitle="Runway films and moving editorials from creators redefining synthetic couture."
          />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
