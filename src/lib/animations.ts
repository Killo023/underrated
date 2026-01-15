// Animation presets and utilities for elegant 3D animations

export const animationPresets = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  slideDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  
  rotate: {
    initial: { opacity: 0, rotate: -10, scale: 0.9 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  // 3D Animations
  rotate3D: {
    initial: { opacity: 0, rotateX: -20, rotateY: 20, scale: 0.9 },
    animate: { opacity: 1, rotateX: 0, rotateY: 0, scale: 1 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  
  flip3D: {
    initial: { opacity: 0, rotateY: -90 },
    animate: { opacity: 1, rotateY: 0 },
    transition: { duration: 0.7, ease: 'easeOut' }
  },
  
  // Elegant animations
  elegantFade: {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  
  elegantSlide: {
    initial: { opacity: 0, x: -30, y: 20 },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  },
  
  // Stagger animations
  staggerContainer: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const hoverAnimations = {
  lift: {
    scale: 1.05,
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  
  lift3D: {
    scale: 1.05,
    y: -8,
    rotateX: 5,
    rotateY: 5,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  
  glow: {
    boxShadow: '0 0 30px rgba(0, 31, 92, 0.5)',
    scale: 1.02,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  
  tilt: {
    rotateY: 10,
    rotateX: -5,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
}

export const getStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  return baseDelay * index
}

export const createStaggerAnimation = (childrenCount: number, baseDelay: number = 0.1) => {
  return {
    container: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        staggerChildren: baseDelay,
        delayChildren: 0.2
      }
    },
    item: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }
}
