"use client"

import { useEffect, useRef, type RefObject } from "react"

export function useScrollSnap(
  containerRef: RefObject<HTMLElement>,
  sectionIds: string[],
  onSectionChange?: (index: number) => void,
) {
  const isScrollingRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      if (isScrollingRef.current) return

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Set a timeout to detect when scrolling stops
      timeoutRef.current = setTimeout(() => {
        const containerHeight = container.clientHeight
        const scrollTop = container.scrollTop
        const currentSectionIndex = Math.round(scrollTop / containerHeight)

        // Only snap if we're not already at a section boundary
        const isAtSectionBoundary = Math.abs(scrollTop - currentSectionIndex * containerHeight) < 10

        if (!isAtSectionBoundary) {
          isScrollingRef.current = true

          container.scrollTo({
            top: currentSectionIndex * containerHeight,
            behavior: "smooth",
          })

          // Call the callback with the new section index
          if (onSectionChange) {
            onSectionChange(currentSectionIndex)
          }

          // Reset the scrolling flag after animation completes
          setTimeout(() => {
            isScrollingRef.current = false
          }, 1000)
        } else if (onSectionChange) {
          onSectionChange(currentSectionIndex)
        }
      }, 100)
    }

    container.addEventListener("scroll", handleScroll)

    return () => {
      container.removeEventListener("scroll", handleScroll)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [containerRef, onSectionChange])

  // Function to scroll to a specific section
  const scrollToSection = (index: number) => {
    const container = containerRef.current
    if (!container) return

    isScrollingRef.current = true

    container.scrollTo({
      top: index * container.clientHeight,
      behavior: "smooth",
    })

    // Reset the scrolling flag after animation completes
    setTimeout(() => {
      isScrollingRef.current = false
      if (onSectionChange) {
        onSectionChange(index)
      }
    }, 1000)
  }

  return { scrollToSection }
}

