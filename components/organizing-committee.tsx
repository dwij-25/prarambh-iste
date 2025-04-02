"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const organizers = [
  {
    name: "Dr. Rajesh Patel",
    role: "Event Chair",
    organization: "SAL Education",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. Anita Sharma",
    role: "ISTE Coordinator",
    organization: "ISTE",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Vikram Singh",
    role: "Technical Lead",
    organization: "SAL Education",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Priya Desai",
    role: "Event Coordinator",
    organization: "ISTE",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const sponsors = [
  {
    name: "TechCorp",
    tier: "Platinum Sponsor",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "InnovateTech",
    tier: "Gold Sponsor",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "FutureLabs",
    tier: "Silver Sponsor",
    logo: "/placeholder.svg?height=100&width=200",
  },
  {
    name: "CodeNation",
    tier: "Silver Sponsor",
    logo: "/placeholder.svg?height=100&width=200",
  },
]

export default function OrganizingCommittee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="committee" className="py-20 bg-gradient-to-b from-purple-950 to-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Organizing Committee & Partners</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated team behind Prarambh and our valued sponsors who make this event possible.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Key Organizers</h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {organizers.map((organizer, index) => (
              <motion.div key={index} className="bg-purple-900/20 rounded-lg p-6 text-center" variants={itemVariants}>
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={organizer.image || "/placeholder.svg"}
                    alt={organizer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-white mb-1">{organizer.name}</h4>
                <p className="text-purple-400 mb-2">{organizer.role}</p>
                <p className="text-gray-300 text-sm">{organizer.organization}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Our Sponsors</h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                className="bg-purple-900/20 rounded-lg p-6 flex flex-col items-center justify-center"
                variants={itemVariants}
              >
                <div className="relative w-full h-20 mb-4">
                  <Image src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} fill className="object-contain" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{sponsor.name}</h4>
                <p className="text-purple-400 text-sm">{sponsor.tier}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

