'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface ElegantBackgroundProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

const ElegantBackground = ({ 
  className = '',
  intensity = 'medium'
}: ElegantBackgroundProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const intensityConfig = {
    low: { shapes: 6, circles: 4, opacity: 0.05 },
    medium: { shapes: 12, circles: 8, opacity: 0.1 },
    high: { shapes: 18, circles: 12, opacity: 0.15 }
  }

  const config = intensityConfig[intensity]

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-elegant"
        animate={{
          background: [
            'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
            'linear-gradient(225deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
            'linear-gradient(315deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
            'linear-gradient(45deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
            'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Subtle navy gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(0, 31, 92, 0.1), transparent 70%)'
        }}
        animate={{
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(config.shapes)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotateX: [0, 360, 720],
            rotateY: [0, 180, 360],
            rotateZ: [0, 90, 180, 270, 360],
            scale: [1, 1.5, 0.8, 1.2, 1],
            opacity: [config.opacity * 0.5, config.opacity, config.opacity * 0.5]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {/* Elegant 3D Cube */}
          <div className="relative w-16 h-16">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-gold-600/10"
              style={{
                transform: 'rotateX(45deg) rotateY(45deg)',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                transformStyle: 'preserve-3d'
              }}
              animate={{
                rotateX: [45, 405, 45],
                rotateY: [45, 225, 45],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Animated circles */}
      {[...Array(config.circles)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 60 + Math.random() * 80,
            height: 60 + Math.random() * 80,
          }}
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -200, 100, 0],
            scale: [1, 1.5, 0.8, 1.2, 1],
            opacity: [config.opacity * 0.3, config.opacity, config.opacity * 0.5],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent 70%), 
                          linear-gradient(135deg, rgba(0, 31, 92, 0.1), rgba(0, 25, 77, 0.05))`
            }}
          />
        </motion.div>
      ))}

      {/* Elegant lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-0.5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 100 + Math.random() * 200,
            background: `linear-gradient(90deg, transparent, rgba(0, 31, 92, 0.2), transparent)`
          }}
          animate={{
            x: [0, 300, -200, 0],
            y: [0, -100, 200, 0],
            opacity: [0, 0.4, 0.2, 0.3, 0],
            scaleX: [0, 1, 1.5, 1, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )
}

export default ElegantBackground
