"use client"

import { motion } from "framer-motion"
import { BadgeDollarSign, Sparkles, Eye, RefreshCcw, ArrowRight } from "lucide-react"

const valueProps = [
  {
    icon: BadgeDollarSign,
    title: "No Agent Fees",
    description: "Save up to $15,000 per year by managing your property directly. No hidden commissions or markups.",
    highlight: "Save 70%+",
    gradient: "from-blue-500/20 via-primary/10 to-transparent",
    glowColor: "bg-primary/30",
  },
  {
    icon: Sparkles,
    title: "AI Automation",
    description: "Smart rent pricing, automated tenant scoring, and predictive maintenance powered by advanced AI.",
    highlight: "AI-Powered",
    gradient: "from-teal-500/20 via-accent/10 to-transparent",
    glowColor: "bg-accent/30",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "See every transaction, communication, and document in real-time. No surprises, ever.",
    highlight: "100% Clear",
    gradient: "from-blue-500/20 via-primary/10 to-transparent",
    glowColor: "bg-primary/30",
  },
  {
    icon: RefreshCcw,
    title: "End-to-End Lifecycle",
    description: "From listing to leasing to maintenance to move-out. One platform handles it all seamlessly.",
    highlight: "All-in-One",
    gradient: "from-teal-500/20 via-accent/10 to-transparent",
    glowColor: "bg-accent/30",
  },
]

export function ValueProps() {
  return (
    <section id="features" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-slate-50/50 to-background" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Why Property Owners Love Us
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            Why Owners
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Choose Us</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join thousands of Australian property owners who&apos;ve switched to smarter property management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-card rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Glow effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${prop.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Highlight badge */}
                <div className="absolute -top-1 -right-1">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-bl-2xl text-xs font-bold ${
                    index % 2 === 0 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-accent text-accent-foreground"
                  }`}>
                    {prop.highlight}
                  </span>
                </div>

                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl ${index % 2 === 0 ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <prop.icon className={`w-8 h-8 ${index % 2 === 0 ? "text-primary" : "text-accent"}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {prop.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {prop.description}
                  </p>

                  <div className={`flex items-center gap-2 text-sm font-medium ${index % 2 === 0 ? "text-primary" : "text-accent"} opacity-0 group-hover:opacity-100 transition-opacity`}>
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
