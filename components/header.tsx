"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Events", href: "#events" },
  { name: "Registration", href: "#registration" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Update header style on scroll and track active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5",
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Link href="#home">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000061365-removebg-preview-jenS9QmrLTRcWQbpZ9atbCshQANBrv.png"
              alt="Prarambh Logo"
              className="h-10 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-2 py-1 text-sm font-medium transition-all duration-300 font-orbitron",
                activeSection === item.href.substring(1)
                  ? "text-blue-400 text-glow"
                  : "text-white/80 hover:text-white hover:scale-105",
              )}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-400"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={cn("absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md md:hidden overflow-hidden")}
        initial={{ height: 0 }}
        animate={{ height: mobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "py-2 text-left transition-colors font-orbitron",
                activeSection === item.href.substring(1) ? "text-blue-400 text-glow" : "text-white/80 hover:text-white",
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  )
}

