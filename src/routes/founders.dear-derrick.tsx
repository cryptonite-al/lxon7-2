import { createFileRoute } from "@tanstack/react-router";
import { FounderProfile } from "@/components/home-v2/FounderProfile";
import { FOUNDERS } from "@/lib/founders";

export const Route = createFileRoute("/founders/dear-derrick")({
  head: () => ({
    meta: [
      { title: "Dear Derrick · Founder · LXON-7" },
      { name: "description", content: "Dear Derrick — Co-Founder of LXON-7. Filmmaker and producer with 25+ years in film." },
      { property: "og:title", content: "Dear Derrick · Founder · LXON-7" },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: () => <FounderProfile founder={FOUNDERS["dear-derrick"]} />,
});
