import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { ValueProps } from "@/components/landing/value-props"
import { ProductShowcase } from "@/components/landing/product-showcase"
import { UserJourneys } from "@/components/landing/user-journeys"
import { AIFeatures } from "@/components/landing/ai-features"
import { PlatformShowcase } from "@/components/landing/platform-showcase"
import { AppEcosystem } from "@/components/landing/app-ecosystem"
import { AppShowcaseExtended } from "@/components/landing/app-showcase-extended"
import { TrustSection } from "@/components/landing/trust-section"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { PageLoader } from "@/components/landing/page-loader"

export default function LandingPage() {
  return (
    <>
      <PageLoader />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <ValueProps />
        <ProductShowcase />
        <UserJourneys />
        <AIFeatures />
        <PlatformShowcase />
        <AppEcosystem />
        <AppShowcaseExtended />
        <TrustSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
