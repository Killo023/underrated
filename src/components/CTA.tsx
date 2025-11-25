import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import AnimatedWrapper from './AnimatedWrapper'
import Button3D from './Button3D'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-black via-primary-600 to-secondary-600">
      <div className="container-max">
        <AnimatedWrapper animation="fadeIn">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their digital presence 
              with professional websites and custom software solutions. Let&apos;s build something amazing together.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button3D 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <Link href="/contact" className="flex items-center">
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button3D>
              <Button3D 
                variant="accent" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                <Link href="/contact" className="flex items-center">
                  Schedule a Demo
                </Link>
              </Button3D>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90">Free consultation & project analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90">Custom website & software design</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-white/90">Ongoing support & updates</span>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  )
}

export default CTA
