import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { ValueProps } from "@/components/landing/value-props"
import { ProductShowcase } from "@/components/landing/product-showcase"
import { UserJourneys } from "@/components/landing/user-journeys"
import { FormsSection } from "@/components/landing/forms-section"
import { AIFeatures } from "@/components/landing/ai-features"
import { PlatformShowcase } from "@/components/landing/platform-showcase"
import { TrustSection } from "@/components/landing/trust-section"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <ProductShowcase />
      <UserJourneys />
      <FormsSection />
      <AIFeatures />
      {/* <PlatformShowcase />
      <TrustSection />
      <FinalCTA />
      <Footer /> */}
    </main>
  )
}
