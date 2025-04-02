"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AboutSectionProps {
  id: string
}

export default function AboutSection({ id }: AboutSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id={id}
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center relative py-20"
      style={{ zIndex: 10 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron text-glow">About</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-black/30 backdrop-blur-sm border border-blue-900/30 rounded-3xl p-6 h-full card-futuristic animated-border">
              <h3 className="text-2xl font-semibold text-white mb-4 font-orbitron">ABOUT SAL EDUCATION</h3>
              <p className="text-gray-300 mb-4">
                SAL Group of institutions was incepted as a major organ of Adarsh Foundation in 2009. It is promoted by
                Dr. Rajendrabhai Shah, patron of SAL Hospital and Shah Alloys Ltd. It has ten institutes functioning
                under its aegis SAL Institute of Technology and Engineering Research, SAL College of Engineering, SAL
                Engineering & Technical Institute, SAL Institute of Diploma Studies, SAL College of Pharmacy, SAL.
                Institute of Pharmacy, SAL Institute of Management, SAL School of Architecture, SAL School of Interior
                Design and SAL Institute of Medical Science.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-black/30 backdrop-blur-sm border border-blue-900/30 rounded-3xl p-6 h-full card-futuristic animated-border">
              <h3 className="text-2xl font-semibold text-white mb-4 font-orbitron">ABOUT ISTE</h3>
              <p className="text-gray-300 mb-4">
                The Indian Society for Technical Education is a national professional non-profit making society
                registered under the society's registration act of 1860. The Major objective of the ISTE is to assist
                and contribute in the production and development of top-quality professional engineers and technicians
                needed by the industries and other organizations. The Annual State Faculty and Student Conventions are
                organized with partial financial support from ISTE.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="bg-black/30 backdrop-blur-sm border border-blue-900/30 rounded-3xl p-6 card-futuristic animated-border">
              <h3 className="text-2xl font-semibold text-white mb-4 font-orbitron">ABOUT ISTE GUJARAT</h3>
              <p className="text-gray-300">
                ISTE Gujarat section now has a remarkable strength of 8,500+ Life Members, more than 50,000 Student
                Members and 153 (97 Degree & 51 Diploma Institutes) institutional Members. There are 70 ISTE Chapters
                and almost equal number of student chapters under the section. ISTE Gujarat Section has its Head Quarter
                near Polytechnic in the premises of The Maharaja Sayajirao University of Baroda near Tarabag Colony,
                Pandya Bridge, Nizampura, Vadodara, w.e.f. 10 September 2000. ISTE Gujarat Section has institutionalized
                over 20+ state awards that are honored to awardees through nomination in annual conventions. ISTE
                Gujarat Honours Two Distinguished Personalities from industries as recommended by hosting institute
                during Annual Conventions. Also, ISTE Gujarat Section honors distinguished ISTE Life Members for their
                meritorious efforts for technical education under ISTE during these events. ISTE Gujarat supports the
                State Conventions with partial financial assistance.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-black/30 backdrop-blur-sm border border-blue-900/30 rounded-3xl p-6 card-futuristic animated-border">
            <h3 className="text-2xl font-semibold text-white mb-4 text-center font-orbitron">ORGANIZING COMMITTEE</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">CHIEF PATRON</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Dr. Rajendrabhai Shah, CMD SAL Education</li>
                  <li>Dr. Pratapsinh K. Desai, President, ISTE</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">PATRON</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Mrs. Nilimaben Shah, General Manager, SAL Education</li>
                  <li>Dr. Rupesh Vasani, Director, SAL Education</li>
                  <li>Dr. Sachin Parikh, Hon. Chairman, ISTE Gujarat</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">PROGRAM CONVENER</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Dr. Ajay Upadhyaya, I/C Principal, SETI</li>
                  <li>Dr. Bhavna Soni, VC Principal, SCE</li>
                  <li>Dr. Kinjal Adhvaryu, Principal, SIDS</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">ADVISORY COMMITTEE</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300">
                <ul className="space-y-2">
                  <li>Dr. Bheker V. Bhatt, Hon. Secretary Cum Treasurer, ISTE Gujarat</li>
                  <li>Dr. Rakesh D. Patel, Member, National Executive Council, ISTE</li>
                  <li>Dr. Kiran M. Makwana, Member, National Executive Council, ISTE</li>
                  <li>Prof. Kalpesh Bhavsar, Member, National Executive Council, ISTE</li>
                </ul>
                <ul className="space-y-2">
                  <li>Dr. Sanjaykumar K. Dave, Member, National Executive Council, ISTE</li>
                  <li>Dr. Jayesh S. Shah, Member, National Executive Council, ISTE</li>
                  <li>Prof. Hardik V. Bhatt, Member, Section Management Committee, ISTE Gujarat</li>
                  <li>Er. Vishal Bhavsar, Member, Section Management Committee, ISTE Gujarat</li>
                </ul>
                <ul className="space-y-2">
                  <li>Prof. Alefiya L. Kachwala, Member, Section Management Committee, ISTE Gujarat</li>
                  <li>Dr. Asutosh K. Patel, Member, Section Management Committee, ISTE Gujarat</li>
                  <li>Dr. Shilpa Khatri, Member, Section Management Committee, ISTE Gujarat</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-blue-400 mb-4 font-orbitron">INSTITUTE CO-ORDINATORS</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Prof. Vijay Jadeja (HOD-CE/CSE/IT, SCE)</li>
                <li>Prof. Madhuri Parekh (HOD-CE/CSE, SETI)</li>
                <li>Prof. Sachi Bhavsar (HOD-IT/ICT, SETI)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

