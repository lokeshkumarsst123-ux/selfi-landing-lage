"use client"

import { motion } from "framer-motion"
import { FileText, UserCheck, Home, CheckCircle2, KeyRound } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit Your Form",
    description: "Fill out our simple form with your property details or rental preferences. Takes less than 5 minutes.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: UserCheck,
    title: "Team Reviews",
    description: "Our local team reviews your submission and contacts you within 24 hours to plan next steps.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Home,
    title: "Property Inspection",
    description: "We conduct an offline inspection to verify the property's condition, safety, and compliance.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CheckCircle2,
    title: "Match & Approval",
    description: "We review applications and find the right match. Both owner and tenant are notified on approval.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: KeyRound,
    title: "Account Created",
    description: "Get your login credentials and full access to the platform. Start managing or renting right away.",
    color: "bg-primary/10 text-primary",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-medium mb-6">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            Simple 5-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            From Listing to Keys in Hand
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our streamlined process makes property management effortless — for owners and tenants alike.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step number */}
                <div className="lg:absolute lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 mb-6 lg:mb-0">
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center mx-auto lg:mx-0 shadow-sm">
                    <span className="text-lg font-bold text-primary">{index + 1}</span>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow lg:mt-16">
                  <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-4`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
