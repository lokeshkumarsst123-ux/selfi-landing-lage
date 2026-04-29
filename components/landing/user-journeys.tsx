"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Building, User, ArrowRight, Upload, ClipboardCheck, Key, Search, FileCheck, Home, UserCheck, MapPin, DollarSign, MessageCircle, CheckCircle, Star } from "lucide-react"

type JourneyType = "owner" | "tenant"

const ownerSteps = [
  {
    icon: Upload,
    title: "List Your Property",
    description: "Fill out a simple form with your property details and photos. No agent sign-ups, no lock-in contracts. Takes less than 5 minutes.",
    visual: "listing",
  },
  {
    icon: UserCheck,
    title: "We Review & Inspect",
    description: "Our local team reviews your submission within 24 hours, then schedules a free in-person property inspection to verify condition.",
    visual: "review",
  },
  {
    icon: ClipboardCheck,
    title: "Get Verified Tenants",
    description: "We screen applicants for you — background checks, income verification, rental history. Only serious, qualified tenants reach you.",
    visual: "tenants",
  },
  {
    icon: Key,
    title: "Manage & Collect Rent",
    description: "Once approved, your owner dashboard is ready. Collect rent automatically, track payments, and manage maintenance all in one place.",
    visual: "manage",
  },
]

const tenantSteps = [
  {
    icon: Search,
    title: "Browse Verified Homes",
    description: "Every listing is inspected and verified by our team before it goes live. No fake listings, no bait-and-switch. What you see is what you get.",
    visual: "search",
  },
  {
    icon: FileCheck,
    title: "Apply in Minutes",
    description: "Fill out the tenant form once and apply to any property. Upload your documents and we handle the rest.",
    visual: "apply",
  },
  {
    icon: CheckCircle,
    title: "Get Approved",
    description: "Our team reviews your application, checks your references, and contacts you within 48 hours with an outcome.",
    visual: "verify",
  },
  {
    icon: Home,
    title: "Move In & Pay Easily",
    description: "Sign your lease digitally, set up automatic rent payments, and contact your owner directly through the app whenever you need.",
    visual: "movein",
  },
]

export function UserJourneys({ initialJourney }: { initialJourney?: JourneyType }) {
  const [activeJourney, setActiveJourney] = useState<JourneyType>(initialJourney ?? "owner")
  const [activeStep, setActiveStep] = useState(0)

  // Listen for intent set by the navbar modal
  useEffect(() => {
    const handleIntent = (e: Event) => {
      const intent = (e as CustomEvent<JourneyType>).detail
      if (intent === "owner" || intent === "tenant") {
        setActiveJourney(intent)
        setActiveStep(0)
      }
    }
    window.addEventListener("selfi_intent_change", handleIntent)
    // Also read from localStorage on mount (in case of page navigation)
    const stored = window.localStorage.getItem("selfi_intent")
    if (stored === "owner" || stored === "tenant") {
      setActiveJourney(stored)
      window.localStorage.removeItem("selfi_intent")
    }
    return () => window.removeEventListener("selfi_intent_change", handleIntent)
  }, [])

  const steps = activeJourney === "owner" ? ownerSteps : tenantSteps
  const currentStep = steps[activeStep]

  return (
    <section id="journeys" className="py-16 md:py-24 lg:py-40 relative overflow-hidden bg-slate-50/80 border-y border-border/40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-blue-100/40" />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }} 
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-medium mb-6">
            <ArrowRight className="w-4 h-4" />
            Simple 4-Step Journey
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-foreground text-balance leading-[1.05] tracking-tight">
            Your Journey,
            <span className="bg-gradient-to-r from-primary to-[#17539c] bg-clip-text text-transparent px-2"> Made Easy</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you own or rent — our verified platform keeps it safe, transparent, and simple every step of the way.
          </p>
        </motion.div>

        {/* Journey Toggle */}
        <div className="flex justify-center mb-10 md:mb-16">
          <div className="inline-flex bg-muted/60 rounded-2xl p-1.5 border border-border/50">
            <button
              onClick={() => { setActiveJourney("owner"); setActiveStep(0); }}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeJourney === "owner"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {activeJourney === "owner" && (
                <motion.div
                  layoutId="active-journey-pill"
                  className="absolute inset-0 bg-card shadow-lg border border-primary/20 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-2">
                <Building className="w-5 h-5" />
                Property Owner
              </div>
            </button>
            <button
              onClick={() => { setActiveJourney("tenant"); setActiveStep(0); }}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${activeJourney === "tenant"
                ? "text-blue-600"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {activeJourney === "tenant" && (
                <motion.div
                  layoutId="active-journey-pill"
                  className="absolute inset-0 bg-card shadow-lg border border-blue-500/20 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-2">
                <User className="w-5 h-5" />
                Looking to Rent
              </div>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.button
                key={step.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activeStep === index
                  ? activeJourney === "owner"
                    ? "bg-card border-primary/30 shadow-lg shadow-primary/5"
                    : "bg-card border-blue-500/30 shadow-lg shadow-blue-500/5"
                  : "bg-card/50 border-border hover:border-border/80 hover:bg-card/80"
                  }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${activeStep === index
                    ? activeJourney === "owner" ? "bg-primary text-primary-foreground" : "bg-blue-600 text-white"
                    : "bg-muted text-muted-foreground"
                    }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${activeStep === index
                        ? activeJourney === "owner" ? "bg-primary/10 text-primary" : "bg-blue-500/10 text-blue-600"
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
                    ? activeJourney === "owner" ? "text-primary translate-x-1" : "text-blue-600 translate-x-1"
                    : "text-muted-foreground/30"
                    }`} />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Visual panel */}
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
                  className={`relative h-2 rounded-full transition-all duration-300 ${activeStep === index
                    ? "w-8"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                >
                  {activeStep === index && (
                    <motion.div
                      layoutId="active-journey-dot"
                      className={`absolute inset-0 rounded-full ${activeJourney === "owner" ? "bg-primary" : "bg-blue-600"}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
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
          <div className={`w-10 h-10 rounded-xl ${isOwner ? "bg-primary/10" : "bg-blue-500/10"} flex items-center justify-center`}>
            {isOwner ? <Upload className="w-5 h-5 text-primary" /> : <Search className="w-5 h-5 text-blue-600" />}
          </div>
          <span className="font-semibold text-foreground">{isOwner ? "New Listing" : "Property Search"}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { suburb: "Bondi, NSW", rent: "$750/wk", beds: 2, badge: "Verified", image: "/property-luxury-house.png" },
            { suburb: "St Kilda, VIC", rent: "$620/wk", beds: 2, badge: "Available", image: "/property-apartment.png" },
            { suburb: "New Farm, QLD", rent: "$580/wk", beds: 3, badge: "New", image: "/property-lakehouse.png" },
            { suburb: "Fremantle, WA", rent: "$490/wk", beds: 2, badge: "Inspected", image: "/property-luxury-house.png" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-muted/50 rounded-xl p-4"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
                <Image src={item.image} alt={item.suburb} fill className="object-cover" />
                <span className="absolute top-2 left-2 text-[10px] font-bold bg-green-500 text-white px-2 py-0.5 rounded-full z-10">{item.badge}</span>
              </div>
              <div className="text-xs font-semibold text-foreground mb-0.5">{item.suburb}</div>
              <div className="text-xs text-muted-foreground">{item.rent} · {item.beds} bed</div>
            </motion.div>
          ))}
        </div>
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
          <span className="font-semibold text-foreground">Team Review In Progress</span>
        </div>

        <div className="space-y-4">
          {[
            { label: "Form Received", status: "done" },
            { label: "Agent Assigned", status: "done" },
            { label: "Documentation Review", status: "active" },
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
                item.status === "active" ? "bg-blue-600 text-white animate-pulse" :
                  "bg-muted text-muted-foreground"
                }`}>
                {item.status === "done" ? "✓" : i + 1}
              </div>
              <span className={`font-medium ${item.status === "pending" ? "text-muted-foreground/50" : "text-foreground"}`}>{item.label}</span>
              {item.status === "active" && (
                <span className="ml-auto text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full">In Review</span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-5 p-4 rounded-xl bg-blue-50 border border-blue-200 text-sm text-blue-700">
          ⏱ We&apos;ll contact you within 24 hours to schedule a free property inspection.
        </div>
      </div>
    )
  }

  if (step === "tenants") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
            <UserCheck className="w-5 h-5 text-green-600" />
          </div>
          <span className="font-semibold text-foreground">Tenant Applicants</span>
        </div>

        <div className="space-y-4">
          {[
            { name: "Sarah J.", score: "Excellent", income: "Verified", status: "Approved", color: "text-green-600 bg-green-50" },
            { name: "Michael T.", score: "Good", income: "Verified", status: "Review", color: "text-amber-600 bg-amber-50" },
            { name: "Emily R.", score: "Excellent", income: "Verified", status: "Approved", color: "text-green-600 bg-green-50" },
          ].map((tenant, i) => (
            <motion.div
              key={tenant.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 bg-muted/40 rounded-xl"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                {tenant.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-foreground text-sm">{tenant.name}</div>
                <div className="text-xs text-muted-foreground">Credit: {tenant.score} · Income: {tenant.income}</div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tenant.color}`}>{tenant.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (step === "apply") {
    return (
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <FileCheck className="w-5 h-5 text-blue-600" />
          </div>
          <span className="font-semibold text-foreground">Your Application</span>
        </div>

        <div className="space-y-4">
          {["Identity Verification", "Rental History", "Income & Employment", "References"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.3 }}
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <motion.polyline points="20 6 9 17 4 12" />
                </motion.svg>
              </div>
              <span className="flex-1 text-foreground font-medium text-sm">{item}</span>
              <span className="text-xs text-green-600 font-semibold">Submitted</span>
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
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-blue-600" />
          </div>
          <span className="font-semibold text-foreground">Application Review</span>
        </div>

        <div className="bg-muted/50 rounded-2xl p-5 mb-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
              <User className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="font-semibold text-foreground">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">Professional · 5+ yrs rental history</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Background", value: "Passed" },
              { label: "Income", value: "3× rent" },
              { label: "Credit", value: "Excellent" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-3 bg-card rounded-xl">
                <div className="text-base font-bold text-green-600">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-full py-3 rounded-xl font-semibold text-center text-sm bg-green-600 text-white cursor-pointer"
        >
          Application Approved ✓
        </motion.div>
      </div>
    )
  }

  // manage or movein
  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl ${isOwner ? "bg-primary/10" : "bg-blue-500/10"} flex items-center justify-center`}>
          {isOwner ? <DollarSign className="w-5 h-5 text-primary" /> : <Home className="w-5 h-5 text-blue-600" />}
        </div>
        <span className="font-semibold text-foreground">{isOwner ? "Owner Dashboard" : "Welcome Home"}</span>
      </div>

      {isOwner ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/10 rounded-xl p-4">
              <div className="text-sm text-muted-foreground">Monthly Rent</div>
              <div className="text-2xl font-bold text-foreground">$2,400</div>
              <div className="text-xs text-green-600">Collected ✓</div>
            </div>
            <div className="bg-muted/50 rounded-xl p-4">
              <div className="text-sm text-muted-foreground">Next Payment</div>
              <div className="text-2xl font-bold text-foreground">May 1</div>
              <div className="text-xs text-muted-foreground">Auto-collected</div>
            </div>
          </div>
          <div className="p-4 bg-muted/40 rounded-xl">
            <div className="flex items-center gap-2 text-sm font-medium text-primary mb-2">
              <Key className="w-4 h-4" />
              Login credentials sent to your email
            </div>
            <div className="text-xs text-muted-foreground">Manage listings, collect rent, track maintenance — all in one dashboard.</div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
            <MessageCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-muted-foreground">Maintenance request from <strong className="text-foreground">Sarah J.</strong></span>
            <span className="ml-auto text-xs text-blue-600 font-medium">View</span>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-24 h-24 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-6"
          >
            <Key className="w-12 h-12 text-blue-600" />
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Keys Ready!</h3>
          <p className="text-muted-foreground text-sm mb-4">Lease signed. Rent set up. Portal activated.</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">Rate your experience</p>
        </div>
      )}
    </div>
  )
}
