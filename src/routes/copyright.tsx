import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, LegalSection } from "@/components/home-v2/LegalLayout";
import { siteEmail, governingLaw } from "@/lib/site";

export const Route = createFileRoute("/copyright")({
  head: () => ({
    meta: [
      { title: "Copyright & Content Policy · LXON-7" },
      {
        name: "description",
        content: "Copyright, ownership, and content rules for creator-submitted AI content on LXON-7.",
      },
      { property: "og:title", content: "Copyright & Content Policy · LXON-7" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CopyrightPage,
});

// ── BOILERPLATE — review before publishing. Replace [bracketed] placeholders. ──
function CopyrightPage() {
  return (
    <LegalLayout title="Copyright & Content Policy" updated="[Month YYYY]">
      <LegalSection heading="Ownership">
        <p>
          Creators retain ownership of the AI-generated work they submit to and distribute through
          LXON-7. By submitting, creators grant LXON-7 the rights needed to display, promote, and
          make their work available across the LXON-7 platform and its streaming partner, as
          described in the creator agreement.
        </p>
      </LegalSection>

      <LegalSection heading="Creator responsibilities">
        <p>
          Creators are responsible for ensuring their submissions do not infringe the copyrights,
          trademarks, publicity rights, or other rights of any third party. This includes source
          material, training inputs, likenesses, music, and any assets incorporated into AI-generated
          work.
        </p>
        <p>
          Submissions must comply with our content standards and must not contain unlawful, harmful,
          or prohibited material.
        </p>
      </LegalSection>

      <LegalSection heading="AI-generated content">
        <p>
          LXON-7 features AI-generated content. Creators must have the necessary rights to the tools,
          models, and inputs used, and to the outputs they submit, and must comply with the terms of
          any AI services they used to create their work.
        </p>
      </LegalSection>

      <LegalSection heading="Infringement claims / takedown">
        <p>
          If you believe content on LXON-7 infringes your rights,{" "}
          {siteEmail("copyright")
            ? `contact us at ${siteEmail("copyright")}`
            : "contact us through this website"}{" "}
          with a description of the work, the allegedly infringing material and its location, your
          contact information, and a statement of good-faith belief. We will review and respond,
          and may remove content while a claim is assessed.
        </p>
      </LegalSection>

      <LegalSection heading="Enforcement">
        <p>
          We may remove content and suspend accounts that violate this policy. Repeat infringers may
          be permanently removed from the platform.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          {siteEmail("copyright")
            ? `Copyright questions and notices: ${siteEmail("copyright")}.`
            : "Copyright questions and notices can be sent through this website."}{" "}
          Governed by {governingLaw()}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
