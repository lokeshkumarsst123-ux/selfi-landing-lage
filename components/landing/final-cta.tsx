"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building, User, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      {/* Dark gradient background with glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/25 rounded-full blur-[150px] animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[100px]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            Start your free trial today
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
              Your Property Management?
            </span>
          </h2>
          
          <p className="mt-8 text-xl text-slate-300 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join thousands of Australian property owners and tenants who&apos;ve made the switch to AI-powered property management.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#forms">
              <Button 
                size="lg" 
                className="text-lg px-10 py-7 bg-white text-slate-900 hover:bg-slate-100 shadow-2xl shadow-white/10 group"
              >
                <Building className="w-5 h-5 mr-2" />
                List Your Property
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#forms">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-10 py-7 border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm group"
              >
                <User className="w-5 h-5 mr-2" />
                Find a Rental
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400">
            {[
              "No credit card required",
              "Free property valuation",
              "Cancel anytime",
              "24/7 support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-accent" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
