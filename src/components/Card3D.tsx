'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  perspective?: number
}

const Card3D = ({ 
  children, 
  className = '', 
  intensity = 20,
  perspective = 1000 
}: Card3DProps) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    setRotateY((mouseX / rect.width) * intensity)
    setRotateX(-(mouseY / rect.height) * intensity)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={`transform-gpu ${className}`}
      style={{ perspective }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Card3D


