'use client'

import { Database, Smartphone, Cloud, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from './animations/ScrollReveal'
import StaggerChildren from './animations/StaggerChildren'
import EnhancedCard3D from './3D/EnhancedCard3D'
import Text3D from './3D/Text3D'
import ElegantBackground from './backgrounds/ElegantBackground'
import { SERVICES_IMAGES, ALL_IMAGES } from '@/lib/image-urls'

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Web Development',
      description: 'Create stunning, responsive websites that work seamlessly across all devices. From simple landing pages to complex web applications.',
      features: ['Responsive design', 'Modern frameworks', 'SEO optimized'],
      image: SERVICES_IMAGES[0],
      color: 'gold'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      features: ['Native & cross-platform', 'User-friendly design', 'App store optimization'],
      image: SERVICES_IMAGES[1],
      color: 'gold'
    },
    {
      icon: Database,
      title: 'Custom Software Development',
      description: 'Develop tailored software solutions that address your specific business needs with scalable architecture and modern technologies.',
      features: ['Custom solutions', 'Scalable architecture', 'Modern tech stack'],
      image: SERVICES_IMAGES[2],
      color: 'silver'
    },
    {
      icon: BarChart3,
      title: 'Web Application Development',
      description: 'Build powerful web applications with advanced features, real-time capabilities, and seamless user experiences.',
      features: ['Full-stack development', 'Real-time features', 'API integration'],
      image: SERVICES_IMAGES[3],
      color: 'gold'
    }
  ]

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Elegant Background */}
      <ElegantBackground intensity="low" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      
      <div className="container-max relative z-10">
        <ScrollReveal animation="slideUp" className="text-center mb-16">
          <Text3D
            text="What We Do"
            size="lg"
            gradient="gold"
            delay={0}
            className="block mb-6"
          />
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We specialize in creating professional websites and custom software solutions that 
            transform your digital presence, from responsive websites to complex web applications.
          </p>
        </ScrollReveal>

        <StaggerChildren staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <EnhancedCard3D
                  key={index}
                  glowColor={service.color as 'gold' | 'silver'}
                  className="h-full"
                >
                  <div className="glass-elegant rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Service Image */}
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} - ${service.description}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <motion.div
                        className={`absolute top-4 right-4 p-3 rounded-xl glass-${
                          service.color === 'gold' ? 'gold' : 'elegant'
                        } border ${
                          service.color === 'gold'
                            ? 'border-gold-400/30'
                            : 'border-silver-300/30'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <Icon className={`h-6 w-6 ${
                          service.color === 'gold' ? 'text-gold-400' : 'text-silver-300'
                        }`} />
                      </motion.div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/70 mb-6 leading-relaxed flex-1">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-white/60">
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              service.color === 'gold' ? 'bg-gold-400' : 'bg-silver-300'
                            }`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </EnhancedCard3D>
              )
            })}
          </div>
        </StaggerChildren>
      </div>
    </section>
  )
}

export default Services