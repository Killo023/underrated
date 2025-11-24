'use client'

import { useState } from 'react'
import WebsiteShowcase from '@/components/wireframes/WebsiteShowcase'
import PhysioWireframe from '@/components/wireframes/PhysioWireframe'
import FitGuideWireframe from '@/components/wireframes/FitGuideWireframe'
import CleaningWireframe from '@/components/wireframes/CleaningWireframe'
import FurnitureWireframe from '@/components/wireframes/FurnitureWireframe'
import LawWireframe from '@/components/wireframes/LawWireframe'

export default function WireframesPage() {
  const [activeTab, setActiveTab] = useState<'screenshots' | 'wireframes'>('wireframes')

  const websites = [
    {
      title: 'Cherné Langeveldt Physiotherapy',
      url: 'www.chernelangphysio.co.za',
      imagePath: '/images/cherne landing page.PNG',
      description: 'Professional physiotherapy practice website offering personalized care to restore mobility and improve quality of life. Features intuitive booking system, comprehensive service information, and a welcoming design.',
      category: 'Healthcare Website',
      wireframe: PhysioWireframe
    },
    {
      title: 'FitGuide Pro',
      url: 'www.fitguidepro.online',
      imagePath: '/images/fitguide landing page.PNG',
      description: 'AI-powered fitness and nutrition platform providing personalized workout and meal plans. Features intelligent recommendations, progress tracking, and comprehensive health guidance.',
      category: 'Fitness Platform',
      wireframe: FitGuideWireframe
    },
    {
      title: 'Skainet Cleaning Services',
      url: 'www.skainetcleaning.co.za',
      imagePath: '/images/skainet landing page.PNG',
      description: 'Professional cleaning company website based in Gauteng, offering comprehensive cleaning solutions for residential and commercial clients. Features portfolio gallery, quote requests, and service area coverage.',
      category: 'Service Business',
      wireframe: CleaningWireframe
    },
    {
      title: 'Skills To Furnish International',
      url: 'www.skillstofurnish.co.za',
      imagePath: '/images/skills to furnish landing.PNG',
      description: 'Training institute website promoting accredited training in furniture making. Offers learnerships and skills programs in wood machining, cabinet making, wood finishing, and upholstery.',
      category: 'Education Platform',
      wireframe: FurnitureWireframe
    },
    {
      title: 'DMA Law',
      url: 'www.dmalaw.co.za',
      imagePath: '/images/dma law landing page.PNG',
      description: 'Law firm website offering efficient and professional legal services to private individuals and corporate entities. Features team profiles, comprehensive service information, FICA compliance, and legal resources.',
      category: 'Legal Services',
      wireframe: LawWireframe
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12">
      <div className="container-max px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Website Wireframes & Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore the structural wireframes and actual designs of our professional website projects.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('wireframes')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'wireframes'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border-2 border-gray-300 hover:border-primary-400'
              }`}
            >
              Wireframe Diagrams
            </button>
            <button
              onClick={() => setActiveTab('screenshots')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === 'screenshots'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border-2 border-gray-300 hover:border-primary-400'
              }`}
            >
              Live Screenshots
            </button>
          </div>
        </div>

        {/* Wireframes Tab */}
        {activeTab === 'wireframes' && (
          <div className="space-y-20">
            {websites.map((website, index) => {
              const WireframeComponent = website.wireframe
              return (
                <section key={index} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100 hover:border-primary-200 transition-all duration-300">
                  {/* Website Header */}
                  <div className="mb-8 pb-6 border-b-2 border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{website.title}</h2>
                        <p className="text-lg text-gray-600 mb-3 max-w-3xl">{website.description}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                          {website.category}
                        </span>
                        <a 
                          href={`https://${website.url}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
                        >
                          Visit Website →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Wireframe Display */}
                  <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-700">Website Wireframe Structure</h3>
                      <span className="text-sm text-gray-500 font-mono">www.{website.url}</span>
                    </div>
                    <div className="bg-white rounded-lg p-4 md:p-6 shadow-inner border border-gray-300">
                      <WireframeComponent />
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        )}

        {/* Screenshots Tab */}
        {activeTab === 'screenshots' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {websites.map((website, index) => (
                <WebsiteShowcase
                  key={index}
                  title={website.title}
                  url={website.url}
                  imagePath={website.imagePath}
                  description={website.description}
                  category={website.category}
                />
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">5</div>
                <div className="text-primary-100">Active Websites</div>
              </div>
              <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl p-6 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-secondary-100">Client Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl p-6 text-white shadow-lg">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-accent-100">Industries Served</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

