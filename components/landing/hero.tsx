"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, User, Star, Shield, Zap, Play, CheckCircle } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [hoveredCard, setHoveredCard] = useState<"owner" | "tenant" | null>(null)

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-x-hidden overflow-y-visible pt-24 pb-20">
      {/* Dark gradient background with glow effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/20 to-transparent blur-[100px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="text-center max-w-4xl mx-auto relative z-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/90 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            🇦🇺 Trusted by 2,500+ property owners across Australia
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Property Management
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
              Reimagined
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            The all-in-one AI platform that helps owners save thousands and tenants find their perfect home.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link href="#forms">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 px-8 h-14 text-lg font-semibold group shadow-xl">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            {/* Fix: explicit border + text color so visible on dark bg */}
            <button className="inline-flex items-center gap-2 px-8 h-14 text-lg font-medium rounded-lg border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 text-sm"
          >
            {[
              { icon: CheckCircle, text: "No setup fees" },
              { icon: Shield, text: "Bank-level security" },
              { icon: Zap, text: "AI-powered automation" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-accent" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 lg:gap-16 max-w-2xl mx-auto"
          >
            {[
              { value: "$6.5K+", label: "Average Annual Savings" },
              { value: "12,000+", label: "Properties Managed" },
              { value: "98%", label: "Owner Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Role Selection Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto relative z-20"
        >
          {/* Owner Card */}
          <Link href="#forms">
            <RoleCard
              type="owner"
              isHovered={hoveredCard === "owner"}
              onHover={() => setHoveredCard("owner")}
              onLeave={() => setHoveredCard(null)}
              icon={Building}
              title="Property Owner"
              description="List your property and start saving on management fees today"
              features={["AI-powered rent pricing", "Automated tenant screening", "Zero commission fees"]}
              ctaText="List Your Property"
            />
          </Link>

          {/* Tenant Card */}
          <Link href="#forms">
            <RoleCard
              type="tenant"
              isHovered={hoveredCard === "tenant"}
              onHover={() => setHoveredCard("tenant")}
              onLeave={() => setHoveredCard(null)}
              icon={User}
              title="Looking to Rent"
              description="Find your perfect home with our AI-matched listings"
              features={["Verified listings only", "Instant applications", "Direct owner contact"]}
              ctaText="Find a Rental"
            />
          </Link>
        </motion.div>

        {/* Floating UI Elements */}
        <div className="hidden lg:block pointer-events-none z-0">
          <FloatingElement
            className="absolute top-[10%] lg:-right-10 xl:-right-32 2xl:-right-40"
            delay={0.7}
            duration={4}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-4 w-56">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">New Review</div>
                  <div className="text-xs text-slate-400">Just now</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-xs text-slate-300 mt-2">&ldquo;Amazing platform! Saved us $6k this year.&rdquo;</p>
            </div>
          </FloatingElement>

          <FloatingElement
            className="absolute top-[40%] lg:-left-10 xl:-left-32 2xl:-left-40"
            delay={0.9}
            duration={5}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-4 w-52">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-white">Verified Tenant</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Credit Score</span>
                  <span className="font-semibold text-white">Excellent</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">AI Score</span>
                  <span className="font-semibold text-accent">96/100</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[96%] bg-gradient-to-r from-accent to-primary rounded-full" />
                </div>
              </div>
            </div>
          </FloatingElement>

          <FloatingElement
            className="absolute bottom-[0%] lg:-right-10 xl:-right-32 2xl:-right-40"
            delay={1.1}
            duration={4.5}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-4 w-56">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-white">Rent Collected</span>
              </div>
              <div className="text-2xl font-bold text-white">$2,450</div>
              <div className="text-xs text-accent mt-1">Auto-deposited to your account</div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                </div>
                <span className="text-xs text-slate-300">Instant transfer complete</span>
              </div>
            </div>
          </FloatingElement>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent opacity-0" />
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
  const gradientFrom = isPrimary ? "from-primary/30" : "from-accent/30"
  const gradientTo = isPrimary ? "to-primary/5" : "to-accent/5"
  const accentColor = isPrimary ? "text-primary" : "text-accent"
  const accentBg = isPrimary ? "bg-primary" : "bg-accent"

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

        {/* Glow effect on hover */}
        <div className={`absolute -inset-1 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-2xl ${isPrimary ? "bg-primary/20" : "bg-accent/20"} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-8 h-8 ${accentColor}`} />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-300 mb-6">{description}</p>

          <ul className="space-y-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <div className={`w-5 h-5 rounded-full ${isPrimary ? "bg-primary/20" : "bg-accent/20"} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle className={`w-3 h-3 ${accentColor}`} />
                </div>
                <span className="text-slate-200">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className={`w-full group/btn ${accentBg} hover:opacity-90 text-white`}
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
