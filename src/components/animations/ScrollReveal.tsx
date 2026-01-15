'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { animationPresets } from '@/lib/animations'

interface ScrollRevealProps {
  children: ReactNode
  animation?: keyof typeof animationPresets
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

const ScrollReveal = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration,
  threshold = 0.1,
  className = '',
  once = true
}: ScrollRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once,
    amount: threshold,
    margin: '0px 0px -100px 0px'
  })

  const preset = animationPresets[animation]
  const customDuration = duration !== undefined ? duration : preset.transition.duration

  return (
    <motion.div
      ref={ref}
      initial={preset.initial}
      animate={isInView ? preset.animate : preset.initial}
      transition={{
        ...preset.transition,
        duration: customDuration,
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
