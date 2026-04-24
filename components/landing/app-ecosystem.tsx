"use client"

import { motion } from "framer-motion"
import { Building2, User, Wrench, Smartphone, Download, Apple } from "lucide-react"

const apps = [
    {
        title: "Owner App",
        icon: Building2,
        description: "Your complete control center. List properties, automate rent collection, and approve maintenance requests instantly.",
        color: "from-blue-500 to-blue-400",
        shadowColor: "shadow-blue-500/20",
        features: ["Property Listings", "Rent Tracking", "Applicant Screening"],
        delay: 0.1
    },
    {
        title: "Tenant App",
        icon: User,
        description: "The modern renting experience. Find your perfect home, pay rent on autopilot, and report issues with a tap.",
        color: "from-blue-400 to-blue-400",
        shadowColor: "shadow-blue-500/20",
        features: ["AI Property Match", "Digital Lease", "1-Tap Maintenance"],
        delay: 0.2
    },
    {
        title: "Tradeperson App",
        icon: Wrench,
        description: "Get jobs, not headaches. Receive local maintenance requests, submit quotes, and get paid fast without paperwork.",
        color: "from-amber-400 to-orange-500",
        shadowColor: "shadow-orange-500/20",
        features: ["Job Requests", "Smart Quoting", "Guaranteed Payouts"],
        delay: 0.3
    }
]

export function AppEcosystem() {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-y border-slate-200/50">
            {/* Elegant light mode gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-100 to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-400/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-medium mb-6">
                        <Smartphone className="w-4 h-4" />
                        3 Connected Mobile Apps
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 text-balance mb-4">
                        One Unified Ecosystem
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Self-i seamlessly connects owners, tenants, and tradepersons through beautifully designed, specialized mobile applications.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {apps.map((app) => (
                        <motion.div
                            key={app.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: app.delay, duration: 0.5 }}
                            className="group relative"
                        >
                            <div className={`absolute -inset-0.5 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[2rem] blur-lg`} />

                            <div className="bg-white border text-center border-slate-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative h-full flex flex-col z-10">

                                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-500`}>
                                    <app.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{app.title}</h3>
                                <p className="text-slate-600 mb-8 flex-1">{app.description}</p>

                                <ul className="space-y-3 mb-8 text-left">
                                    {app.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                            <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${app.color}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-2">
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white transition-colors shadow-md hover:shadow-lg">
                                        <Apple className="w-5 h-5 flex-shrink-0" />
                                        <div className="text-left leading-tight">
                                            <div className="text-[9px] text-slate-300 opacity-80 uppercase tracking-wide">Download on the</div>
                                            <div className="text-sm font-semibold">App Store</div>
                                        </div>
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white transition-colors shadow-md hover:shadow-lg">
                                        <svg viewBox="0 0 512 512" className="w-5 h-5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                                        </svg>
                                        <div className="text-left leading-tight">
                                            <div className="text-[9px] text-slate-300 opacity-80 uppercase tracking-wide">GET IT ON</div>
                                            <div className="text-sm font-semibold">Google Play</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
