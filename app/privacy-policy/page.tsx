import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Shield } from "lucide-react"

export const metadata = {
    title: 'Privacy Policy | Self-i',
    description: 'Privacy Policy for Self-i property management platform',
}

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="pt-42 pb-20 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6">
                            <Shield className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
                        <p className="text-slate-500 font-medium">Last updated: April 2026</p>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl">

                            <h2 className="text-2xl font-bold text-slate-900 mt-0 mb-4">1. Introduction</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                Welcome to Self-i. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. The Data We Collect</h2>
                            <p className="text-slate-600 mb-4 leading-relaxed font-medium">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2 font-medium">
                                <li><strong className="text-slate-900">Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong className="text-slate-900">Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                                <li><strong className="text-slate-900">Financial Data</strong> includes bank account and payment card details.</li>
                                <li><strong className="text-slate-900">Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                                <li><strong className="text-slate-900">Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                                <li><strong className="text-slate-900">Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
                            <p className="text-slate-600 mb-4 leading-relaxed font-medium">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2 font-medium">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal obligation.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
                            <p className="text-slate-600 mb-2 leading-relaxed font-medium">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                            </p>
                            <p className="text-blue-600 hover:text-blue-700 transition-colors font-semibold cursor-pointer">
                                privacy@self-i.com.au
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
