"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Lightbulb, FileText, Gamepad2, Palette, Clock, Trophy, Music } from "lucide-react"

interface EventsSectionProps {
  id: string
}

const technicalEvents = [
  {
    id: "code-crackers",
    title: "CODE CRACKERS",
    description: "Solve mind-bending coding challenges!",
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
    description: "Showcase your innovative hardware & software projects",
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
    description: "Present ideas with creativity and impact!",
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
    description: "Score goals with your robot in an intense showdown!",
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
    description: "Design creative logos under time pressure!",
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
    description: "Compete in an intense LAN gaming showdown!",
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
    description: "Quick challenges, 50 seconds to win!",
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
    description: "Sketching meets creative competition!",
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
    description: "Build the tallest and strongest straw structure",
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
    description: "Test your filmy knowledge!",
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

export default function EventsSection({ id }: EventsSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("technical")

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
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20"
    >
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-orbitron text-glow">Events</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mb-8" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our exciting lineup of technical and non-technical events designed to challenge your skills and
            creativity.
          </p>
        </motion.div>

        <Tabs defaultValue="technical" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-purple-900/30 rounded-full">
              <TabsTrigger
                value="technical"
                className="data-[state=active]:bg-purple-600 rounded-full transition-all duration-300 hover:bg-purple-800/50 font-orbitron"
              >
                Technical Events
              </TabsTrigger>
              <TabsTrigger
                value="non-technical"
                className="data-[state=active]:bg-purple-600 rounded-full transition-all duration-300 hover:bg-purple-800/50 font-orbitron"
              >
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
                  <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 rounded-3xl overflow-hidden hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] card-futuristic">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {event.icon}
                        <CardTitle className="text-white font-orbitron">{event.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-300">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-2 font-orbitron">Rules</h4>
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
                          <h4 className="text-sm font-medium text-purple-400 mb-1 font-orbitron">Registration Fee</h4>
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
                  <Card className="bg-black/30 backdrop-blur-sm border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 rounded-3xl overflow-hidden hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] card-futuristic">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {event.icon}
                        <CardTitle className="text-white font-orbitron">{event.title}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-300">{event.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-purple-400 mb-2 font-orbitron">Rules</h4>
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
                          <h4 className="text-sm font-medium text-purple-400 mb-1 font-orbitron">Registration Fee</h4>
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

