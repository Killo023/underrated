'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import Text3D from './3D/Text3D'
import MagneticButton from './3D/MagneticButton'
import EnhancedCard3D from './3D/EnhancedCard3D'
import Floating3D from './3D/Floating3D'
import ParallaxSection from './3D/ParallaxSection'
import ScrollReveal from './animations/ScrollReveal'
import ElegantBackground from './backgrounds/ElegantBackground'
import ParticleField from './backgrounds/ParticleField'
import { HERO_IMAGE, ALL_IMAGES } from '@/lib/image-urls'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant Background */}
      <ElegantBackground intensity="medium" />
      <ParticleField count={30} color="gold" />
      
      {/* Floating 3D Elements */}
      <Floating3D 
        count={8} 
        shapes={['cube', 'sphere', 'pyramid']}
        colors={['gold', 'silver']}
        size={{ min: 40, max: 80 }}
      />

      {/* Parallax Layers */}
      <ParallaxSection speed={0.3} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
      </ParallaxSection>
      
      <ParallaxSection speed={0.5} className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${ALL_IMAGES.business[2]}?fit=crop&w=1920&h=1080&q=80&auto=format)`,
          }}
        />
      </ParallaxSection>

      {/* Navy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5" />
      
      <div className="container-max relative z-10 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal animation="elegantSlide" delay={0.2}>
            <div className="space-y-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold border border-gold-400/30"
              >
                <Sparkles className="h-4 w-4 text-gold-400" />
                <span className="text-sm font-medium text-gold-300 uppercase tracking-wider">
                  Premium Software Solutions
                </span>
              </motion.div>

              {/* Main Heading with 3D Text */}
              <div className="space-y-6">
                <Text3D
                  text="Build Your"
                  size="xl"
                  gradient="elegant"
                  delay={0.5}
                  depth={4}
                  className="block"
                />
                <Text3D
                  text="Digital Presence"
                  size="xl"
                  gradient="gold"
                  delay={0.8}
                  depth={4}
                  className="block"
                />
                <Text3D
                  text="Transform Your Business"
                  size="lg"
                  gradient="silver"
                  delay={1.1}
                  depth={3}
                  className="block"
                />
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-xl text-white/80 leading-relaxed max-w-xl"
              >
                Professional web development and custom software solutions. We create modern websites, 
                web applications, and software tailored to your business needs.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton
                  variant="accent"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="inline-flex items-center justify-center group"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.location.href = '/services'}
                >
                  Explore Services
                </MagneticButton>
              </motion.div>

              {/* Stats with 3D Cards */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {[
                  { value: '500+', label: 'Projects' },
                  { value: '98%', label: 'Satisfaction' },
                  { value: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <EnhancedCard3D
                    key={index}
                    glowColor="gold"
                    className="p-6 text-center"
                  >
                    <motion.div
                      className="text-4xl font-bold text-gradient-gold mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 + index * 0.2, type: 'spring', stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-white/70 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </EnhancedCard3D>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Visual with Enhanced 3D Card */}
          <ScrollReveal animation="slideLeft" delay={0.4}>
            <div className="relative">
              <EnhancedCard3D
                glowColor="gold"
                glassmorphism={true}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={HERO_IMAGE}
                    alt="Modern app dashboard with analytics and data visualization"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Elegant overlay card */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.div
                      className="glass-elegant rounded-xl p-6 border border-white/20"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-bold text-white mb-1">App Dashboard</div>
                          <div className="text-sm text-white/70">Real-time analytics & insights</div>
                        </div>
                        <motion.div
                          className="bg-gradient-gold text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
                          Live
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </EnhancedCard3D>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="w-16 h-16 glass-gold rounded-full flex items-center justify-center border border-gold-400/30 shadow-glow-gold">
                  <span className="text-2xl">✓</span>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 4,
                  delay: 1,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="w-16 h-16 glass-elegant rounded-full flex items-center justify-center border border-white/20 shadow-elegant">
                  <Sparkles className="h-8 w-8 text-gold-400" />
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-white/60"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-sm uppercase tracking-wider">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
