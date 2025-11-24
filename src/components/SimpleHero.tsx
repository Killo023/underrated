import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import BasicImage from './BasicImage'

const SimpleHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white section-padding overflow-hidden">
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automate Your Business,{' '}
                <span className="text-gradient animate-gradient">Amplify Your Growth</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Eliminate tedious, repetitive tasks through bespoke automation solutions. 
                Custom software, mobile apps, and SaaS platforms designed to streamline 
                your business processes and boost efficiency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center hover-lift">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="btn-accent inline-flex items-center justify-center hover-lift">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 animate-pulse-slow">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 animate-pulse-slow" style={{animationDelay: '0.5s'}}>98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 animate-pulse-slow" style={{animationDelay: '1s'}}>24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <BasicImage
                query="business automation dashboard analytics"
                width={600}
                height={400}
                alt="Business automation dashboard showing data analytics and process optimization"
                className="w-full h-80"
                category="automation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Automation Dashboard</div>
                      <div className="text-xs text-gray-600">Real-time process monitoring</div>
                    </div>
                    <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                      Live
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-float">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-float" style={{animationDelay: '1s'}}>
              <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimpleHero


