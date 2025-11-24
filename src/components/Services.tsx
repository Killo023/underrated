import { Database, Smartphone, Cloud, BarChart3 } from 'lucide-react'
import AnimatedWrapper from './AnimatedWrapper'
import BasicImage from './BasicImage'
import Card3D from './Card3D'

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Process Automation',
      description: 'Streamline data entry, processing, and analysis with custom automation workflows that eliminate manual errors and save hours of work.',
      features: ['Automated data validation', 'Real-time processing', 'Custom reporting'],
      query: 'analytics dashboard data visualization software interface'
    },
    {
      icon: Smartphone,
      title: 'Mobile Workforce Apps',
      description: 'Empower your team with mobile applications that connect field workers to your business systems and improve productivity.',
      features: ['Offline functionality', 'Real-time sync', 'Custom workflows'],
      query: 'mobile app dashboard interface design'
    },
    {
      icon: Cloud,
      title: 'Custom SaaS Solutions',
      description: 'Build scalable cloud-based platforms tailored to your business needs with modern architecture and seamless integrations.',
      features: ['Scalable infrastructure', 'API integrations', 'Multi-tenant support'],
      query: 'SaaS landing page website design interface'
    },
    {
      icon: BarChart3,
      title: 'Business Process Consulting',
      description: 'Analyze and optimize your business processes to identify automation opportunities and implement best practices.',
      features: ['Process analysis', 'Workflow optimization', 'Change management'],
      query: 'business dashboard analytics software interface'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <AnimatedWrapper animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating bespoke automation solutions that transform 
              how your business operates, from data processing to mobile workforce management.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedWrapper key={index} animation="scale" delay={index * 0.1}>
              <Card3D intensity={10}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift transition-shadow duration-300">
                  {/* Service Image */}
                  <div className="h-48 relative overflow-hidden">
                    <BasicImage
                      query={service.query}
                      width={400}
                      height={200}
                      alt={`${service.title} - ${service.description}`}
                      className="w-full h-full object-cover"
                      category={service.title.includes('SaaS') || service.title.includes('Custom') ? 'technology' : service.title.includes('Data') || service.title.includes('Automation') ? 'automation' : 'business'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card3D>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services