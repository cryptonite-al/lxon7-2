import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/home-v2/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use · LXON-7" },
      { name: "description", content: "The terms that govern your use of the LXON-7 website." },
      { property: "og:title", content: "Terms of Use · LXON-7" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TermsPage,
});

// ── BOILERPLATE — review before publishing. Replace [bracketed] placeholders. ──
function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="[Month YYYY]">
      <LegalSection heading="Acceptance">
        <p>
          By accessing or using the LXON-7 website, you agree to these Terms of Use. If you do not
          agree, please do not use the site.
        </p>
      </LegalSection>

      <LegalSection heading="The service">
        <p>
          This website is a marketing and discovery destination for AI-generated films, series,
          documentaries, and style content. Watching full titles, subscriptions, accounts, and
          payments are provided through our streaming partner (Uscreen) at watch.lxon-7.com and are
          governed by that platform's own terms.
        </p>
      </LegalSection>

      <LegalSection heading="Use of the site">
        <p>
          You agree to use the site lawfully and not to interfere with its operation, attempt to
          gain unauthorized access, scrape it at scale, or misuse any content or functionality.
        </p>
      </LegalSection>

      <LegalSection heading="Creator submissions">
        <p>
          If you submit a creator application or content for consideration, you represent that you
          have the right to do so and that your submission does not infringe others' rights.
          Submitting does not guarantee acceptance, featuring, or distribution. Content rules for
          submissions are described in our Copyright &amp; Content Policy.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The LXON-7 name, logo, and site content are owned by LXON-7 or its licensors and may not
          be used without permission. Titles and creator works shown on the site remain the property
          of their respective owners.
        </p>
      </LegalSection>

      <LegalSection heading="Disclaimers & liability">
        <p>
          The site is provided "as is" without warranties of any kind. To the extent permitted by
          law, LXON-7 is not liable for any indirect or consequential damages arising from your use
          of the site.
        </p>
      </LegalSection>

      <LegalSection heading="Changes & contact">
        <p>
          We may update these terms from time to time; continued use of the site means you accept
          the updated terms. Questions: [legal@lxon-7.com]. Governing law: [jurisdiction].
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
