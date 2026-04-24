import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { PricingSection } from "@/components/landing/pricing-section"
import { FinalCTA } from "@/components/landing/final-cta"
import { DollarSign } from "lucide-react"

export const metadata = {
    title: 'Simple, Transparent Pricing | Self-i',
    description: 'Save thousands on agent fees with Self-i. Calculate your savings and choose the plan that works best for your property portfolio.',
}

export default function PricingPage() {
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
                            <DollarSign className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Transparent Pricing</h1>
                        <p className="text-slate-500 font-medium text-lg lg:text-xl leading-relaxed">
                            No hidden fees, no commissions, and no surprises. Just straightforward value designed to maximize your investment returns.
                        </p>
                    </div>
                </div>
            </div>

            {/* Pricing Calculator & Plans */}
            <PricingSection />

            {/* Additional Info Section */}
            <section className="py-16 bg-white border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Are there any hidden costs?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Absolutely not. Your monthly subscription covers the full use of our platform. Maintenance repairs are passed through at cost with zero platform markup.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Can I switch plans anytime?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yes, you can upgrade or downgrade your plan at any time through your owner dashboard. Changes take effect from the next billing cycle.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">What happens if I have multiple properties?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We offer volume discounts for portfolio owners with more than 5 properties. Contact our sales team for a custom quote tailored to your portfolio.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Is there a long-term contract?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                No long-term lock-ins. Our plans are month-to-month, giving you the flexibility to manage your property on your own terms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <FinalCTA />

            <Footer />
        </main>
    )
}
