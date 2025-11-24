'use client'

import { useState } from 'react'

const TestComponentsPage = () => {
  const [showHero, setShowHero] = useState(true)
  const [showServices, setShowServices] = useState(true)
  const [showProducts, setShowProducts] = useState(true)
  const [showTestimonials, setShowTestimonials] = useState(true)
  const [showCTA, setShowCTA] = useState(true)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Component Visibility Test</h1>
      
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">Toggle Components:</h2>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setShowHero(!showHero)}
            className={`px-4 py-2 rounded ${showHero ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Hero {showHero ? 'ON' : 'OFF'}
          </button>
          <button 
            onClick={() => setShowServices(!showServices)}
            className={`px-4 py-2 rounded ${showServices ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Services {showServices ? 'ON' : 'OFF'}
          </button>
          <button 
            onClick={() => setShowProducts(!showProducts)}
            className={`px-4 py-2 rounded ${showProducts ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Products {showProducts ? 'ON' : 'OFF'}
          </button>
          <button 
            onClick={() => setShowTestimonials(!showTestimonials)}
            className={`px-4 py-2 rounded ${showTestimonials ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            Testimonials {showTestimonials ? 'ON' : 'OFF'}
          </button>
          <button 
            onClick={() => setShowCTA(!showCTA)}
            className={`px-4 py-2 rounded ${showCTA ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
          >
            CTA {showCTA ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {showHero && (
          <div className="bg-red-100 p-8 rounded-lg border-4 border-red-500">
            <h2 className="text-2xl font-bold text-red-800 mb-4">Hero Section</h2>
            <p className="text-gray-700">This is a test of the Hero section. If you can see this, the Hero component should be working.</p>
          </div>
        )}

        {showServices && (
          <div className="bg-green-100 p-8 rounded-lg border-4 border-green-500">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Services Section</h2>
            <p className="text-gray-700">This is a test of the Services section. If you can see this, the Services component should be working.</p>
          </div>
        )}

        {showProducts && (
          <div className="bg-blue-100 p-8 rounded-lg border-4 border-blue-500">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Products Section</h2>
            <p className="text-gray-700">This is a test of the Products section. If you can see this, the Products component should be working.</p>
          </div>
        )}

        {showTestimonials && (
          <div className="bg-purple-100 p-8 rounded-lg border-4 border-purple-500">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Testimonials Section</h2>
            <p className="text-gray-700">This is a test of the Testimonials section. If you can see this, the Testimonials component should be working.</p>
          </div>
        )}

        {showCTA && (
          <div className="bg-yellow-100 p-8 rounded-lg border-4 border-yellow-500">
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">CTA Section</h2>
            <p className="text-gray-700">This is a test of the CTA section. If you can see this, the CTA component should be working.</p>
          </div>
        )}
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>If all sections above are visible and toggleable, the basic layout is working correctly.</p>
        <p className="mt-2">If some sections are missing, there might be an issue with the component rendering.</p>
      </div>
    </div>
  )
}

export default TestComponentsPage