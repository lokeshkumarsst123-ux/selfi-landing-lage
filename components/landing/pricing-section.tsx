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
      duration: 0.8,
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
    <section id="pricing" className="py-32 lg:py-40 relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            <TrendingDown className="w-4 h-4" />
            Save Thousands Every Year
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            See How Much
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> You&apos;ll Save</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Compare traditional agent costs vs Self-i and calculate your savings.
          </p>
        </motion.div>

        {/* Interactive Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Savings Calculator</h3>
                  <p className="text-sm text-muted-foreground">Adjust your weekly rent to see your savings</p>
                </div>
              </div>

              {/* Rent Slider */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Weekly Rent</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setWeeklyRent(Math.max(300, weeklyRent - 50))}
                      className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors hover:scale-105"
                    >
                      <Minus className="w-4 h-4 text-foreground" />
                    </button>
                    <div className="text-3xl font-bold text-foreground w-28 text-center">${weeklyRent}</div>
                    <button
                      onClick={() => setWeeklyRent(Math.min(2000, weeklyRent + 50))}
                      className="w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors hover:scale-105"
                    >
                      <Plus className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
                </div>
                <div className="relative pt-6 pb-2">
                  <input
                    type="range"
                    min="300"
                    max="2000"
                    step="50"
                    value={weeklyRent}
                    onChange={(e) => setWeeklyRent(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[6px] [&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-xl [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110 relative z-10"
                  />
                  {/* Progress fill */}
                  <div
                    className="absolute top-6 left-0 h-3 bg-gradient-to-r from-primary to-accent rounded-full pointer-events-none z-0"
                    style={{ width: `${((weeklyRent - 300) / 1700) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>$300/week</span>
                  <span>$2,000/week</span>
                </div>
              </div>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Traditional Agent */}
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 transition-transform hover:-translate-y-1 duration-500">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-slate-400" />
                    <span className="font-bold text-slate-500 dark:text-slate-400">Traditional Agent</span>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Management Fee (6.5%)</span>
                      <span className="text-foreground font-medium"><AnimatedCounter prefix="$" value={managementFee} /></span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Letting Fee (1.5 wks)</span>
                      <span className="text-foreground font-medium"><AnimatedCounter prefix="$" value={lettingFee} /></span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Advertising</span>
                      <span className="text-foreground font-medium"><AnimatedCounter prefix="$" value={advertisingFee} /></span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Lease Renewal</span>
                      <span className="text-foreground font-medium"><AnimatedCounter prefix="$" value={leaseRenewalFee} /></span>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex justify-between items-end">
                      <span className="font-semibold text-slate-500">Annual Cost</span>
                      <span className="text-3xl font-bold text-slate-400 line-through decoration-red-400/50"><AnimatedCounter prefix="$" value={traditionalTotal} /></span>
                    </div>
                  </div>
                </div>

                {/* Self-i */}
                <div className="bg-gradient-to-br from-primary via-blue-600 to-accent rounded-[2rem] p-1 shadow-2xl shadow-primary/30 transition-transform hover:-translate-y-2 duration-500 group relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-blue-500 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                  <div className="relative h-full bg-slate-900 rounded-[1.8rem] p-7 md:p-8 flex flex-col">
                    <div className="absolute -top-px right-6 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-b-xl shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Recommended
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
                      <span className="font-bold text-white text-lg">Self-i Standard</span>
                    </div>
                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Management Fee</span>
                        <span className="text-accent font-bold">$0</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Letting Fee</span>
                        <span className="text-accent font-bold">$0</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Advertising</span>
                        <span className="text-accent font-bold">Included</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Platform Fee</span>
                        <span className="text-white font-medium">$49/mo</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-6 border-t border-slate-700/50">
                      <div className="flex justify-between items-end">
                        <span className="font-semibold text-slate-300">Annual Cost</span>
                        <span className="text-4xl font-extrabold text-white"><AnimatedCounter prefix="$" value={selfiCost} /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Banner */}
              <motion.div
                layout
                className="mt-8 bg-slate-900 rounded-[2rem] p-8 sm:p-10 text-center relative overflow-hidden group shadow-2xl border border-slate-800"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

                {/* Vibrant glow behind text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-gradient-to-r from-primary to-accent opacity-30 blur-[60px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-slate-400 mb-2 font-medium tracking-wide uppercase text-sm">Your Annual Savings</div>
                  <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-accent drop-shadow-xl my-2">
                    <AnimatedCounter prefix="$" value={savings} />
                  </div>
                  <div className="text-slate-300 mt-3 text-lg">
                    That&apos;s <span className="font-bold text-white"><AnimatedCounter prefix="$" value={Math.round(savings / 12)} /></span> back in your pocket every month
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

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
