'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedBackground3D = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, #f0fdf4, #dcfce7, #bbf7d0)',
            'linear-gradient(135deg, #fef2f2, #fee2e2, #fecaca)',
            'linear-gradient(225deg, #f0f9ff, #e0f2fe, #bae6fd)',
            'linear-gradient(315deg, #faf5ff, #f3e8ff, #e9d5ff)',
            'linear-gradient(45deg, #f0fdf4, #dcfce7, #bbf7d0)'
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(12)].map((_, i) => (
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
            opacity: [0.1, 0.3, 0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* 3D Cube */}
          <div className="relative w-16 h-16">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20"
              style={{
                transform: 'rotateX(45deg) rotateY(45deg)',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
              animate={{
                rotateX: [45, 405, 45],
                rotateY: [45, 225, 45],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-secondary-400/20 to-secondary-600/20"
              style={{
                transform: 'rotateX(45deg) rotateY(45deg) translateZ(20px)',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
              animate={{
                rotateX: [45, 405, 45],
                rotateY: [45, 225, 45],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Animated circles */}
      {[...Array(8)].map((_, i) => (
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
            opacity: [0.05, 0.2, 0.1, 0.15, 0.05],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent 70%), 
                          linear-gradient(135deg, 
                            ${i % 2 === 0 ? '#22c55e' : '#ef4444'}, 
                            ${i % 2 === 0 ? '#16a34a' : '#dc2626'})`
            }}
          />
        </motion.div>
      ))}

      {/* Animated lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-0.5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 100 + Math.random() * 200,
            background: `linear-gradient(90deg, transparent, ${
              i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#ef4444' : '#3b82f6'
            }, transparent)`
          }}
          animate={{
            x: [0, 300, -200, 0],
            y: [0, -100, 200, 0],
            opacity: [0, 0.6, 0.2, 0.4, 0],
            scaleX: [0, 1, 1.5, 1, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default AnimatedBackground3D


