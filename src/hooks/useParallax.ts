'use client'

import { useScroll, useTransform, type ScrollOffset } from 'framer-motion'
import { RefObject } from 'react'

export const useParallax = (
  ref: RefObject<HTMLElement>,
  speed: number = 0.5,
  offset: ScrollOffset = ['start end', 'end start']
) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return { y, opacity, scale, scrollYProgress }
}
