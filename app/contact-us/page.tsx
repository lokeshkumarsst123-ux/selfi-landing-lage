import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export const metadata = {
    title: 'Contact Us | Self-i',
    description: 'Get in touch with the Self-i team',
}

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="pt-28 md:pt-28 md:pt-40 pb-8 md:pb-12 md:pb-20 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6">
                            <Mail className="w-8 h-8 text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
                        <p className="text-slate-500 font-medium max-w-xl mx-auto">
                            Have questions about our platform, pricing, or need technical support? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
                                <p className="text-slate-500 mb-4 text-sm">We'll get back to you within 24 hours.</p>
                                <a href="mailto:hello@self-i.au" className="text-blue-600 font-semibold hover:text-blue-700">hello@self-i.au</a>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
                                <p className="text-slate-500 mb-4 text-sm">Mon-Fri from 9am to 6pm AEST.</p>
                                <a href="tel:1800123456" className="text-blue-600 font-semibold hover:text-blue-700">1800 123 456</a>
                            </div>
                            {/* 
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Office</h3>
                                <p className="text-slate-500 mb-4 text-sm">Come say hello at our HQ.</p>
                                <p className="text-slate-800 font-semibold">100 George Street<br />Sydney NSW 2000</p>
                            </div> */}
                        </div>

                        {/* Contact Form */}
                        <div className="h-full">
                            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl h-full bg-white/50 backdrop-blur-3xl">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">First name</label>
                                            <input type="text" id="first-name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white text-slate-900" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">Last name</label>
                                            <input type="text" id="last-name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white text-slate-900" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white text-slate-900" placeholder="john@example.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                        <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow bg-white text-slate-900 resize-none" placeholder="How can we help you?"></textarea>
                                    </div>

                                    <button type="button" className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl px-8 py-4 font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl group">
                                        Send Message
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
