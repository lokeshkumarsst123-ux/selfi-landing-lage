import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { AIFeatures } from "@/components/landing/ai-features"
import { ValueProps } from "@/components/landing/value-props"
import { ProductShowcase } from "@/components/landing/product-showcase"
import { FinalCTA } from "@/components/landing/final-cta"
import { Sparkles } from "lucide-react"

export const metadata = {
    title: 'Powerful AI Features | Self-i',
    description: 'Explore the advanced AI tools and automated workflows that make Self-i the smartest property management platform in Australia.',
}

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header Section */}
            <div className="pt-28 md:pt-40 pb-8 md:pb-12 relative overflow-hidden bg-white">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6">
                            <Sparkles className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Powerful AI Features</h1>
                        <p className="text-slate-500 font-medium text-lg lg:text-xl leading-relaxed">
                            Discover the cutting-edge technology that automates your management, secures your returns, and gives you total control.
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Feature Components */}
            <AIFeatures />
            <ValueProps />
            <ProductShowcase />

            {/* CTA Section */}
            <FinalCTA />

            <Footer />
        </main>
    )
}
