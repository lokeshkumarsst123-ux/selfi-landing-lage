"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Wait for page to be fully loaded
    const timer = setTimeout(() => setIsLoading(false), 1800)
    if (document.readyState === "complete") {
      // Still show min loader for smooth UX
      const minTimer = setTimeout(() => setIsLoading(false), 800)
      return () => clearTimeout(minTimer)
    }
    const handleLoad = () => setTimeout(() => setIsLoading(false), 400)
    window.addEventListener("load", handleLoad)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Brand icon */}
            <div className="w-22 h-22 flex items-center justify-center ">
              <img src="/logo.svg" alt="Logo" />
            </div>

            {/* Brand name */}


            {/* Animated progress bar */}
            <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#07254B] to-[#17539c] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
