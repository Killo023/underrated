'use client'

import ImageGallery from '@/components/ImageGallery'
import GeminiImageAssistant from '@/components/GeminiImageAssistant'
import AnimatedWrapper from '@/components/AnimatedWrapper'

const GalleryPage = () => {
  const galleryImages = [
    {
      id: 'automation-dashboard',
      query: 'software automation dashboard data visualization charts',
      alt: 'Software automation dashboard with real-time data visualization',
      category: 'automation' as const
    },
    {
      id: 'mobile-app',
      query: 'mobile app development coding programming software',
      alt: 'Mobile app development with code editor and smartphone',
      category: 'technology' as const
    },
    {
      id: 'api-integration',
      query: 'API integration software development coding',
      alt: 'API integration and software development workspace',
      category: 'technology' as const
    },
    {
      id: 'saas-platform',
      query: 'SaaS platform software interface dashboard',
      alt: 'Modern SaaS platform interface with user dashboard',
      category: 'business' as const
    },
    {
      id: 'data-processing',
      query: 'data processing software analytics business intelligence',
      alt: 'Data processing software with analytics and charts',
      category: 'business' as const
    },
    {
      id: 'cloud-software',
      query: 'cloud software infrastructure server technology',
      alt: 'Cloud software infrastructure and server technology',
      category: 'technology' as const
    },
    {
      id: 'workflow-automation',
      query: 'workflow automation software process management',
      alt: 'Workflow automation software with process management',
      category: 'automation' as const
    },
    {
      id: 'software-development',
      query: 'software development team coding programming',
      alt: 'Software development team working on coding project',
      category: 'team' as const
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <AnimatedWrapper animation="fadeIn">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Image Gallery & AI Assistant
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Explore our collection of professional images and use AI-powered tools 
                to generate custom visuals for your business needs.
              </p>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimatedWrapper animation="slideUp">
            <div className="max-w-2xl mx-auto">
              <GeminiImageAssistant
                onImageGenerated={(imageUrl, description) => {
                  console.log('Generated image:', imageUrl, description)
                  // In a real app, you would handle the generated image
                }}
              />
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <AnimatedWrapper animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Professional Image Collection
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                High-quality images sourced from Unsplash, perfect for business presentations, 
                websites, and marketing materials.
              </p>
            </div>
          </AnimatedWrapper>

          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedWrapper animation="slideUp" delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI-Powered Generation
                </h3>
                <p className="text-gray-600">
                  Use our AI assistant to generate custom images based on your specific requirements.
                </p>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="slideUp" delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  High-Quality Images
                </h3>
                <p className="text-gray-600">
                  Professional photos from Unsplash, optimized for web and print use.
                </p>
              </div>
            </AnimatedWrapper>

            <AnimatedWrapper animation="slideUp" delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Instant Access
                </h3>
                <p className="text-gray-600">
                  Download and use images immediately with no licensing restrictions.
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
