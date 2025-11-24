import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Heart, Dumbbell, Sparkles, GraduationCap, Scale, ExternalLink } from 'lucide-react'
import AnimatedWrapper from './AnimatedWrapper'
import Card3D from './Card3D'

const Products = () => {
  const products = [
    {
      title: 'Cherné Langeveldt Physiotherapy',
      description: 'Professional physiotherapy practice website offering personalized care to restore mobility and improve quality of life.',
      category: 'Healthcare Website',
      icon: Heart,
      features: ['Patient booking system', 'Service information', 'Professional design', 'Mobile responsive'],
      image: '/images/cherne landing page.PNG',
      url: 'https://www.chernelangphysio.co.za/'
    },
    {
      title: 'FitGuide Pro',
      description: 'AI-powered fitness and nutrition platform providing personalized workout and meal plans to help users achieve their health goals.',
      category: 'Fitness Platform',
      icon: Dumbbell,
      features: ['AI-powered recommendations', 'Personalized plans', 'Nutrition tracking', 'Workout guides'],
      image: '/images/fitguide landing page.PNG',
      url: 'https://www.fitguidepro.online/'
    },
    {
      title: 'Skainet Cleaning Services',
      description: 'Professional cleaning company website based in Gauteng, offering comprehensive cleaning solutions for residential and commercial clients.',
      category: 'Service Business',
      icon: Sparkles,
      features: ['Service listings', 'Contact forms', 'Professional portfolio', 'Service area coverage'],
      image: '/images/skainet landing page.PNG',
      url: 'https://www.skainetcleaning.co.za/'
    },
    {
      title: 'Skills To Furnish International',
      description: 'Training institute website promoting accredited training in furniture making, offering learnerships and skills programs.',
      category: 'Education Platform',
      icon: GraduationCap,
      features: ['Training programs', 'Course information', 'Gallery showcase', 'Registration system'],
      image: '/images/skills to furnish landing.PNG',
      url: 'https://www.skillstofurnish.co.za/'
    },
    {
      title: 'DMA Law',
      description: 'Law firm website offering efficient and professional legal services to private individuals and corporate entities.',
      category: 'Legal Services',
      icon: Scale,
      features: ['Service information', 'Team profiles', 'Legal resources', 'Contact system'],
      image: '/images/dma law landing page.PNG',
      url: 'https://www.dmalaw.co.za/'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <AnimatedWrapper animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of professional websites and digital solutions 
              across healthcare, fitness, services, education, and legal industries.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AnimatedWrapper key={index} animation="slideUp" delay={index * 0.2}>
              <Card3D intensity={12}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift transition-shadow duration-300">
              {/* Product Image */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={`${product.title} landing page`}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                    <product.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-gray-700 font-semibold text-sm transition-colors duration-200"
                      title="Visit Website"
                    >
                      Visit Site
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
                </div>
              </div>
              </Card3D>
            </AnimatedWrapper>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="btn-primary inline-flex items-center"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Products
