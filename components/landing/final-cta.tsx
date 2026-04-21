"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building, User, Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/60 to-slate-950" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[150px] animate-pulse delay-700" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,179,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.3) 1px, transparent 1px)`,
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            🇦🇺 Join 2,500+ Australian property owners
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
            Ready to Skip
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              The Agent?
            </span>
          </h2>

          <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto text-pretty leading-relaxed">
            Submit your form today. Our team reviews within 24 hours, verifies offline, and sets up your dashboard — you manage, you earn.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#forms">
              <button className="inline-flex items-center justify-center gap-2 text-lg px-10 py-4 rounded-xl bg-white text-slate-900 hover:bg-slate-100 shadow-2xl font-semibold group transition-all">
                <Building className="w-5 h-5" />
                List Your Property
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#forms">
              <button className="inline-flex items-center justify-center gap-2 text-lg px-10 py-4 rounded-xl border-2 border-white/50 text-white hover:bg-white/15 hover:border-white/80 backdrop-blur-sm transition-all font-semibold group">
                <User className="w-5 h-5" />
                Find a Rental
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400">
            {[
              "No credit card required",
              "Free property valuation",
              "24-hr agent review",
              "Offline verification included",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
