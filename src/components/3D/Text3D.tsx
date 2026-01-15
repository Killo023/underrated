'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Text3DProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  depth?: number
  gradient?: 'gold' | 'silver' | 'elegant' | 'none'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Text3D = ({ 
  text, 
  className = '', 
  delay = 0,
  duration = 0.5,
  depth = 3,
  gradient = 'elegant',
  size = 'lg'
}: Text3DProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  const sizeClasses = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl lg:text-5xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl',
    xl: 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl'
  }

  const gradientClasses = {
    gold: 'text-gradient-gold',
    silver: 'text-gradient-silver',
    elegant: 'text-gradient-elegant',
    none: 'text-white'
  }

  // Create multiple layers for depth
  const layers = Array.from({ length: depth }, (_, i) => i)

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Shadow layers for depth */}
      {layers.map((layer, index) => (
        <motion.span
          key={`shadow-${index}`}
          className={`absolute inset-0 ${sizeClasses[size]} font-bold ${gradientClasses[gradient]}`}
          style={{
            transform: `translateZ(-${(index + 1) * 2}px)`,
            opacity: 0.1 - (index * 0.03),
            filter: 'blur(2px)',
            zIndex: -index - 1
          }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 0.1 - (index * 0.03) } : { opacity: 0 }}
          transition={{ duration, delay: delay + (index * 0.05) }}
        >
          {text}
        </motion.span>
      ))}
      
      {/* Main text with character animation */}
      <div className="relative">
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            className={`inline-block ${sizeClasses[size]} font-bold ${gradientClasses[gradient]}`}
            initial={{ 
              opacity: 0,
              y: 50,
              rotateX: -90,
              scale: 0.5,
              filter: 'blur(10px)'
            }}
            animate={isVisible ? {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              filter: 'blur(0px)'
            } : {}}
            transition={{
              duration,
              delay: delay + (index * 0.05),
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{
              y: -5,
              rotateX: 10,
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            style={{
              transformStyle: 'preserve-3d',
              display: 'inline-block',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 61, 153, 0.2)'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
      
      {/* Highlight layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: delay + 0.5 }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          mixBlendMode: 'overlay',
          transform: 'translateZ(5px)'
        }}
      />
    </div>
  )
}

export default Text3D
