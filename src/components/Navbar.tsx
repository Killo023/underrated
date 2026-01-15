'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import MagneticButton from './3D/MagneticButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-elegant shadow-premium-lg backdrop-blur-xl' 
          : 'glass-dark backdrop-blur-md'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Elegant border gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo with 3D effect */}
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Link href="/" className="flex items-center">
              <Logo size="md" showText={true} />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={item.href}>
                  <motion.span
                    className="relative text-white/90 font-medium text-sm uppercase tracking-wider cursor-pointer group"
                    whileHover={{ 
                      y: -2,
                      color: '#1a75ff'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    {/* Underline effect */}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-600"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Glow effect on hover */}
                    <motion.span
                      className="absolute inset-0 blur-sm opacity-0 bg-gold-500/50"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <MagneticButton
                variant="accent"
                size="md"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started
              </MagneticButton>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg glass-elegant"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation with 3D slide */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <motion.div
                className="px-4 pt-4 pb-6 space-y-2 glass-elegant rounded-2xl mt-4 backdrop-blur-xl"
                initial={{ y: -20, rotateX: -10 }}
                animate={{ y: 0, rotateX: 0 }}
                exit={{ y: -20, rotateX: -10 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white/90 hover:text-gold-400 rounded-lg font-medium transition-all duration-200 hover:bg-white/10 hover:translate-x-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="pt-4"
                >
                  <MagneticButton
                    variant="accent"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false)
                      window.location.href = '/contact'
                    }}
                  >
                    Get Started
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
