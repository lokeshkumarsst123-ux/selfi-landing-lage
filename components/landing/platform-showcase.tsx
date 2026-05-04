"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { UserCheck, DollarSign, Wrench, LayoutDashboard } from "lucide-react"

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
        <section ref={containerRef} className="py-16 md:py-24 lg:py-40 relative bg-white overflow-hidden border-t border-slate-100 shadow-[inset_0_40px_80px_rgba(248,250,252,0.5)]">
            {/* Light-themed Background */}
            <div className="absolute inset-0 bg-[#f8fafc]" />

            {/* Subtle Grid (Light Mode) */}
            <div
                className="absolute inset-0 opacity-[0.3]"
                style={{
                    backgroundImage: `linear-gradient(rgba(226,232,240,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.4) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                    backgroundPosition: 'center center'
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 relative z-20"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-bold mb-8 shadow-sm">
                        <LayoutDashboard className="w-4 h-4" />
                        Your Property Dashboard
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-[900] text-slate-900 text-balance leading-[1.05] tracking-tight">
                        Manage Everything. <br />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">Effortlessly.</span>
                    </h2>
                </motion.div>

                {/* Floating Dashboard UI Elements (Light Mode) */}
                <div className="relative h-[500px] py-10 sm:py-0 sm:h-[600px] lg:h-[800px] w-full flex flex-col items-center justify-center gap-8 sm:block">

                    {/* Center Dashboard (Light) */}
                    <motion.div
                        style={{ scale, opacity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-5xl aspect-[16/9] bg-white/90 backdrop-blur-3xl rounded-[2.5rem] border border-blue-50/50 shadow-[0_50px_100px_rgba(0,0,0,0.06)] overflow-hidden sm:block"
                    >
                        {/* Dashboard Header */}
                        <div className="h-16 border-b border-slate-100 bg-slate-50/50 flex items-center px-8 gap-6">
                            <div className="flex gap-2.5">
                                <div className="w-3.5 h-3.5 rounded-full bg-slate-200" />
                                <div className="w-3.5 h-3.5 rounded-full bg-blue-200" />
                                <div className="w-3.5 h-3.5 rounded-full bg-indigo-200" />
                            </div>
                            <div className="mx-auto w-1/3 h-7 bg-slate-200/50 rounded-lg" />
                        </div>

                        {/* Dashboard Body */}
                        <div className="p-10 h-full flex gap-10">
                            <div className="w-1/4 h-[80%] space-y-5">
                                {["Listings", "Rent", "Maintenance", "Tenants"].map((item, i) => (
                                    <div key={item} className={`w-full h-14 rounded-2xl border flex items-center px-4 ${i === 1 ? "bg-blue-50 border-blue-100" : "bg-slate-50/50 border-slate-100"}`}>
                                        <span className={`text-[11px] font-black uppercase tracking-widest ${i === 1 ? "text-blue-600" : "text-slate-400"}`}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex-1 space-y-8 h-[80%]">
                                <div className="flex gap-6">
                                    {[
                                        { icon: LayoutDashboard, label: "Properties", value: "12 Active" },
                                        { icon: DollarSign, label: "Revenue", value: "$45.2k" }
                                    ].map(({ icon: Icon, label, value }) => (
                                        <div key={label} className="flex-1 rounded-3xl p-6 flex flex-col justify-between group overflow-hidden relative border border-slate-100 bg-white shadow-sm">
                                            <div className="absolute inset-0 bg-blue-50/10 group-hover:bg-blue-50/20 transition-colors" />
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center relative z-10 border border-blue-100/50">
                                                <Icon className="w-6 h-6 text-blue-600" strokeWidth={2.5} />
                                            </div>
                                            <div className="space-y-1 relative z-10 mt-4">
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</div>
                                                <div className="text-2xl font-black text-slate-900">{value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-full h-64 bg-slate-50/50 border border-slate-100 rounded-3xl p-8 relative overflow-hidden shadow-inner">
                                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-100/20 to-transparent opacity-80" />
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <motion.path
                                            d="M0,100 L0,50 Q25,30 50,60 T100,20 L100,100 Z"
                                            fill="rgba(59,130,246,0.05)"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        />
                                        <motion.path
                                            d="M0,50 Q25,30 50,60 T100,20"
                                            fill="none"
                                            stroke="rgba(59,130,246,0.4)"
                                            strokeWidth="3"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Left Floating Card — Tenant Verified (Light) */}
                    <motion.div
                        style={{ y: y1 }}
                        className="relative sm:absolute sm:-left-4 md:left-10 sm:top-1/4 z-20 w-full max-w-[300px] sm:max-w-none sm:w-72 p-6 md:p-8 bg-white/90 backdrop-blur-xl rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] mx-auto sm:mx-0"
                    >
                        <div className="flex items-center gap-5 mb-5">
                            <div className="p-4 bg-green-50 rounded-2xl relative overflow-hidden flex-shrink-0 border border-green-100/50">
                                <UserCheck className="w-7 h-7 text-green-600 relative z-10" strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="text-slate-900 font-black text-lg leading-tight">Tenant Verified</div>
                                <div className="text-green-600 text-sm font-bold">Passed Inspection</div>
                            </div>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative shadow-inner">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-300"
                                initial={{ width: 0 }}
                                whileInView={{ width: "95%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                        </div>
                    </motion.div>

                    {/* Right Floating Card — Rent Collected (Light) */}
                    <motion.div
                        style={{ y: y2 }}
                        className="relative sm:absolute sm:-right-4 md:right-10 sm:bottom-1/4 z-20 w-full max-w-[300px] sm:max-w-none sm:w-80 p-6 md:p-8 bg-white/90 backdrop-blur-xl rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] mx-auto sm:mx-0"
                    >
                        <div className="flex items-center gap-5 mb-6">
                            <div className="p-4 bg-blue-50 rounded-2xl relative overflow-hidden flex-shrink-0 border border-blue-100/50">
                                <DollarSign className="w-7 h-7 text-blue-600 relative z-10" strokeWidth={2.5} />
                            </div>
                            <div>
                                <div className="text-slate-900 font-black text-lg leading-tight flex items-center gap-2">
                                    Rent Paid
                                    <span className="flex h-2.5 w-2.5 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                                    </span>
                                </div>
                                <div className="text-blue-600 text-sm font-bold">$2,450.00 Collected</div>
                            </div>
                        </div>
                        <div className="flex items-end gap-2.5 h-16">
                            {[40, 70, 45, 90, 65, 100].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-lg shadow-sm"
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

