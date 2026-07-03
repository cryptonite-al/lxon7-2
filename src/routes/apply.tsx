import { createFileRoute } from "@tanstack/react-router";
import { TopNav } from "@/components/home-v2/TopNav";
import { SubmissionConsole } from "@/components/home-v2/SubmissionConsole";
import { SiteFooter } from "@/components/home-v2/SiteFooter";
import { PageBanner } from "@/components/home-v2/PageBanner";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Creator Application · LXON-7" },
      {
        name: "description",
        content:
          "Submit your AI-native film, series, documentary, or style transmission to LXON-7 and reach a global audience.",
      },
      { property: "og:title", content: "Creator Application · LXON-7" },
      {
        property: "og:description",
        content: "Open a channel on LXON-7 — the broadcast home for AI-native cinema.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      <PageBanner accent="made by creators like you." />
      <main className="relative overflow-hidden">
        <div className="starfield absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-violet-glow/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-40 h-[500px] w-[500px] rounded-full bg-magenta-glow/20 blur-[120px]" />
        <div className="relative pt-10 md:pt-14">
          <SubmissionConsole />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
