'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { createStaggerAnimation } from '@/lib/animations'

interface StaggerChildrenProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'scale'
}

const StaggerChildren = ({
  children,
  staggerDelay = 0.1,
  className = '',
  animation = 'slideUp'
}: StaggerChildrenProps) => {
  const staggerAnim = createStaggerAnimation(
    Array.isArray(children) ? children.length : 1,
    staggerDelay
  )

  const itemAnimations = {
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    slideUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    slideLeft: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } }
  }

  const itemAnim = itemAnimations[animation]

  return (
    <motion.div
      initial={staggerAnim.container.initial}
      animate={staggerAnim.container.animate}
      transition={staggerAnim.container.transition}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            initial={itemAnim.initial}
            animate={itemAnim.animate}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: staggerDelay * index
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={itemAnim.initial}
          animate={itemAnim.animate}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}

export default StaggerChildren
