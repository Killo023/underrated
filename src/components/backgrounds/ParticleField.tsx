'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

interface ParticleFieldProps {
  count?: number
  className?: string
  color?: 'gold' | 'silver' | 'white'
}

const ParticleField = ({ 
  count = 50,
  className = '',
  color = 'gold'
}: ParticleFieldProps) => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5
    }))
    setParticles(newParticles)
  }, [count])

  if (!mounted) return null

  const colorClasses = {
    gold: 'bg-gold-400',
    silver: 'bg-silver-300',
    white: 'bg-white'
  }

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${colorClasses[color]} opacity-60`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 2}px ${colorClasses[color]}`
          }}
          animate={{
            y: [0, -100, -200, -300],
            x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 50 - 25],
            opacity: [0.6, 1, 0.8, 0],
            scale: [1, 1.2, 1, 0.5]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}

export default ParticleField
