'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import DashboardShowcase from '@/components/DashboardShowcase'
import DetailedFeatures from '@/components/DetailedFeatures'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerChildren from '@/components/animations/StaggerChildren'
import ParallaxSection from '@/components/3D/ParallaxSection'
import Text3D from '@/components/3D/Text3D'
import EnhancedCard3D from '@/components/3D/EnhancedCard3D'
import ElegantBackground from '@/components/backgrounds/ElegantBackground'
import { Code, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored solutions built specifically for your business needs',
      color: 'gold'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for the best user experience',
      color: 'gold'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee',
      color: 'silver'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow your business with solutions that scale with you',
      color: 'gold'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of experience',
      color: 'silver'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Award-winning designs and exceptional craftsmanship',
      color: 'gold'
    }
  ]

  return (
    <>
      <Hero />
      
      {/* Services Section with Parallax */}
      <ParallaxSection speed={0.2}>
        <Services />
      </ParallaxSection>
      
      {/* Features Showcase */}
      <section className="relative section-padding overflow-hidden">
        <ElegantBackground intensity="low" />
        <div className="container-max relative z-10">
          <ScrollReveal animation="slideUp" className="text-center mb-16">
            <Text3D
              text="Why Choose Us"
              size="lg"
              gradient="gold"
              delay={0}
              className="block mb-6"
            />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We deliver exceptional software solutions that drive business growth and innovation
            </p>
          </ScrollReveal>

          <StaggerChildren staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <EnhancedCard3D
                    key={index}
                    glowColor={feature.color as 'gold' | 'silver'}
                    className="p-8 h-full"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${
                          feature.color === 'gold' 
                            ? 'from-gold-500/20 to-gold-600/10' 
                            : 'from-silver-400/20 to-silver-500/10'
                        } border ${
                          feature.color === 'gold'
                            ? 'border-gold-400/30'
                            : 'border-silver-300/30'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <Icon className={`h-8 w-8 ${
                          feature.color === 'gold' ? 'text-gold-400' : 'text-silver-300'
                        }`} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </EnhancedCard3D>
                )
              })}
            </div>
          </StaggerChildren>
        </div>
      </section>
      
      {/* Dashboard Showcase Section with Parallax */}
      <ParallaxSection speed={0.3} className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1920&h=1080&q=80&auto=format)`,
          }}
        />
        
        <div className="container-max relative z-10">
          <ScrollReveal animation="fadeIn" className="text-center mb-16">
            <Text3D
              text="Modern App Dashboards"
              size="lg"
              gradient="elegant"
              delay={0}
              className="block mb-6"
            />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore our portfolio of beautifully designed app dashboards featuring 
              real-time analytics, data visualization, and intuitive user interfaces.
            </p>
          </ScrollReveal>
          <DashboardShowcase />
        </div>
      </ParallaxSection>

      <DetailedFeatures />
      
      {/* Testimonials with Parallax */}
      <ParallaxSection speed={0.2}>
        <Testimonials />
      </ParallaxSection>
      
      {/* CTA Section */}
      <CTA />
    </>
  )
}
