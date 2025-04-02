"use client"

import { useEffect, useRef } from "react"

export default function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Animation variables
    let animationFrameId: number
    const time = { current: 0 }

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawBackground()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Draw the geometric background
    function drawBackground() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background - deeper tech colors
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0A0E29") // Deeper blue
      gradient.addColorStop(0.4, "#141E3C") // Dark blue-purple
      gradient.addColorStop(0.7, "#1F1638") // Deep purple
      gradient.addColorStop(1, "#080818") // Very dark blue-black
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw digital grid - more futuristic
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = "#4A88FF"
      ctx.lineWidth = 0.5

      // Larger grid size for a more spacious, futuristic look
      const gridSize = 100
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Add digital circuit patterns - more tech-oriented
      ctx.globalAlpha = 0.08
      ctx.strokeStyle = "#4A88FF"
      ctx.lineWidth = 1

      // Create circuit-like patterns
      const circuitLines = 15
      for (let i = 0; i < circuitLines; i++) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height

        ctx.beginPath()
        ctx.moveTo(startX, startY)

        let currentX = startX
        let currentY = startY
        const segments = 3 + Math.floor(Math.random() * 3)

        for (let j = 0; j < segments; j++) {
          // Create 90-degree angles for circuit-like appearance
          if (j % 2 === 0) {
            // Horizontal segment
            const nextX = currentX + (Math.random() - 0.5) * canvas.width * 0.3
            ctx.lineTo(nextX, currentY)
            currentX = nextX
          } else {
            // Vertical segment
            const nextY = currentY + (Math.random() - 0.5) * canvas.height * 0.3
            ctx.lineTo(currentX, nextY)
            currentY = nextY
          }

          // Add circuit nodes at corners
          ctx.fillStyle = "#4A88FF"
          ctx.beginPath()
          ctx.arc(currentX, currentY, 1.5, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.stroke()
      }

      // Draw holographic data streams - futuristic element
      ctx.globalAlpha = 0.04
      ctx.strokeStyle = "#00FFFF"
      ctx.lineWidth = 1

      const dataStreams = 8
      for (let i = 0; i < dataStreams; i++) {
        const y = (canvas.height / (dataStreams + 1)) * (i + 1)
        const amplitude = canvas.height * 0.03
        const frequency = 0.005
        const speed = 0.2 // Slower speed

        ctx.beginPath()

        for (let x = 0; x < canvas.width; x += 5) {
          const waveY = y + Math.sin(x * frequency + time.current * speed) * amplitude

          if (x === 0) {
            ctx.moveTo(x, waveY)
          } else {
            ctx.lineTo(x, waveY)
          }
        }

        ctx.stroke()
      }

      // Add floating tech particles - more subtle
      const particles = 80
      ctx.globalAlpha = 0.2

      for (let i = 0; i < particles; i++) {
        // Slower movement
        const x = (Math.sin(i * 0.1 + time.current * 0.002) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(i * 0.1 + time.current * 0.003) * 0.5 + 0.5) * canvas.height
        const size = Math.random() * 1.5 + 0.5

        // Use tech colors
        ctx.fillStyle = i % 4 === 0 ? "#00FFFF" : i % 4 === 1 ? "#4A88FF" : i % 4 === 2 ? "#8A2BE2" : "#FFFFFF"
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add digital code matrix effect - very tech
      ctx.globalAlpha = 0.1
      ctx.fillStyle = "#00FF00"
      ctx.font = "10px monospace"

      const characters = "01"
      const columnCount = Math.floor(canvas.width / 20)
      const rowCount = Math.floor(canvas.height / 20)

      for (let i = 0; i < columnCount; i++) {
        for (let j = 0; j < rowCount; j++) {
          if (Math.random() < 0.05) {
            // Only show some characters for a sparse effect
            const char = characters.charAt(Math.floor(Math.random() * characters.length))
            ctx.fillText(char, i * 20, j * 20)
          }
        }
      }

      // Add subtle pulsing glow effects - tech ambiance
      const glowCount = 5
      for (let i = 0; i < glowCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = 60 + Math.sin(time.current * 0.01 + i) * 20 // Slower pulsing

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, "rgba(74, 136, 255, 0.1)")
        gradient.addColorStop(1, "rgba(74, 136, 255, 0)")

        ctx.globalAlpha = 0.1
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add hexagonal grid pattern - futuristic tech element
      ctx.globalAlpha = 0.03
      ctx.strokeStyle = "#8A2BE2"
      ctx.lineWidth = 0.5

      const hexSize = 120
      const hexHeight = hexSize * Math.sqrt(3)
      const hexWidth = hexSize * 2

      for (let row = -1; row < canvas.height / hexHeight + 1; row++) {
        for (let col = -1; col < canvas.width / hexWidth + 1; col++) {
          const centerX = col * hexWidth + ((row % 2) * hexWidth) / 2
          const centerY = row * hexHeight

          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = ((2 * Math.PI) / 6) * i
            const x = centerX + hexSize * Math.cos(angle)
            const y = centerY + hexSize * Math.sin(angle)

            if (i === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }
          ctx.closePath()
          ctx.stroke()
        }
      }

      ctx.globalAlpha = 1.0

      // Increment time for animation - slower speed
      time.current += 0.5
      animationFrameId = requestAnimationFrame(drawBackground)
    }

    drawBackground()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}

