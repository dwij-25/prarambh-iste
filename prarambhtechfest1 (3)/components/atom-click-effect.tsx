"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AtomClickEffectProps {
  x: number
  y: number
  onAnimationComplete: () => void
}

export default function AtomClickEffect({ x, y, onAnimationComplete }: AtomClickEffectProps) {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([])

  // Generate particles on mount
  useEffect(() => {
    const particleCount = 12
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 0.2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{ left: x, top: y }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Center dot */}
      <motion.div
        className="absolute rounded-full bg-purple-400"
        style={{
          width: 8,
          height: 8,
          left: -4,
          top: -4,
          boxShadow: "0 0 10px rgba(168, 85, 247, 0.8)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: -particle.size / 2,
            top: -particle.size / 2,
            boxShadow: "0 0 5px rgba(168, 85, 247, 0.6)",
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.2,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg className="absolute" style={{ left: -150, top: -150 }} width="300" height="300">
        {particles.map((particle, i) => (
          <motion.line
            key={i}
            stroke="rgba(168, 85, 247, 0.3)"
            strokeWidth="1"
            x1="150"
            y1="150"
            x2="150"
            y2="150"
            initial={{ opacity: 0 }}
            animate={{
              x2: particle.x + 150,
              y2: particle.y + 150,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 1.2,
              delay: particle.delay,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  )
}

