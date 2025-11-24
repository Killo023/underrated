import { Database, Smartphone, Cloud, BarChart3 } from 'lucide-react'
import AnimatedWrapper from './AnimatedWrapper'
import BasicImage from './BasicImage'
import Card3D from './Card3D'

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Web Development',
      description: 'Create stunning, responsive websites that work seamlessly across all devices. From simple landing pages to complex web applications.',
      features: ['Responsive design', 'Modern frameworks', 'SEO optimized'],
      query: 'web development website design responsive modern'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
      features: ['Native & cross-platform', 'User-friendly design', 'App store optimization'],
      query: 'mobile app development smartphone interface design'
    },
    {
      icon: Database,
      title: 'Custom Software Development',
      description: 'Develop tailored software solutions that address your specific business needs with scalable architecture and modern technologies.',
      features: ['Custom solutions', 'Scalable architecture', 'Modern tech stack'],
      query: 'software development coding programming custom solutions'
    },
    {
      icon: BarChart3,
      title: 'Web Application Development',
      description: 'Build powerful web applications with advanced features, real-time capabilities, and seamless user experiences.',
      features: ['Full-stack development', 'Real-time features', 'API integration'],
      query: 'web application development dashboard software interface'
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
              We specialize in creating professional websites and custom software solutions that 
              transform your digital presence, from responsive websites to complex web applications.
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
                      category="technology"
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