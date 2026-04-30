"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Smartphone, LayoutDashboard, Wrench, Shield, Zap, DollarSign, Bell, FileText, MessageSquare } from "lucide-react"

export function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-[#f8fafc]">
      {/* Background blurs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[50%] right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 md:space-y-48">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-bold mb-6 tracking-wide">
            <Smartphone className="w-4 h-4 text-[#07254B]" />
            One Platform. Three Powerful Apps.
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-slate-900 tracking-tight leading-[1.05] text-balance">
            The Complete
            <span className="bg-gradient-to-r from-[#07254B] to-[#17539c] bg-clip-text text-transparent px-2">Ecosystem</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            We built dedicated tools for every user. Because property management works better when everyone is connected in real-time.
          </p>
        </motion.div>

        {/* ── SECTION 1: OWNER APP ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="inline-flex max-w-max px-4 py-1.5 bg-[#07254B]/10 text-[#07254B] text-[11px] font-black tracking-widest mb-6 uppercase rounded-full shadow-sm">
              For Landlords
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Owner App
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              Take complete control of your property portfolio from your pocket. Track rent payments, approve maintenance requests, and review tenant applications in seconds.
            </p>
            <motion.div
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {[
                { icon: DollarSign, title: "Automated Rent Collection", desc: "Payments are tracked and deposited automatically." },
                { icon: LayoutDashboard, title: "Portfolio Analytics", desc: "Real-time insights into your yield and expenses." },
                { icon: CheckCircle, title: "One-Click Approvals", desc: "Approve tradie quotes and tenant applications instantly." },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#07254B]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full max-w-lg flex items-center justify-center cursor-pointer"
            >
              {/* Back Left Phone */}
              <div className="absolute left-[5%] sm:left-[10%] z-10 w-36 sm:w-48 lg:w-56 aspect-[9/19] -rotate-6 scale-90 opacity-80 shadow-2xl rounded-[2rem] border-[8px] border-slate-800 bg-slate-900 overflow-hidden">
                <Image src="/o-2.svg" alt="Owner App Screen 2" width={400} height={800} className="w-full h-full object-cover" />
              </div>
              {/* Back Right Phone */}
              <div className="absolute right-[5%] sm:right-[10%] z-10 w-36 sm:w-48 lg:w-56 aspect-[9/19] rotate-6 scale-90 opacity-80 shadow-2xl rounded-[2rem] border-[8px] border-slate-800 bg-slate-900 overflow-hidden">
                <Image src="/o-3.svg" alt="Owner App Screen 3" width={400} height={800} className="w-full h-full object-cover" />
              </div>
              {/* Front Center Phone */}
              <div className="relative z-30 w-48 sm:w-64 lg:w-72 aspect-[9/19] shadow-[0_40px_80px_rgba(0,0,0,0.2)] rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 overflow-hidden">
                <Image src="o-1.svg" alt="Owner App Main Screen" width={400} height={800} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── SECTION 2: TENANT APP ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full max-w-lg flex items-center justify-center cursor-pointer"
            >
              {/* Back Left Phone */}
              <div className="absolute left-[5%] sm:left-[10%] z-10 w-36 sm:w-48 lg:w-56 aspect-[9/19] -rotate-6 scale-90 opacity-80 shadow-2xl rounded-[2rem] border-[8px] border-slate-800 bg-slate-900 overflow-hidden">
                <Image src="/hero_img2.svg" alt="Tenant App Screen 2" width={400} height={800} className="w-full h-full object-cover" />
              </div>
              {/* Back Right Phone */}
              <div className="absolute right-[5%] sm:right-[10%] z-10 w-36 sm:w-48 lg:w-56 aspect-[9/19] rotate-6 scale-90 opacity-80 shadow-2xl rounded-[2rem] border-[8px] border-slate-800 bg-slate-900 overflow-hidden">
                <Image src="/hero_img2.svg" alt="Tenant App Screen 3" width={400} height={800} className="w-full h-full object-cover" />
              </div>
              {/* Front Center Phone */}
              <div className="relative z-30 w-48 sm:w-64 lg:w-72 aspect-[9/19] shadow-[0_40px_80px_rgba(0,0,0,0.2)] rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 overflow-hidden">
                <Image src="/hero_img2.svg" alt="Tenant App Main Screen" width={400} height={800} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex max-w-max px-4 py-1.5 bg-[#07254B]/10 text-[#07254B] text-[11px] font-black tracking-widest mb-6 uppercase rounded-full shadow-sm">
              For Renters
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Tenant App
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              The modern way to rent. Keep track of your lease, securely pay rent via the app, and instantly report maintenance issues with photos and videos.
            </p>
            <motion.div
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {[
                { icon: Shield, title: "Secure Digital Payments", desc: "Pay rent seamlessly using card or bank transfer." },
                { icon: Zap, title: "1-Click Applications", desc: "Create a profile once and apply to multiple properties." },
                { icon: MessageSquare, title: "Direct Communication", desc: "Chat with the owner or tradies directly in-app." },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#07254B]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── SECTION 3: MAINTENANCE APP ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="inline-flex max-w-max px-4 py-1.5 bg-[#07254B]/10 text-[#07254B] text-[11px] font-black tracking-widest mb-6 uppercase rounded-full shadow-sm">
              For Tradies
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Maintenance App
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              Say goodbye to chasing invoices. Receive job requests from owners, submit quotes on the spot, and get paid directly through the app once the job is done.
            </p>
            <motion.div
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {[
                { icon: Wrench, title: "Streamlined Job Tracking", desc: "View all your active and upcoming jobs in one place." },
                { icon: FileText, title: "Instant Quoting", desc: "Generate and send professional quotes directly to owners." },
                { icon: Bell, title: "Get Paid Faster", desc: "Automated payouts directly to your bank account." },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#07254B]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-full max-w-lg flex items-center justify-center cursor-pointer"
            >
              {/* Back Left Phone */}
              <div className="absolute left-[5%] sm:left-[10%] z-10 w-36 sm:w-48 lg:w-56 aspect-[9/19] -rotate-6 scale-90 opacity-80 shadow-2xl rounded-[2rem] border-[8px] border-slate-800 bg-slate-900 overflow-hidden">
                <Image src="/hero_img2.svg" alt="Maintenance App Screen 2" width={400} height={800} className="w-full h-full object-cover" />
              </div>
              {/* Back Right Phone */}
              <div className="absolute right-[5%] sm:right-[10%] z-10 w-36 sm:w-48 lg:w-56 aspect-[9/19] rotate-6 scale-90 opacity-80 shadow-2xl rounded-[2rem] border-[8px] border-slate-800 bg-slate-900 overflow-hidden">
                <Image src="/hero_img2.svg" alt="Maintenance App Screen 3" width={400} height={800} className="w-full h-full object-cover" />
              </div>
              {/* Front Center Phone */}
              <div className="relative z-30 w-48 sm:w-64 lg:w-72 aspect-[9/19] shadow-[0_40px_80px_rgba(0,0,0,0.2)] rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 overflow-hidden">
                <Image src="/hero_img2.svg" alt="Maintenance App Main Screen" width={400} height={800} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
