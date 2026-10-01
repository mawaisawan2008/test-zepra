import { ContactSection } from "@/components/sections/contact-section";
import { FeaturedServices } from "@/components/sections/featured-services";
import { HomeHero } from "@/components/sections/home-hero";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TheShiftSection } from "@/components/sections/TheShiftSection";
import { WhyUs } from "@/components/sections/why-us";
import { siteMeta } from "@/lib/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMeta.name,
    url: siteMeta.url,
    email: siteMeta.email,
    description: siteMeta.description,
    areaServed: ["Pakistan", "International"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteMeta.email,
        contactType: "sales",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHero />
      <MetricsStrip />
      <FeaturedServices />
      <TheShiftSection />
      <WhyUs />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
