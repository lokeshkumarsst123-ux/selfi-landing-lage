import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { ShieldCheck, Lock, Server, CheckCircle2 } from "lucide-react"
import Link from "next/link"


export const metadata = {
    title: 'Trust & Security | Self-i',
    description: 'Learn how Self-i protects your data and ensures platform security.',
}

export default function TrustAndSecurityPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="pt-28 md:pt-28 md:pt-40 pb-8 md:pb-12 md:pb-20 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6">
                            <ShieldCheck className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Trust & Security</h1>
                        <p className="text-slate-500 font-medium text-lg lg:text-xl">
                            We take the security of your property data, personal information, and financial transactions seriously. Here's how we keep your account safe.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Security Feature 1 */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl h-full transition-shadow hover:shadow-2xl">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                <Lock className="w-7 h-7 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Bank-Level Encryption</h2>
                            <p className="text-slate-600 leading-relaxed font-medium mb-6">
                                We protect your data with the same high-level security standard used by major banks. Your personal and financial information is fully scrambled and safely locked away to prevent any unauthorized access.
                            </p>
                            <ul className="space-y-3">
                                {['Advanced data protection', 'Secure connection every time', 'Safe password storage'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Security Feature 2 */}
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl h-full transition-shadow hover:shadow-2xl">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                                <Server className="w-7 h-7 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Secure Infrastructure</h2>
                            <p className="text-slate-600 leading-relaxed font-medium mb-6">
                                The Self-i platform runs on world-class secure servers that are monitored around the clock. We strictly limit who can access our systems and frequently test our defenses to make sure your account is always safe.
                            </p>
                            <ul className="space-y-3">
                                {['Highly secure data centers', '24/7 system monitoring', 'Routine security checks'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Report a Vulnerability</h2>
                            <p className="text-slate-300 mb-8 font-medium">
                                If you believe you've found a security vulnerability on Self-i, we encourage you to let us know right away. We will investigate all legitimate reports and do our best to quickly fix the problem.
                            </p>
                            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 rounded-xl px-8 py-4 font-bold hover:bg-slate-100 transition-colors shadow-lg">
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
