"use client"

import { useState, useEffect } from "react"
import { motion, animate, useAnimation } from "framer-motion"
import { Check, X, TrendingDown, ArrowRight, Calculator, Minus, Plus, Sparkles, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function AnimatedCounter({ value, prefix = "" }: { value: number, prefix?: string }) {
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const controls = animate(display, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // Custom bouncy ease
      onUpdate: (v) => setDisplay(Math.round(v))
    })
    return controls.stop
  }, [value])

  return <span>{prefix}{display.toLocaleString('en-AU', { maximumFractionDigits: 0 })}</span>
}

export function PricingSection() {
  const [weeklyRent, setWeeklyRent] = useState(600)

  // Calculate traditional agent costs
  const annualRent = weeklyRent * 52
  const managementFee = annualRent * 0.065 // 6.5%
  const lettingFee = weeklyRent * 1.5 // 1.5 weeks
  const advertisingFee = 350
  const leaseRenewalFee = 200
  const traditionalTotal = managementFee + lettingFee + advertisingFee + leaseRenewalFee

  // Self-i costs (Standard plan)
  const selfiCost = 49 * 12 // $49/month
  const savings = traditionalTotal - selfiCost

  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-40 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-50/50 to-background" />

      {/* Decorative orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <TrendingDown className="w-4 h-4" />
            Save Thousands Every Year
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            Modern Management,
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Simple Pricing</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transparent plans designed to save you thousands while giving you total control over your property.
          </p>
        </motion.div>

        {/* Value Pillars - Replacing Calculator */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-24">
          {[
            {
              icon: TrendingDown,
              title: "0% Commission",
              description: "Traditional agents take 6-10% of your rent. We take 0%. You keep thousands more every year with our flat-fee model.",
              color: "text-blue-600",
              bg: "bg-blue-50"
            },
            {
              icon: Sparkles,
              title: "AI-Powered Edge",
              description: "Our machine learning out-performs manual management by optimizing rent prices and screening tenants with 99% accuracy.",
              color: "text-primary",
              bg: "bg-primary/10"
            },
            {
              icon: Calculator,
              title: "No Hidden Costs",
              description: "Zero markups on maintenance, no letting fees, and no advertising surcharges. One simple monthly price covers it all.",
              color: "text-accent",
              bg: "bg-accent/10"
            }
          ].map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-card/50 backdrop-blur-md rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <pillar.icon className={`w-7 h-7 ${pillar.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{pillar.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-3 bg-muted/30 border-b border-border">
            <div className="p-6">
              <span className="text-sm font-medium text-muted-foreground">Feature</span>
            </div>
            <div className="p-6 text-center border-x border-border">
              <span className="text-sm font-medium text-muted-foreground">Traditional Agent</span>
            </div>
            <div className="p-6 text-center bg-gradient-to-r from-primary/10 to-accent/10">
              <span className="text-sm font-semibold text-primary">Self-i</span>
            </div>
          </div>

          {comparisonFeatures.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-b border-border last:border-b-0 ${index % 2 === 0 ? "bg-background" : "bg-muted/10"
                }`}
            >
              <div className="p-5 flex items-center">
                <span className="text-sm text-foreground">{row.feature}</span>
              </div>
              <div className="p-5 flex items-center justify-center border-x border-border">
                {typeof row.traditional === "boolean" ? (
                  row.traditional ? (
                    <Check className="w-5 h-5 text-accent" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/50" />
                  )
                ) : (
                  <span className="text-sm text-muted-foreground">{row.traditional}</span>
                )}
              </div>
              <div className="p-5 flex items-center justify-center bg-gradient-to-r from-primary/5 to-accent/5">
                {typeof row.selfi === "boolean" ? (
                  row.selfi ? (
                    <Check className="w-5 h-5 text-accent" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/50" />
                  )
                ) : (
                  <span className="text-sm font-semibold text-accent">{row.selfi}</span>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link href="#forms">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-10 group shadow-lg shadow-primary/20">
              Start Saving Today
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const comparisonFeatures = [
  { feature: "AI Rent Optimization", traditional: false, selfi: true },
  { feature: "Automated Tenant Screening", traditional: false, selfi: true },
  { feature: "24/7 Digital Dashboard", traditional: false, selfi: true },
  { feature: "Maintenance Coordination", traditional: "10-20% markup", selfi: "At cost" },
  { feature: "Inspection Reports", traditional: "$50-100 each", selfi: "Unlimited" },
  { feature: "Direct Bank Deposits", traditional: false, selfi: true },
  { feature: "Legal Document Templates", traditional: "Extra fee", selfi: "Included" },
  { feature: "Predictive Maintenance AI", traditional: false, selfi: true },
]
