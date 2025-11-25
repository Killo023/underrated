import { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Dumbbell, Sparkles, GraduationCap, Scale, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react'
import AnimatedWrapper from '@/components/AnimatedWrapper'

export const metadata: Metadata = {
  title: 'Our Projects - Underrated Software Solutions',
  description: 'Explore our portfolio of professional websites and digital solutions developed for previous clients across healthcare, fitness, services, education, and legal industries.',
}

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper animation="slideUp">
              <div className="text-center lg:text-left">
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-full">
                    Client Projects Portfolio
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Products Developed for Previous Clients
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Explore our portfolio of professional websites and digital solutions 
                  that we&apos;ve developed for our previous clients across healthcare, fitness, 
                  services, education, and legal industries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#products" className="btn-primary inline-flex items-center justify-center">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="slideLeft">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <div className="relative w-full h-80 bg-gray-100">
                    <Image
                      src="/images/cherne landing page.PNG"
                      alt="Professional websites portfolio showcase"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are real applications and websites we&apos;ve built for our clients. 
              Each project was tailored to meet their specific business needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.title} landing page`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                      <product.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="absolute top-12 left-4 bg-primary-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Client Project
                  </div>
                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 left-4 text-white hover:text-primary-200 transition-colors bg-black/30 backdrop-blur-sm rounded-lg p-2"
                      title="Visit Website"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                      {product.title}
                    </h2>
                    <span className="text-xs font-semibold text-white bg-primary-600/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-700 mb-4">
                        {product.pricing}
                      </div>
                      {product.url && (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full btn-primary inline-flex items-center justify-center"
                        >
                          Visit Website
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Professional Website?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Just like we did for our previous clients, we can create a custom website solution 
              tailored to your business needs and industry.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
