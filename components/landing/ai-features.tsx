"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Brain, TrendingUp, Shield, AlertTriangle, Sparkles, Zap } from "lucide-react"

const aiFeatures = [
  {
    icon: TrendingUp,
    title: "AI Rent Pricing",
    description: "Machine learning analyzes 50+ market factors to suggest optimal rent pricing that maximizes your returns.",
    stat: "15%",
    statLabel: "Higher Yields",
    gradient: "from-blue-600/30 via-primary/20 to-transparent",
    glowColor: "shadow-primary/20",
    borderGlow: "group-hover:border-primary/50",
    visualization: RentPricingViz,
  },
  {
    icon: Shield,
    title: "Tenant Risk Scoring",
    description: "Advanced algorithms evaluate rental history, income, and references for comprehensive reliability scores.",
    stat: "90%",
    statLabel: "Accuracy Rate",
    gradient: "from-teal-600/30 via-accent/20 to-transparent",
    glowColor: "shadow-accent/20",
    borderGlow: "group-hover:border-accent/50",
    visualization: TenantScoreViz,
  },
  {
    icon: AlertTriangle,
    title: "Predictive Maintenance",
    description: "AI monitors property systems and predicts issues before they become costly repairs.",
    stat: "40%",
    statLabel: "Cost Reduction",
    gradient: "from-blue-600/30 via-primary/20 to-transparent",
    glowColor: "shadow-primary/20",
    borderGlow: "group-hover:border-primary/50",
    visualization: MaintenanceViz,
  },
  {
    icon: Brain,
    title: "Compliance Alerts",
    description: "Stay ahead of Australian tenancy law changes with automated monitoring and proactive notifications.",
    stat: "100%",
    statLabel: "Compliant",
    gradient: "from-teal-600/30 via-accent/20 to-transparent",
    glowColor: "shadow-accent/20",
    borderGlow: "group-hover:border-accent/50",
    visualization: ComplianceViz,
  },
]

export function AIFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
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
            Our AI works 24/7 to optimize your rental income, minimize risks, and keep your properties in perfect condition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
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
              <div className={`relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 ${feature.borderGlow} ${
                hoveredIndex === index ? `shadow-2xl ${feature.glowColor} scale-[1.02]` : "shadow-lg"
              }`}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50`} />
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${index % 2 === 0 ? "bg-primary/20" : "bg-accent/20"} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
                      <feature.icon className={`w-8 h-8 ${index % 2 === 0 ? "text-primary" : "text-accent"}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-4xl font-bold ${index % 2 === 0 ? "text-primary" : "text-accent"}`}>{feature.stat}</div>
                      <div className="text-sm text-slate-400">{feature.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">{feature.description}</p>

                  {/* Interactive visualization */}
                  <div className="h-36 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                    <feature.visualization isActive={hoveredIndex === index} index={index} />
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

function RentPricingViz({ isActive, index }: { isActive: boolean; index: number }) {
  const bars = [40, 55, 45, 70, 60, 85, 75, 95, 80, 90]
  const isPrimary = index % 2 === 0
  
  return (
    <div className="h-full flex items-end justify-around px-4 pb-4 relative">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: isActive ? `${height}%` : `${height * 0.6}%` }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className={`w-6 rounded-t ${isPrimary ? "bg-gradient-to-t from-primary to-primary/50" : "bg-gradient-to-t from-accent to-accent/50"}`}
        />
      ))}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`absolute top-4 right-4 px-3 py-1.5 ${isPrimary ? "bg-primary" : "bg-accent"} text-white text-xs font-semibold rounded-full flex items-center gap-1`}
        >
          <TrendingUp className="w-3 h-3" />
          +15%
        </motion.div>
      )}
    </div>
  )
}

function TenantScoreViz({ isActive, index }: { isActive: boolean; index: number }) {
  const score = isActive ? 94 : 70
  const isPrimary = index % 2 === 0
  
  return (
    <div className="h-full flex items-center justify-center px-4">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-white/10"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={isPrimary ? "text-primary" : "text-accent"}
            initial={{ strokeDasharray: "0 251" }}
            animate={{ strokeDasharray: `${(score / 100) * 251} 251` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-white"
          >
            {score}
          </motion.span>
        </div>
      </div>
      <div className="ml-6 space-y-2">
        {[
          { label: "Credit", value: "Excellent" },
          { label: "History", value: "5+ years" },
          { label: "Income", value: "Verified" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm">
            <div className={`w-2 h-2 rounded-full ${isPrimary ? "bg-primary" : "bg-accent"}`} />
            <span className="text-slate-400">{item.label}:</span>
            <span className="text-white font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MaintenanceViz({ isActive, index }: { isActive: boolean; index: number }) {
  const isPrimary = index % 2 === 0
  
  return (
    <div className="h-full p-4 space-y-3">
      {[
        { label: "HVAC System", progress: isActive ? 85 : 60, status: "Good" },
        { label: "Water Heater", progress: isActive ? 45 : 30, status: "Check Soon" },
        { label: "Roof Condition", progress: isActive ? 95 : 75, status: "Excellent" },
      ].map((item, i) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className="w-24 text-xs text-slate-400 truncate">{item.label}</div>
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.progress}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`h-full rounded-full ${item.progress > 70 ? (isPrimary ? "bg-primary" : "bg-accent") : "bg-amber-500"}`}
            />
          </div>
          <div className={`text-xs font-medium ${item.progress > 70 ? (isPrimary ? "text-primary" : "text-accent") : "text-amber-400"}`}>
            {item.status}
          </div>
        </div>
      ))}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs text-slate-400 mt-2"
        >
          <Zap className={`w-3 h-3 ${isPrimary ? "text-primary" : "text-accent"}`} />
          Next inspection recommended: 2 weeks
        </motion.div>
      )}
    </div>
  )
}

function ComplianceViz({ isActive, index }: { isActive: boolean; index: number }) {
  const isPrimary = index % 2 === 0
  const items = [
    { label: "Smoke Alarms", checked: true },
    { label: "Safety Switches", checked: true },
    { label: "Pool Compliance", checked: true },
    { label: "Bond Lodged", checked: isActive },
  ]

  return (
    <div className="h-full p-4 grid grid-cols-2 gap-3">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-sm ${
            item.checked ? (isPrimary ? "bg-primary/20" : "bg-accent/20") : "bg-white/5"
          }`}
        >
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
            item.checked ? (isPrimary ? "bg-primary" : "bg-accent") : "bg-white/20"
          }`}>
            {item.checked && (
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                className="w-3 h-3 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.polyline points="20 6 9 17 4 12" />
              </motion.svg>
            )}
          </div>
          <span className={`text-xs font-medium ${item.checked ? "text-white" : "text-slate-400"}`}>
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
