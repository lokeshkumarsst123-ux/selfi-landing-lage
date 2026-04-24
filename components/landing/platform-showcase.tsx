"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Activity, ShieldCheck, Zap, BarChart3, Users, Home } from "lucide-react"

export function PlatformShowcase() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9])

    return (
        <section ref={containerRef} className="py-16 md:py-24 lg:py-40 relative bg-slate-900 overflow-hidden border-t border-slate-800 shadow-[inset_0_40px_80px_rgba(0,0,0,0.5)]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/15 via-slate-900 to-slate-950" />

            {/* Animated Grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 relative z-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-md">
                        <Zap className="w-4 h-4" />
                        The Ultimate Command Center
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-balance leading-tight">
                        Manage Everything. <br />
                        <span className="bg-gradient-to-r from-blue-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent italic">Effortlessly.</span>
                    </h2>
                </motion.div>

                {/* Floating Glassmorphic UI Dashboard Elements */}
                <div className="relative h-[500px] py-10 sm:py-0 sm:h-[600px] lg:h-[800px] w-full flex flex-col items-center justify-center gap-8 sm:block">

                    {/* Center Main Dashboard */}
                    <motion.div
                        style={{ scale, opacity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-5xl aspect-[16/9] bg-slate-900/60 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.15)] overflow-hidden  sm:block"
                    >
                        {/* Dashboard Header mock */}
                        <div className="h-14 border-b border-white/10 bg-white/5 flex items-center px-6 gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-600/80" />
                                <div className="w-3 h-3 rounded-full bg-blue-500/80" />
                                <div className="w-3 h-3 rounded-full bg-blue-400/80" />
                            </div>
                            <div className="mx-auto w-1/3 h-6 bg-white/5 rounded-md" />
                        </div>

                        {/* Dashboard Body mock */}
                        <div className="p-8 h-full flex gap-6">
                            <div className="w-1/4 h-[80%] space-y-4">
                                <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5" />
                                <div className="w-full h-12 bg-white/10 rounded-xl border border-blue-500/30 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-500/10" />
                                </div>
                                <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5" />
                                <div className="w-full h-12 bg-white/5 rounded-xl border border-white/5" />
                            </div>
                            <div className="flex-1 space-y-6 h-[80%]">
                                <div className="flex gap-4">
                                    <div className="flex-1 h-32 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-5 flex flex-col justify-between group overflow-hidden relative">
                                        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center relative z-10">
                                            <BarChart3 className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div className="space-y-2 relative z-10">
                                            <div className="w-1/2 h-4 bg-white/10 rounded" />
                                            <div className="w-3/4 h-6 bg-white/20 rounded" />
                                        </div>
                                    </div>
                                    <div className="flex-1 h-32 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-2xl p-5 flex flex-col justify-between group overflow-hidden relative">
                                        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center relative z-10">
                                            <Users className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div className="space-y-2 relative z-10">
                                            <div className="w-1/2 h-4 bg-white/10 rounded" />
                                            <div className="w-3/4 h-6 bg-white/20 rounded" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-56 bg-gradient-to-b from-white/5 to-transparent border border-white/5 rounded-2xl p-5 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/10 to-transparent opacity-50" />
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <motion.path
                                            d="M0,100 L0,50 Q25,30 50,60 T100,20 L100,100 Z"
                                            fill="rgba(59,130,246,0.15)"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                        <motion.path
                                            d="M0,50 Q25,30 50,60 T100,20"
                                            fill="none"
                                            stroke="rgba(59,130,246,0.6)"
                                            strokeWidth="2"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Left Floating Element */}
                    <motion.div
                        style={{ y: y1 }}
                        className="relative sm:absolute sm:-left-4 md:left-10 sm:top-1/4 z-20 w-full max-w-[300px] sm:max-w-none sm:w-64 p-5 md:p-6 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/30 shadow-[0_0_50px_rgba(20,184,166,0.15)] mx-auto sm:mx-0"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/20 rounded-xl relative overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-blue-400/20 animate-pulse" />
                                <ShieldCheck className="w-6 h-6 text-blue-400 relative z-10" />
                            </div>
                            <div>
                                <div className="text-white font-semibold">AI Risk Analysis</div>
                                <div className="text-blue-400 text-sm">Strictly Secure</div>
                            </div>
                        </div>
                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-300"
                                initial={{ width: 0 }}
                                whileInView={{ width: "95%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        </div>
                    </motion.div>

                    {/* Right Floating Element */}
                    <motion.div
                        style={{ y: y2 }}
                        className="relative sm:absolute sm:-right-4 md:right-10 sm:bottom-1/4 z-20 w-full max-w-[300px] sm:max-w-none sm:w-72 p-5 md:p-6 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.15)] mx-auto sm:mx-0"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-indigo-500/20 rounded-xl relative overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-indigo-400/20 animate-pulse delay-700" />
                                <Activity className="w-6 h-6 text-indigo-400 relative z-10" />
                            </div>
                            <div>
                                <div className="text-white font-semibold flex items-center gap-2">
                                    Optimization
                                    <span className="flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                    </span>
                                </div>
                                <div className="text-indigo-400 text-sm truncate">+15% Yield Increase</div>
                            </div>
                        </div>
                        <div className="flex items-end gap-2 h-14">
                            {[40, 70, 45, 90, 65, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-sm hover:from-blue-400 hover:to-blue-300 transition-colors"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.5, delay: 0.1 * i }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
