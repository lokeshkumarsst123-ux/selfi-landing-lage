"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X, TrendingDown, ArrowRight, Calculator, Minus, Plus, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PricingSection() {
  const [weeklyRent, setWeeklyRent] = useState(600)
  
  // Calculate traditional agent costs
  const annualRent = weeklyRent * 52
  const managementFee = annualRent * 0.065 // 6.5%
  const lettingFee = weeklyRent * 1.5 // 1.5 weeks
  const advertisingFee = 350
  const leaseRenewalFee = 200
  const traditionalTotal = managementFee + lettingFee + advertisingFee + leaseRenewalFee
  
  // PropFlow costs (Standard plan)
  const propflowCost = 49 * 12 // $49/month
  const savings = traditionalTotal - propflowCost

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
            Compare traditional agent costs vs PropFlow and calculate your savings.
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
                <input
                  type="range"
                  min="300"
                  max="2000"
                  step="50"
                  value={weeklyRent}
                  onChange={(e) => setWeeklyRent(Number(e.target.value))}
                  className="w-full h-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>$300/week</span>
                  <span>$2,000/week</span>
                </div>
              </div>

              {/* Comparison Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Traditional Agent */}
                <div className="bg-slate-100/80 rounded-2xl p-6 border border-slate-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="font-semibold text-foreground">Traditional Agent</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Management Fee (6.5%)</span>
                      <span className="text-foreground font-medium">${managementFee.toLocaleString('en-AU', { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Letting Fee (1.5 weeks)</span>
                      <span className="text-foreground font-medium">${lettingFee.toLocaleString('en-AU', { maximumFractionDigits: 0 })}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Advertising</span>
                      <span className="text-foreground font-medium">${advertisingFee}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Lease Renewal</span>
                      <span className="text-foreground font-medium">${leaseRenewalFee}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-300">
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Annual Cost</span>
                      <span className="text-2xl font-bold text-foreground">${traditionalTotal.toLocaleString('en-AU', { maximumFractionDigits: 0 })}</span>
                    </div>
                  </div>
                </div>

                {/* PropFlow */}
                <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-6 border border-primary/30 relative overflow-hidden shadow-lg shadow-primary/10">
                  <div className="absolute -top-1 -right-1 px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-bl-xl flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Recommended
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="font-semibold text-foreground">PropFlow Standard</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Management Fee</span>
                      <span className="text-accent font-semibold">$0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Letting Fee</span>
                      <span className="text-accent font-semibold">$0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Advertising</span>
                      <span className="text-accent font-semibold">Included</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Platform Fee ($49/mo)</span>
                      <span className="text-foreground font-medium">${propflowCost}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-primary/20">
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Annual Cost</span>
                      <span className="text-2xl font-bold text-foreground">${propflowCost}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings Banner */}
              <motion.div
                key={savings}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-8 bg-gradient-to-r from-accent via-teal-500 to-accent rounded-2xl p-8 text-center relative overflow-hidden"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                
                <div className="relative">
                  <div className="text-white/80 mb-1 font-medium">Your Annual Savings</div>
                  <div className="text-5xl sm:text-6xl font-bold text-white">${savings.toLocaleString('en-AU', { maximumFractionDigits: 0 })}</div>
                  <div className="text-white/80 mt-2">That&apos;s ${Math.round(savings / 12).toLocaleString('en-AU')} back in your pocket every month</div>
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
              <span className="text-sm font-semibold text-primary">PropFlow</span>
            </div>
          </div>

          {comparisonFeatures.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-b border-border last:border-b-0 ${
                index % 2 === 0 ? "bg-background" : "bg-muted/10"
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
                {typeof row.propflow === "boolean" ? (
                  row.propflow ? (
                    <Check className="w-5 h-5 text-accent" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground/50" />
                  )
                ) : (
                  <span className="text-sm font-semibold text-accent">{row.propflow}</span>
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
  { feature: "AI Rent Optimization", traditional: false, propflow: true },
  { feature: "Automated Tenant Screening", traditional: false, propflow: true },
  { feature: "24/7 Digital Dashboard", traditional: false, propflow: true },
  { feature: "Maintenance Coordination", traditional: "10-20% markup", propflow: "At cost" },
  { feature: "Inspection Reports", traditional: "$50-100 each", propflow: "Unlimited" },
  { feature: "Direct Bank Deposits", traditional: false, propflow: true },
  { feature: "Legal Document Templates", traditional: "Extra fee", propflow: "Included" },
  { feature: "Predictive Maintenance AI", traditional: false, propflow: true },
]
