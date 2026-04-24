"use client"

import { Home, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, Building2, Wrench, Apple } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

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
    <footer className="pt-16 relative bg-white dark:bg-[#020617] border-t border-slate-200 dark:border-white/10 overflow-hidden text-slate-600 dark:text-slate-300 w-full  transition-colors">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none transition-colors" />

      {/* Massive Typography Section Removed */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 pr-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-8 group bg-primary p-2 rounded-2xl">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={180}
                height={60}
                className="w-auto h-12 lg:h-14 object-contain transition-all duration-500 origin-left"
              />
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg max-w-sm font-medium transition-colors">
              Skip the agent. Save thousands. Manage your Australian property directly with AI-powered ease.
            </p>

            {/* Newsletter input */}
            <div className="relative max-w-sm group">
              <div className="absolute -inset-0.5 bg-blue-500/20 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-full pl-6 pr-32 py-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-all font-medium shadow-sm dark:shadow-none"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-bold transition-all shadow-md">
                  Join
                </button>
              </div>
            </div>

          </div>

          {/* Links Section */}
          <div className="lg:col-span-7 flex flex-wrap gap-12 sm:gap-16 lg:justify-end">
            <div className="min-w-[140px]">
              <h4 className="text-slate-900 dark:text-white font-bold mb-8 flex items-center gap-3 text-lg transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.6)] dark:shadow-[0_0_10px_rgba(6,182,212,0.8)]" /> Explore
              </h4>
              <ul className="space-y-5">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors hover:translate-x-1 inline-block transform duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-[140px]">
              <h4 className="text-slate-900 dark:text-white font-bold mb-8 flex items-center gap-3 text-lg transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] dark:shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Legal
              </h4>
              <ul className="space-y-5">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors hover:translate-x-1 inline-block transform duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div className="min-w-[140px]">
              <h4 className="text-slate-900 dark:text-white font-bold mb-8 flex items-center gap-3 text-lg transition-colors">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] dark:shadow-[0_0_10px_rgba(99,102,241,0.8)]" /> Connect
              </h4>
              <ul className="space-y-6 text-slate-600 dark:text-slate-400 font-medium transition-colors">
                <li>
                  <a href="mailto:hello@self-i.au" className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    hello@self-i.au
                  </a>
                </li>
                <li>
                  <a href="tel:1800PROPFLOW" className="flex items-center gap-3 hover:text-slate-900 dark:hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-500/20 transition-colors">
                      <Phone className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    1800 XXXXX
                  </a>
                </li>
                <li className="flex items-center gap-3 group pt-1">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center transition-colors">
                    <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  </div>
                  Sydney, Australia
                </li>
              </ul>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-black/40 backdrop-blur-xl transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 font-medium text-center md:text-left text-sm">
            &copy; {new Date().getFullYear()} <span className="text-slate-900 dark:text-white font-bold transition-colors">Self-i Australia Pty Ltd.</span> All rights reserved. <span className="opacity-50 ml-2">ABN 12 345 678 901</span>
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-[0_4px_15px_rgba(6,182,212,0.4)]"
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
