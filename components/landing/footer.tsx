"use client"

import { Home, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react"

const footerLinks = {
  quickLinks: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Trust & Security", href: "/trust-and-security" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Contact Us", href: "/contact-us" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="pt-16 relative bg-white border-t border-slate-100 overflow-hidden text-slate-600 w-full transition-colors">
      {/* Dynamic Background Glow (Light Mode) */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-blue-100 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none transition-colors" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 pr-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-8 group bg-slate-900 p-2.5 rounded-2xl shadow-xl">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={180}
                height={60}
                className="w-auto h-10 lg:h-12 object-contain transition-all duration-500 origin-left invert brightness-0"
              />
            </Link>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg max-w-sm font-medium transition-colors">
              Skip the agent. Save thousands. Manage your Australian property directly — simply and transparently.
            </p>

            {/* Newsletter input (Light Mode) */}
            <div className="relative max-w-sm group">
              <div className="absolute -inset-0.5 bg-blue-500/10 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-slate-200 rounded-full pl-6 pr-32 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500/50 transition-all font-medium shadow-sm"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#07254B] hover:bg-[#07254B]/90 text-white rounded-full px-6 font-bold transition-all shadow-md">
                  Join
                </button>
              </div>
            </div>

          </div>

          {/* Links Section */}
          <div className="lg:col-span-7 flex flex-wrap gap-12 sm:gap-16 lg:justify-end">
            <div className="min-w-[140px]">
              <h4 className="text-slate-900 font-black mb-8 flex items-center gap-3 text-lg transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.3)]" /> Explore
              </h4>
              <ul className="space-y-5">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-500 hover:text-blue-600 font-bold transition-colors hover:translate-x-1 inline-block transform duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-[140px]">
              <h4 className="text-slate-900 font-black mb-8 flex items-center gap-3 text-lg transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.3)]" /> Legal
              </h4>
              <ul className="space-y-5">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-500 hover:text-blue-600 font-bold transition-colors hover:translate-x-1 inline-block transform duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div className="min-w-[140px]">
              <h4 className="text-slate-900 font-black mb-8 flex items-center gap-3 text-lg transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(99,102,241,0.3)]" /> Connect
              </h4>
              <ul className="space-y-6 text-slate-500 font-bold transition-colors">
                <li>
                  <a href="mailto:hello@self-i.au" className="flex items-center gap-3 hover:text-slate-900 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#07254B]/10 transition-colors">
                      <Mail className="w-4 h-4 text-slate-500 group-hover:text-[#07254B] transition-colors" />
                    </div>
                    hello@self-i.au
                  </a>
                </li>
                <li>
                  <a href="tel:1800PROPFLOW" className="flex items-center gap-3 hover:text-slate-900 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#07254B]/10 transition-colors">
                      <Phone className="w-4 h-4 text-slate-500 group-hover:text-[#07254B] transition-colors" />
                    </div>
                    1800 XXXXX
                  </a>
                </li>
                <li className="flex items-center gap-3 group pt-1">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-colors">
                    <MapPin className="w-4 h-4 text-slate-500" />
                  </div>
                  Sydney, Australia
                </li>
              </ul>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar (Light Mode) */}
      <div className="border-t border-slate-100 bg-slate-50/50 backdrop-blur-xl transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 font-bold text-center md:text-left text-sm">
            &copy; {new Date().getFullYear()} <span className="text-slate-900 font-black transition-colors">Self-i Australia Pty Ltd.</span> All rights reserved. <span className="opacity-50 ml-2 font-medium">ABN 12 345 678 901</span>
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-[#07254B] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
