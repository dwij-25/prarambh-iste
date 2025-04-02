"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Lightbulb, FileText, Gamepad2, Palette, Clock, Trophy, Music } from "lucide-react"

const technicalEvents = [
  {
    id: "code-crackers",
    title: "CODE CRACKERS",
    description: "A competitive coding challenge to test your programming skills",
    rules: [
      "Individual participation",
      "Time limit: 2 hours",
      "Languages allowed: C, C++, Java, Python",
      "Internet access is not allowed during the competition",
    ],
    fee: "₹200 per participant",
    icon: <Code className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "innovation-ignite",
    title: "INNOVATION IGNITE",
    description: "Showcase your innovative ideas and solutions to real-world problems",
    rules: [
      "Team of 2-3 members",
      "Presentation time: 10 minutes",
      "Q&A session: 5 minutes",
      "Working prototype/model is preferred",
    ],
    fee: "₹300 per team",
    icon: <Lightbulb className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "poster-presentation",
    title: "POSTER PRESENTATION",
    description: "Present your research or project through an informative poster",
    rules: [
      "Individual or team of 2 members",
      "Poster size: 3x2 feet",
      "Presentation time: 5 minutes",
      "Topics must be related to technology or innovation",
    ],
    fee: "₹150 per entry",
    icon: <FileText className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "robo-soccer",
    title: "ROBO SOCCER",
    description: "Design and program robots to play soccer in an exciting tournament",
    rules: [
      "Team of 3-4 members",
      "Robot dimensions: Max 30x30x30 cm",
      "Match duration: 5 minutes",
      "Robots must be autonomous or remote-controlled",
    ],
    fee: "₹500 per team",
    icon: <Gamepad2 className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "logo-thon",
    title: "LOGO-THON",
    description: "Design creative and impactful logos for given themes or organizations",
    rules: [
      "Individual participation",
      "Time limit: 1.5 hours",
      "Software allowed: Adobe Photoshop, Illustrator, or similar",
      "Participants must bring their own laptops",
    ],
    fee: "₹200 per participant",
    icon: <Palette className="h-6 w-6 text-purple-400" />,
  },
]

const nonTechnicalEvents = [
  {
    id: "valorant",
    title: "VALORANT",
    description: "Compete in the popular tactical shooter game Valorant",
    rules: [
      "Team of 5 members",
      "Tournament format: Knockout",
      "Maps will be decided by the organizers",
      "Players must bring their own peripherals",
    ],
    fee: "₹500 per team",
    icon: <Gamepad2 className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "minute-madness",
    title: "MINUTE MADNESS",
    description: "Complete fun challenges within a minute in this exciting game",
    rules: [
      "Individual participation",
      "Multiple rounds with different challenges",
      "Participants will be judged on speed and accuracy",
      "Final decision rests with the judges",
    ],
    fee: "₹100 per participant",
    icon: <Clock className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "drawing-dash",
    title: "DRAWING DASH",
    description: "Showcase your artistic skills in this timed drawing competition",
    rules: [
      "Individual participation",
      "Time limit: 1 hour",
      "Theme will be announced on the spot",
      "All drawing materials will be provided",
    ],
    fee: "₹150 per participant",
    icon: <Palette className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "straw-fusion",
    title: "STRAW FUSION",
    description: "Build creative structures using only straws and connectors",
    rules: [
      "Team of 2 members",
      "Time limit: 45 minutes",
      "Materials will be provided",
      "Structures will be judged on creativity, stability, and height",
    ],
    fee: "₹200 per team",
    icon: <Trophy className="h-6 w-6 text-purple-400" />,
  },
  {
    id: "bollywood-frenzy",
    title: "BOLLYWOOD FRENZY",
    description: "Test your knowledge of Bollywood movies, songs, and celebrities",
    rules: [
      "Team of 2-3 members",
      "Multiple rounds with different formats",
      "Questions will cover all eras of Bollywood",
      "Use of mobile phones is strictly prohibited",
    ],
    fee: "₹300 per team",
    icon: <Music className="h-6 w-6 text-purple-400" />,
  },
]

export default function Events() {
  const [activeTab, setActiveTab] = useState("technical")
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
    <section id="events" className="py-20 bg-gradient-to-b from-purple-950 to-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Events</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our exciting lineup of technical and non-technical events designed to challenge your skills and
            creativity.
          </p>
        </motion.div>

        <Tabs defaultValue="technical" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-purple-900/30">
              <TabsTrigger value="technical" className="data-[state=active]:bg-purple-600">
                Technical Events
              </TabsTrigger>
              <TabsTrigger value="non-technical" className="data-[state=active]:bg-purple-600">
                Non-Technical Events
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="technical">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView && activeTab === "technical" ? "visible" : "hidden"}
            >
              {technicalEvents.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Card className="bg-purple-900/20 border-purple-800 hover:bg-purple-900/30 transition-colors duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {event.icon}
                        <CardTitle className="text-white">{event.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-300">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-2">Rules</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {event.rules.map((rule, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                <span>{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-1">Registration Fee</h4>
                          <p className="text-white">{event.fee}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="non-technical">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView && activeTab === "non-technical" ? "visible" : "hidden"}
            >
              {nonTechnicalEvents.map((event) => (
                <motion.div key={event.id} variants={itemVariants}>
                  <Card className="bg-purple-900/20 border-purple-800 hover:bg-purple-900/30 transition-colors duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {event.icon}
                        <CardTitle className="text-white">{event.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-300">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-2">Rules</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            {event.rules.map((rule, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                <span>{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-1">Registration Fee</h4>
                          <p className="text-white">{event.fee}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

