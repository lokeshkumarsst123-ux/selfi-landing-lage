"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  "/property-luxury-house.png",
  "/property-apartment.png",
  "/property-lakehouse.png",
]

export function ProductShowcase() {
  return (
    <section className="py-8 md:py-16 md:py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Light background blur shades */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">

          {/* Left Side: Image Gallery */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 h-[400px] sm:h-[550px] lg:h-[650px] py-8 sm:py-12 px-4 sm:px-0">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className={`relative h-full rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 ${index === 0 ? 'w-full sm:w-1/3 translate-y-0 sm:translate-y-2' : 'hidden sm:block sm:w-1/3'
                  } ${index === 1 ? 'sm:translate-y-12' : index === 2 ? 'sm:-translate-y-6' : ''}`}
              >
                <Image
                  src={src}
                  alt="Property"
                  fill
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center lg:pl-16"
          >
            <div className="inline-flex max-w-max px-4 py-1.5 bg-blue-600 text-white text-[11px] font-bold tracking-widest mb-6 uppercase rounded-sm shadow-md">
              What is Self-i
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-light text-foreground leading-[1.15] mb-8 tracking-tight">
              Your Complete Property <br className="hidden sm:block" /> Solution Is Here in <span className="font-normal whitespace-nowrap">Self-i</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
              Discover a seamless way to manage your investment with Self-i. With thousands of property owners already saving significantly on our platform, Self-i can empower you with the tools you need to take control of your assets.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              The platform boasts an impressive suite of features including advanced AI rent pricing, automated tenant screening, proactive maintenance coordination, and direct communication channels.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

