'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface GradientMeshProps {
  className?: string
  colors?: string[]
}

const GradientMesh = ({ 
  className = '',
  colors = ['rgba(0, 31, 92, 0.1)', 'rgba(192, 192, 192, 0.1)', 'rgba(0, 0, 0, 0.2)']
}: GradientMeshProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${colors[0]} 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${colors[1]} 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, ${colors[2]} 0%, transparent 70%),
            linear-gradient(135deg, #000000 0%, #1a1a1a 100%)
          `
        }}
        animate={{
          background: [
            `
              radial-gradient(circle at 20% 30%, ${colors[0]} 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, ${colors[1]} 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, ${colors[2]} 0%, transparent 70%),
              linear-gradient(135deg, #000000 0%, #1a1a1a 100%)
            `,
            `
              radial-gradient(circle at 80% 30%, ${colors[0]} 0%, transparent 50%),
              radial-gradient(circle at 20% 70%, ${colors[1]} 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, ${colors[2]} 0%, transparent 70%),
              linear-gradient(225deg, #000000 0%, #1a1a1a 100%)
            `,
            `
              radial-gradient(circle at 50% 20%, ${colors[0]} 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, ${colors[1]} 0%, transparent 50%),
              radial-gradient(circle at 30% 50%, ${colors[2]} 0%, transparent 70%),
              linear-gradient(315deg, #000000 0%, #1a1a1a 100%)
            `,
            `
              radial-gradient(circle at 20% 30%, ${colors[0]} 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, ${colors[1]} 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, ${colors[2]} 0%, transparent 70%),
              linear-gradient(135deg, #000000 0%, #1a1a1a 100%)
            `
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Animated mesh overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%),
            linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  )
}

export default GradientMesh
