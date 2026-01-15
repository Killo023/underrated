'use client'

import { Database, Smartphone, Cloud, BarChart3, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerChildren from '@/components/animations/StaggerChildren'
import ParallaxSection from '@/components/3D/ParallaxSection'
import Text3D from '@/components/3D/Text3D'
import EnhancedCard3D from '@/components/3D/EnhancedCard3D'
import MagneticButton from '@/components/3D/MagneticButton'
import ElegantBackground from '@/components/backgrounds/ElegantBackground'
import { SERVICES_PAGE_HERO, SERVICES_PAGE_IMAGES, SERVICES_PAGE_CTA } from '@/lib/image-urls'


const ServicesPage = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Web Development',
      description: 'Create stunning, responsive websites that work seamlessly across all devices. From simple landing pages to complex web applications.',
      features: [
        'Responsive design for all devices',
        'Modern frameworks (React, Next.js)',
        'SEO optimization',
        'Fast loading times',
        'Custom design and branding'
      ],
      benefits: [
        'Professional online presence',
        'Improved user experience',
        'Better search engine rankings',
        'Mobile-friendly design'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions',
        'User-friendly interface design',
        'App store optimization',
        'Push notifications and updates'
      ],
      benefits: [
        'Reach customers on mobile devices',
        'Enhanced user engagement',
        'Offline functionality',
        'App store presence'
      ]
    },
    {
      icon: Database,
      title: 'Custom Software Development',
      description: 'Develop tailored software solutions that address your specific business needs with scalable architecture and modern technologies.',
      features: [
        'Custom solutions for your needs',
        'Scalable architecture',
        'Modern tech stack',
        'API development and integration',
        'Maintenance and support'
      ],
      benefits: [
        'Solutions tailored to your business',
        'Scalable with your growth',
        'Modern and maintainable code',
        'Long-term support available'
      ]
    },
    {
      icon: BarChart3,
      title: 'Web Application Development',
      description: 'Build powerful web applications with advanced features, real-time capabilities, and seamless user experiences.',
      features: [
        'Full-stack development',
        'Real-time features and updates',
        'API development and integration',
        'Database design and optimization',
        'Performance optimization'
      ],
      benefits: [
        'Powerful and scalable applications',
        'Enhanced user experience',
        'Real-time data synchronization',
        'Seamless third-party integrations'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxSection speed={0.3} className="relative min-h-[80vh] flex items-center overflow-hidden">
        <ElegantBackground intensity="medium" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${SERVICES_PAGE_HERO})`,
          }}
        />
        
        <div className="container-max relative z-10 section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal animation="elegantSlide">
              <div className="space-y-8">
                <Text3D
                  text="Our Services"
                  size="xl"
                  gradient="gold"
                  delay={0}
                  className="block mb-6"
                />
                <p className="text-xl text-white/80 leading-relaxed">
                  We provide professional web development and software solutions designed to 
                  transform your digital presence and help your business grow online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton
                    variant="accent"
                    size="lg"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slideLeft">
              <EnhancedCard3D glowColor="gold" className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={SERVICES_PAGE_HERO}
                    alt="Modern app dashboard with analytics and data visualization"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              </EnhancedCard3D>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Grid */}
      <section id="services" className="section-padding relative overflow-hidden">
        <ElegantBackground intensity="low" />
        <div className="container-max relative z-10">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const color = index % 2 === 0 ? 'gold' : 'silver'
              return (
                <ScrollReveal
                  key={index}
                  animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
                  delay={index * 0.2}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <motion.div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${
                          color === 'gold'
                            ? 'from-gold-500/20 to-gold-600/10 border border-gold-400/30'
                            : 'from-silver-400/20 to-silver-500/10 border border-silver-300/30'
                        } glass-elegant`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <Icon className={`h-10 w-10 ${
                          color === 'gold' ? 'text-gold-400' : 'text-silver-300'
                        }`} />
                      </motion.div>
                      
                      <Text3D
                        text={service.title}
                        size="md"
                        gradient={color}
                        delay={0}
                        className="block mb-6"
                      />
                      
                      <p className="text-lg text-white/80 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <EnhancedCard3D glowColor={color as 'gold' | 'silver'} className="p-6">
                          <h3 className="font-bold text-white mb-4 text-lg">Key Features</h3>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start text-white/70">
                                <div className={`w-2 h-2 rounded-full mr-3 mt-2 ${
                                  color === 'gold' ? 'bg-gold-400' : 'bg-silver-300'
                                }`}></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </EnhancedCard3D>
                        
                        <EnhancedCard3D glowColor={color as 'gold' | 'silver'} className="p-6">
                          <h3 className="font-bold text-white mb-4 text-lg">Benefits</h3>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start text-white/70">
                                <div className={`w-2 h-2 rounded-full mr-3 mt-2 ${
                                  color === 'gold' ? 'bg-gold-400' : 'bg-silver-300'
                                }`}></div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </EnhancedCard3D>
                      </div>
                    </div>
                    
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <EnhancedCard3D glowColor={color as 'gold' | 'silver'}>
                        <div className="relative rounded-2xl overflow-hidden h-96">
                          <img
                            src={SERVICES_PAGE_IMAGES[index]}
                            alt={`${service.title} - ${service.description}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                          <motion.div
                            className={`absolute top-6 left-6 p-4 rounded-xl glass-${
                              color === 'gold' ? 'gold' : 'elegant'
                            } border ${
                              color === 'gold'
                                ? 'border-gold-400/30'
                                : 'border-silver-300/30'
                            }`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          >
                            <Icon className={`h-8 w-8 ${
                              color === 'gold' ? 'text-gold-400' : 'text-silver-300'
                            }`} />
                          </motion.div>
                        </div>
                      </EnhancedCard3D>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection speed={0.2} className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${SERVICES_PAGE_CTA})`,
          }}
        />
        
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="elegantSlide">
              <div className="space-y-6">
                <Text3D
                  text="Ready to Get Started?"
                  size="lg"
                  gradient="gold"
                  delay={0}
                  className="block mb-4"
                />
                <p className="text-xl text-white/80 leading-relaxed">
                  Let&apos;s discuss how our services can help transform your business processes.
                </p>
                <MagneticButton
                  variant="accent"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="inline-flex items-center"
                >
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </MagneticButton>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slideLeft">
              <EnhancedCard3D glowColor="gold">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={SERVICES_PAGE_CTA}
                    alt="Business consultation and web development planning"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              </EnhancedCard3D>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>
    </div>
  )
}

export default ServicesPage
