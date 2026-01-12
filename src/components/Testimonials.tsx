import { Star, Quote } from 'lucide-react'
import AnimatedWrapper from './AnimatedWrapper'
import TeamImage from './TeamImage'
import { ALL_IMAGES } from '@/lib/image-urls'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The website they built for us has transformed our online presence. We've seen a 300% increase in leads and the design perfectly represents our brand.",
      author: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "Operations Manager",
      rating: 5
    },
    {
      quote: "Their mobile app transformed how our field team operates. We've seen a 40% increase in productivity and much better data accuracy.",
      author: "Michael Chen",
      company: "FieldForce Solutions",
      role: "CEO",
      rating: 5
    },
    {
      quote: "The custom SaaS platform they developed has streamlined our entire workflow. The ROI was evident within the first month.",
      author: "Emily Rodriguez",
      company: "DataDriven Corp",
      role: "CTO",
      rating: 5
    }
  ]

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ALL_IMAGES.business[1]}?fit=crop&w=1920&h=1080&q=80&auto=format)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
      </div>
      
      <div className="container-max relative z-10">
        <AnimatedWrapper animation="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what business leaders are saying 
              about our web development and software solutions.
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedWrapper key={index} animation="scale" delay={index * 0.1}>
              <div className="bg-gray-50 rounded-xl p-8 relative hover-lift transition-shadow duration-300">
              <Quote className="h-8 w-8 text-gray-300 absolute top-6 right-6" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-3">
                  <TeamImage
                    name={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    size="sm"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-white/80">Average Time Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
