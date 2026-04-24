import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { FileText } from "lucide-react"

export const metadata = {
    title: 'Terms of Service | Self-i',
    description: 'Terms of Service for Self-i property management platform',
}

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="pt-28 md:pt-28 md:pt-40 pb-8 md:pb-12 md:pb-20 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6">
                            <FileText className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Terms of Service</h1>
                        <p className="text-slate-500 font-medium">Last updated: April 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">

                            <h2 className="text-2xl font-bold text-slate-900 mt-0 mb-4">1. Agreement to Terms</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                By accessing or using Self-i, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
                            <p className="text-slate-600 mb-4 leading-relaxed font-medium">
                                Permission is granted to temporarily access the materials on Self-i's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2 font-medium">
                                <li>Modify or copy the materials.</li>
                                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                                <li>Attempt to decompile or reverse engineer any software contained on Self-i's website.</li>
                                <li>Remove any copyright or other proprietary notations from the materials.</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                The materials on Self-i are provided on an 'as is' basis. Self-i makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                In no event shall Self-i or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Self-i's website, even if Self-i or a Self-i authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
                            <p className="text-slate-600 mb-2 leading-relaxed font-medium">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <p className="text-blue-600 hover:text-blue-700 transition-colors font-semibold cursor-pointer">
                                legal@self-i.com.au
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
