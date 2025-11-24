'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  color: string
  shape: 'cube' | 'sphere' | 'pyramid' | 'torus'
  delay: number
}

const FloatingElements3D = () => {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      const colors = [
        'from-primary-400/20 to-primary-600/20',
        'from-secondary-400/20 to-secondary-600/20',
        'from-blue-400/20 to-blue-600/20',
        'from-purple-400/20 to-purple-600/20',
        'from-green-400/20 to-green-600/20',
        'from-pink-400/20 to-pink-600/20'
      ]
      const shapes: ('cube' | 'sphere' | 'pyramid' | 'torus')[] = ['cube', 'sphere', 'pyramid', 'torus']

      for (let i = 0; i < 8; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 20,
          color: colors[Math.floor(Math.random() * colors.length)],
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          delay: Math.random() * 2
        })
      }
      setElements(newElements)
    }

    generateElements()
  }, [])

  const renderShape = (element: FloatingElement) => {
    const baseClasses = `absolute w-${Math.floor(element.size/4)} h-${Math.floor(element.size/4)} bg-gradient-to-br ${element.color} rounded-lg`
    
    switch (element.shape) {
      case 'cube':
        return (
          <div className={`${baseClasses} transform rotate-45`} style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transform: 'rotateX(45deg) rotateY(45deg)'
          }} />
        )
      case 'sphere':
        return (
          <div className={`${baseClasses} rounded-full`} style={{
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 50%), linear-gradient(135deg, ${element.color})`
          }} />
        )
      case 'pyramid':
        return (
          <div className={`${baseClasses}`} style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            transform: 'rotateX(60deg) rotateY(45deg)'
          }} />
        )
      case 'torus':
        return (
          <div className={`${baseClasses} rounded-full`} style={{
            background: `conic-gradient(from 0deg, ${element.color}, transparent, ${element.color})`,
            transform: 'rotateX(60deg)'
          }} />
        )
      default:
        return <div className={baseClasses} />
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
          }}
          initial={{ 
            opacity: 0,
            scale: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0
          }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [0, 1, 1.2, 1, 0],
            rotateX: [0, 360, 720],
            rotateY: [0, 180, 360],
            rotateZ: [0, 90, 180, 270, 360],
            y: [0, -20, 20, -10, 0],
            x: [0, 10, -10, 5, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {renderShape(element)}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements3D


