'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import ParallaxSection from '@/components/3D/ParallaxSection'
import Text3D from '@/components/3D/Text3D'
import EnhancedCard3D from '@/components/3D/EnhancedCard3D'
import MagneticButton from '@/components/3D/MagneticButton'
import ElegantBackground from '@/components/backgrounds/ElegantBackground'
import { ALL_IMAGES } from '@/lib/image-urls'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          service: ''
        })
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <ParallaxSection speed={0.3} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <ElegantBackground intensity="medium" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        
        <div className="container-max relative z-10 section-padding">
          <ScrollReveal animation="elegantSlide" className="max-w-4xl mx-auto text-center">
            <Text3D
              text="Get In Touch"
              size="xl"
              gradient="gold"
              delay={0}
              className="block mb-6"
            />
            <p className="text-xl text-white/80 leading-relaxed">
              Ready to build your next website or software project? Let&apos;s discuss your needs 
              and create a custom solution that drives results.
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Contact Form & Info */}
      <section className="section-padding relative overflow-hidden">
        <ElegantBackground intensity="low" />
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal animation="slideRight">
              <EnhancedCard3D glowColor="gold" className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass-elegant border border-white/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400/50 text-white placeholder-white/50 bg-white/5"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass-elegant border border-white/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400/50 text-white placeholder-white/50 bg-white/5"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass-elegant border border-white/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400/50 text-white placeholder-white/50 bg-white/5"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass-elegant border border-white/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400/50 text-white placeholder-white/50 bg-white/5"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-elegant border border-white/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400/50 text-white bg-white/5"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="web-application">Web Application Development</option>
                    <option value="mobile-apps">Mobile Workforce Apps</option>
                    <option value="saas-solutions">Custom SaaS Solutions</option>
                    <option value="consulting">Business Process Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-elegant border border-white/20 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-gold-400/50 text-white placeholder-white/50 bg-white/5"
                    placeholder="Tell us about your business needs and how we can help..."
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </MagneticButton>
              </form>
            </EnhancedCard3D>
          </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal animation="slideLeft">
              <EnhancedCard3D glowColor="silver" className="p-8 h-full">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-12 h-12 glass-gold rounded-lg flex items-center justify-center flex-shrink-0 border border-gold-400/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <Mail className="h-6 w-6 text-gold-400" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-white/80">info@underratedsecurity.com</p>
                      <p className="text-sm text-white/60">We&apos;ll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-12 h-12 glass-gold rounded-lg flex items-center justify-center flex-shrink-0 border border-gold-400/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <Phone className="h-6 w-6 text-gold-400" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <p className="text-white/80">079 477 2031</p>
                      <p className="text-sm text-white/60">Mon-Fri 9AM-6PM SAST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-12 h-12 glass-gold rounded-lg flex items-center justify-center flex-shrink-0 border border-gold-400/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <MapPin className="h-6 w-6 text-gold-400" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Office</h3>
                      <p className="text-white/80">5 Hexriver Street<br />Winchester Hills</p>
                      <p className="text-sm text-white/60">Schedule a visit</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="mt-12 glass-elegant rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-white/80">
                      <CheckCircle className="h-4 w-4 text-gold-400 mr-3 flex-shrink-0" />
                      Free consultation and analysis
                    </li>
                    <li className="flex items-center text-sm text-white/80">
                      <CheckCircle className="h-4 w-4 text-gold-400 mr-3 flex-shrink-0" />
                      Custom solutions tailored to your needs
                    </li>
                    <li className="flex items-center text-sm text-white/80">
                      <CheckCircle className="h-4 w-4 text-gold-400 mr-3 flex-shrink-0" />
                      Proven track record with 500+ projects
                    </li>
                    <li className="flex items-center text-sm text-white/80">
                      <CheckCircle className="h-4 w-4 text-gold-400 mr-3 flex-shrink-0" />
                      24/7 support and maintenance
                    </li>
                  </ul>
                </div>
              </EnhancedCard3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding relative overflow-hidden">
        <ElegantBackground intensity="low" />
        <div className="container-max relative z-10">
          <ScrollReveal animation="slideUp" className="max-w-3xl mx-auto">
            <Text3D
              text="Frequently Asked Questions"
              size="md"
              gradient="gold"
              delay={0}
              className="block text-center mb-12"
            />
            <div className="space-y-6">
              {[
                {
                  question: 'How long does a typical web development project take?',
                  answer: 'Project timelines vary based on complexity, but most web development projects are completed within 4-12 weeks. We provide detailed timelines during the consultation phase.'
                },
                {
                  question: 'Do you provide training for our team?',
                  answer: 'Yes, we include comprehensive training and documentation for all solutions. We also provide ongoing support to ensure successful adoption.'
                },
                {
                  question: 'What if we need changes after implementation?',
                  answer: 'We offer flexible maintenance and update packages. Most solutions are designed to be easily modified as your business needs evolve.'
                }
              ].map((faq, index) => (
                <EnhancedCard3D
                  key={index}
                  glowColor={index % 2 === 0 ? 'gold' : 'silver'}
                  className="p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-white/70">
                    {faq.answer}
                  </p>
                </EnhancedCard3D>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
