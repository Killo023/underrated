'use client'

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useState, useRef, ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  magneticStrength?: number
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const MagneticButton = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  magneticStrength = 0.3,
  type = 'button',
  disabled = false
}: MagneticButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const shouldReduceMotion = useReducedMotion()
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })
  
  const effectiveStrength = shouldReduceMotion ? 0 : magneticStrength
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15 * effectiveStrength, -15 * effectiveStrength])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15 * effectiveStrength, 15 * effectiveStrength])
  
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-20 * effectiveStrength, 20 * effectiveStrength])
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-20 * effectiveStrength, 20 * effectiveStrength])
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
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
  
  const variants = {
    primary: 'bg-black hover:bg-gray-900 text-white shadow-elegant',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 glass-elegant',
    accent: 'bg-gradient-gold text-black shadow-glow-gold'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseMove={disabled ? undefined : handleMouseMove}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`
        relative overflow-hidden rounded-lg font-semibold
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      style={{
        x: !disabled && isHovered ? translateX : 0,
        y: !disabled && isHovered ? translateY : 0,
        rotateX: !disabled && isHovered ? rotateX : 0,
        rotateY: !disabled && isHovered ? rotateY : 0,
        scale: isPressed ? 0.95 : !disabled && isHovered ? 1.05 : 1,
        transformStyle: 'preserve-3d'
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25
      }}
      whileHover={!disabled ? {
        boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 60px rgba(0, 119, 230, 0.3)'
      } : {}}
      whileTap={!disabled ? {
        scale: 0.95,
        rotateX: -2,
        rotateY: -2
      } : {}}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut'
        }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  )
}

export default MagneticButton
