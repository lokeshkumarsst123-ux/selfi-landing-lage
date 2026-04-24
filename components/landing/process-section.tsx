"use client"

import { motion } from "framer-motion"
import { FileText, UserCheck, Home, CheckCircle2, KeyRound } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit Your Form",
    description: "Fill out our simple form with your property details or rental preferences.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: UserCheck,
    title: "Agent Reviews",
    description: "Our local team reviews your submission and prepares for the next steps.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Home,
    title: "Property Inspection",
    description: "We conduct an offline inspection to verify property condition and details.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CheckCircle2,
    title: "Approval Process",
    description: "AI-powered matching and verification ensures the best fit for all parties.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: KeyRound,
    title: "Account Created",
    description: "Get your secure login credentials and full access to the platform dashboard.",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From application to keys in hand — our streamlined process makes property management effortless.
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
