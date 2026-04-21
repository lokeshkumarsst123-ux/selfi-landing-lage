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
    <section id="trust" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-50/50 to-background" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Trusted by Thousands
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            Built on Trust
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> & Security</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your property and data are protected by industry-leading security standards.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center p-8 bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-8 h-8 ${index % 2 === 0 ? "text-primary" : "text-accent"}`} />
                  </div>
                  <div className={`inline-flex px-3 py-1.5 ${index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"} text-xs font-semibold rounded-full mb-4`}>
                    {item.badge}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cities served */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 pt-16 border-t border-border/50"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by property owners across Australia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"].map((city, i) => (
              <motion.div
                key={city}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Building2 className="w-4 h-4" />
                <span className="font-medium">{city}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
