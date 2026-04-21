import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { ValueProps } from "@/components/landing/value-props"
import { UserJourneys } from "@/components/landing/user-journeys"
import { FormsSection } from "@/components/landing/forms-section"
import { AIFeatures } from "@/components/landing/ai-features"
import { PricingSection } from "@/components/landing/pricing-section"
import { TrustSection } from "@/components/landing/trust-section"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <UserJourneys />
      <FormsSection />
      <AIFeatures />
      <PricingSection />
      <TrustSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
