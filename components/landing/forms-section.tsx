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

export function FormsSection({ isModal = false, initialForm = "owner", hideRoleSelector = false, appointmentDate, appointmentTime }: { isModal?: boolean, initialForm?: "owner" | "tenant", hideRoleSelector?: boolean, appointmentDate?: string, appointmentTime?: string }) {
  const [activeForm, setActiveForm] = useState<FormType>(initialForm)
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
        initial={isModal ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        whileInView={isModal ? undefined : { opacity: 1, y: 0 }}
        animate={isModal ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className={`bg-white rounded-[2.5rem] border border-white shadow-2xl overflow-hidden relative ${isModal ? "mb-8 ring-1 ring-white/20" : "dark:bg-card/40 dark:backdrop-blur-md dark:border-white/10"}`}>
          {/* Form Type Selector */}
          {!hideRoleSelector && (
            <div className={`flex justify-center border-b border-slate-100 bg-gradient-to-b from-slate-50/80 to-transparent ${isModal ? "p-4 sm:p-6" : "p-8 md:p-10"}`}>
              <div className="inline-flex relative bg-slate-100/50 backdrop-blur-xl rounded-full p-1.5 border border-slate-200/60 shadow-inner w-full max-w-md mx-auto">
                {/* Sliding Indicator */}
                <motion.div
                  className="absolute inset-y-1.5 w-[calc(50%-6px)] bg-[#07254B] rounded-full shadow-[0_4px_12px_rgba(7,37,75,0.3)]"
                  initial={false}
                  animate={{
                    left: activeForm === "owner" ? "6px" : "calc(50% + 0px)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
                <button
                  onClick={() => setActiveForm("owner")}
                  className={`flex-1 relative z-10 py-3.5 px-6 flex items-center justify-center gap-2.5 font-bold text-sm rounded-full transition-colors duration-300 ${activeForm === "owner" ? "text-white" : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                  <Building className={`w-4 h-4 ${activeForm === "owner" ? "opacity-100" : "opacity-70"}`} />
                  Property Owner
                </button>
                <button
                  onClick={() => setActiveForm("tenant")}
                  className={`flex-1 relative z-10 py-3.5 px-6 flex items-center justify-center gap-2.5 font-bold text-sm rounded-full transition-colors duration-300 ${activeForm === "tenant" ? "text-white" : "text-slate-500 hover:text-slate-800"
                    }`}
                >
                  <User className={`w-4 h-4 ${activeForm === "tenant" ? "opacity-100" : "opacity-70"}`} />
                  Tenant
                </button>
              </div>
            </div>
          )}

          <div className={isModal ? "p-6 sm:p-8" : "p-8 md:p-12 lg:p-16"}>
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
                      title="Booking Confirmed! 🎉"
                      message="Your appointment with the agent is successfully scheduled. You will receive a confirmation call or notification shortly with further details. Our team will assist you throughout the process to ensure a smooth experience."
                      appointmentDate={appointmentDate}
                      appointmentTime={appointmentTime}
                      onReset={resetOwnerForm}
                      color="primary"
                    />
                  ) : (
                    <>
                      {/* Progress Bar */}
                      <div className="mb-10">
                        <div className="flex justify-between mb-3 text-center sm:text-left">
                          {["Contact Info", "Property Details", "Agent Fees"].map((label, i) => (
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
                              <h3 className="text-2xl font-bold text-foreground mb-6">Agent Consultation Fee</h3>

                              {/* Agent Consultation Fee */}
                              <div className="rounded-2xl border-2 border-[#07254B]/20 bg-gradient-to-br from-[#07254B]/5 to-white overflow-hidden mb-5">
                                <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#07254B]/10">
                                  <div>

                                    <p className="font-bold text-foreground text-lg">Agent Consultation Fee</p>
                                    <p className="text-sm text-muted-foreground">Standard consultation charge</p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-4xl font-black text-[#07254B]">$50</div>
                                    <div className="text-xs text-muted-foreground font-medium">AUD</div>
                                  </div>
                                </div>
                                <div className="px-6 py-4">
                                  <p className="text-sm text-muted-foreground">Covers initial consultation, property assessment, rental strategy discussion, and onboarding guidance.</p>
                                </div>
                              </div>

                              {/* Management Fee */}

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
                          <Button type="submit" size="lg" className="flex-1 bg-[#07254B] hover:bg-[#07254B]/90 text-white group">
                            {ownerStep === 3 ? "Book Agent & Submit" : "Next Step"}
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
                      title="Booking Confirmed! 🎉"
                      message="Your tenant consultation with the agent is successfully scheduled. Our agent will guide you through property matches, application review, and move-in support. You'll receive a confirmation shortly."
                      appointmentDate={appointmentDate}
                      appointmentTime={appointmentTime}
                      onReset={resetTenantForm}
                      color="primary"
                    />
                  ) : (
                    <>
                      {/* Progress Bar */}
                      <div className="mb-10">
                        <div className="flex justify-between mb-3 text-center sm:text-left">
                          {["Your Info", "Preferences", "Documents"].map((label, i) => (
                            <div key={label} className={`text-[10px] sm:text-sm font-medium ${i + 1 <= tenantStep ? "text-[#07254B]" : "text-muted-foreground"}`}>
                              {label}
                            </div>
                          ))}
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#07254B] to-[#07254B]/80 rounded-full"
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
                                        <label key={time} className="relative flex items-center justify-center p-3 border border-border rounded-xl cursor-pointer hover:border-[#07254B]/50 transition-colors has-[:checked]:border-[#07254B] has-[:checked]:bg-[#07254B]/5">
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
                                      <label key={pref} className="relative flex items-center gap-2 px-4 py-2 border border-border rounded-full cursor-pointer hover:border-[#07254B]/50 transition-colors has-[:checked]:border-[#07254B] has-[:checked]:bg-[#07254B]/10">
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
                                <div className="border-2 border-dashed border-border rounded-2xl p-10 text-center hover:border-[#07254B]/50 transition-colors cursor-pointer bg-muted/20">
                                  <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                                  <p className="text-muted-foreground">
                                    Upload Government Identity Proof
                                  </p>
                                  <p className="text-sm text-[#07254B] font-medium mt-2">Browse files</p>
                                  <p className="text-xs text-muted-foreground mt-2">PDF, JPG, PNG </p>
                                </div>
                                {/* Agent Consultation Fee - Tenant */}
                                <div className="rounded-2xl border-2 border-[#07254B]/20 bg-gradient-to-br from-[#07254B]/5 to-white overflow-hidden">
                                  <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#07254B]/10">
                                    <div>
                                      <p className="text-xs font-bold uppercase tracking-widest text-[#07254B]/70 mb-1">Agent Consultation Fee</p>
                                      <p className="font-bold text-foreground text-lg">Agent Consultation Fee</p>
                                      <p className="text-sm text-muted-foreground">Standard consultation charge</p>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-4xl font-black text-[#07254B]">$35</div>
                                      <div className="text-xs text-muted-foreground font-medium">AUD</div>
                                    </div>
                                  </div>
                                  <div className="px-6 py-4">
                                    <p className="text-sm text-muted-foreground">Covers tenant consultation, property matching, rental application guidance, and agent support during the move-in process.</p>
                                  </div>
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
                          <Button type="submit" size="lg" className="flex-1 bg-[#07254B] hover:bg-[#07254B]/90 text-white group">
                            {tenantStep === 3 ? "Book Agent & Apply" : "Next Step"}
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
  color,
  appointmentDate,
  appointmentTime
}: {
  title: string
  message: string
  onReset: () => void
  color: "primary" | "accent"
  appointmentDate?: string
  appointmentTime?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-10"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className={`w-20 h-20 mx-auto rounded-full bg-[#07254B]/10 flex items-center justify-center mb-6`}
      >
        <CheckCircle className={`w-10 h-10 text-[#07254B]`} />
      </motion.div>
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>

      {/* Appointment Date & Time chip */}
      {appointmentDate && appointmentTime && (
        <div className="inline-flex items-center gap-2 bg-[#07254B]/5 border border-[#07254B]/20 text-[#07254B] px-4 py-2 rounded-full text-sm font-semibold mb-5">
          <CheckCircle className="w-4 h-4" />
          {appointmentDate} &nbsp;·&nbsp; {appointmentTime}
        </div>
      )}

      <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">{message}</p>
      <Button onClick={onReset} size="lg" className="bg-[#07254B] hover:bg-[#07254B]/90 text-white shadow-md font-medium px-8">
        Book Another
      </Button>
    </motion.div>
  )
}

