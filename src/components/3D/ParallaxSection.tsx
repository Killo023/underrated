'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  layers?: number
}

const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  className = '',
  layers = 3
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        y,
        opacity,
        scale
      }}
    >
      {/* Multiple parallax layers */}
      {Array.from({ length: layers }).map((_, index) => {
        const layerSpeed = speed * (1 - index * 0.2)
        const layerY = useTransform(scrollYProgress, [0, 1], [0, -50 * layerSpeed])
        
        return (
          <motion.div
            key={index}
            className="absolute inset-0"
            style={{
              y: layerY,
              zIndex: -index - 1,
              opacity: 0.1 + (index * 0.1)
            }}
          />
        )
      })}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default ParallaxSection
