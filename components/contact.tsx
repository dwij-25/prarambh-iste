"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contact" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about Prarambh? Get in touch with us and we&apos;ll be happy to help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-purple-900/50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Email</h4>
                  <p className="text-gray-300">
                    prarambh2025@saleducation.org
                    <br />
                    info@saleducation.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-900/50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Phone</h4>
                  <p className="text-gray-300">
                    +91 9876543210
                    <br />
                    +91 9876543211
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-900/50 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">Location</h4>
                  <p className="text-gray-300">
                    SAL Education Campus
                    <br />
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 rounded-lg p-4 h-64 flex items-center justify-center">
              <p className="text-gray-400">Google Map will be embedded here</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-purple-900/20 rounded-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" className="bg-purple-900/30 border-purple-800 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-purple-900/30 border-purple-800 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" className="bg-purple-900/30 border-purple-800 text-white" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  className="bg-purple-900/30 border-purple-800 text-white min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

