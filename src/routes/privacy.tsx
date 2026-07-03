import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/home-v2/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · LXON-7" },
      { name: "description", content: "How LXON-7 collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy · LXON-7" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPage,
});

// ── BOILERPLATE — review before publishing. Replace [bracketed] placeholders. ──
function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="[Month YYYY]">
      <LegalSection heading="Overview">
        <p>
          LXON-7 ("LXON-7," "we," "us") operates this marketing website. This policy explains
          what information we collect through the site and how we use it. Watching, accounts,
          subscriptions, and payments are handled on our streaming partner platform (Uscreen) at
          watch.lxon-7.com, which has its own privacy practices; this policy covers only this site.
        </p>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>
          We collect information you choose to provide — for example, when you submit a creator
          application or contact us — which may include your name, email address, links to your
          work, and any details you include in your message.
        </p>
        <p>
          We may also collect limited technical information automatically, such as your browser
          type, device, and general usage of the site, through cookies and standard analytics.
        </p>
      </LegalSection>

      <LegalSection heading="How we use information">
        <p>
          We use the information to respond to your submissions and enquiries, to operate and
          improve the site, and to communicate with you about LXON-7. We do not sell your personal
          information.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies & analytics">
        <p>
          The site may use cookies and analytics tools to understand how visitors use it. You can
          control cookies through your browser settings; disabling them may affect some features.
        </p>
      </LegalSection>

      <LegalSection heading="Third parties">
        <p>
          Some actions send you to third-party services — most notably our streaming partner
          (Uscreen) for watching and subscriptions. Those services process your information under
          their own privacy policies, which we encourage you to review.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You may request access to, correction of, or deletion of the personal information you
          have provided to us by contacting us at the address below, subject to applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Contact us at [privacy@lxon-7.com]. Governing law and
          jurisdiction: [jurisdiction].
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
