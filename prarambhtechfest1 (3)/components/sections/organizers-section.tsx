"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

interface OrganizersSectionProps {
  id: string
}

const advisoryCommittee = [
  {
    name: "Dr. Ajay Upadhyaya",
    role: "Director, SAL Education",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Bhavna Soni",
    role: "Principal, SAL Engineering",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Kinjal Adhvaryu",
    role: "ISTE Coordinator",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const organizingCommittee = [
  {
    name: "Dr. Bhasker V. Bhatt",
    role: "Committee Chair",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Rakesh D. Patel",
    role: "Committee Member",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. Maulik Trivedi",
    role: "Committee Member",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. Darshan Patel",
    role: "Committee Member",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export default function OrganizersSection({ id }: OrganizersSectionProps) {
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
    <section
      id={id}
      ref={ref}
      className="h-screen w-full snap-start flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="container mx-auto px-4 z-10 overflow-y-auto max-h-[calc(100vh-120px)] py-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Organizing Committee</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated team behind Prarambh who work tirelessly to make this event a success.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Advisory Committee</h3>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {advisoryCommittee.map((member, index) => (
              <motion.div key={index} className="bg-purple-900/20 rounded-lg p-6 text-center" variants={itemVariants}>
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-purple-400">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Organizing Committee</h3>
          <motion.div
            className="grid md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {organizingCommittee.map((member, index) => (
              <motion.div key={index} className="bg-purple-900/20 rounded-lg p-6 text-center" variants={itemVariants}>
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-purple-400 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="bg-purple-900/20 rounded-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Student Coordinators</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="text-lg font-medium text-purple-400 mb-2">Technical Events</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Rahul Sharma - +91 9876543210</li>
                <li>Priya Patel - +91 9876543211</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-purple-400 mb-2">Non-Technical Events</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Amit Singh - +91 9876543212</li>
                <li>Neha Desai - +91 9876543213</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-purple-400 mb-2">Registration & Logistics</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Vikram Mehta - +91 9876543214</li>
                <li>Anjali Shah - +91 9876543215</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

