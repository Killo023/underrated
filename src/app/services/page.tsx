import { Metadata } from 'next'
import { Database, Smartphone, Cloud, BarChart3, ArrowRight } from 'lucide-react'
import BasicImage from '@/components/BasicImage'
import AnimatedWrapper from '@/components/AnimatedWrapper'

export const metadata: Metadata = {
  title: 'Services - Underrated Software Solutions',
  description: 'Comprehensive automation services including data process automation, mobile apps, SaaS solutions, and business process consulting.',
}

// Helper function to get appropriate image query for each service
const getServiceImageQuery = (serviceTitle: string): string => {
  const titleLower = serviceTitle.toLowerCase()
  if (titleLower.includes('data') || titleLower.includes('automation')) {
    return 'analytics dashboard data visualization software interface'
  } else if (titleLower.includes('mobile')) {
    return 'mobile app dashboard interface design'
  } else if (titleLower.includes('saas') || titleLower.includes('custom')) {
    return 'SaaS landing page website design interface'
  } else if (titleLower.includes('business') || titleLower.includes('consulting')) {
    return 'business dashboard analytics software interface'
  }
  return 'analytics dashboard software interface'
}

// Helper function to get appropriate category for each service
const getServiceCategory = (serviceTitle: string): 'business' | 'technology' | 'automation' | 'team' | 'office' => {
  const titleLower = serviceTitle.toLowerCase()
  if (titleLower.includes('data') || titleLower.includes('automation')) {
    return 'automation'
  } else if (titleLower.includes('mobile')) {
    return 'technology'
  } else if (titleLower.includes('saas') || titleLower.includes('custom')) {
    return 'technology'
  }
  return 'business'
}

const ServicesPage = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Process Automation',
      description: 'Transform your data workflows with intelligent automation that eliminates manual errors and accelerates processing.',
      features: [
        'Automated data validation and cleansing',
        'Real-time data processing and analysis',
        'Custom reporting and dashboard creation',
        'Integration with existing systems',
        'Error handling and monitoring'
      ],
      benefits: [
        'Reduce data processing time by 80%',
        'Eliminate human errors in data entry',
        'Real-time insights and reporting',
        'Scalable and maintainable solutions'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Workforce Apps',
      description: 'Empower your field teams with custom mobile applications that connect them to your business systems.',
      features: [
        'Offline functionality for remote areas',
        'Real-time data synchronization',
        'GPS tracking and location services',
        'Photo and document capture',
        'Custom workflow management'
      ],
      benefits: [
        'Increase field productivity by 40%',
        'Improve data accuracy and timeliness',
        'Better communication and coordination',
        'Reduced paperwork and manual processes'
      ]
    },
    {
      icon: Cloud,
      title: 'Custom SaaS Solutions',
      description: 'Build scalable cloud-based platforms tailored to your specific business needs and requirements.',
      features: [
        'Multi-tenant architecture',
        'API integrations and webhooks',
        'Custom user management',
        'Scalable cloud infrastructure',
        'Advanced analytics and reporting'
      ],
      benefits: [
        'Reduce operational costs by 60%',
        'Scale with your business growth',
        'Access from anywhere, anytime',
        'Automatic updates and maintenance'
      ]
    },
    {
      icon: BarChart3,
      title: 'Business Process Consulting',
      description: 'Analyze and optimize your business processes to identify automation opportunities and best practices.',
      features: [
        'Comprehensive process analysis',
        'Workflow optimization recommendations',
        'Change management support',
        'Training and documentation',
        'Performance monitoring and KPIs'
      ],
      benefits: [
        'Identify inefficiencies and bottlenecks',
        'Implement best practices',
        'Improve team productivity',
        'Ensure successful adoption'
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
                  We provide comprehensive automation solutions designed to streamline 
                  your business processes and boost productivity across your organization.
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
                    query="analytics dashboard software interface business automation"
                    width={600}
                    height={400}
                    alt="Professional automation services dashboard and technology consulting"
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
                    alt="Business consultation and automation planning landing page"
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
