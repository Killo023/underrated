import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export default function SimpleHome() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Products />
      <Testimonials />
      <CTA />
    </div>
  )
}


