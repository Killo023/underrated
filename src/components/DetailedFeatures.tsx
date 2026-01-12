'use client'

import { Code, Smartphone, Globe, Database, Zap, Shield, BarChart3, Users, Settings, Rocket } from 'lucide-react'
import AnimatedWrapper from './AnimatedWrapper'
import { DETAILED_FEATURES_IMAGES, ALL_IMAGES } from '@/lib/image-urls'

const DetailedFeatures = () => {
  const features = [
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'We use the latest technologies including React, Next.js, TypeScript, Node.js, and modern CSS frameworks to build fast, scalable applications.',
      details: [
        'React 18+ with hooks and context API',
        'Next.js 14+ for server-side rendering',
        'TypeScript for type safety',
        'Tailwind CSS for responsive design',
        'RESTful and GraphQL APIs'
      ]
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Every website and application we build is fully responsive, ensuring a perfect experience on desktop, tablet, and mobile devices.',
      details: [
        'Mobile-first design approach',
        'Cross-browser compatibility',
        'Touch-optimized interfaces',
        'Progressive Web App (PWA) support',
        'App store deployment'
      ]
    },
    {
      icon: Globe,
      title: 'SEO Optimization',
      description: 'We implement comprehensive SEO strategies to ensure your website ranks well in search engines and attracts organic traffic.',
      details: [
        'Meta tags and structured data',
        'Fast page load times',
        'Mobile-friendly indexing',
        'XML sitemaps and robots.txt',
        'Content optimization strategies'
      ]
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'We design and implement robust database solutions that ensure data integrity, security, and optimal performance.',
      details: [
        'PostgreSQL and MySQL databases',
        'MongoDB for NoSQL solutions',
        'Database optimization and indexing',
        'Data backup and recovery',
        'Real-time data synchronization'
      ]
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'We optimize every aspect of your application for speed, ensuring fast load times and smooth user experiences.',
      details: [
        'Code splitting and lazy loading',
        'Image optimization and CDN',
        'Caching strategies',
        'Minification and compression',
        'Performance monitoring tools'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Security is paramount. We implement industry-standard security measures to protect your data and your users.',
      details: [
        'SSL/TLS encryption',
        'Authentication and authorization',
        'GDPR and privacy compliance',
        'Regular security audits',
        'Data encryption at rest and in transit'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Tracking',
      description: 'We integrate comprehensive analytics to help you understand user behavior and make data-driven decisions.',
      details: [
        'Google Analytics integration',
        'Custom event tracking',
        'User behavior analysis',
        'Conversion tracking',
        'Real-time dashboard reporting'
      ]
    },
    {
      icon: Users,
      title: 'User Experience Design',
      description: 'We create intuitive, user-friendly interfaces that provide exceptional user experiences and drive engagement.',
      details: [
        'User research and personas',
        'Wireframing and prototyping',
        'Usability testing',
        'Accessibility (WCAG compliance)',
        'A/B testing and optimization'
      ]
    },
    {
      icon: Settings,
      title: 'Maintenance & Support',
      description: 'We provide ongoing maintenance and support to ensure your website or application continues to perform optimally.',
      details: [
        '24/7 monitoring and support',
        'Regular updates and patches',
        'Bug fixes and troubleshooting',
        'Feature enhancements',
        'Performance optimization'
      ]
    },
    {
      icon: Rocket,
      title: 'Scalability & Growth',
      description: 'We build solutions that scale with your business, ensuring your application can handle growth without performance issues.',
      details: [
        'Cloud infrastructure (AWS, Azure, GCP)',
        'Load balancing and auto-scaling',
        'Microservices architecture',
        'API rate limiting and throttling',
        'Database sharding and replication'
      ]
    }
  ]

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ALL_IMAGES.technology[2]}?fit=crop&w=1920&h=1080&q=80&auto=format)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/85 to-black/90"></div>
      </div>
      
      <div className="container-max relative z-10">
        <AnimatedWrapper animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Development Services
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We provide detailed, professional web development and software solutions 
              with attention to every aspect of your project.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedWrapper key={index} animation="slideUp" delay={index * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-200 mb-4">{feature.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <img
                    src={DETAILED_FEATURES_IMAGES[index]}
                    alt={feature.title}
                    className="w-full h-32 rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                </div>

                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DetailedFeatures

