'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  velocity: { x: number; y: number }
  life: number
  maxLife: number
}

const ParticleSystem = () => {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const createParticle = (): Particle => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      color: ['#22c55e', '#ef4444', '#3b82f6', '#8b5cf6', '#f59e0b'][Math.floor(Math.random() * 5)],
      velocity: {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      },
      life: 0,
      maxLife: Math.random() * 200 + 100
    })

    const updateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            life: particle.life + 1
          }))
          .filter(particle => particle.life < particle.maxLife)
          .concat(Array.from({ length: 2 }, createParticle))
      )
    }

    const interval = setInterval(updateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: 1 - (particle.life / particle.maxLife)
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: particle.maxLife / 50,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default ParticleSystem


