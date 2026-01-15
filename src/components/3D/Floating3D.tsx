'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

type ShapeType = 'cube' | 'sphere' | 'pyramid' | 'torus'

interface Floating3DProps {
  count?: number
  shapes?: ShapeType[]
  colors?: string[]
  size?: { min: number; max: number }
  className?: string
}

const Floating3D = ({ 
  count = 8,
  shapes = ['cube', 'sphere', 'pyramid'],
  colors = ['gold', 'silver'],
  size = { min: 40, max: 80 },
  className = ''
}: Floating3DProps) => {
  const [elements, setElements] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    shape: ShapeType
    color: string
    delay: number
    duration: number
  }>>([])

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: size.min + Math.random() * (size.max - size.min),
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4
    }))
    setElements(newElements)
  }, [count, shapes, colors, size])

  const renderShape = (element: typeof elements[0]) => {
    const colorClasses = {
      gold: 'from-gold-400/30 to-gold-600/20',
      silver: 'from-silver-300/30 to-silver-500/20'
    }

    const baseClasses = `absolute bg-gradient-to-br ${colorClasses[element.color as keyof typeof colorClasses] || colorClasses.gold}`

    switch (element.shape) {
      case 'cube':
        return (
          <div 
            className={baseClasses}
            style={{
              width: element.size,
              height: element.size,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              transform: 'rotateX(45deg) rotateY(45deg)',
              transformStyle: 'preserve-3d'
            }}
          />
        )
      case 'sphere':
        return (
          <div 
            className={`${baseClasses} rounded-full`}
            style={{
              width: element.size,
              height: element.size,
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%)`
            }}
          />
        )
      case 'pyramid':
        return (
          <div 
            className={baseClasses}
            style={{
              width: element.size,
              height: element.size,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              transform: 'rotateX(60deg) rotateY(45deg)',
              transformStyle: 'preserve-3d'
            }}
          />
        )
      case 'torus':
        return (
          <div 
            className={`${baseClasses} rounded-full`}
            style={{
              width: element.size,
              height: element.size,
              background: `conic-gradient(from 0deg, rgba(0, 31, 92, 0.3), transparent, rgba(0, 31, 92, 0.3))`
            }}
          />
        )
      default:
        return <div className={baseClasses} style={{ width: element.size, height: element.size }} />
    }
  }

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden -z-10 ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
            transformStyle: 'preserve-3d'
          }}
          initial={{ 
            opacity: 0,
            scale: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
          }}
          animate={{
            opacity: [0, 0.6, 0.4, 0.6, 0],
            scale: [0, 1, 1.2, 1, 0],
            rotateX: [0, 360, 720],
            rotateY: [0, 180, 360],
            rotateZ: [0, 90, 180, 270, 360],
            y: [0, -30, 30, -15, 0],
            x: [0, 15, -15, 8, 0]
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {renderShape(element)}
        </motion.div>
      ))}
    </div>
  )
}

export default Floating3D
