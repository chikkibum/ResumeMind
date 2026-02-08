import {
  HeroSection,
  FeaturesSection,
  ShowcaseSection,
  TestimonialsSection,
  StatsSection,
  PricingSection,
  FAQSection,
  SafariShowcaseSection,
  FooterSection,
} from "@/components/landing";

/**
 * Landing page for AI Resume Builder
 * Features neobrutalist design with Framer Motion animations
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      {/* <ShowcaseSection /> */}
      <SafariShowcaseSection />
      <TestimonialsSection />
      <StatsSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
