"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Scale, Lock, CreditCard, Award, Building2 } from "lucide-react"

const trustItems = [
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Bank-grade 256-bit encryption and PCI-DSS compliant payment processing.",
    badge: "PCI Compliant",
    gradient: "from-blue-500/20 to-primary/10",
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Fully compliant with Australian residential tenancy laws in all states.",
    badge: "RTA Certified",
    gradient: "from-teal-500/20 to-accent/10",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Enterprise-grade security with SOC 2 Type II certification.",
    badge: "SOC 2 Type II",
    gradient: "from-blue-500/20 to-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Verified Platform",
    description: "Registered Australian company with comprehensive insurance coverage.",
    badge: "ABN Verified",
    gradient: "from-teal-500/20 to-accent/10",
  },
]

const stats = [
  { value: "15,000+", label: "Properties Managed" },
  { value: "$45M+", label: "Rent Collected" },
  { value: "2,500+", label: "Happy Owners" },
  { value: "4.9/5", label: "Average Rating" },
]

export function TrustSection() {
  return (
    <section id="trust" className="py-32 lg:py-40 relative overflow-hidden bg-slate-50 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm text-sm font-semibold mb-8 text-primary dark:text-blue-400 backdrop-blur-md">
            <Award className="w-4 h-4" />
            Industry Leading Standards
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white text-balance leading-[1.1] tracking-tight">
            Built on Trust
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent"> & Security</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-pretty font-medium">
            Your property and data are protected by continuous, enterprise-grade security monitoring.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-b from-slate-200 to-slate-100 dark:from-white/10 dark:to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative text-center p-8 lg:p-10 bg-white/70 dark:bg-slate-900/50 backdrop-blur-2xl rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-none hover:-translate-y-2 transition-transform duration-500 h-full flex flex-col justify-center">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500 origin-center">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,theme(colors.primary.100),theme(colors.transparent)_50%)] dark:bg-[radial-gradient(ellipse_at_center,theme(colors.blue.900/20),theme(colors.transparent)_50%)] pointer-events-none blur-3xl opacity-50" />

          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Premium Hover Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.gradient} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />

              <div className="relative h-full bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                {/* Shiny reflex */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500 shadow-inner`}>
                    <item.icon className="w-8 h-8 text-primary dark:text-white" />
                  </div>

                  <div className="inline-flex px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-lg mb-4">
                    {item.badge}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cities served */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32 pt-16 border-t border-slate-200 dark:border-white/10 relative"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 px-4 bg-slate-50 dark:bg-slate-950">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-white/5 px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10">
              Trusted Across Australia
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 mt-8">
            {["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"].map((city, i) => (
              <motion.div
                key={city}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2.5 px-6 py-3 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-all cursor-default"
              >
                <Building2 className="w-4 h-4 opacity-70" />
                <span className="font-semibold">{city}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
