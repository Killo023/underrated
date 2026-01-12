import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import DashboardShowcase from '@/components/DashboardShowcase'
import DetailedFeatures from '@/components/DetailedFeatures'
import AnimatedWrapper from '@/components/AnimatedWrapper'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      
      {/* Dashboard Showcase Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1920&h=1080&q=80&auto=format)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/85 to-gray-800/90"></div>
        </div>
        
        <div className="container-max relative z-10">
          <AnimatedWrapper animation="fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Modern App Dashboards
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Explore our portfolio of beautifully designed app dashboards featuring 
                real-time analytics, data visualization, and intuitive user interfaces. 
                Each dashboard is crafted with attention to detail, ensuring optimal user 
                experience and powerful functionality.
              </p>
            </div>
          </AnimatedWrapper>
          <DashboardShowcase />
        </div>
      </section>

      <DetailedFeatures />
      <Testimonials />
      <CTA />
    </>
  )
}
