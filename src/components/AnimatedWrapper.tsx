'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface AnimatedWrapperProps {
  children: ReactNode
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  delay?: number
  duration?: number
  className?: string
}

const AnimatedWrapper = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 0.6,
  className = ''
}: AnimatedWrapperProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const animations = {
    fadeIn: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 20,
    },
    slideUp: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 50,
    },
    slideLeft: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : 50,
    },
    slideRight: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -50,
    },
    scale: {
      opacity: inView ? 1 : 0,
      scale: inView ? 1 : 0.8,
    },
    rotate: {
      opacity: inView ? 1 : 0,
      rotate: inView ? 0 : 10,
      scale: inView ? 1 : 0.9,
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={animations[animation]}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedWrapper
