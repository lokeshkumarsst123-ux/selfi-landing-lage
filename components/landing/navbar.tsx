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
  const [selectedRole, setSelectedRole] = useState<"owner" | "tenant">("owner")
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(() => new Date())
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

  // Custom calendar logic
  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        fullDate: new Date(year, month, i),
        id: `${year}-${month}-${i}`
      });
    }
    return days;
  };
  const calendarDays = generateCalendarDays();
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
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
                      <div className="text-center mb-6">
                        <div className="inline-flex relative bg-slate-100/50 backdrop-blur-xl rounded-full p-1.5 border border-slate-200/60 shadow-inner w-full max-w-md mx-auto mb-8">
                          {/* Sliding Indicator */}
                          <motion.div
                            className="absolute inset-y-1.5 w-[calc(50%-6px)] bg-[#07254B] rounded-full shadow-[0_4px_12px_rgba(7,37,75,0.3)]"
                            initial={false}
                            animate={{
                              left: selectedRole === "owner" ? "6px" : "calc(50% + 0px)",
                            }}
                            transition={{ type: "spring", stiffness: 120, damping: 20 }}
                          />
                          <button
                            onClick={() => setSelectedRole("owner")}
                            className={`flex-1 relative z-10 py-3.5 px-6 flex items-center justify-center gap-2.5 font-bold text-sm rounded-full transition-colors duration-300 ${selectedRole === "owner" ? "text-white" : "text-slate-500 hover:text-slate-800"
                              }`}
                          >
                            <Building className={`w-4 h-4 ${selectedRole === "owner" ? "opacity-100" : "opacity-70"}`} />
                            Property Owner
                          </button>
                          <button
                            onClick={() => setSelectedRole("tenant")}
                            className={`flex-1 relative z-10 py-3.5 px-6 flex items-center justify-center gap-2.5 font-bold text-sm rounded-full transition-colors duration-300 ${selectedRole === "tenant" ? "text-white" : "text-slate-500 hover:text-slate-800"
                              }`}
                          >
                            <User className={`w-4 h-4 ${selectedRole === "tenant" ? "opacity-100" : "opacity-70"}`} />
                            Tenant
                          </button>
                        </div>
                      </div>
                      <div className="text-center mb-10">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-blue-50/80 border-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-6 shadow-sm"
                        >
                          <CalendarIcon className="w-4 h-4" />
                          Select Date & Time
                        </motion.div>
                        <motion.h2
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                          className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
                        >
                          Schedule Your <span className="bg-gradient-to-r from-[#07254B] to-[#17539c] bg-clip-text text-transparent">Consultation</span>
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                          className="text-slate-500 text-lg"
                        >
                          Pick a time that works best for you, and we'll handle the rest.
                        </motion.p>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                        className="bg-white rounded-[2rem] border border-slate-100 p-6 md:p-8 shadow-xl shadow-blue-900/5 relative overflow-hidden"
                      >
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#07254B] to-[#17539c]" />
                        
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                          {/* Date Selector */}
                          <div>
                            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#07254B] border border-blue-100 text-sm">1</span>
                              Select a Date
                            </h3>

                            <div className="bg-slate-50/50 rounded-[1.5rem] border border-slate-100 p-5">
                            <div className="flex items-center justify-between mb-6">
                              <h4 className="text-lg font-bold text-slate-900">
                                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                              </h4>
                              <div className="flex gap-2">
                                <button onClick={prevMonth} className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                                  <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button onClick={nextMonth} className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                                  <ChevronRight className="w-5 h-5" />
                                </button>
                              </div>
                            </div>

                            <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center">
                              {weekDays.map(day => (
                                <div key={day} className="text-xs font-bold text-slate-400 uppercase tracking-wider">{day}</div>
                              ))}
                            </div>

                            <div className="grid grid-cols-7 gap-y-2 gap-x-2 mt-4">
                              {calendarDays.map((day, idx) => {
                                if (!day) return <div key={`empty-${idx}`} className="flex justify-center"><div className="w-10 h-10 sm:w-12 sm:h-12" /></div>;

                                const isSelected = selectedDate === day.id;
                                const isPast = day.fullDate < new Date(new Date().setHours(0, 0, 0, 0));

                                return (
                                  <div key={day.id} className="flex justify-center">
                                    <button
                                      disabled={isPast}
                                      onClick={() => setSelectedDate(day.id)}
                                      className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 ${isPast ? "text-slate-300 cursor-not-allowed" :
                                          isSelected
                                            ? "bg-[#07254B] text-white shadow-md shadow-[#07254B]/30 scale-110"
                                            : "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-[#07254B]"
                                        }`}
                                    >
                                      {day.date}
                                    </button>
                                  </div>
                                )
                              })}
                            </div>
                            </div>
                          </div>

                          {/* Time Selector */}
                          <div className={`transition-all duration-500 ${selectedDate !== null ? "opacity-100 translate-y-0" : "opacity-40 pointer-events-none translate-y-4"}`}>
                            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-[#07254B] border border-blue-100 text-sm">2</span>
                              Choose a Time Slot
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {timeSlots.map((time, idx) => {
                                // Mock availability
                                const isAvailable = idx !== 2 && idx !== 5;
                                const isSelected = selectedTime === time
                                return (
                                  <button
                                    key={time}
                                    disabled={!isAvailable}
                                    onClick={() => setSelectedTime(time)}
                                    className={`relative py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 ${!isAvailable
                                      ? "bg-slate-50 border-slate-100 text-slate-300 cursor-not-allowed"
                                      : isSelected
                                        ? "bg-[#07254B] border-[#07254B] text-white shadow-lg shadow-[#07254B]/20 scale-105"
                                        : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                                      }`}
                                  >
                                    {time}
                                    {!isAvailable && <span className="absolute -top-2.5 -right-2.5 bg-slate-100 text-slate-500 text-[10px] px-2 py-0.5 rounded-full border border-slate-200 shadow-sm">Full</span>}
                                  </button>
                                )
                              })}
                            </div>
                          </div>
                          </div>

                        {/* Action Buttons */}
                        <div className={`mt-10 pt-6 border-t border-slate-100 flex justify-end transition-all duration-500 ${selectedDate !== null && selectedTime !== null ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-4"}`}>
                          <Button
                            size="lg"
                            onClick={() => setModalStep("form")}
                            className="w-full sm:w-auto bg-[#07254B] hover:bg-[#07254B]/90 text-white rounded-xl px-10 h-14 text-base font-bold group shadow-lg hover:shadow-xl hover:shadow-[#07254B]/20 hover:-translate-y-0.5 transition-all"
                          >
                            Continue to Details
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </motion.div>
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
                            {calendarDays.find(d => d && d.id === selectedDate)?.fullDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}, {selectedTime}
                          </div>
                        )}
                      </div>
                      <FormsSection isModal initialForm={selectedRole} hideRoleSelector={true} />
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
