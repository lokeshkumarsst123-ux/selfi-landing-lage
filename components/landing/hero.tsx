"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, User, Star, Shield, BadgeDollarSign, Play, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const [hoveredCard, setHoveredCard] = useState<"owner" | "tenant" | null>(null)

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-20 bg-[#f8fafc]">
      {/* Premium Accent Glows (Light Mode) */}
      <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-blue-400/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/20 blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.03),transparent_70%)]" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(226,232,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* ── Left Column: Text & CTAs ── */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-700 text-xs font-bold tracking-wide mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Trusted by 2,500+ Property Owners
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-6"
            >
              Modern Property
              <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-[#07254B] to-[#17539c] bg-clip-text text-transparent px-1">
                Management
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 font-medium"
            >
              List your property, find great tenants, and manage your assets with Australia&apos;s most <strong className="text-slate-900 font-bold underline decoration-blue-500/30">trusted all-in-one platform.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link href="#forms">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-[#07254B] text-white hover:bg-[#07254B]/90 px-8 h-14 text-base font-bold group shadow-[0_0_20px_rgba(7,37,75,0.3)] hover:shadow-[#07254B]/50 rounded-xl transition-all">
                    Book an Agent
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/contact-us">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="border-slate-200 bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900 px-8 h-14 text-base font-bold rounded-xl shadow-sm">
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 text-xs font-bold uppercase tracking-wider"
            >
              {[
                { icon: Shield, text: "Verified Tenants" },
                { icon: CheckCircle, text: "Automated Management" },
                { icon: BadgeDollarSign, text: "Lower Costs" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-[#07254B]" strokeWidth={2.5} />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-3 gap-4"
            >
              {[
                { value: "Save 60%", label: "Management Fees" },
                { value: "5,000+", label: "Active Listings" },
                { value: "98%", label: "Tenant Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left group">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#07254B] transition-colors duration-300">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 mt-1 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: 3-App Visual Composition ── */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">

            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 via-indigo-50/50 to-transparent rounded-[3rem] -rotate-3 scale-95 blur-xl pointer-events-none z-0" />

            <div className="relative w-full flex items-center justify-center">

              {/* Left Phone: Tenant App */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="absolute left-[2%] sm:left-[8%] lg:-left-[5%] xl:left-[5%] z-10 w-36 sm:w-44 lg:w-48 -rotate-6 scale-90 opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <FloatingElement delay={0.2} duration={5}>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-xl whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-700">Tenant App</span>
                  </div>
                  <Image
                    src="/hero_img2.svg"
                    alt="Tenant App"
                    width={400}
                    height={800}
                    className="w-full h-auto drop-shadow-2xl border-[8px] border-slate-800 rounded-[2rem] bg-slate-900"
                  />
                </FloatingElement>
              </motion.div>

              {/* Right Phone: Tradesperson App */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="absolute right-[2%] sm:right-[8%] lg:-right-[5%] xl:right-[5%] z-10 w-36 sm:w-44 lg:w-48 rotate-6 scale-90 opacity-70 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <FloatingElement delay={0.5} duration={4.5}>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-xl whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-700">Tradesperson App</span>
                  </div>
                  <Image
                    src="/hero_img3.svg"
                    alt="Tradesperson App"
                    width={400}
                    height={800}
                    className="w-full h-auto drop-shadow-2xl border-[8px] border-slate-800 rounded-[2rem] bg-slate-900"
                  />
                </FloatingElement>
              </motion.div>

              {/* Center Phone: Owner App */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative z-30 w-48 sm:w-56 lg:w-64 transition-transform duration-500 cursor-pointer"
              >
                <FloatingElement delay={0} duration={6}>
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[#07254B] px-5 py-2 rounded-full shadow-2xl whitespace-nowrap">
                    <span className="text-sm font-bold text-white tracking-wide">Owner App</span>
                  </div>
                  <Image
                    src="/hero_img1.svg"
                    alt="Owner App"
                    width={400}
                    height={800}
                    className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.3)] border-[10px] border-slate-900 rounded-[2.5rem] bg-slate-900"
                  />
                </FloatingElement>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}


interface RoleCardProps {
  type: "owner" | "tenant"
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  ctaText: string
}

function RoleCard({
  type,
  isHovered,
  onHover,
  onLeave,
  icon: Icon,
  title,
  description,
  features,
  ctaText,
}: RoleCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    onLeave()
  }

  const isPrimary = type === "owner"
  const gradientFrom = isPrimary ? "from-blue-500/30" : "from-indigo-400/30"
  const gradientTo = isPrimary ? "to-blue-500/5" : "to-indigo-400/5"
  const accentColor = isPrimary ? "text-blue-400" : "text-indigo-400"
  const accentBg = isPrimary ? "bg-blue-600" : "bg-indigo-500"
  const iconBg = isPrimary ? "bg-blue-500/20" : "bg-indigo-400/20"

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1000,
      }}
      className="group cursor-pointer"
    >
      <div className={`relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border p-8 overflow-hidden transition-all duration-500 ${isHovered ? "shadow-2xl border-white/20 bg-white/10" : "shadow-lg border-white/10"
        }`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-50`} />

        {/* Glow on hover */}
        <div className={`absolute -inset-1 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-8 h-8 ${accentColor}`} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-300 mb-6">{description}</p>

          <ul className="space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <div className={`w-5 h-5 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle className={`w-3 h-3 ${accentColor}`} />
                </div>
                <span className="text-slate-200">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className={`w-full group/btn ${accentBg} hover:opacity-90 text-white border-0`}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

function FloatingElement({ children, className, delay = 0, duration = 4 }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -15, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

