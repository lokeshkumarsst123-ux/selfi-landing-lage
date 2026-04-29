"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Building, User, Calendar as CalendarIcon, ChevronRight, ChevronLeft, Sparkles, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FormsSection } from "@/components/landing/forms-section"

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Properties", href: "/#works-for-you" },
  { name: "Trust", href: "/#trust" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState<"schedule" | "form">("schedule")
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const pathname = usePathname()

  const isInnerPage = pathname !== '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isModalOpen])

  const useDarkHeader = isScrolled || isMobileMenuOpen || isInnerPage

  const openModal = () => {
    setModalStep("schedule")
    setSelectedDate(null)
    setSelectedTime(null)
    setIsModalOpen(true)
  }
  const closeModal = () => setIsModalOpen(false)

  // Generate simple calendar days (just mock next 14 days)
  const generateDays = () => {
    const days = []
    const today = new Date()
    for (let i = 0; i < 14; i++) {
      const d = new Date(today)
      d.setDate(today.getDate() + i)
      days.push({
        date: d.getDate(),
        dayStr: d.toLocaleDateString("en-US", { weekday: "short" }),
        fullDate: d,
        id: i
      })
    }
    return days
  }
  const calendarDays = generateDays()
  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM"
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md py-2 md:py-2 lg:py-2 ${useDarkHeader
          ? ""
          : "bg-transparent py-2 md:py-2 lg:py-2"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="from-primary to-accent flex items-center justify-center transition-shadow">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={300}
                  height={300}
                  className={`w-auto object-contain transition-all duration-500 origin-left ${useDarkHeader ? "h-10 md:h-14 lg:h-16" : "h-14 md:h-20 lg:h-24"}`}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 transition-colors font-bold group text-slate-600 hover:text-slate-900"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={openModal}
                className="font-black transition-all group bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-blue-900/10 gap-2 rounded-xl h-11 px-6"
              >
                <CalendarIcon className="w-4 h-4" />
                Book a Schedule
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg transition-colors text-slate-900 hover:bg-slate-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden pt-[56px] sm:pt-[64px]"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative bg-[#020617] border-b border-white/10 shadow-2xl"
            >
              <div className="px-6 py-8 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div key={link.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    <Link href={link.href} className="block py-4 text-lg font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-6">
                  <Button onClick={() => { setIsMobileMenuOpen(false); openModal() }} className="w-full h-12 font-medium bg-white text-slate-900 hover:bg-slate-100 gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Book a Schedule
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Modal ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={closeModal}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="relative pt-8 md:pt-12">
                <AnimatePresence mode="wait">
                  {modalStep === "schedule" ? (
                    <motion.div
                      key="schedule"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="px-4 pb-12 max-w-4xl mx-auto"
                    >
                      <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-[#07254B]/5 border-[#07254B]/20 text-[#07254B] text-sm font-bold tracking-wide mb-6 shadow-sm">
                          <CalendarIcon className="w-4 h-4" />
                          Select Date & Time
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
                          Schedule Your <span className="text-[#07254B]">Consultation</span>
                        </h2>
                        <p className="text-slate-500 text-base">Pick a time that works best for you, and we'll handle the rest.</p>
                      </div>

                      <div className="bg-slate-50 rounded-[2rem] border border-slate-200 p-5 md:p-8 shadow-inner">
                        {/* Date Selector */}
                        <div className="mb-8">
                          <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                            <CalendarIcon className="w-5 h-5 text-[#07254B]" />
                            1. Select a Date
                          </h3>
                          <div className="flex overflow-x-auto pt-2 pb-4 gap-3 snap-x no-scrollbar">
                            {calendarDays.map((day) => {
                              const isSelected = selectedDate === day.id
                              return (
                                <button
                                  key={day.id}
                                  onClick={() => setSelectedDate(day.id)}
                                  className={`snap-start flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border ${isSelected
                                    ? "bg-[#07254B] border-[#07254B] text-white shadow-lg shadow-[#07254B]/30 scale-105"
                                    : "bg-white border-slate-200 text-slate-600 hover:bg-[#07254B]/5 hover:border-[#07254B]/30"
                                    }`}
                                >
                                  <span className="text-[11px] font-semibold mb-1 uppercase tracking-wide opacity-80">{day.dayStr}</span>
                                  <span className="text-xl font-black">{day.date}</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Time Selector */}
                        <div className={`transition-all duration-500 ${selectedDate !== null ? "opacity-100" : "opacity-40 pointer-events-none"}`}>
                          <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-[#07254B]" />
                            2. Choose a Time Slot
                          </h3>
                          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                            {timeSlots.map((time, idx) => {
                              // Mock availability
                              const isAvailable = idx !== 2; // Make 1:00 PM unavailable
                              const isSelected = selectedTime === time
                              return (
                                <button
                                  key={time}
                                  disabled={!isAvailable}
                                  onClick={() => setSelectedTime(time)}
                                  className={`relative py-2.5 rounded-xl text-[13px] font-semibold border transition-all duration-300 ${!isAvailable
                                    ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-60"
                                    : isSelected
                                      ? "bg-[#07254B] border-[#07254B] text-white shadow-md shadow-[#07254B]/30 scale-105"
                                      : "bg-white border-slate-200 text-slate-600 hover:bg-[#07254B]/5 hover:border-[#07254B]/30"
                                    }`}
                                >
                                  {time}
                                  {!isAvailable && <span className="absolute -top-2 -right-2 bg-slate-200 text-slate-500 text-[10px] px-2 py-0.5 rounded-full border border-slate-300">Full</span>}
                                </button>
                              )
                            })}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className={`mt-12 flex justify-end transition-opacity duration-500 ${selectedDate !== null && selectedTime !== null ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                          <Button
                            size="lg"
                            onClick={() => setModalStep("form")}
                            className="bg-[#07254B] hover:bg-[#07254B]/90 text-white rounded-xl px-8 h-12 text-base font-bold group shadow-[0_0_20px_rgba(7,37,75,0.3)]"
                          >
                            Continue to Details
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="px-6 pb-6 max-w-4xl mx-auto flex items-center justify-between">
                        <button
                          onClick={() => setModalStep("schedule")}
                          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-semibold"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back to Schedule
                        </button>

                        {/* Show selected slot visually */}
                        {selectedDate !== null && selectedTime && (
                          <div className="flex items-center gap-2 text-xs font-semibold bg-[#07254B]/5 border border-[#07254B]/20 text-[#07254B] px-3 py-1.5 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {calendarDays.find(d => d.id === selectedDate)?.dayStr} {calendarDays.find(d => d.id === selectedDate)?.date}, {selectedTime}
                          </div>
                        )}
                      </div>
                      <FormsSection isModal />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
