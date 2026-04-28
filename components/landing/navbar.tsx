"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, Building, User, Calendar, ChevronRight, ChevronLeft, Sparkles } from "lucide-react"
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

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${useDarkHeader
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-md py-3 md:py-4 lg:py-5"
          : "bg-transparent py-4 md:py-6 lg:py-8"
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
                  className={`w-auto object-contain transition-all duration-500 origin-left invert brightness-0 ${useDarkHeader ? "h-10 md:h-14 lg:h-16" : "h-14 md:h-20 lg:h-24"}`}
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
                <Calendar className="w-4 h-4" />
                Book an Appointment
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
                    <Calendar className="w-4 h-4" />
                    Book an Appointment
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
              className="relative w-full max-w-6xl max-h-[90vh] bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={closeModal}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Forms Section embedded directly */}
              <div className="relative pt-8 md:pt-12">
                <FormsSection isModal />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
