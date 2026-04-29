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
    statLabel: "Rent Processed Annually",
    visualization: RentViz,
  },
  {
    icon: UserCheck,
    title: "Tenant Verification",
    description: "Every applicant goes through background checks, income verification, and rental history review automatically.",
    stat: "99%",
    statLabel: "Accuracy Rate",
    visualization: VerificationViz,
  },
  {
    icon: Wrench,
    title: "Maintenance Requests",
    description: "Tenants report issues directly in the app. You approve quotes, track progress, and pay tradies all in one place.",
    stat: "48 hrs",
    statLabel: "Average Resolution",
    visualization: MaintenanceViz,
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Stay up-to-date with Australian tenancy laws in all 8 states. Automatic alerts when things need your attention.",
    stat: "100%",
    statLabel: "Fully Compliant",
    visualization: ComplianceViz,
  },
]

export function AIFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="works-for-you" className="py-20 md:py-32 relative overflow-hidden bg-white">
      {/* Soft Background Accent */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm text-slate-700 text-sm font-bold mb-6 tracking-wide">
            <Sparkles className="w-4 h-4 text-[#07254B]" />
            Intelligent Automation
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-slate-900 text-balance leading-[1.05] tracking-tight">
            Everything You Need
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#07254B] to-[#17539c] bg-clip-text text-transparent"> to Manage Smarter</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto text-pretty font-medium leading-relaxed">
            Self-i handles the heavy lifting — so you can focus on what matters. No agents, no stress, just powerful tools at your fingertips.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, y: -8, rotateX: 2, rotateY: -2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group perspective-1000"
            >
              <div className="relative h-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(7,37,75,0.08)] flex flex-col">
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-[#07254B]/5 flex items-center justify-center border border-[#07254B]/10 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-7 h-7 text-[#07254B]" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-extrabold text-[#07254B]">{feature.stat}</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">{feature.statLabel}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                    {feature.description}
                  </p>

                  {/* Visualization Container */}
                  <div className="h-[200px] bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden relative">
                    <feature.visualization isActive={hoveredIndex === index} />
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

function RentViz({ isActive }: { isActive: boolean }) {
  const bars = [40, 55, 45, 70, 60, 85, 75, 95, 80, 90]
  return (
    <div className="h-full w-full flex items-end justify-around px-4 pb-6 pt-8 relative">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: isActive ? `${height}%` : `${height * 0.7}%` }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
          className="w-full max-w-[12px] sm:max-w-[16px] rounded-t-sm bg-gradient-to-t from-[#07254B] to-blue-500"
        />
      ))}
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-white border border-slate-200 shadow-sm rounded-full flex items-center gap-1.5 z-10">
        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
        <span className="text-xs font-bold text-slate-700">All Paid</span>
      </div>
    </div>
  )
}

function VerificationViz({ isActive }: { isActive: boolean }) {
  const score = isActive ? 99 : 65
  return (
    <div className="h-full w-full flex flex-col sm:flex-row items-center justify-center gap-8 px-6">
      <div className="relative w-28 h-28 flex-shrink-0">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="10" fill="none" className="text-slate-200" />
          <motion.circle
            cx="50%" cy="50%" r="40%"
            stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="round"
            className="text-[#07254B]"
            initial={{ strokeDasharray: "0 251" }}
            animate={{ strokeDasharray: `${(score / 100) * 251} 251` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-2xl font-extrabold text-slate-900">{score}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full sm:w-auto">
        {[
          { label: "Credit Match", value: "Excellent" },
          { label: "Income Verified", value: "Yes" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#07254B] flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase">{item.label}</span>
              <span className="text-sm font-bold text-slate-900">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MaintenanceViz({ isActive }: { isActive: boolean }) {
  return (
    <div className="h-full w-full p-6 flex flex-col justify-center space-y-5">
      {[
        { label: "Leaking Tap", progress: isActive ? 100 : 70, status: "Fixed", color: "bg-green-500" },
        { label: "AC Repair", progress: isActive ? 60 : 30, status: "Quoted", color: "bg-[#07254B]" },
        { label: "Fence Fix", progress: isActive ? 90 : 50, status: "Scheduled", color: "bg-blue-500" },
      ].map((item, i) => (
        <div key={item.label} className="w-full">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-slate-700">{item.label}</span>
            <span className={`text-[10px] font-bold ${item.progress === 100 ? "text-green-600" : "text-slate-500"}`}>{item.status}</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.progress}%` }}
              transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
              className={`h-full rounded-full ${item.color}`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function ComplianceViz({ isActive }: { isActive: boolean }) {
  const items = [
    { label: "Smoke Alarms Checked", checked: true },
    { label: "Safety Switch Test", checked: true },
    { label: "Pool Compliance", checked: true },
    { label: "Bond Lodged", checked: isActive },
  ]
  return (
    <div className="h-full w-full p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 items-center justify-center">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${item.checked
            ? "bg-white border-slate-200 shadow-sm"
            : "bg-slate-100 border-transparent opacity-50"
            }`}
        >
          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.checked ? "bg-green-500" : "bg-slate-300"}`}>
            {item.checked && <span className="text-white text-[10px] font-black">✓</span>}
          </div>
          <span className={`text-xs font-bold truncate ${item.checked ? "text-slate-700" : "text-slate-400"}`}>{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
