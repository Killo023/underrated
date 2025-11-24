'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Button3DProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const Button3D = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  disabled = false 
}: Button3DProps) => {
  const [isPressed, setIsPressed] = useState(false)

  const variants = {
    primary: 'bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-primary-500/50',
    secondary: 'bg-gradient-to-br from-gray-500 to-gray-700 text-white shadow-gray-500/50',
    accent: 'bg-gradient-to-br from-secondary-500 to-secondary-700 text-white shadow-secondary-500/50'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-lg font-semibold
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
      onClick={disabled ? undefined : onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      whileHover={!disabled ? {
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      } : {}}
      whileTap={!disabled ? {
        scale: 0.95,
        rotateX: -2,
        rotateY: -2
      } : {}}
      animate={{
        rotateX: isPressed ? -2 : 0,
        rotateY: isPressed ? -2 : 0,
        scale: isPressed ? 0.95 : 1,
        boxShadow: isPressed 
          ? '0 5px 15px rgba(0,0,0,0.2)' 
          : '0 10px 25px rgba(0,0,0,0.2)'
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
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
          ease: "easeInOut"
        }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default Button3D


