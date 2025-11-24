'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

const TestHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center py-8 bg-blue-200">Test Home Page - All Components</h1>
      <p className="text-center text-lg text-gray-700 mb-8">Each section below should be visible with a distinct background color.</p>

      <div className="bg-red-100 p-8 mb-8">
        <h2 className="text-3xl font-bold text-red-800 mb-4">Hero Section Test</h2>
        <Hero />
      </div>

      <div className="bg-green-100 p-8 mb-8">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Services Section Test</h2>
        <Services />
      </div>

      <div className="bg-yellow-100 p-8 mb-8">
        <h2 className="text-3xl font-bold text-yellow-800 mb-4">Products Section Test</h2>
        <Products />
      </div>

      <div className="bg-purple-100 p-8 mb-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Testimonials Section Test</h2>
        <Testimonials />
      </div>

      <div className="bg-indigo-100 p-8 mb-8">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">CTA Section Test</h2>
        <CTA />
      </div>

      <div className="border-t-4 border-blue-500 mt-8 pt-4 text-center text-gray-600">
        End of Test Home Page
      </div>
    </div>
  )
}

export default TestHomePage


