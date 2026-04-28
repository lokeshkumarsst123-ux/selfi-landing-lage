"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { DollarSign, UserCheck, Wrench, Scale, Sparkles, CheckCircle } from "lucide-react"

const platformFeatures = [
  {
    icon: DollarSign,
    title: "Rent Tracking & Payments",
    description: "Collect rent automatically, track payment history, and get notified the moment payments land. No chasing required.",
    stat: "$45M+",
    statLabel: "Rent Collected",
    gradient: "from-blue-600/20 to-primary/10",
    accentColor: "text-primary",
    accentBg: "bg-primary/20",
    visualization: RentViz,
  },
  {
    icon: UserCheck,
    title: "Tenant Verification",
    description: "Every applicant goes through background checks, income verification, and rental history review — automatically.",
    stat: "97%",
    statLabel: "Approval Accuracy",
    gradient: "from-blue-600/20 to-blue-500/10",
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/20",
    visualization: VerificationViz,
  },
  {
    icon: Wrench,
    title: "Maintenance Requests",
    description: "Tenants report issues directly in the app. You approve quotes, track progress, and pay tradies — all in one place.",
    stat: "48 hrs",
    statLabel: "Avg. Resolution",
    gradient: "from-blue-600/20 to-primary/10",
    accentColor: "text-primary",
    accentBg: "bg-primary/20",
    visualization: MaintenanceViz,
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Stay up-to-date with Australian tenancy laws in all 8 states. Automatic alerts when things need your attention.",
    stat: "100%",
    statLabel: "Compliant",
    gradient: "from-blue-600/20 to-blue-500/10",
    accentColor: "text-blue-400",
    accentBg: "bg-blue-500/20",
    visualization: ComplianceViz,
  },
]

export function AIFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="works-for-you" className="py-12 md:py-24 lg:py-40 relative overflow-hidden bg-white">
      {/* Light-themed background accents */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* Soft Accent Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] animate-pulse delay-1000" />

      {/* Grid overlay (Light mode) */}
      <div
        className="absolute inset-0 opacity-[0.2] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(226,232,240,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-bold mb-8 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Built for Owners & Tenants
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-[900] text-slate-900 text-balance leading-[1.05] tracking-tight">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> to Manage Smarter</span>
          </h2>
          <p className="mt-8 text-xl text-slate-500 max-w-2xl mx-auto text-pretty font-medium leading-relaxed">
            Self-i handles the heavy lifting — so you can focus on what matters: your property and your home.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div className={`relative h-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-500 ${hoveredIndex === index
                ? "shadow-[0_30px_70px_rgba(0,0,0,0.08)] scale-[1.01] border-blue-100"
                : "shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
                }`}>
                {/* Feature background accents */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative p-6 md:p-10 lg:p-12">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[1.25rem] ${feature.accentBg.replace('bg-primary/20', 'bg-blue-50')} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm border border-blue-100/50`}>
                      <feature.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${feature.accentColor.replace('text-primary', 'text-blue-600').replace('text-blue-400', 'text-blue-600')}`} strokeWidth={2.5} />
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl sm:text-4xl font-[900] ${feature.accentColor.replace('text-primary', 'text-blue-600').replace('text-blue-400', 'text-blue-600')}`}>{feature.stat}</div>
                      <div className="text-[10px] sm:text-xs text-slate-400 mt-2 font-black uppercase tracking-widest">{feature.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium mb-10">{feature.description}</p>

                  {/* Interactive visualization (Light themed) */}
                  <div className="h-44 bg-slate-50/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-100 shadow-inner">
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

function RentViz({ isActive, isPrimary }: { isActive: boolean; isPrimary: boolean }) {
  const bars = [40, 55, 45, 70, 60, 85, 75, 95, 80, 90]
  return (
    <div className="h-full flex items-end justify-around px-2 sm:px-6 pb-5 pt-4 relative">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: isActive ? `${height}%` : `${height * 0.65}%` }}
          transition={{ duration: 0.5, delay: i * 0.04 }}
          className={`w-4 sm:w-6 rounded-t ${isPrimary ? "bg-gradient-to-t from-blue-500 to-blue-300/60" : "bg-gradient-to-t from-blue-400 to-blue-300/60"}`}
        />
      ))}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-2 right-2 sm:top-3 sm:right-4 px-2 py-1 bg-green-500 text-white text-[10px] sm:text-xs font-semibold rounded-full flex items-center gap-1"
        >
          <CheckCircle className="w-3 h-3" />
          Paid on time
        </motion.div>
      )}
    </div>
  )
}

function VerificationViz({ isActive, isPrimary }: { isActive: boolean; isPrimary: boolean }) {
  const score = isActive ? 94 : 70
  return (
    <div className="h-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-4 py-2 sm:px-6">
      <div className="relative w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="8" fill="none" className="text-white/10" />
          <motion.circle
            cx="50%" cy="50%" r="40%"
            stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"
            className={isPrimary ? "text-primary" : "text-blue-400"}
            initial={{ strokeDasharray: "0 251" }}
            animate={{ strokeDasharray: `${(score / 100) * 251} 251` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg sm:text-2xl font-bold text-white">{score}</span>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col gap-3 sm:gap-2 justify-center w-full sm:w-auto text-[10px] sm:text-sm">
        {[
          { label: "Credit", value: "Exc." },
          { label: "History", value: "5+ yr" },
          { label: "Income", value: "Ver." },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 sm:gap-3 flex-1 sm:flex-auto justify-center sm:justify-start">
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isPrimary ? "bg-primary" : "bg-blue-400"} flex-shrink-0`} />
            <span className="text-slate-400 hidden sm:inline">{item.label}:</span>
            <span className="text-white font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MaintenanceViz({ isActive, isPrimary }: { isActive: boolean; isPrimary: boolean }) {
  return (
    <div className="h-full p-4 sm:p-5 flex flex-col justify-center space-y-3 sm:space-y-4">
      {[
        { label: "Plumbing", progress: isActive ? 100 : 70, status: "Fixed" },
        { label: "Electricals", progress: isActive ? 60 : 40, status: "In Progress" },
        { label: "Roof", progress: isActive ? 95 : 78, status: "Scheduled" },
      ].map((item, i) => (
        <div key={item.label} className="flex items-center gap-2 sm:gap-4">
          <div className="w-12 sm:w-28 text-[10px] sm:text-xs text-slate-400 truncate">{item.label}</div>
          <div className="flex-1 h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.progress}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`h-full rounded-full ${item.progress >= 95 ? "bg-green-500" : item.progress >= 60 ? (isPrimary ? "bg-primary" : "bg-blue-400") : "bg-amber-500"}`}
            />
          </div>
          <div className={`text-[10px] sm:text-xs font-medium w-14 sm:w-20 text-right ${item.progress >= 95 ? "text-green-400" : item.progress >= 60 ? (isPrimary ? "text-primary" : "text-blue-400") : "text-amber-400"}`}>
            {item.status}
          </div>
        </div>
      ))}
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
    <div className="h-full p-4 sm:p-5 grid grid-cols-2 gap-2 sm:gap-3 overflow-hidden">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-2 sm:gap-3 px-2 py-1.5 sm:px-3 sm:py-2.5 rounded-lg sm:rounded-xl ${item.checked
            ? isPrimary ? "bg-primary/20 border border-primary/30" : "bg-blue-500/20 border border-blue-400/30"
            : "bg-white/5 border border-white/10"
            }`}
        >
          <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.checked ? (isPrimary ? "bg-primary" : "bg-blue-500") : "bg-white/20"}`}>
            {item.checked && <span className="text-white text-[8px] sm:text-[10px] font-bold">✓</span>}
          </div>
          <span className={`text-[10px] sm:text-xs font-medium truncate ${item.checked ? "text-white" : "text-slate-500"}`}>{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
