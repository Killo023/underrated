'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedWrapper from './AnimatedWrapper'
import BasicImage from './BasicImage'
import Logo from './Logo'
import AnimatedText3D from './AnimatedText3D'
import Button3D from './Button3D'
import Card3D from './Card3D'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white section-padding overflow-hidden">
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedWrapper animation="slideUp" delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <Logo size="sm" showText={false} />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <AnimatedText3D 
                    text="Build Your Digital Presence,"
                    delay={0.5}
                    className="block mb-2"
                  />
                  <AnimatedText3D 
                    text="Transform Your Business"
                    delay={1}
                    className="text-gradient animate-gradient"
                  />
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional web development and custom software solutions. We create modern websites, 
                  web applications, and software tailored to your business needs. From responsive websites 
                  to complex web applications, we bring your vision to life.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button3D 
                  variant="primary" 
                  size="lg"
                  className="inline-flex items-center justify-center"
                >
                  <Link href="/contact" className="flex items-center">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button3D>
                <Button3D 
                  variant="accent" 
                  size="lg"
                  className="inline-flex items-center justify-center"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button3D>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 animate-pulse-slow">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 animate-pulse-slow" style={{animationDelay: '0.5s'}}>98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 animate-pulse-slow" style={{animationDelay: '1s'}}>24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </AnimatedWrapper>

            {/* Visual */}
            <AnimatedWrapper animation="slideLeft" delay={0.4}>
              <Card3D intensity={15} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <BasicImage
                    query="web development software coding programming website design"
                    width={600}
                    height={400}
                    alt="Web development and software coding workspace showing modern development tools"
                    className="w-full h-80"
                    category="technology"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Web Development</div>
                          <div className="text-xs text-gray-600">Modern websites & applications</div>
                        </div>
                        <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                          Live
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    delay: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">⚡</span>
                  </div>
                </motion.div>
              </Card3D>
            </AnimatedWrapper>
        </div>
      </div>
    </section>
  )
}

export default Hero
