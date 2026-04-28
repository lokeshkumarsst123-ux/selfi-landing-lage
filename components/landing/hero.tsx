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
    <section className="relative min-h-[100vh] flex items-center overflow-x-hidden overflow-y-visible pt-20 md:pt-24 pb-12 md:pb-20 bg-white">
      {/* Light-themed background with soft accents */}
      <div className="absolute inset-0 bg-[#f8fafc]" />

      {/* Premium Accent Glows (Light Mode) */}
      <div className="absolute top-0 left-0 right-0 h-screen overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-blue-400/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-400/5 blur-[120px]" />

        {/* Soft Central Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.03),transparent_70%)]" />
      </div>

      {/* Subtle Grid Pattern (Light) */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(226,232,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32 w-full">
        <div className="text-center max-w-4xl mx-auto relative z-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-bold mb-10 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Trusted by 2,500+ Property Owners Australia-Wide
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-[900] text-slate-900 leading-[1.05] tracking-tight mb-8"
          >
            Modern Property
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Management
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
          >
            List your property, find great tenants, and manage your assets with Australia&apos;s most <strong className="text-slate-900 font-bold underline decoration-blue-500/30">trusted all-in-one platform.</strong>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link href="#forms">
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-10 h-16 text-lg font-black group shadow-xl hover:shadow-blue-900/10 rounded-2xl transition-all">
                Book an Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#pricing">
              <Button variant="outline" size="lg" className="border-slate-200 bg-white text-slate-900 hover:bg-slate-50 px-10 h-16 text-lg font-bold rounded-2xl shadow-sm">
                View Pricing
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-wrap justify-center gap-12 text-slate-500 text-sm font-bold uppercase tracking-wider"
          >
            {[
              { icon: Shield, text: "Verified Tenants" },
              { icon: CheckCircle, text: "Automated Management" },
              { icon: BadgeDollarSign, text: "Lower Management Costs" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-12 border-t border-slate-100 grid grid-cols-3 gap-8 lg:gap-24 max-w-3xl mx-auto"
          >
            {[
              { value: "Save 60%", label: "on Management Fees" },
              { value: "5,000+", label: "Active Listings" },
              { value: "98%", label: "Tenant Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</div>
                <div className="text-[10px] lg:text-xs text-slate-400 mt-2 font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating UI Elements */}
        <div className="hidden lg:block pointer-events-none z-0">
          <FloatingElement
            className="absolute top-[10%] lg:-right-10 xl:-right-32 2xl:-right-40"
            delay={0.7}
            duration={4}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 p-5 w-60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600 fill-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">New Review</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Just now</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">&ldquo;Found a great tenant in Sydney in just 3 days!&rdquo;</p>
            </div>
          </FloatingElement>

          <FloatingElement
            className="absolute top-[40%] lg:-left-10 xl:-left-32 2xl:-left-40"
            delay={0.9}
            duration={5}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 p-5 w-56">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-bold text-slate-900">Verified Tenant</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-wider">Status</span>
                  <span className="font-bold text-green-600">PASSED</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-wider">Score</span>
                  <span className="font-bold text-slate-900">98/100</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[96%] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
                </div>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement
            className="absolute bottom-[0%] lg:-right-10 xl:-right-32 2xl:-right-40"
            delay={1.1}
            duration={4.5}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 p-5 w-60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <BadgeDollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-sm font-bold text-slate-900">Rent Collected</span>
              </div>
              <div className="text-2xl font-black text-slate-900">$2,450.00</div>
              <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider mt-1">Deposited to account</div>
              <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-xs font-bold text-slate-600">Transfer complete</span>
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent opacity-0" />

      {/* ─── App Screens Section ──────────────────────────────────────── */}
      <div className="relative w-full mt-24 md:mt-32 pb-24 z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-black uppercase tracking-[0.2em] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Live Property App
          </span>
        </motion.div>

        {/* Phone mockup row */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Light Glow beneath */}
          <div className="absolute inset-x-0 bottom-[-10%] h-64 bg-gradient-to-t from-blue-100/30 via-transparent to-transparent blur-3xl pointer-events-none" />

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
            {/* ── Screen 1 ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10, x: -50 }}
              animate={{ opacity: 1, scale: 1, rotate: -5, x: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="relative w-52 sm:w-64 md:w-72 lg:w-80 z-0"
            >
              <Image
                src="/hero_img2.svg"
                alt="App Screen 1"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)] border-[10px] border-slate-900 rounded-[2.5rem]"
              />
            </motion.div>

            {/* ── Screen 2 (Center) ── */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.8 }}
              className="relative w-64 sm:w-72 md:w-80 lg:w-[24rem] z-10 -mt-12"
            >
              <Image
                src="/hero_img2.svg"
                alt="App Screen 2"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-[12px] border-slate-900 rounded-[3rem]"
              />
            </motion.div>

            {/* ── Screen 3 ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10, x: 50 }}
              animate={{ opacity: 1, scale: 1, rotate: 5, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="relative w-52 sm:w-64 md:w-72 lg:w-80 z-0"
            >
              <Image
                src="/hero_img2.svg"
                alt="App Screen 3"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.12)] border-[10px] border-slate-900 rounded-[2.5rem]"
              />
            </motion.div>
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
