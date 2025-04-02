"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

interface ContactSectionProps {
  id: string
}

export default function ContactSection({ id }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron text-glow">Contact Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about Prarambh? Get in touch with us and we'll be happy to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl p-8 card-futuristic animated-border">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center font-orbitron">Get in Touch</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full animate-glow">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1 font-orbitron">Email</h4>
                    <p className="text-gray-300">iste@sal.edu.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full animate-glow">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1 font-orbitron">Phone</h4>
                    <p className="text-gray-300">
                      Prof. Tejas Patel: +91 97255 05639
                      <br />
                      Prof. Krupa Patel: +91 75675 66644
                      <br />
                      Prof. Shivani Doshi: +91 97256 67300
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full animate-glow">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1 font-orbitron">Location</h4>
                    <p className="text-gray-300">
                      SAL Education
                      <br />
                      Opp. Science City, Sola-Bhadaj Road
                      <br />
                      Ahmedabad, Gujarat-380060
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-medium text-white mb-1 font-orbitron">Event Date</h4>
                  <p className="text-gray-300">23 April, 2025</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-xl font-medium text-white mb-2 font-orbitron text-glow">CONNECTION GLORY FUTURE</h4>
              <p className="text-gray-300">Join us for the 19 ISTE Gujarat State Annual Students Convention</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

