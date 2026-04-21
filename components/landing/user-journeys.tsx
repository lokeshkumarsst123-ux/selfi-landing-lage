"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building, User, ArrowRight, Upload, Brain, ClipboardCheck, Key, Search, FileCheck, CreditCard, Home, UserCheck, MapPin } from "lucide-react"

type JourneyType = "owner" | "tenant"

const ownerSteps = [
  {
    icon: Upload,
    title: "Submit Your Property",
    description: "Fill out the simple property form with details, photos, and your contact info. No agent sign-ups required.",
    visual: "listing",
  },
  {
    icon: UserCheck,
    title: "Agent Review",
    description: "Our team reviews your submission within 24 hours. We assess the property details and contact you to schedule an inspection.",
    visual: "review",
  },
  {
    icon: MapPin,
    title: "Offline Verification",
    description: "A local property inspector visits your property, verifies its condition, and completes the compliance check.",
    visual: "verification",
  },
  {
    icon: Key,
    title: "Credentials & Dashboard",
    description: "Once approved, you receive login credentials to access your owner dashboard — list, manage, and earn.",
    visual: "manage",
  },
]

const tenantSteps = [
  {
    icon: Search,
    title: "Find Your Home",
    description: "Browse AI-matched listings based on your preferences, budget, and lifestyle needs across Australia.",
    visual: "search",
  },
  {
    icon: FileCheck,
    title: "Submit Application",
    description: "Complete the tenant form with your details, rental history, and upload supporting documents.",
    visual: "apply",
  },
  {
    icon: Brain,
    title: "Background Check & Review",
    description: "Our AI runs a comprehensive credit, income, and rental history check. Admin reviews and approves.",
    visual: "verify",
  },
  {
    icon: Home,
    title: "Credentials & Move In",
    description: "After approval, receive your tenant login credentials, sign your lease digitally, and move in.",
    visual: "movein",
  },
]

export function UserJourneys() {
  const [activeJourney, setActiveJourney] = useState<JourneyType>("owner")
  const [activeStep, setActiveStep] = useState(0)

  const steps = activeJourney === "owner" ? ownerSteps : tenantSteps
  const currentStep = steps[activeStep]

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-slate-50/80 border-y border-border/40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-teal-100/40" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-6">
            <ArrowRight className="w-4 h-4" />
            Simple 4-Step Process
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            Your Journey,
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Simplified</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you own or rent — our verified platform keeps it safe, transparent, and simple.
          </p>
        </motion.div>

        {/* Journey Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-muted/60 rounded-2xl p-1.5 border border-border/50">
            <button
              onClick={() => { setActiveJourney("owner"); setActiveStep(0); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeJourney === "owner"
                ? "bg-card text-primary shadow-lg border border-primary/20"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <Building className="w-5 h-5" />
              Owner Journey
            </button>
            <button
              onClick={() => { setActiveJourney("tenant"); setActiveStep(0); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeJourney === "tenant"
                ? "bg-card text-accent shadow-lg border border-accent/20"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <User className="w-5 h-5" />
              Tenant Journey
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.button
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activeStep === index
                  ? activeJourney === "owner"
                    ? "bg-card border-primary/30 shadow-lg shadow-primary/5"
                    : "bg-card border-accent/30 shadow-lg shadow-accent/5"
                  : "bg-card/50 border-border hover:border-border/80 hover:bg-card/80"
                  }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${activeStep === index
                    ? activeJourney === "owner" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground"
                    }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${activeStep === index
                        ? activeJourney === "owner" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                        }`}>
                        Step {index + 1}
                      </span>
                      <h3 className={`text-lg font-semibold ${activeStep === index ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className={`text-sm leading-relaxed ${activeStep === index ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
                      {step.description}
                    </p>
                  </div>
                  <ArrowRight className={`w-5 h-5 flex-shrink-0 transition-all ${activeStep === index
                    ? activeJourney === "owner" ? "text-primary translate-x-1" : "text-accent translate-x-1"
                    : "text-muted-foreground/30"
                    }`} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Visual */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeJourney}-${activeStep}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-card/90 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden"
              >
                <JourneyVisual type={activeJourney} step={currentStep.visual} />
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`h-2 rounded-full transition-all ${activeStep === index
                    ? `w-8 ${activeJourney === "owner" ? "bg-primary" : "bg-accent"}`
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function JourneyVisual({ type, step }: { type: JourneyType; step: string }) {
  const isOwner = type === "owner"

  if (step === "listing" || step === "search") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-xl ${isOwner ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center`}>
            {isOwner ? <Upload className="w-5 h-5 text-primary" /> : <Search className="w-5 h-5 text-accent" />}
          </div>
          <span className="font-semibold text-foreground">{isOwner ? "New Listing" : "Property Search"}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted/50 rounded-xl p-4"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-3 flex items-center justify-center">
                <Home className="w-8 h-8 text-primary/30" />
              </div>
              <div className="h-2.5 w-3/4 bg-muted rounded mb-2" />
              <div className="h-2 w-1/2 bg-muted rounded" />
            </motion.div>
          ))}
        </div>

        {isOwner && (
          <div className="mt-5 p-4 rounded-xl bg-primary/10 border border-primary/20">
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Brain className="w-4 h-4" />
              AI suggests: $580–$620/week based on market data
            </div>
          </div>
        )}
      </div>
    )
  }

  if (step === "review") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <UserCheck className="w-5 h-5 text-primary" />
          </div>
          <span className="font-semibold text-foreground">Agent Review In Progress</span>
        </div>

        <div className="space-y-4">
          {[
            { label: "Submission Received", status: "done" },
            { label: "Agent Assigned", status: "done" },
            { label: "Documentation Check", status: "active" },
            { label: "Inspection Scheduling", status: "pending" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-muted/40 rounded-xl"
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${item.status === "done" ? "bg-primary text-primary-foreground" :
                item.status === "active" ? "bg-accent text-accent-foreground animate-pulse" :
                  "bg-muted text-muted-foreground"
                }`}>
                {item.status === "done" ? "✓" : i + 1}
              </div>
              <span className={`font-medium ${item.status === "pending" ? "text-muted-foreground/50" : "text-foreground"}`}>{item.label}</span>
              {item.status === "active" && (
                <span className="ml-auto text-xs text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-full">In Review</span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-5 p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-700">
          ⏱ Our team will contact you within 24 hours to schedule your property inspection.
        </div>
      </div>
    )
  }

  if (step === "verification") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-teal-600" />
          </div>
          <span className="font-semibold text-foreground">Offline Property Inspection</span>
        </div>

        <div className="space-y-3">
          {[
            { label: "Property Condition", checked: true },
            { label: "Smoke Alarm Compliance", checked: true },
            { label: "Building Safety Check", checked: true },
            { label: "Council Compliance", checked: false },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className={`flex items-center gap-3 p-3 rounded-xl ${item.checked ? "bg-primary/10 border border-primary/20" : "bg-muted/30 border border-dashed border-border"}`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${item.checked ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                {item.checked ? "✓" : "○"}
              </div>
              <span className={`text-sm font-medium ${item.checked ? "text-foreground" : "text-muted-foreground"}`}>{item.label}</span>
              {!item.checked && <span className="ml-auto text-xs text-muted-foreground">Scheduled</span>}
            </motion.div>
          ))}
        </div>

        <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-700">
          📋 Inspector visit scheduled: <strong>Tomorrow, 10:00 AM</strong>
        </div>
      </div>
    )
  }

  if (step === "apply") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <FileCheck className="w-5 h-5 text-accent" />
          </div>
          <span className="font-semibold text-foreground">Tenant Application</span>
        </div>

        <div className="space-y-4">
          {["Identity Verification", "Rental History", "Income / Employment", "References"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
            >
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.3 }}
                  className="w-4 h-4 text-accent-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <motion.polyline points="20 6 9 17 4 12" />
                </motion.svg>
              </div>
              <span className="flex-1 text-foreground font-medium">{item}</span>
              <span className="text-xs text-accent font-medium">Verified</span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (step === "verify") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <Brain className="w-5 h-5 text-accent" />
          </div>
          <span className="font-semibold text-foreground">AI Screening & Admin Review</span>
        </div>

        <div className="bg-muted/50 rounded-2xl p-5 mb-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <User className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">Professional · 5+ yrs rental history</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "AI Score", value: "94/100" },
              { label: "Income", value: "3× rent" },
              { label: "Credit", value: "Excellent" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 bg-card rounded-xl">
                <div className="text-base font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full py-3 rounded-xl font-semibold text-center text-sm bg-accent text-accent-foreground cursor-pointer"
        >
          Admin Review: Approved ✓
        </motion.div>
      </div>
    )
  }

  // manage or movein
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl ${isOwner ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center`}>
          {isOwner ? <Key className="w-5 h-5 text-primary" /> : <Home className="w-5 h-5 text-accent" />}
        </div>
        <span className="font-semibold text-foreground">{isOwner ? "Owner Dashboard Access" : "Welcome Home"}</span>
      </div>

      {isOwner ? (
        <div className="space-y-4">
          <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
            <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
              <Key className="w-4 h-4" />
              Login credentials sent to your email
            </div>
            <div className="text-xs text-muted-foreground">Your dashboard is ready. Manage listings, collect rent, track maintenance.</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="text-sm text-muted-foreground">Monthly Revenue</div>
              <div className="text-2xl font-bold text-foreground">$2,340</div>
              <div className="text-xs text-accent">+5% from last month</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="text-sm text-muted-foreground">Next Payment</div>
              <div className="text-2xl font-bold text-foreground">May 1</div>
              <div className="text-xs text-muted-foreground">Auto-collected</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-24 h-24 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6"
          >
            <Key className="w-12 h-12 text-accent" />
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Keys Ready!</h3>
          <p className="text-muted-foreground text-sm">Digital lease signed. Rent payment set up. Tenant portal activated.</p>
        </div>
      )}
    </div>
  )
}
