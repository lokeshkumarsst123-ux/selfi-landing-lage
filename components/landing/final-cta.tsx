"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building, User, CheckCircle, Home } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-blue-50/50">
      {/* Decorative Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-white text-blue-700 text-sm font-bold mb-8 shadow-sm backdrop-blur-sm"
          >
            <Home className="w-4 h-4" />
            Join 5,000+ Australian owners & renters
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-slate-900 text-balance leading-[1.1] tracking-tight">
            Ready to Find
            <br />
            <span className="bg-gradient-to-r from-[#07254B] to-blue-600 bg-clip-text text-transparent">
              Your Perfect Match?
            </span>
          </h2>

          <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto text-pretty leading-relaxed font-medium">
            Owners — list your property and save thousands on agent fees. Tenants — browse verified homes and apply today.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#forms">
              <button className="inline-flex items-center justify-center gap-2 text-base px-10 py-4 w-full sm:w-auto rounded-full bg-[#07254B] text-white hover:bg-[#07254B]/90 shadow-xl hover:shadow-[#07254B]/25 font-bold group transition-all">
                <Building className="w-5 h-5" />
                List Your Property
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#forms">
              <button className="inline-flex items-center justify-center gap-2 text-base px-10 py-4 w-full sm:w-auto rounded-full border-2 border-[#07254B]/20 text-[#07254B] bg-white hover:bg-slate-50 hover:border-[#07254B]/40 transition-all font-bold group shadow-sm">
                <User className="w-5 h-5 text-blue-600" />
                Find a Home
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-500 font-medium">
            {[
              "No credit card required",
              "Free property valuation",
              "24-hr team review",
              "Offline inspection included",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
