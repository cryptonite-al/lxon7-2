import { createFileRoute } from "@tanstack/react-router";
import { FounderProfile } from "@/components/home-v2/FounderProfile";
import { FOUNDERS } from "@/lib/founders";

export const Route = createFileRoute("/founders/juma")({
  head: () => ({
    meta: [
      { title: "King'Juma · Founder · LXON-7" },
      { name: "description", content: "King'Juma — Co-Founder of LXON-7. Creator, producer, and builder of opportunity." },
      { property: "og:title", content: "King'Juma · Founder · LXON-7" },
      { property: "og:type", content: "profile" },
    ],
  }),
  component: () => <FounderProfile founder={FOUNDERS.juma} />,
});
