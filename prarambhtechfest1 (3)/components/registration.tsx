"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QrCode, Users, User, Calendar, MapPin } from "lucide-react"

export default function Registration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-black to-purple-950" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Registration</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Register now to participate in Prarambh and experience the ultimate techfest. Follow the instructions below
            to complete your registration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Registration Details</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-900/50 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Important Dates</h4>
                  <p className="text-gray-300">
                    Registration Deadline: April 20, 2025
                    <br />
                    Event Date: April 25, 2025
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-900/50 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Registration Fees</h4>
                  <p className="text-gray-300">
                    Individual Events: ₹100-₹200 per participant
                    <br />
                    Team Events: ₹200-₹500 per team
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-900/50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Venue</h4>
                  <p className="text-gray-300">
                    SAL Education Campus
                    <br />
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-medium text-white mb-4">Registration Process</h4>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <span>Fill out the registration form using the Google Form link or by scanning the QR code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <span>Pay the registration fee through UPI or bank transfer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <span>Upload the payment screenshot in the registration form.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <span>Receive confirmation email with your registration ID.</span>
                </li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-purple-900/20 border-purple-800">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <QrCode className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">Register Now</h3>
                  <p className="text-gray-300">Scan the QR code or click the button below to register</p>
                </div>

                <div className="bg-white p-6 rounded-lg mx-auto w-48 h-48 mb-6 flex items-center justify-center">
                  <p className="text-gray-500 text-sm text-center">QR Code Placeholder</p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Register via Google Form</Button>
                  <p className="text-center text-gray-400 text-sm">or</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/30">
                      <User className="mr-2 h-4 w-4" />
                      Individual
                    </Button>
                    <Button variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/30">
                      <Users className="mr-2 h-4 w-4" />
                      Team
                    </Button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-purple-800">
                  <h4 className="text-white font-medium mb-2">For any queries, contact:</h4>
                  <p className="text-gray-300">
                    Email: prarambh2025@saleducation.org
                    <br />
                    Phone: +91 9876543210
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

