"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building, User, Upload, MapPin, DollarSign, FileText, ArrowRight, ArrowLeft, CheckCircle, Mail, Phone, Home, CreditCard, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormType = "owner" | "tenant"
type OwnerStep = 1 | 2 | 3
type TenantStep = 1 | 2 | 3

export function FormsSection({ isModal = false }: { isModal?: boolean }) {
  const [activeForm, setActiveForm] = useState<FormType>("owner")
  const [ownerStep, setOwnerStep] = useState<OwnerStep>(1)
  const [tenantStep, setTenantStep] = useState<TenantStep>(1)
  const [ownerFormSubmitted, setOwnerFormSubmitted] = useState(false)
  const [tenantFormSubmitted, setTenantFormSubmitted] = useState(false)

  const handleOwnerSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (ownerStep < 3) {
      setOwnerStep((s) => (s + 1) as OwnerStep)
    } else {
      setOwnerFormSubmitted(true)
    }
  }

  const handleTenantSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (tenantStep < 3) {
      setTenantStep((s) => (s + 1) as TenantStep)
    } else {
      setTenantFormSubmitted(true)
    }
  }

  const resetOwnerForm = () => {
    setOwnerFormSubmitted(false)
    setOwnerStep(1)
  }

  const resetTenantForm = () => {
    setTenantFormSubmitted(false)
    setTenantStep(1)
  }

  const content = (
    <div className={`relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 ${isModal ? "py-0" : ""}`}>
      <motion.div
        initial={isModal ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileInView={isModal ? undefined : { opacity: 1, y: 0 }}
        animate={isModal ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        className="text-center mb-10 md:mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-wide mb-6 shadow-sm ${isModal ? "bg-blue-500/10 border-blue-500/20 text-blue-400" : "bg-white dark:bg-primary/10 border-slate-200 dark:border-primary/20 text-blue-700 dark:text-blue-400"}`}>
          <Sparkles className="w-4 h-4" />
          Get Started in Minutes
        </div>
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-balance mb-4 ${isModal ? "text-white" : "text-slate-900 dark:text-white"}`}>
          Your Journey
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent px-2"> Starts Here</span>
        </h2>
        <p className={`text-xl max-w-2xl mx-auto text-pretty font-medium leading-relaxed ${isModal ? "text-slate-300" : "text-slate-600 dark:text-slate-400"}`}>
          Complete our simple multi-step form and we&apos;ll handle the rest.
        </p>
      </motion.div>

      <motion.div
        initial={isModal ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        whileInView={isModal ? undefined : { opacity: 1, y: 0 }}
        animate={isModal ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className={`bg-white rounded-[2.5rem] border border-white shadow-2xl overflow-hidden relative ${isModal ? "mb-16 ring-1 ring-white/20" : "dark:bg-card/40 dark:backdrop-blur-md dark:border-white/10"}`}>
          {/* Form Type Selector */}
          <div className="flex justify-center p-8 border-b border-slate-100 bg-slate-50/50">
            <div className="inline-flex bg-white rounded-full p-2 border border-slate-200 shadow-sm w-full max-w-md">
              <button
                onClick={() => setActiveForm("owner")}
                className={`flex-1 relative py-4 px-6 flex items-center justify-center gap-3 font-bold text-sm rounded-full transition-all duration-300 ${activeForm === "owner"
                  ? "bg-slate-900 text-white shadow-xl scale-[1.02]"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
              >
                <Building className="w-4 h-4" />
                Property Owner
              </button>
              <button
                onClick={() => setActiveForm("tenant")}
                className={`flex-1 relative py-4 px-6 flex items-center justify-center gap-3 font-bold text-sm rounded-full transition-all duration-300 ${activeForm === "tenant"
                  ? "bg-slate-900 text-white shadow-xl scale-[1.02]"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
              >
                <User className="w-4 h-4" />
                Looking to Rent
              </button>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-16">
            <AnimatePresence mode="wait">
              {activeForm === "owner" ? (
                <motion.div
                  key="owner-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  {ownerFormSubmitted ? (
                    <SuccessMessage
                      title="Property Submitted! 🎉"
                      message="Our team will review your details within 24 hours. We'll call you to schedule an offline property inspection. Once verified, your owner login credentials will be created."
                      onReset={resetOwnerForm}
                      color="primary"
                    />
                  ) : (
                    <>
                      {/* Progress Bar */}
                      <div className="mb-10">
                        <div className="flex justify-between mb-3 text-center sm:text-left">
                          {["Contact Info", "Property Details", "Service Plan"].map((label, i) => (
                            <div key={label} className={`text-[10px] sm:text-sm font-medium ${i + 1 <= ownerStep ? "text-primary" : "text-muted-foreground"}`}>
                              {label}
                            </div>
                          ))}
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${(ownerStep / 3) * 100}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      <form onSubmit={handleOwnerSubmit}>
                        <AnimatePresence mode="wait">
                          {ownerStep === 1 && (
                            <StepContent key="owner-step-1">
                              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                              <div className="grid md:grid-cols-2 gap-6">
                                <FormField icon={User} label="Full Name" id="owner-name" placeholder="John Smith" required />
                                <FormField icon={Mail} label="Email Address" id="owner-email" type="email" placeholder="john@example.com" required />
                                <FormField icon={Phone} label="Phone Number" id="owner-phone" type="tel" placeholder="+61 400 000 000" required />
                                <FormField icon={MapPin} label="Your Location" id="owner-location" placeholder="Sydney, NSW" required />
                              </div>
                            </StepContent>
                          )}

                          {ownerStep === 2 && (
                            <StepContent key="owner-step-2">
                              <h3 className="text-2xl font-bold text-foreground mb-6">Property Details</h3>
                              <div className="space-y-6">
                                <FormField icon={Home} label="Property Address" id="property-address" placeholder="123 Main Street, Sydney NSW 2000" required />
                                <div className="grid md:grid-cols-2 gap-6">
                                  <FormField icon={DollarSign} label="Weekly Rent" id="expected-rent" type="number" placeholder="550" />
                                  <div className="space-y-2">
                                    <Label className="text-foreground font-medium">Property Type</Label>
                                    <div className="grid grid-cols-2 gap-3">
                                      {["House", "Apartment", "Townhouse", "Unit"].map((type) => (
                                        <label key={type} className="relative flex items-center justify-center p-3 border border-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                                          <input type="radio" name="property-type" value={type} className="sr-only" defaultChecked={type === "House"} />
                                          <span className="text-sm font-medium text-foreground">{type}</span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label className="text-foreground font-medium">Property Images</Label>
                                  <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center hover:border-primary/50 transition-colors cursor-pointer bg-muted/20">
                                    <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                                    <p className="text-muted-foreground">
                                      Drag & drop images, or <span className="text-primary font-medium">browse</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-2">JPG, PNG up to 10MB each</p>
                                  </div>
                                </div>
                              </div>
                            </StepContent>
                          )}

                          {ownerStep === 3 && (
                            <StepContent key="owner-step-3">
                              <h3 className="text-2xl font-bold text-foreground mb-6">Choose Your Plan</h3>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                  { name: "Basic", price: "$0", desc: "Self-service tools", features: ["Listing creation", "Basic analytics", "Email support"] },
                                  { name: "Standard", price: "$49", desc: "Smart automation tools", features: ["Everything in Basic", "Smart rent pricing", "Tenant screening", "Priority support"], popular: true },
                                  { name: "Premium", price: "$99", desc: "Full-service management", features: ["Everything in Standard", "Dedicated manager", "Maintenance coordination", "Legal compliance"] },
                                ].map((plan) => (
                                  <label
                                    key={plan.name}
                                    className={`relative flex flex-col p-6 border rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg ${plan.popular
                                      ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                                      : "border-border hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                                      }`}
                                  >
                                    <input type="radio" name="service-plan" value={plan.name} className="sr-only" defaultChecked={plan.popular} />
                                    {plan.popular && (
                                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                                        Most Popular
                                      </div>
                                    )}
                                    <div className="text-3xl font-bold text-foreground">{plan.price}<span className="text-base font-normal text-muted-foreground">/mo</span></div>
                                    <div className="text-lg font-semibold text-foreground mt-1">{plan.name}</div>
                                    <div className="text-sm text-muted-foreground mb-4">{plan.desc}</div>
                                    <ul className="space-y-2 mt-auto">
                                      {plan.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                          {f}
                                        </li>
                                      ))}
                                    </ul>
                                  </label>
                                ))}
                              </div>
                            </StepContent>
                          )}
                        </AnimatePresence>

                        <div className="flex gap-4 mt-8 md:mt-10">
                          {ownerStep > 1 && (
                            <Button type="button" variant="outline" size="lg" onClick={() => setOwnerStep((s) => (s - 1) as OwnerStep)} className="px-8">
                              <ArrowLeft className="w-4 h-4 mr-2" />
                              Back
                            </Button>
                          )}
                          <Button type="submit" size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group">
                            {ownerStep === 3 ? "Submit Property" : "Continue"}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="tenant-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {tenantFormSubmitted ? (
                    <SuccessMessage
                      title="Application Submitted! 🎉"
                      message="Our team will review your application, run background checks, and be in touch within 48 hours. After approval, your tenant portal login credentials will be sent to your email."
                      onReset={resetTenantForm}
                      color="accent"
                    />
                  ) : (
                    <>
                      {/* Progress Bar */}
                      <div className="mb-10">
                        <div className="flex justify-between mb-3 text-center sm:text-left">
                          {["Your Info", "Preferences", "Documents"].map((label, i) => (
                            <div key={label} className={`text-[10px] sm:text-sm font-medium ${i + 1 <= tenantStep ? "text-accent" : "text-muted-foreground"}`}>
                              {label}
                            </div>
                          ))}
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${(tenantStep / 3) * 100}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      <form onSubmit={handleTenantSubmit}>
                        <AnimatePresence mode="wait">
                          {tenantStep === 1 && (
                            <StepContent key="tenant-step-1">
                              <h3 className="text-2xl font-bold text-foreground mb-6">Your Information</h3>
                              <div className="grid md:grid-cols-2 gap-6">
                                <FormField icon={User} label="Full Name" id="tenant-name" placeholder="Jane Doe" required />
                                <FormField icon={Mail} label="Email Address" id="tenant-email" type="email" placeholder="jane@example.com" required />
                                <FormField icon={Phone} label="Phone Number" id="tenant-phone" type="tel" placeholder="+61 400 000 000" required />
                                <FormField icon={CreditCard} label="Employment Status" id="tenant-employment" placeholder="Full-time employed" required />
                                <div className="space-y-2 md:col-span-2">
                                  <label htmlFor="tenant-state" className="text-foreground font-medium text-sm">Preferred State / Territory</label>
                                  <select id="tenant-state" className="w-full h-12 px-4 border border-border rounded-xl bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/20 focus:outline-none">
                                    <option value="">Select a state...</option>
                                    {["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"].map((s) => <option key={s} value={s}>{s}</option>)}
                                  </select>
                                </div>
                              </div>
                            </StepContent>
                          )}

                          {tenantStep === 2 && (
                            <StepContent key="tenant-step-2">
                              <h3 className="text-2xl font-bold text-foreground mb-6">Rental Preferences</h3>
                              <div className="space-y-6">
                                <FormField icon={MapPin} label="Preferred Location" id="preferred-location" placeholder="e.g., Inner West Sydney, CBD Melbourne" required />
                                <div className="grid md:grid-cols-2 gap-6">
                                  <FormField icon={DollarSign} label="Weekly Budget" id="budget" type="number" placeholder="600" />
                                  <div className="space-y-2">
                                    <Label className="text-foreground font-medium">Move-in Timeline</Label>
                                    <div className="grid grid-cols-2 gap-3">
                                      {["ASAP", "1-2 weeks", "1 month", "Flexible"].map((time) => (
                                        <label key={time} className="relative flex items-center justify-center p-3 border border-border rounded-xl cursor-pointer hover:border-accent/50 transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                                          <input type="radio" name="move-timeline" value={time} className="sr-only" defaultChecked={time === "1-2 weeks"} />
                                          <span className="text-sm font-medium text-foreground">{time}</span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <Label className="text-foreground font-medium">Property Preferences</Label>
                                  <div className="flex flex-wrap gap-3">
                                    {["Pet Friendly", "Parking", "Furnished", "Balcony", "Air Con", "Gym Access"].map((pref) => (
                                      <label key={pref} className="relative flex items-center gap-2 px-4 py-2 border border-border rounded-full cursor-pointer hover:border-accent/50 transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/10">
                                        <input type="checkbox" name="preferences" value={pref} className="sr-only" />
                                        <span className="text-sm font-medium text-foreground">{pref}</span>
                                      </label>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </StepContent>
                          )}

                          {tenantStep === 3 && (
                            <StepContent key="tenant-step-3">
                              <h3 className="text-2xl font-bold text-foreground mb-6">Supporting Documents</h3>
                              <div className="space-y-6">
                                <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center hover:border-accent/50 transition-colors cursor-pointer bg-muted/20">
                                  <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                                  <p className="text-muted-foreground">
                                    Upload ID, payslips, and references
                                  </p>
                                  <p className="text-sm text-accent font-medium mt-2">Browse files</p>
                                  <p className="text-xs text-muted-foreground mt-2">PDF, JPG, PNG up to 10MB each</p>
                                </div>
                                <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <p className="font-semibold text-foreground">Application Fee</p>
                                      <p className="text-sm text-muted-foreground">One-time processing fee</p>
                                    </div>
                                    <div className="text-3xl font-bold text-foreground">$25</div>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-3">Covers background check, credit verification, and matching</p>
                                </div>
                              </div>
                            </StepContent>
                          )}
                        </AnimatePresence>

                        <div className="flex gap-4 mt-8 md:mt-10">
                          {tenantStep > 1 && (
                            <Button type="button" variant="outline" size="lg" onClick={() => setTenantStep((s) => (s - 1) as TenantStep)} className="px-8">
                              <ArrowLeft className="w-4 h-4 mr-2" />
                              Back
                            </Button>
                          )}
                          <Button type="submit" size="lg" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground group">
                            {tenantStep === 3 ? "Submit Application" : "Continue"}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </form>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )

  if (isModal) return content

  return (
    <section id="forms" className="py-12 md:py-24 lg:py-40 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
      {/* Dynamic Background Blur Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[65%] rounded-full bg-blue-200/40 dark:bg-blue-900/20 blur-[120px] animate-pulse [animation-duration:9s]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[55%] h-[60%] rounded-full bg-blue-200/40 dark:bg-blue-900/20 blur-[120px] animate-pulse [animation-duration:11s] [animation-delay:1s]" />
        <div className="absolute top-[30%] left-[30%] w-[35%] h-[40%] rounded-full bg-blue-100/30 dark:bg-blue-900/20 blur-[100px] animate-pulse [animation-duration:13s] [animation-delay:3s]" />
      </div>
      {content}
    </section>
  )
}

function StepContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

interface FormFieldProps {
  icon: React.ElementType
  label: string
  id: string
  type?: string
  placeholder?: string
  required?: boolean
}

function FormField({ icon: Icon, label, id, type = "text", placeholder, required }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-slate-700 dark:text-foreground font-semibold text-sm">{label}</Label>
      <div className="relative group">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          className="pl-12 h-14 bg-slate-50 dark:bg-muted/30 border-slate-200 dark:border-border rounded-2xl focus:bg-white dark:focus:bg-card focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm text-sm transition-all"
        />
      </div>
    </div>
  )
}

function SuccessMessage({
  title,
  message,
  onReset,
  color
}: {
  title: string
  message: string
  onReset: () => void
  color: "primary" | "accent"
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className={`w-24 h-24 mx-auto rounded-full ${color === "primary" ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center mb-8`}
      >
        <CheckCircle className={`w-12 h-12 ${color === "primary" ? "text-primary" : "text-accent"}`} />
      </motion.div>
      <h3 className="text-3xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">{message}</p>
      <Button variant="outline" onClick={onReset} size="lg" className="border-border shadow-sm">
        Submit Another
      </Button>
    </motion.div>
  )
}
