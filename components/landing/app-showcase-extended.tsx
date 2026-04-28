"use client"

import { motion } from "framer-motion"
import { Smartphone, Bell, Search, ShieldCheck, Zap, Download } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const features = [
    {
        icon: Bell,
        title: "Instant Notifications",
        description: "Get real-time alerts for rent payments, maintenance requests, and tenant messages.",
        color: "blue"
    },
    {
        icon: Search,
        title: "Smart Search",
        description: "Find the perfect home or verify tenant history with our advanced filtering system.",
        color: "indigo"
    },
    {
        icon: ShieldCheck,
        title: "Secure Payments",
        description: "All transactions are encrypted and processed through Australian banking standards.",
        color: "emerald"
    },
    {
        icon: Zap,
        title: "Fast Listings",
        description: "Upload property details and photos in under 5 minutes to find your next match.",
        color: "amber"
    }
]

export function AppShowcaseExtended() {
    return (
        <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
            {/* Light-themed background elements */}
            <div className="absolute inset-0 bg-[#f8fafc]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Side: Mobile Mockups (Light Mode) */}
                    <div className="relative order-2 lg:order-1 flex justify-center">
                        {/* Decorative rings (Subtle) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-100/50 rounded-full pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-blue-100/30 rounded-full pointer-events-none" />

                        {/* Phone 1 (Main) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotate: -5 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-20 w-[260px] sm:w-[300px]"
                        >
                            <div className="relative aspect-[9/19] rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 shadow-[0_40px_80px_rgba(0,0,0,0.15)] overflow-hidden">
                                <Image
                                    src="/hero_img2.svg"
                                    alt="App Search Screen"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Phone 2 (Floating Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 40, y: 20, rotate: 10 }}
                            whileInView={{ opacity: 1, x: 0, y: 20, rotate: 10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute -right-4 sm:-right-8 top-12 z-10 w-[240px] sm:w-[280px]"
                        >
                            <div className="relative aspect-[9/19] rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 shadow-[0_30px_60px_rgba(0,0,0,0.12)] overflow-hidden">
                                <Image
                                    src="/hero_img2.svg"
                                    alt="App Dashboard Screen"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Phone 3 (Floating Left/Partial) */}
                        <motion.div
                            initial={{ opacity: 0, x: -40, y: 60, rotate: -15 }}
                            whileInView={{ opacity: 1, x: 0, y: 60, rotate: -15 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute -left-12 sm:-left-20 bottom-0 z-10 w-[220px] sm:w-[260px] opacity-40 grayscale"
                        >
                            <div className="relative aspect-[9/19] rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 shadow-xl overflow-hidden">
                                <Image
                                    src="/hero_img2.svg"
                                    alt="App Stats Screen"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Content (Light Mode) */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-bold mb-8 shadow-sm">
                                <Smartphone className="w-4 h-4" />
                                Mobile First Experience
                            </div>
                            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-[900] text-slate-900 mb-10 tracking-tight leading-[1.05]">
                                Manage Properties <br />
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">From Your Pocket</span>
                            </h2>
                            <p className="text-slate-500 text-xl mb-12 max-w-xl leading-relaxed font-medium">
                                The Self-i mobile app brings the entire Australian property market to your fingertips. Whether you&apos;re listing a villa in Sydney or renting an apartment in Melbourne, stay connected anywhere.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-10 mb-14">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-5"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600 border border-blue-100/50 shrink-0 shadow-sm`}>
                                            <feature.icon className="w-6 h-6" strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <h3 className="font-black text-slate-900 mb-2">{feature.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-5">
                                <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-10 h-14 text-base font-black rounded-2xl shadow-xl transition-all">
                                    Download for iOS
                                </Button>
                                <Button variant="outline" size="lg" className="border-slate-200 text-slate-900 hover:bg-slate-50 px-10 h-14 text-base font-bold rounded-2xl shadow-sm gap-2">
                                    Download for Android
                                    <Download className="w-5 h-5" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
