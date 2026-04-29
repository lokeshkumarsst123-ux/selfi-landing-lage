"use client"

import { motion } from "framer-motion"
import { BadgeDollarSign, Users, Zap, LayoutDashboard, ArrowRight } from "lucide-react"

const valueProps = [
  {
    icon: BadgeDollarSign,
    title: "Low Management Fees",
    description: "Save up to 60% compared to traditional agents. We charge a fair, transparent management fee with no hidden markups or surprises.",
    highlight: "Save 60%",
    gradient: "from-[#07254B]/20 via-primary/10 to-transparent",
    glowColor: "bg-primary/30",
  },
  {
    icon: Users,
    title: "Verified Tenants",
    description: "Every applicant goes through background checks, income verification, and rental history review — so you only deal with quality tenants.",
    highlight: "Background Checked",
    gradient: "from-[#07254B]/20 via-[#17539c]/10 to-transparent",
    glowColor: "bg-[#17539c]/30",
  },
  {
    icon: Zap,
    title: "Faster Rentals",
    description: "Properties listed on Self-i get matched with serious tenants faster. Apply online, screen quickly, and move in sooner.",
    highlight: "Days, Not Weeks",
    gradient: "from-[#07254B]/20 via-primary/10 to-transparent",
    glowColor: "bg-primary/30",
  },
  {
    icon: LayoutDashboard,
    title: "Everything in One Place",
    description: "From listing to lease to maintenance — manage your entire property lifecycle on a single, simple dashboard.",
    highlight: "All-in-One",
    gradient: "from-[#07254B]/20 via-[#17539c]/10 to-transparent",
    glowColor: "bg-[#17539c]/30",
  },
]

export function ValueProps() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-40 relative overflow-hidden bg-slate-50 dark:bg-transparent">
      {/* Background blur animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-blue-200/40 dark:bg-blue-900/20 blur-[120px] animate-pulse [animation-duration:8s]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-200/40 dark:bg-blue-900/20 blur-[120px] animate-pulse [animation-duration:10s] [animation-delay:2s]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-blue-100/40 dark:bg-blue-900/20 blur-[120px] animate-pulse [animation-duration:12s] [animation-delay:1s]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-primary/10 border border-slate-200 dark:border-primary/20 text-[#07254B] dark:text-[#17539c] text-sm font-bold tracking-wide mb-6 shadow-sm">
            <Users className="w-4 h-4" />
            Why Thousands Choose Self-i
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] text-balance">
            The Smarter Way
            <span className="bg-gradient-to-r from-[#07254B] to-[#17539c] dark:from-blue-400 dark:to-blue-400 bg-clip-text text-transparent px-2">to Rent & Manage</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-pretty font-medium leading-relaxed">
            Join thousands of Australian property owners and tenants who&apos;ve found a better way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative h-full bg-card rounded-3xl p-6 md:p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glow effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${prop.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Highlight badge */}
                <div className="absolute top-0 right-0 z-10">
                  <span className={`inline-flex items-center px-4 py-2 rounded-bl-3xl text-sm font-bold shadow-sm ${index % 2 === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-[#17539c] text-white"
                    }`}>
                    {prop.highlight}
                  </span>
                </div>

                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl ${index % 2 === 0 ? "bg-primary/10" : "bg-[#17539c]/10"} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <prop.icon className={`w-8 h-8 ${index % 2 === 0 ? "text-primary" : "text-[#17539c]"}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {prop.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {prop.description}
                  </p>

                  <div className={`flex items-center gap-2 text-sm font-medium ${index % 2 === 0 ? "text-primary" : "text-[#17539c]"} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
