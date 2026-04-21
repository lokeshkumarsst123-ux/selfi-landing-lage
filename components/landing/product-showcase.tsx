"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BarChart3, 
  Home, 
  Wrench, 
  Users,
  TrendingUp,
  Calendar,
  MessageSquare,
  Settings,
  Bell,
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

const showcaseItems = [
  {
    id: "owner",
    title: "Owner Dashboard",
    description: "Complete control over your property portfolio with real-time analytics and insights.",
    features: ["Revenue tracking", "Property performance", "Tenant management", "Document storage"],
    mockup: OwnerDashboardMockup,
  },
  {
    id: "tenant",
    title: "Tenant Portal",
    description: "Easy rent payments, maintenance requests, and direct communication with owners.",
    features: ["One-click payments", "Request tracking", "Lease documents", "Chat support"],
    mockup: TenantDashboardMockup,
  },
  {
    id: "maintenance",
    title: "Maintenance Hub",
    description: "Streamlined workflow for reporting, tracking, and resolving maintenance issues.",
    features: ["Photo uploads", "Priority levels", "Contractor network", "Status updates"],
    mockup: MaintenanceMockup,
  },
]

export function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = showcaseItems[activeIndex]

  const next = () => setActiveIndex((i) => (i + 1) % showcaseItems.length)
  const prev = () => setActiveIndex((i) => (i - 1 + showcaseItems.length) % showcaseItems.length)

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Powerful Tools, Simple Interface
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Designed for property owners and tenants who want professional features without the complexity.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-12">
          {showcaseItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                index === activeIndex
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Showcase Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <motion.div
            key={activeItem.id + "-info"}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {activeItem.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              {activeItem.description}
            </p>
            <ul className="space-y-4">
              {activeItem.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Mockup */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id + "-mockup"}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <activeItem.mockup />
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function OwnerDashboardMockup() {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Home className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">Property Overview</span>
        </div>
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <Settings className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-muted/50 rounded-xl p-4">
            <div className="text-xs text-muted-foreground">Monthly Revenue</div>
            <div className="text-xl font-bold text-foreground">$8,450</div>
            <div className="flex items-center gap-1 text-xs text-accent">
              <TrendingUp className="w-3 h-3" />
              +12%
            </div>
          </div>
          <div className="bg-muted/50 rounded-xl p-4">
            <div className="text-xs text-muted-foreground">Occupancy</div>
            <div className="text-xl font-bold text-foreground">95%</div>
            <div className="text-xs text-muted-foreground">All properties</div>
          </div>
          <div className="bg-muted/50 rounded-xl p-4">
            <div className="text-xs text-muted-foreground">Active Leases</div>
            <div className="text-xl font-bold text-foreground">4</div>
            <div className="text-xs text-accent">2 renewals due</div>
          </div>
        </div>

        {/* Chart placeholder */}
        <div className="bg-muted/30 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-foreground">Revenue Trend</span>
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex items-end gap-2 h-24">
            {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${h}%` }}>
                <div className="w-full bg-primary rounded-t" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 px-4 bg-primary/10 text-primary rounded-lg text-sm font-medium flex items-center justify-center gap-2">
            <Users className="w-4 h-4" />
            Tenants
          </button>
          <button className="flex-1 py-2 px-4 bg-muted rounded-lg text-sm font-medium text-muted-foreground flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            Schedule
          </button>
        </div>
      </div>
    </div>
  )
}

function TenantDashboardMockup() {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Users className="w-4 h-4 text-accent-foreground" />
          </div>
          <span className="font-semibold text-foreground">My Rental</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-muted-foreground" />
          <Bell className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Rent Card */}
        <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-5 mb-6 border border-accent/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-muted-foreground">Next Payment Due</div>
              <div className="text-2xl font-bold text-foreground">$550</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Due Date</div>
              <div className="text-lg font-semibold text-foreground">May 1</div>
            </div>
          </div>
          <button className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-semibold">
            Pay Now
          </button>
        </div>

        {/* Property Info */}
        <div className="bg-muted/50 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
              <Home className="w-8 h-8 text-muted-foreground" />
            </div>
            <div>
              <div className="font-semibold text-foreground">Unit 12B, Harbor View</div>
              <div className="text-sm text-muted-foreground">42 Harbour St, Sydney NSW</div>
              <div className="text-xs text-accent mt-1">Lease ends: Dec 2025</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button className="py-3 px-4 bg-muted rounded-xl text-sm font-medium text-foreground flex items-center justify-center gap-2 hover:bg-muted/80 transition-colors">
            <Wrench className="w-4 h-4" />
            Maintenance
          </button>
          <button className="py-3 px-4 bg-muted rounded-xl text-sm font-medium text-foreground flex items-center justify-center gap-2 hover:bg-muted/80 transition-colors">
            <FileText className="w-4 h-4" />
            Documents
          </button>
        </div>
      </div>
    </div>
  )
}

function MaintenanceMockup() {
  return (
    <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Wrench className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-semibold text-foreground">Maintenance Requests</span>
        </div>
        <button className="text-sm font-medium text-primary">+ New</button>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Active Request */}
        <div className="bg-muted/50 rounded-xl p-4 border-l-4 border-accent">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-semibold text-foreground">AC Not Working</div>
              <div className="text-xs text-muted-foreground">Unit 4B - Submitted 2 days ago</div>
            </div>
            <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
              In Progress
            </span>
          </div>
          <div className="mt-3">
            <div className="text-xs text-muted-foreground mb-1">Progress</div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-accent rounded-full" />
            </div>
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
            Technician scheduled for tomorrow 10am
          </div>
        </div>

        {/* Completed Request */}
        <div className="bg-muted/30 rounded-xl p-4 opacity-75">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="font-semibold text-foreground">Leaky Faucet</div>
              <div className="text-xs text-muted-foreground">Unit 7A - Completed</div>
            </div>
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
              Resolved
            </span>
          </div>
        </div>

        {/* Pending Request */}
        <div className="bg-muted/50 rounded-xl p-4 border-l-4 border-primary">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold text-foreground">Broken Window Latch</div>
              <div className="text-xs text-muted-foreground">Unit 2C - Submitted today</div>
            </div>
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
