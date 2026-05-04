"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Scale, Lock, CreditCard, Award, Building2 } from "lucide-react"

const trustItems = [
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Bank-grade 256-bit encryption and PCI-DSS compliant payment processing.",
    badge: "PCI Compliant",
    gradient: "from-[#07254B]/20 to-primary/10",
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    description: "Fully compliant with Australian residential tenancy laws in all states.",
    badge: "RTA Certified",
    gradient: "from-[#07254B]/20 to-accent/10",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "Enterprise-grade security with SOC 2 Type II certification.",
    badge: "SOC 2 Type II",
    gradient: "from-[#07254B]/20 to-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Verified Platform",
    description: "Registered Australian company with comprehensive insurance coverage.",
    badge: "ABN Verified",
    gradient: "from-[#07254B]/20 to-accent/10",
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
    <section id="trust" className="py-12 md:py-24 lg:py-40 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 border-t border-blue-100">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-sky-300/20 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#07254B]/20 shadow-[0_4px_20px_rgba(7,37,75,0.1)] text-sm font-semibold mb-8 text-[#07254B] backdrop-blur-md">
            <Award className="w-4 h-4" />
            Industry Leading Standards
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 text-balance leading-[1.1] tracking-tight">
            Built on Trust
            <br />
            <span className="bg-gradient-to-r from-[#07254B] to-[#17539c] bg-clip-text text-transparent filter drop-shadow-sm"> & Security</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto text-pretty font-medium">
            Your property and data are protected by continuous, enterprise-grade security monitoring.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[#17539c]/30 to-sky-100 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative text-center p-6 md:p-8 lg:p-10 bg-white/80 backdrop-blur-2xl rounded-[2rem] border border-blue-100/50 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#07254B]/10 transition-all duration-500 h-full flex flex-col justify-center">
                <div className="text-4xl lg:text-5xl font-black bg-gradient-to-br from-[#07254B] to-[#17539c] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500 origin-center">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,theme(colors.blue.100),theme(colors.transparent)_50%)] pointer-events-none blur-3xl opacity-50" />

          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Premium Hover Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.gradient} rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-40 transition duration-500`} />

              <div className="relative h-full bg-white rounded-[2rem] p-6 md:p-8 border border-blue-50 shadow-[0_8px_30px_rgba(59,130,246,0.06)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-500 flex flex-col justify-between overflow-hidden">
                {/* Shiny reflex */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500 shadow-inner`}>
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="inline-flex px-3 py-1 bg-[#07254B]/5 text-[#07254B] text-xs font-bold uppercase tracking-wider rounded-lg mb-4 border border-[#07254B]/10">
                    {item.badge}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cities served */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-32 pt-12 md:pt-16 border-t border-blue-200/60 relative"
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 px-2 sm:px-4 bg-sky-50">
            <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest bg-white px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-full border border-slate-200 shadow-sm whitespace-nowrap inline-block">
              Trusted Across Australia
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 lg:gap-12 mt-8">
            {["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"].map((city, i) => (
              <motion.div
                key={city}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-6 sm:py-3 bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-slate-600 hover:text-primary hover:border-slate-300 transition-all cursor-default text-sm sm:text-base"
              >
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-70" />
                <span className="font-semibold">{city}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

