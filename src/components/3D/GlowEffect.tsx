'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowEffectProps {
  children: ReactNode
  color?: 'gold' | 'silver' | 'white'
  intensity?: 'low' | 'medium' | 'high'
  className?: string
  animate?: boolean
}

const GlowEffect = ({ 
  children, 
  color = 'gold',
  intensity = 'medium',
  className = '',
  animate = true
}: GlowEffectProps) => {
  const glowColors = {
    gold: {
      low: 'shadow-[0_0_10px_rgba(255,215,0,0.3)]',
      medium: 'shadow-[0_0_20px_rgba(255,215,0,0.4),0_0_40px_rgba(255,215,0,0.2)]',
      high: 'shadow-[0_0_30px_rgba(255,215,0,0.6),0_0_60px_rgba(255,215,0,0.4),0_0_90px_rgba(255,215,0,0.2)]'
    },
    silver: {
      low: 'shadow-[0_0_10px_rgba(192,192,192,0.3)]',
      medium: 'shadow-[0_0_20px_rgba(192,192,192,0.4),0_0_40px_rgba(192,192,192,0.2)]',
      high: 'shadow-[0_0_30px_rgba(192,192,192,0.6),0_0_60px_rgba(192,192,192,0.4),0_0_90px_rgba(192,192,192,0.2)]'
    },
    white: {
      low: 'shadow-[0_0_10px_rgba(255,255,255,0.3)]',
      medium: 'shadow-[0_0_20px_rgba(255,255,255,0.4),0_0_40px_rgba(255,255,255,0.2)]',
      high: 'shadow-[0_0_30px_rgba(255,255,255,0.6),0_0_60px_rgba(255,255,255,0.4),0_0_90px_rgba(255,255,255,0.2)]'
    }
  }

  const glowClass = glowColors[color][intensity]

  return (
    <motion.div
      className={`relative ${className}`}
      animate={animate ? {
        boxShadow: [
          glowColors[color][intensity],
          glowColors[color][intensity === 'high' ? 'medium' : 'high'],
          glowColors[color][intensity]
        ]
      } : {}}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      {/* Glow layers */}
      <div className={`absolute inset-0 ${glowClass} blur-xl -z-10`} />
      <div className={`absolute inset-0 ${glowClass} blur-2xl -z-10 opacity-50`} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}

export default GlowEffect
