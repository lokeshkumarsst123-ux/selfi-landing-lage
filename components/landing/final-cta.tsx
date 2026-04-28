"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building, User, CheckCircle, MapPin, Home } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 lg:py-40 relative overflow-hidden bg-white">
      {/* Light-themed background elements */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* Soft Ambient Glows (Light Mode) */}
      <div className="absolute top-0 left-0 w-[80%] h-[80%] bg-blue-400/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid overlay (Light mode) */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(rgba(226,232,240,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.4) 1px, transparent 1px)`,
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
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-bold mb-10 shadow-sm"
          >
            <Home className="w-4 h-4" />
            🇦🇺 Join 5,000+ Australian owners & renters
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-[900] text-slate-900 text-balance leading-[1.05] tracking-tight">
            Ready to Find
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Perfect Match?
            </span>
          </h2>

          <p className="mt-10 text-xl sm:text-2xl text-slate-500 max-w-2xl mx-auto text-pretty leading-relaxed font-medium">
            Owners — list your property and save thousands on agent fees. Tenants — browse verified homes and apply today.
          </p>

          {/* CTA Buttons */}
          <div className="mt-14 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#forms">
              <button className="inline-flex items-center justify-center gap-2 text-lg px-12 py-5 w-full sm:w-auto rounded-2xl bg-slate-900 text-white hover:bg-slate-800 shadow-2xl hover:shadow-blue-900/10 font-black group transition-all">
                <Building className="w-5 h-5 text-blue-400" strokeWidth={3} />
                List Your Property
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#forms">
              <button className="inline-flex items-center justify-center gap-2 text-lg px-12 py-5 w-full sm:w-auto rounded-2xl border-2 border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all font-bold group">
                <User className="w-5 h-5 text-blue-600" />
                Find a Home
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-5 text-slate-400 font-bold">
            {[
              "No credit card required",
              "Free property valuation",
              "24-hr team review",
              "Offline inspection included",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
