"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-950" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-white mb-4">About Prarambh</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4">The Ultimate Tech Fest</h3>
            <p className="text-gray-300 mb-6">
              Prarambh is a premier techfest featuring 10 exciting events - 5 technical and 5 non-technical competitions
              designed to challenge your skills and creativity. The fest also hosts multiple visitor stalls showcasing
              the latest innovations and technologies.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you&apos;re a coding enthusiast, a robotics expert, or simply looking for fun challenges, Prarambh
              has something for everyone. Join us for a day filled with innovation, learning, and friendly competition.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-purple-900/50 rounded-lg p-4 flex-1 min-w-[150px]">
                <div className="text-3xl font-bold text-purple-400 mb-2">10</div>
                <div className="text-white">Exciting Events</div>
              </div>
              <div className="bg-purple-900/50 rounded-lg p-4 flex-1 min-w-[150px]">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-white">Visitor Stalls</div>
              </div>
              <div className="bg-purple-900/50 rounded-lg p-4 flex-1 min-w-[150px]">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-white">Participants</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4">Organized By</h3>
            <div className="bg-purple-900/30 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold text-white mb-2">SAL Education</h4>
              <p className="text-gray-300">
                SAL Education is committed to providing quality education and fostering innovation among students. With
                state-of-the-art facilities and experienced faculty, SAL Education aims to create future leaders in
                technology and innovation.
              </p>
            </div>
            <div className="bg-purple-900/30 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-2">ISTE</h4>
              <p className="text-gray-300">
                The Indian Society for Technical Education (ISTE) is a leading professional association dedicated to the
                advancement of technical education in India. ISTE works to improve teaching methods, curriculum
                development, and research in technical institutions.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

