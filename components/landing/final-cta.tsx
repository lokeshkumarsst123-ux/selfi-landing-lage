"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building, User, Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-black">
      {/* Deep premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0a1128] to-black" />

      {/* Rich gradient shades adding depth without hurting contrast */}
      <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-gradient-to-br from-blue-700/20 via-indigo-900/10 to-transparent rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-gradient-to-tl from-teal-600/20 via-cyan-800/10 to-transparent rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            🇦🇺 Join 2,500+ Australian property owners
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white text-balance leading-tight drop-shadow-md">
            Ready to Skip
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent filter drop-shadow-sm">
              The Agent?
            </span>
          </h2>

          <p className="mt-8 text-xl sm:text-2xl text-slate-200 max-w-2xl mx-auto text-pretty leading-relaxed font-medium">
            Submit your form today. Our team reviews within 24 hours, verifies offline, and sets up your dashboard — you manage, you earn.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#forms">
              <button className="inline-flex items-center justify-center gap-2 text-lg px-10 py-4 w-full sm:w-auto rounded-xl bg-white text-slate-900 hover:bg-slate-50 shadow-xl hover:shadow-2xl font-bold group transition-all">
                <Building className="w-5 h-5" />
                List Your Property
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#forms">
              <button className="inline-flex items-center justify-center gap-2 text-lg px-10 py-4 w-full sm:w-auto rounded-xl border-2 border-white/60 text-white hover:bg-white/20 hover:border-white backdrop-blur-md transition-all font-bold group">
                <User className="w-5 h-5" />
                Find a Rental
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-300 font-medium">
            {[
              "No credit card required",
              "Free property valuation",
              "24-hr agent review",
              "Offline verification included",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
