'use client'

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useState, useRef } from 'react'

interface EnhancedCard3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  glowColor?: 'gold' | 'silver' | 'none'
  glassmorphism?: boolean
}

const EnhancedCard3D = ({ 
  children, 
  className = '', 
  intensity = 20,
  glowColor = 'none',
  glassmorphism = true
}: EnhancedCard3DProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })
  
  const effectiveIntensity = shouldReduceMotion ? 0 : intensity
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [effectiveIntensity, -effectiveIntensity])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-effectiveIntensity, effectiveIntensity])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }
  
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }
  
  const glowClasses = {
    gold: 'shadow-glow-gold',
    silver: 'shadow-glow-silver',
    none: ''
  }

  return (
    <motion.div
      ref={cardRef}
      className={`transform-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
    >
      <motion.div
        className={`
          w-full h-full
          ${glassmorphism ? 'glass-elegant' : 'bg-white/5'}
          rounded-2xl
          ${glowClasses[glowColor]}
          transition-all duration-300
        `}
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered 
            ? '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 0 40px rgba(0, 119, 230, 0.2)'
            : '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
        }}
        style={{
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Depth layers for 3D effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            transform: 'translateZ(-20px)',
            filter: 'blur(10px)'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
          {children}
        </div>
        
        {/* Shine effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
              transform: 'translateZ(10px)'
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default EnhancedCard3D
