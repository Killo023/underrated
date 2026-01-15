'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Heart, Dumbbell, Sparkles, GraduationCap, Scale, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerChildren from '@/components/animations/StaggerChildren'
import ParallaxSection from '@/components/3D/ParallaxSection'
import Text3D from '@/components/3D/Text3D'
import EnhancedCard3D from '@/components/3D/EnhancedCard3D'
import MagneticButton from '@/components/3D/MagneticButton'
import ElegantBackground from '@/components/backgrounds/ElegantBackground'

const ProductsPage = () => {
  const products = [
    {
      title: 'Cherné Langeveldt Physiotherapy',
      category: 'Healthcare Website',
      icon: Heart,
      description: 'A professional physiotherapy practice website offering personalized care to restore mobility and improve quality of life. The site features an intuitive booking system, comprehensive service information, and a welcoming design that puts patients at ease.',
      features: [
        'Patient booking and appointment system',
        'Comprehensive service information',
        'Professional and welcoming design',
        'Fully mobile responsive',
        'Easy contact and location information',
        'Patient resources and information'
      ],
      benefits: [
        'Improved patient engagement',
        'Streamlined appointment booking',
        'Professional online presence',
        'Enhanced accessibility for patients'
      ],
      pricing: 'Custom Quote',
      url: 'https://www.chernelangphysio.co.za/',
      image: '/images/cherne landing page.PNG'
    },
    {
      title: 'FitGuide Pro',
      category: 'Fitness Platform',
      icon: Dumbbell,
      description: 'An AI-powered fitness and nutrition platform providing personalized workout and meal plans. The platform helps users achieve their health goals through intelligent recommendations and comprehensive tracking features.',
      features: [
        'AI-powered fitness recommendations',
        'Personalized workout plans',
        'Custom nutrition and meal planning',
        'Progress tracking and analytics',
        'User-friendly interface',
        'Mobile-optimized experience'
      ],
      benefits: [
        'Personalized health guidance',
        'Improved user engagement',
        'Data-driven recommendations',
        'Scalable platform architecture'
      ],
      pricing: 'Custom Quote',
      url: 'https://www.fitguidepro.online/',
      image: '/images/fitguide landing page.PNG'
    },
    {
      title: 'Skainet Cleaning Services',
      category: 'Service Business',
      icon: Sparkles,
      description: 'A professional cleaning company website based in Gauteng, offering comprehensive cleaning solutions for both residential and commercial clients. The site showcases services, portfolio, and makes it easy for clients to request quotes.',
      features: [
        'Comprehensive service listings',
        'Online quote request system',
        'Professional portfolio gallery',
        'Service area coverage information',
        'Easy contact and booking',
        'Mobile-friendly design'
      ],
      benefits: [
        'Increased lead generation',
        'Professional brand presence',
        'Streamlined client communication',
        'Service showcase and credibility'
      ],
      pricing: 'Custom Quote',
      url: 'https://www.skainetcleaning.co.za/',
      image: '/images/skainet landing page.PNG'
    },
    {
      title: 'Skills To Furnish International',
      category: 'Education Platform',
      icon: GraduationCap,
      description: 'A training institute website promoting accredited training in furniture making. The site offers learnerships and skills programs in wood machining, cabinet making, wood finishing, and upholstery, with comprehensive course information and registration.',
      features: [
        'Training program information',
        'Course catalog and details',
        'Student gallery showcase',
        'Online registration system',
        'Contact and location information',
        'Accreditation and certification details'
      ],
      benefits: [
        'Increased student enrollment',
        'Professional training showcase',
        'Easy program discovery',
        'Streamlined registration process'
      ],
      pricing: 'Custom Quote',
      url: 'https://www.skillstofurnish.co.za/',
      image: '/images/skills to furnish landing.PNG'
    },
    {
      title: 'DMA Law',
      category: 'Legal Services',
      icon: Scale,
      description: 'A law firm website offering efficient and professional legal services to both private individuals and corporate entities. The site features team profiles, comprehensive service information, and resources for clients.',
      features: [
        'Comprehensive service information',
        'Team member profiles',
        'Legal resources and information',
        'Contact and consultation system',
        'Professional and trustworthy design',
        'FICA and compliance information'
      ],
      benefits: [
        'Enhanced professional credibility',
        'Improved client communication',
        'Service transparency',
        'Streamlined consultation process'
      ],
      pricing: 'Custom Quote',
      url: 'https://www.dmalaw.co.za/',
      image: '/images/dma law landing page.PNG'
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
            backgroundImage: `url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=1920&h=1080&q=80&auto=format)`,
          }}
        />
        
        <div className="container-max relative z-10 section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal animation="elegantSlide">
              <div className="space-y-8">
                <motion.div
                  className="inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="text-sm font-semibold text-gold-300 bg-gold-500/20 px-4 py-2 rounded-full border border-gold-400/30 glass-gold uppercase tracking-wider">
                    Client Projects Portfolio
                  </span>
                </motion.div>
                <Text3D
                  text="Products Developed"
                  size="xl"
                  gradient="gold"
                  delay={0.3}
                  className="block"
                />
                <Text3D
                  text="for Previous Clients"
                  size="lg"
                  gradient="silver"
                  delay={0.6}
                  className="block"
                />
                <p className="text-xl text-white/80 leading-relaxed">
                  Explore our portfolio of professional websites and digital solutions 
                  that we&apos;ve developed for our previous clients across healthcare, fitness, 
                  services, education, and legal industries.
                </p>
                <MagneticButton
                  variant="accent"
                  size="lg"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </MagneticButton>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slideLeft">
              <EnhancedCard3D glowColor="gold">
                <div className="rounded-2xl overflow-hidden">
                  <div className="relative w-full h-96 bg-gray-100">
                    <Image
                      src="/images/cherne landing page.PNG"
                      alt="Professional websites portfolio showcase"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>
                </div>
              </EnhancedCard3D>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Products Grid */}
      <section id="products" className="section-padding relative overflow-hidden">
        <ElegantBackground intensity="low" />
        <div className="container-max relative z-10">
          <ScrollReveal animation="slideUp" className="text-center mb-16">
            <Text3D
              text="Client Success Stories"
              size="lg"
              gradient="gold"
              delay={0}
              className="block mb-6"
            />
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These are real applications and websites we&apos;ve built for our clients. 
              Each project was tailored to meet their specific business needs and goals.
            </p>
          </ScrollReveal>
          <StaggerChildren staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {products.map((product, index) => {
                const Icon = product.icon
                const color = index % 2 === 0 ? 'gold' : 'silver'
                return (
                  <EnhancedCard3D
                    key={index}
                    glowColor={color as 'gold' | 'silver'}
                    className="h-full"
                  >
                    <div className="glass-elegant rounded-2xl overflow-hidden h-full flex flex-col">
                      {/* Product Image */}
                      <div className="relative h-48 bg-gray-100 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={`${product.title} landing page`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                        <motion.div
                          className={`absolute top-4 right-4 p-3 rounded-xl glass-${
                            color === 'gold' ? 'gold' : 'elegant'
                          } border ${
                            color === 'gold'
                              ? 'border-gold-400/30'
                              : 'border-silver-300/30'
                          }`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          <Icon className={`h-6 w-6 ${
                            color === 'gold' ? 'text-gold-400' : 'text-silver-300'
                          }`} />
                        </motion.div>
                        <div className={`absolute top-14 left-4 bg-${
                          color === 'gold' ? 'gold' : 'silver'
                        }-500/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1 rounded-full border ${
                          color === 'gold'
                            ? 'border-gold-400/30'
                            : 'border-silver-300/30'
                        }`}>
                          Client Project
                        </div>
                        {product.url && (
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 left-4 text-white hover:text-gold-400 transition-colors glass-elegant rounded-lg p-2"
                            title="Visit Website"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h2 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                            {product.title}
                          </h2>
                          <span className="text-xs font-semibold text-white/90 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Product Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-white/80 mb-6 leading-relaxed flex-1">
                          {product.description}
                        </p>

                        <div className="mb-6">
                          <h3 className="font-bold text-white mb-3">Key Features</h3>
                          <ul className="space-y-2">
                            {product.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-white/70">
                                <CheckCircle className={`h-4 w-4 ${
                                  color === 'gold' ? 'text-gold-400' : 'text-silver-300'
                                } mr-2 flex-shrink-0`} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h3 className="font-bold text-white mb-3">Benefits</h3>
                          <ul className="space-y-2">
                            {product.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-white/70">
                                <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                                  color === 'gold' ? 'bg-gold-400' : 'bg-silver-300'
                                }`}></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-white/20 pt-6 mt-auto">
                          <div className="text-center">
                            <div className={`text-lg font-bold mb-4 ${
                              color === 'gold' ? 'text-gold-400' : 'text-silver-300'
                            }`}>
                              {product.pricing}
                            </div>
                            {product.url && (
                              <MagneticButton
                                variant={color === 'gold' ? 'accent' : 'secondary'}
                                size="md"
                                className="w-full"
                                onClick={() => window.open(product.url, '_blank')}
                              >
                                Visit Website
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </MagneticButton>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </EnhancedCard3D>
                )
              })}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Client Project Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;ve delivered professional websites and digital solutions for our clients across diverse industries, 
              each tailored to meet their specific business needs and goals.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Physiotherapy</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">FitGuide Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Cleaning Services</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Training Institute</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Law Firm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Mobile Responsive</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Booking/Registration System</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">AI-Powered Features</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Portfolio/Gallery</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Team Profiles</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center">-</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Professional Design</td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><CheckCircle className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ParallaxSection speed={0.2} className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=1920&h=1080&q=80&auto=format)`,
          }}
        />
        
        <div className="container-max relative z-10">
          <ScrollReveal animation="elegantSlide" className="text-center text-white">
            <Text3D
              text="Ready to Build Your"
              size="lg"
              gradient="gold"
              delay={0}
              className="block mb-2"
            />
            <Text3D
              text="Professional Website?"
              size="lg"
              gradient="silver"
              delay={0.3}
              className="block mb-6"
            />
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Just like we did for our previous clients, we can create a custom website solution 
              tailored to your business needs and industry.
            </p>
            <MagneticButton
              variant="accent"
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </MagneticButton>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </div>
  )
}

export default ProductsPage
