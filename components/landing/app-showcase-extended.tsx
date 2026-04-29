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
    },
    {
        icon: Search,
        title: "Smart Search",
        description: "Find the perfect home or verify tenant history with our advanced filtering system.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Payments",
        description: "All transactions are encrypted and processed through Australian banking standards.",
    },
    {
        icon: Zap,
        title: "Fast Listings",
        description: "Upload property details and photos in under 5 minutes to find your next match.",
    }
]

export function AppShowcaseExtended() {
    return (
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Soft Background Accent */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" 
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* Left Side: Mobile Mockups */}
                    <div className="relative order-2 lg:order-1 flex justify-center h-[500px] sm:h-[600px] items-center">
                        {/* Decorative rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-slate-50 rounded-full pointer-events-none" />

                        <div className="relative w-full max-w-sm flex items-center justify-center">
                            {/* Phone 1 (Back Left) */}
                            <motion.div
                                initial={{ opacity: 0, x: -40, y: 60, rotate: -15 }}
                                whileInView={{ opacity: 1, x: 0, y: 60, rotate: -15 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="absolute -left-4 sm:-left-12 bottom-0 z-10 w-40 sm:w-52 opacity-60"
                            >
                                <div className="relative aspect-[9/19] rounded-[2.5rem] border-[8px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
                                    <Image
                                        src="/hero_img2.svg"
                                        alt="App Stats Screen"
                                        width={400} height={800}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Phone 2 (Back Right) */}
                            <motion.div
                                initial={{ opacity: 0, x: 40, y: 20, rotate: 10 }}
                                whileInView={{ opacity: 1, x: 0, y: 20, rotate: 10 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="absolute -right-4 sm:-right-8 top-12 z-10 w-44 sm:w-56"
                            >
                                <div className="relative aspect-[9/19] rounded-[2.5rem] border-[8px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">
                                    <Image
                                        src="/hero_img2.svg"
                                        alt="App Dashboard Screen"
                                        width={400} height={800}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Phone 3 (Front Main) */}
                            <motion.div
                                initial={{ opacity: 0, y: 40, rotate: -5 }}
                                whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-30 w-52 sm:w-64"
                            >
                                <div className="relative aspect-[9/19] rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 shadow-[0_40px_80px_rgba(0,0,0,0.2)] overflow-hidden">
                                    <Image
                                        src="/hero_img2.svg"
                                        alt="App Main Screen"
                                        width={400} height={800}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-bold mb-6 tracking-wide shadow-sm">
                                <Smartphone className="w-4 h-4 text-[#07254B]" />
                                Mobile First Experience
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.15]">
                                Manage Properties <br className="hidden sm:block" />
                                <span className="bg-gradient-to-r from-[#07254B] to-[#17539c] bg-clip-text text-transparent">From Your Pocket</span>
                            </h2>
                            <p className="text-slate-600 text-lg mb-12 max-w-xl leading-relaxed font-medium">
                                The Self-i mobile app brings the entire Australian property market to your fingertips. Whether you&apos;re listing a villa in Sydney or renting an apartment in Melbourne, stay connected anywhere.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#07254B]/5 border border-[#07254B]/10 shrink-0">
                                            <feature.icon className="w-5 h-5 text-[#07254B]" strokeWidth={2.5} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">{feature.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="bg-[#07254B] text-white hover:bg-slate-900 px-8 h-12 text-sm font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                                    Download for iOS
                                </Button>
                                <Button variant="outline" size="lg" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 h-12 text-sm font-bold rounded-full shadow-sm gap-2">
                                    Download for Android
                                    <Download className="w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
