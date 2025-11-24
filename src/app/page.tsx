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
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-primary-900">
        <div className="container-max">
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
