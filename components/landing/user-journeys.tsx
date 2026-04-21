"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building, User, ArrowRight, Upload, Brain, ClipboardCheck, Key, Search, FileCheck, CreditCard, Home } from "lucide-react"

type JourneyType = "owner" | "tenant"

const ownerSteps = [
  {
    icon: Upload,
    title: "List Your Property",
    description: "Upload photos, set preferences, and let our AI suggest optimal pricing based on market data.",
    visual: "listing",
  },
  {
    icon: Brain,
    title: "AI Screens Applicants",
    description: "Our AI evaluates tenant applications with 90% accuracy, checking credit, rental history, and income.",
    visual: "screening",
  },
  {
    icon: ClipboardCheck,
    title: "Review & Approve",
    description: "Get detailed reports and approve tenants with confidence. We handle all legal documentation.",
    visual: "approval",
  },
  {
    icon: Key,
    title: "Manage Effortlessly",
    description: "Collect rent automatically, track maintenance, and access reports from your dashboard.",
    visual: "manage",
  },
]

const tenantSteps = [
  {
    icon: Search,
    title: "Find Your Home",
    description: "Browse AI-matched listings based on your preferences, budget, and lifestyle needs.",
    visual: "search",
  },
  {
    icon: FileCheck,
    title: "Apply Instantly",
    description: "One application works for multiple properties. Upload documents once and apply anywhere.",
    visual: "apply",
  },
  {
    icon: CreditCard,
    title: "Get Verified",
    description: "Quick verification process with transparent feedback. Know your application status in real-time.",
    visual: "verify",
  },
  {
    icon: Home,
    title: "Move In",
    description: "Sign your lease digitally, set up payments, and get your keys. Welcome home!",
    visual: "movein",
  },
]

export function UserJourneys() {
  const [activeJourney, setActiveJourney] = useState<JourneyType>("owner")
  const [activeStep, setActiveStep] = useState(0)
  
  const steps = activeJourney === "owner" ? ownerSteps : tenantSteps
  const currentStep = steps[activeStep]

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            Your Journey,
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Simplified</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how easy it is to get started, whether you&apos;re an owner or a tenant.
          </p>
        </motion.div>

        {/* Journey Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-muted/50 rounded-2xl p-1.5">
            <button
              onClick={() => { setActiveJourney("owner"); setActiveStep(0); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeJourney === "owner"
                  ? "bg-card text-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building className="w-5 h-5" />
              Owner Journey
            </button>
            <button
              onClick={() => { setActiveJourney("tenant"); setActiveStep(0); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeJourney === "tenant"
                  ? "bg-card text-foreground shadow-lg"
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
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeStep === index
                    ? "bg-card border-primary/30 shadow-lg"
                    : "bg-card/50 border-border hover:border-border/80 hover:bg-card/80"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeStep === index
                      ? activeJourney === "owner" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        activeStep === index
                          ? activeJourney === "owner" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        Step {index + 1}
                      </span>
                      <h3 className={`text-lg font-semibold ${activeStep === index ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className={`mt-2 text-sm leading-relaxed ${activeStep === index ? "text-muted-foreground" : "text-muted-foreground/70"}`}>
                      {step.description}
                    </p>
                  </div>
                  <ArrowRight className={`w-5 h-5 flex-shrink-0 transition-all ${
                    activeStep === index
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
                className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl overflow-hidden"
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
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeStep === index
                      ? `w-8 ${activeJourney === "owner" ? "bg-primary" : "bg-accent"}`
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
  
  // Different visuals based on step
  if (step === "listing" || step === "search") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-xl ${isOwner ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center`}>
            {isOwner ? <Upload className="w-5 h-5 text-primary" /> : <Search className="w-5 h-5 text-accent" />}
          </div>
          <span className="font-semibold text-foreground">{isOwner ? "New Listing" : "Property Search"}</span>
        </div>
        
        {/* Property cards grid */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted/50 rounded-xl p-4"
            >
              <div className="aspect-video bg-muted rounded-lg mb-3 flex items-center justify-center">
                <Home className="w-8 h-8 text-muted-foreground/50" />
              </div>
              <div className="h-3 w-3/4 bg-muted rounded mb-2" />
              <div className="h-2 w-1/2 bg-muted rounded" />
            </motion.div>
          ))}
        </div>
        
        {isOwner && (
          <div className={`mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20`}>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Brain className="w-4 h-4" />
              AI suggests: $580-620/week based on market data
            </div>
          </div>
        )}
      </div>
    )
  }
  
  if (step === "screening" || step === "apply") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-xl ${isOwner ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center`}>
            {isOwner ? <Brain className="w-5 h-5 text-primary" /> : <FileCheck className="w-5 h-5 text-accent" />}
          </div>
          <span className="font-semibold text-foreground">{isOwner ? "AI Screening" : "Application"}</span>
        </div>
        
        <div className="space-y-4">
          {["Credit Check", "Rental History", "Income Verification", "References"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
            >
              <div className={`w-8 h-8 rounded-full ${isOwner ? "bg-primary" : "bg-accent"} flex items-center justify-center`}>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.3 }}
                  className={`w-4 h-4 ${isOwner ? "text-primary-foreground" : "text-accent-foreground"}`}
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
  
  if (step === "approval" || step === "verify") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-xl ${isOwner ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center`}>
            <ClipboardCheck className={`w-5 h-5 ${isOwner ? "text-primary" : "text-accent"}`} />
          </div>
          <span className="font-semibold text-foreground">{isOwner ? "Applicant Review" : "Verification Status"}</span>
        </div>
        
        <div className="bg-muted/50 rounded-2xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <User className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <div className="font-semibold text-foreground">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">Professional, 5+ years rental history</div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "AI Score", value: "94/100" },
              { label: "Income", value: "3x rent" },
              { label: "Credit", value: "Excellent" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 bg-card rounded-xl">
                <div className={`text-lg font-bold ${isOwner ? "text-primary" : "text-accent"}`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-xl font-semibold ${
            isOwner 
              ? "bg-primary text-primary-foreground" 
              : "bg-accent text-accent-foreground"
          }`}
        >
          {isOwner ? "Approve Tenant" : "Application Approved!"}
        </motion.button>
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
        <span className="font-semibold text-foreground">{isOwner ? "Dashboard" : "Welcome Home"}</span>
      </div>
      
      {isOwner ? (
        <div className="space-y-4">
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
          <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
            <div className="flex items-center gap-2 text-accent font-medium">
              <CreditCard className="w-4 h-4" />
              Rent collected automatically every month
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
          <p className="text-muted-foreground">Your digital lease is signed and payment is set up.</p>
        </div>
      )}
    </div>
  )
}
