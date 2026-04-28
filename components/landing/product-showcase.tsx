"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, MapPin, Bed, Bath, DollarSign } from "lucide-react"

const properties = [
  {
    src: "/property-luxury-house.png",
    badge: "Verified",
    badgeColor: "bg-green-500",
    suburb: "Mosman, NSW",
    beds: 4,
    baths: 2,
    rent: "$1,200/wk",
    status: "Available Now",
  },
  {
    src: "/property-apartment.png",
    badge: "Ready to Move",
    badgeColor: "bg-blue-500",
    suburb: "South Yarra, VIC",
    beds: 2,
    baths: 1,
    rent: "$580/wk",
    status: "Available Now",
  },
  {
    src: "/property-lakehouse.png",
    badge: "Available Now",
    badgeColor: "bg-primary",
    suburb: "Noosa Heads, QLD",
    beds: 3,
    baths: 2,
    rent: "$850/wk",
    status: "Just Listed",
  },
]

export function ProductShowcase() {
  return (
    <section className="py-8 md:py-16 lg:py-32 relative overflow-hidden bg-background">
      {/* Background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 text-blue-600" />
            Real Properties. Verified Listings.
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1] text-balance">
            Explore Real
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent px-2">Properties</span>
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Every listing on Self-i is inspected and verified by our local team before it goes live.
          </p>
        </motion.div>

        {/* Property Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {properties.map((property, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={property.src}
                  alt={property.suburb}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${property.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md`}>
                  <CheckCircle className="w-3.5 h-3.5" />
                  {property.badge}
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {property.suburb}
                    </div>
                    <div className="text-xl font-bold text-foreground">{property.rent}</div>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    {property.status}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-3 border-t border-border">
                  <span className="flex items-center gap-1.5">
                    <Bed className="w-4 h-4" />
                    {property.beds} beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="w-4 h-4" />
                    {property.baths} baths
                  </span>
                  <span className="ml-auto text-xs font-medium text-green-600 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Inspected
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex max-w-max px-4 py-1.5 bg-blue-600 text-white text-[11px] font-bold tracking-widest mb-6 uppercase rounded-sm shadow-md">
              What is Self-i
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-light text-foreground leading-[1.15] mb-8 tracking-tight">
              Your Complete Property <br className="hidden sm:block" /> Solution, All in <span className="font-normal whitespace-nowrap">Self-i</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              Self-i gives property owners and tenants a direct line to each other — cutting out agents, reducing costs, and making the whole process faster and more transparent.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              From listing and tenant screening to rent collection and maintenance — everything you need is right here. No agent fees, no runaround.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { value: "5,000+", label: "Active Listings", icon: MapPin },
              { value: "$15K", label: "Avg. Annual Savings", icon: DollarSign },
              { value: "48 hrs", label: "Average Time to Tenant", icon: CheckCircle },
              { value: "98%", label: "Owner Satisfaction", icon: CheckCircle },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <stat.icon className="w-6 h-6 text-blue-600 mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
