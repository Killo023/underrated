import { Metadata } from 'next'
import { Database, Smartphone, Cloud, BarChart3, ArrowRight } from 'lucide-react'
import BasicImage from '@/components/BasicImage'
import AnimatedWrapper from '@/components/AnimatedWrapper'

export const metadata: Metadata = {
  title: 'Services - Underrated Software Solutions',
  description: 'Professional web development and software services including custom websites, mobile apps, web applications, and custom software development.',
}

// Helper function to get appropriate image query for each service
const getServiceImageQuery = (serviceTitle: string): string => {
  const titleLower = serviceTitle.toLowerCase()
  if (titleLower.includes('web') && titleLower.includes('development')) {
    return 'web development website design responsive modern'
  } else if (titleLower.includes('mobile')) {
    return 'mobile app development smartphone interface design'
  } else if (titleLower.includes('software') || titleLower.includes('custom')) {
    return 'software development coding programming custom solutions'
  } else if (titleLower.includes('application') || titleLower.includes('web app')) {
    return 'web application development dashboard software interface'
  }
  return 'web development software coding programming'
}

// Helper function to get appropriate category for each service
const getServiceCategory = (serviceTitle: string): 'business' | 'technology' | 'automation' | 'team' | 'office' => {
  return 'technology'
}

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper animation="slideUp">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Services
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We provide professional web development and software solutions designed to 
                  transform your digital presence and help your business grow online.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#services" className="btn-primary inline-flex items-center justify-center">
                    Explore Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="slideLeft">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <BasicImage
                    query="app dashboard web interface analytics data visualization charts"
                    width={600}
                    height={400}
                    alt="Modern app dashboard with analytics and data visualization"
                    className="w-full h-80"
                    category="technology"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
                    <BasicImage
                      query={getServiceImageQuery(service.title)}
                      width={600}
                      height={320}
                      alt={`${service.title} - ${service.description}`}
                      className="w-full h-full object-cover"
                      category={getServiceCategory(service.title)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper animation="slideUp">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Let&apos;s discuss how our services can help transform your business processes.
                </p>
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="slideLeft">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <BasicImage
                    query="website landing page design business consultation"
                    width={600}
                    height={400}
                    alt="Business consultation and web development planning"
                    className="w-full h-80"
                    category="business"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
