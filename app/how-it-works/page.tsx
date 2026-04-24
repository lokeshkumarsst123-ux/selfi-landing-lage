import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { UserJourneys } from "@/components/landing/user-journeys"
import { FinalCTA } from "@/components/landing/final-cta"
import { Info } from "lucide-react"

export const metadata = {
    title: 'How It Works | Self-i',
    description: 'Learn exactly how Self-i helps property owners save thousands and tenants find their perfect home with a simple, transparent process.',
}

export default function HowItWorksPage() {
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
                            <Info className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">How It Works</h1>
                        <p className="text-slate-500 font-medium text-lg lg:text-xl leading-relaxed">
                            A seamless, AI-driven process designed to take the friction out of property management for both owners and tenants.
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Journey Component */}
            <UserJourneys />

            {/* CTA Section */}
            <FinalCTA />

            <Footer />
        </main>
    )
}
