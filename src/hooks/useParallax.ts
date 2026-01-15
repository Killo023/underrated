'use client'

import { useScroll, useTransform } from 'framer-motion'
import { RefObject } from 'react'

type ScrollOffset = 
  | [string, string]
  | string
  | number
  | Array<number | string>

export const useParallax = (
  ref: RefObject<HTMLElement>,
  speed: number = 0.5,
  offset: ScrollOffset = ['start end', 'end start']
) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return { y, opacity, scale, scrollYProgress }
}
