export default function BasicPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Automate Your Business,{' '}
                <span className="bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
                  Amplify Your Growth
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Eliminate tedious, repetitive tasks through bespoke automation solutions. 
                Custom software, mobile apps, and SaaS platforms designed to streamline 
                your business processes and boost efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Get a Free Consultation
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Hero Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating bespoke automation solutions that transform 
              how your business operates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Service {i} Image</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Service {i}
                </h3>
                <p className="text-gray-600">
                  Description for service {i} goes here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our suite of automation products designed to solve specific 
              business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Product {i} Image</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Product {i}
                </h3>
                <p className="text-gray-600 mb-4">
                  Description for product {i} goes here.
                </p>
                <button className="text-green-600 hover:text-green-700 font-semibold">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders are saying.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "Testimonial {i} goes here. This is what our client said about our service."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Client {i}</div>
                    <div className="text-sm text-gray-600">Company {i}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-red-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have already automated their processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Get Your Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}


