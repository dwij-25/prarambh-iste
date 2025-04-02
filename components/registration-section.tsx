"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { QrCode, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

interface RegistrationSectionProps {
  id: string
}

export default function RegistrationSection({ id }: RegistrationSectionProps) {
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
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron text-glow">Registration</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Register now to participate in Prarambh and experience the ultimate techfest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl p-6 card-futuristic animated-border">
              <h3 className="text-2xl font-semibold text-white mb-6 font-orbitron">Registration Details</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/50 p-3 rounded-full animate-glow">
                    <Calendar className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-1 font-orbitron">Important Dates</h4>
                    <p className="text-gray-300">Event Date: 23 April, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/50 p-3 rounded-full animate-glow">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-1 font-orbitron">Venue</h4>
                    <p className="text-gray-300">
                      SAL Education, Opp. Science City, Sola-Bhadaj Road, Ahmedabad, Gujarat-380060
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-medium text-white mb-4 font-orbitron">Registration Fees</h4>
                <div className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl p-6">
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-purple-400 mb-2 font-orbitron">ISTE Student Members</h5>
                    <ul className="text-gray-300 space-y-1">
                      <li>Group Event - Rs. 150</li>
                      <li>Individual - Rs. 150 (For One or Two Events)</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-medium text-purple-400 mb-2 font-orbitron">
                      Other Students (Non-Member of ISTE)
                    </h5>
                    <ul className="text-gray-300 space-y-1">
                      <li>Group Event - Rs. 250</li>
                      <li>Individual - Rs. 250 (For One or Two Events)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 rounded-3xl overflow-hidden card-futuristic animated-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <QrCode className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2 font-orbitron text-glow">Register Now</h3>
                  <p className="text-gray-300">Scan the QR code or click the button below to register</p>
                </div>

                <div className="bg-white p-2 rounded-2xl mx-auto w-48 h-48 mb-6 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prarambh-TechFest-2k25-qX4iuJsBQRAkYx2W4NBOFW1WLg2cLP.png"
                    alt="Registration QR Code"
                    width={180}
                    height={180}
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-4">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScj3mTc8K3VhIIE979Ld_oMhfH-Gcpo1kHe8MYKhWiL30CdnA/viewform"
                    target="_blank"
                  >
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full transition-all duration-300 transform hover:scale-105 btn-futuristic font-orbitron">
                      Register via Google Form
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-purple-800">
                  <h4 className="text-white font-medium mb-2 font-orbitron">For any query Email: iste@sal.edu.in</h4>
                  <p className="text-gray-300 mt-2">
                    Prof. Tejas Patel: +91 97255 05639
                    <br />
                    Prof. Krupa Patel: +91 75675 66644
                    <br />
                    Prof. Shivani Doshi: +91 97256 67300
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

