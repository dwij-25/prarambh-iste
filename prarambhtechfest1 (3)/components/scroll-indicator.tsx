"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollIndicatorProps {
  currentSection: number
  totalSections: number
  onSectionClick: (index: number) => void
}

export default function ScrollIndicator({ currentSection, totalSections, onSectionClick }: ScrollIndicatorProps) {
  return (
    <motion.div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col items-center gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation()
            onSectionClick(index)
          }}
          className="group relative flex items-center justify-center w-6 h-6"
        >
          <span
            className={cn(
              "block w-2 h-2 rounded-full transition-all duration-300",
              "group-hover:bg-purple-400 group-hover:scale-125",
              currentSection === index ? "bg-purple-400" : "bg-white/30",
            )}
          />

          {currentSection === index && (
            <motion.span
              className="absolute w-4 h-4 rounded-full border border-purple-400"
              layoutId="activeIndicator"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}

          <span className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap">
            {index === 0
              ? "Home"
              : index === 1
                ? "About"
                : index === 2
                  ? "Events"
                  : index === 3
                    ? "Registration"
                    : index === 4
                      ? "Organizers"
                      : "Contact"}
          </span>
        </button>
      ))}
    </motion.div>
  )
}

