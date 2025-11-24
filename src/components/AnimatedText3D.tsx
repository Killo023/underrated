'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface AnimatedText3DProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

const AnimatedText3D = ({ 
  text, 
  className = '', 
  delay = 0,
  duration = 0.5 
}: AnimatedText3DProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`relative ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ 
            opacity: 0,
            y: 50,
            rotateX: -90,
            scale: 0.5
          }}
          animate={isVisible ? {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1
          } : {}}
          transition={{
            duration,
            delay: delay + (index * 0.05),
            ease: "easeOut"
          }}
          whileHover={{
            y: -5,
            rotateX: 10,
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
          style={{
            transformStyle: "preserve-3d",
            display: "inline-block"
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  )
}

export default AnimatedText3D


