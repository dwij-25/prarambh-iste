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

      // Create gradient background - calmer tech-friendly colors
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0F1A2E") // Deep blue
      gradient.addColorStop(0.4, "#1E2B52") // Calm blue-purple
      gradient.addColorStop(0.7, "#2A1B4A") // Soft purple
      gradient.addColorStop(1, "#0A0A18") // Dark blue-black
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid pattern - subtle tech grid
      ctx.globalAlpha = 0.08
      ctx.strokeStyle = "#4A88FF"
      ctx.lineWidth = 1

      const gridSize = 80
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

      // Draw animated geometric shapes - calmer, more tech-oriented
      const shapes = 20 // Fewer shapes for a calmer look

      for (let i = 0; i < shapes; i++) {
        // Position based on time - slower movement
        const angle = (i / shapes) * Math.PI * 2
        const radius = Math.min(canvas.width, canvas.height) * 0.25
        const x = canvas.width / 2 + Math.cos(angle + time.current * 0.02) * radius
        const y = canvas.height / 2 + Math.sin(angle + time.current * 0.02) * radius

        // Random size - smaller for subtlety
        const size = Math.random() * 80 + 40

        // Lower opacity for subtlety
        const opacity = Math.random() * 0.08 + 0.05

        // Shape type based on index
        const shapeType = i % 3

        // Color based on position - calmer tech colors
        const colors = ["#4A88FF", "#6A5ACD", "#5271FF", "#7B68EE", "#8A9EFF"]
        const colorIndex = Math.floor((angle / (Math.PI * 2)) * colors.length)
        const color = colors[colorIndex]

        ctx.globalAlpha = opacity
        ctx.fillStyle = color

        if (shapeType === 0) {
          // Circle
          ctx.beginPath()
          ctx.arc(x, y, size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else if (shapeType === 1) {
          // Square with rounded corners
          ctx.beginPath()
          ctx.roundRect(x - size / 2, y - size / 2, size, size, 20)
          ctx.fill()
        } else {
          // Hexagon
          ctx.beginPath()
          for (let j = 0; j < 6; j++) {
            const hexAngle = (Math.PI / 3) * j
            const hx = x + (size / 2) * Math.cos(hexAngle)
            const hy = y + (size / 2) * Math.sin(hexAngle)
            if (j === 0) {
              ctx.moveTo(hx, hy)
            } else {
              ctx.lineTo(hx, hy)
            }
          }
          ctx.closePath()
          ctx.fill()
        }
      }

      // Draw floating particles - subtle tech particles
      const particles = 100
      ctx.globalAlpha = 0.3

      for (let i = 0; i < particles; i++) {
        const x = (Math.sin(i * 0.1 + time.current * 0.005) * 0.5 + 0.5) * canvas.width
        const y = (Math.cos(i * 0.1 + time.current * 0.01) * 0.5 + 0.5) * canvas.height
        const size = Math.random() * 2 + 1

        // Alternate between white and blue particles
        ctx.fillStyle = i % 3 === 0 ? "#FFFFFF" : "#4A88FF"
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw digital circuit lines - more subtle, tech-oriented
      ctx.globalAlpha = 0.1
      ctx.strokeStyle = "#4A88FF"
      ctx.lineWidth = 1.5

      const lines = 10 // Fewer lines for a calmer look
      for (let i = 0; i < lines; i++) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height

        // Create more tech-oriented circuit paths
        ctx.beginPath()
        ctx.moveTo(startX, startY)

        // Add 2-3 segments to each line for circuit-like patterns
        let currentX = startX
        let currentY = startY

        const segments = 2 + Math.floor(Math.random() * 2)

        for (let j = 0; j < segments; j++) {
          // Make horizontal and vertical lines for circuit-like appearance
          if (j % 2 === 0) {
            // Horizontal segment
            const nextX = currentX + (Math.random() - 0.5) * canvas.width * 0.2
            ctx.lineTo(nextX, currentY)
            currentX = nextX
          } else {
            // Vertical segment
            const nextY = currentY + (Math.random() - 0.5) * canvas.height * 0.2
            ctx.lineTo(currentX, nextY)
            currentY = nextY
          }

          // Add subtle circuit nodes at corners
          ctx.fillStyle = "#4A88FF"
          ctx.beginPath()
          ctx.arc(currentX, currentY, 2, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.stroke()

        // Add circuit nodes
        ctx.fillStyle = "#4A88FF"
        ctx.beginPath()
        ctx.arc(startX, startY, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add some subtle pulsing glow effects
      const glowCount = 5
      for (let i = 0; i < glowCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = 40 + Math.sin(time.current * 0.03 + i) * 15

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, "rgba(74, 136, 255, 0.2)")
        gradient.addColorStop(1, "rgba(74, 136, 255, 0)")

        ctx.globalAlpha = 0.15
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add subtle data flow lines
      ctx.globalAlpha = 0.05
      ctx.strokeStyle = "#FFFFFF"
      ctx.lineWidth = 1

      const dataFlowCount = 5
      for (let i = 0; i < dataFlowCount; i++) {
        const y = (canvas.height / (dataFlowCount + 1)) * (i + 1)
        const amplitude = canvas.height * 0.05
        const frequency = 0.01
        const speed = 0.5

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

      ctx.globalAlpha = 1.0

      // Increment time for animation
      time.current += 1
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

