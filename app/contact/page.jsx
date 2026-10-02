import { PageHero } from "@/components/layout/page-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { ContactNextSteps } from "@/components/sections/localized-page-sections";

export const metadata = {
  title: "Contact",
  description:
    "Contact Zepra Tech for web development, AI automation, marketing, SEO, ecommerce, design, support, and consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        translationKey="pages.contactHero"
        eyebrow="Contact Zepra Tech"
        title="Let’s talk about the website, AI system, or growth solution your business needs next."
        description="This page is designed to support business inquiries cleanly, whether you are reaching out from Pakistan or an international market. Use the form to start a serious project discussion."
        primaryAction={{ href: "#inquiry-form", label: "Send an Inquiry" }}
        secondaryAction={{ href: "/services", label: "Review Services" }}
      />

      <ContactNextSteps />

      <div id="inquiry-form">
        <ContactSection showHeader={false} />
      </div>
    </>
  );
}
