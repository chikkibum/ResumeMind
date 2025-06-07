import {
  HeroSection,
  FeaturesSection,
  ShowcaseSection,
  TestimonialsSection,
  StatsSection,
  PricingSection,
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
      <ShowcaseSection />
      <TestimonialsSection />
      <StatsSection />
      <PricingSection />
      <FooterSection />
    </main>
  );
}
