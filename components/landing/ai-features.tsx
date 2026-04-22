"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Brain, TrendingUp, Shield, AlertTriangle, Sparkles, Zap } from "lucide-react"

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "AI Rent Pricing",
    description: "Machine learning analyses 50+ market factors to suggest optimal weekly rent that maximises your returns.",
    stat: "15%",
    statLabel: "Higher Yields",
    gradient: "from-blue-600/20 to-primary/10",
    accentColor: "text-primary",
    accentBg: "bg-primary/20",
    visualization: RentPricingViz,
  },
  {
    icon: Shield,
    title: "Tenant Risk Scoring",
    description: "Advanced algorithms evaluate rental history, income, and references for comprehensive reliability scores.",
    stat: "90%",
    statLabel: "Accuracy Rate",
    gradient: "from-teal-600/20 to-accent/10",
    accentColor: "text-accent",
    accentBg: "bg-accent/20",
    visualization: TenantScoreViz,
  },
  {
    icon: AlertTriangle,
    title: "Predictive Maintenance",
    description: "AI monitors your property systems and predicts issues before they become costly emergency repairs.",
    stat: "40%",
    statLabel: "Cost Reduction",
    gradient: "from-blue-600/20 to-primary/10",
    accentColor: "text-primary",
    accentBg: "bg-primary/20",
    visualization: MaintenanceViz,
  },
  {
    icon: Brain,
    title: "Compliance Alerts",
    description: "Stay ahead of Australian tenancy law changes across all 8 states with automated monitoring and alerts.",
    stat: "100%",
    statLabel: "Compliant",
    gradient: "from-teal-600/20 to-accent/10",
    accentColor: "text-accent",
    accentBg: "bg-accent/20",
    visualization: ComplianceViz,
  },
]

export function AIFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="works-for-you" className="py-32 lg:py-40 relative overflow-hidden bg-slate-950">
      {/* Premium Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900/10 to-transparent" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px] animate-pulse delay-1000" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            Powered by Advanced AI
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
            Intelligence That
            <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent"> Works For You</span>
          </h2>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto text-pretty">
            Our AI works 24/7 to optimise your rental income, minimise risks, and keep your properties in perfect condition.
          </p>
        </motion.div>

        {/* 2×2 Grid — original layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div className={`relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 ${hoveredIndex === index
                ? "shadow-2xl shadow-primary/10 scale-[1.02] border-white/20"
                : "shadow-lg"
                }`}>
                {/* Card gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-60 transition-opacity group-hover:opacity-100 duration-500`} />

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${feature.accentBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-7 h-7 ${feature.accentColor}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-4xl font-bold ${feature.accentColor}`}>{feature.stat}</div>
                      <div className="text-sm text-slate-400 mt-1">{feature.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">{feature.description}</p>

                  {/* Interactive visualization */}
                  <div className="h-40 bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5">
                    <feature.visualization
                      isActive={hoveredIndex === index}
                      isPrimary={index % 2 === 0}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RentPricingViz({ isActive, isPrimary }: { isActive: boolean; isPrimary: boolean }) {
  const bars = [40, 55, 45, 70, 60, 85, 75, 95, 80, 90]
  return (
    <div className="h-full flex items-end justify-around px-6 pb-5 pt-4 relative">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: isActive ? `${height}%` : `${height * 0.65}%` }}
          transition={{ duration: 0.5, delay: i * 0.04 }}
          className={`w-6 rounded-t ${isPrimary ? "bg-gradient-to-t from-blue-500 to-blue-300/60" : "bg-gradient-to-t from-teal-500 to-teal-300/60"}`}
        />
      ))}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-3 right-4 px-2.5 py-1 ${isPrimary ? "bg-blue-500" : "bg-teal-500"} text-white text-xs font-semibold rounded-full flex items-center gap-1`}
        >
          <TrendingUp className="w-3 h-3" />
          +15%
        </motion.div>
      )}
    </div>
  )
}

function TenantScoreViz({ isActive, isPrimary }: { isActive: boolean; isPrimary: boolean }) {
  const score = isActive ? 94 : 70
  return (
    <div className="h-full flex items-center justify-center gap-8 px-6">
      {/* Circular score */}
      <div className="relative w-24 h-24 flex-shrink-0">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-white/10" />
          <motion.circle
            cx="48" cy="48" r="40"
            stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"
            className={isPrimary ? "text-primary" : "text-accent"}
            initial={{ strokeDasharray: "0 251" }}
            animate={{ strokeDasharray: `${(score / 100) * 251} 251` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{score}</span>
        </div>
      </div>
      {/* Details */}
      <div className="space-y-3">
        {[
          { label: "Credit", value: "Excellent" },
          { label: "History", value: "5+ years" },
          { label: "Income", value: "Verified" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 text-sm">
            <div className={`w-2 h-2 rounded-full ${isPrimary ? "bg-primary" : "bg-accent"} flex-shrink-0`} />
            <span className="text-slate-400">{item.label}:</span>
            <span className="text-white font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MaintenanceViz({ isActive, isPrimary }: { isActive: boolean; isPrimary: boolean }) {
  return (
    <div className="h-full p-5 space-y-3">
      {[
        { label: "HVAC System", progress: isActive ? 85 : 65, status: "Good" },
        { label: "Water Heater", progress: isActive ? 45 : 35, status: "Check Soon" },
        { label: "Roof Condition", progress: isActive ? 95 : 78, status: "Excellent" },
      ].map((item, i) => (
        <div key={item.label} className="flex items-center gap-4">
          <div className="w-28 text-xs text-slate-400 truncate">{item.label}</div>
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.progress}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`h-full rounded-full ${item.progress > 70 ? (isPrimary ? "bg-primary" : "bg-accent") : "bg-amber-500"}`}
            />
          </div>
          <div className={`text-xs font-medium w-20 text-right ${item.progress > 70 ? (isPrimary ? "text-primary" : "text-accent") : "text-amber-400"}`}>
            {item.status}
          </div>
        </div>
      ))}
      {isActive && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-xs text-slate-400 pt-1">
          <Zap className={`w-3 h-3 ${isPrimary ? "text-primary" : "text-accent"}`} />
          Inspection recommended within 2 weeks
        </motion.div>
      )}
    </div>
  )
}

function ComplianceViz({ isActive, isPrimary }: { isActive: boolean; isPrimary: boolean }) {
  const items = [
    { label: "Smoke Alarms", checked: true },
    { label: "Safety Switches", checked: true },
    { label: "Pool Compliance", checked: true },
    { label: "Bond Lodged", checked: isActive },
  ]
  return (
    <div className="h-full p-5 grid grid-cols-2 gap-3">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl ${item.checked
            ? isPrimary ? "bg-primary/20 border border-primary/30" : "bg-accent/20 border border-accent/30"
            : "bg-white/5 border border-white/10"
            }`}
        >
          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.checked ? (isPrimary ? "bg-primary" : "bg-accent") : "bg-white/20"
            }`}>
            {item.checked && <span className="text-white text-[10px] font-bold">✓</span>}
          </div>
          <span className={`text-xs font-medium ${item.checked ? "text-white" : "text-slate-500"}`}>{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
