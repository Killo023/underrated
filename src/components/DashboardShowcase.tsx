'use client'

import Image from 'next/image'
import { useState } from 'react'

interface DashboardShowcaseProps {
  dashboards?: Array<{
    query: string
    title: string
    description: string
  }>
}

const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({ 
  dashboards = [
    {
      query: 'app dashboard analytics data visualization charts',
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization and insights'
    },
    {
      query: 'web app dashboard interface software',
      title: 'Web Application Dashboard',
      description: 'Modern web interface with comprehensive features'
    },
    {
      query: 'mobile app dashboard smartphone interface',
      title: 'Mobile Dashboard',
      description: 'Responsive mobile app interface'
    },
    {
      query: 'software dashboard admin panel interface',
      title: 'Admin Dashboard',
      description: 'Comprehensive admin control panel'
    }
  ]
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getImageUrl = (query: string, width: number = 1200, height: number = 800) => {
    // Use specific Unsplash photo IDs for dashboard images
    const dashboardPhotos = [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=' + width + '&h=' + height + '&fit=crop', // Analytics dashboard
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=' + width + '&h=' + height + '&fit=crop', // Business dashboard
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=' + width + '&h=' + height + '&fit=crop', // Software interface
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=' + width + '&h=' + height + '&fit=crop', // Data visualization
    ]
    
    // Use query hash to consistently select image
    const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return dashboardPhotos[queryHash % dashboardPhotos.length]
  }

  return (
    <div className="space-y-6">
      {/* Main Dashboard Display */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-black">
        <div className="relative h-96 bg-gradient-to-br from-gray-900 to-black">
          <Image
            src={getImageUrl(dashboards[currentIndex].query)}
            alt={dashboards[currentIndex].title}
            fill
            className="object-cover opacity-90"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 border-2 border-black">
              <h3 className="text-xl font-bold text-black mb-1">{dashboards[currentIndex].title}</h3>
              <p className="text-sm text-gray-700">{dashboards[currentIndex].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dashboards.map((dashboard, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-32 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
              currentIndex === index 
                ? 'border-black shadow-lg scale-105' 
                : 'border-gray-300 hover:border-black'
            }`}
          >
            <Image
              src={getImageUrl(dashboard.query, 400, 300)}
              alt={dashboard.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default DashboardShowcase

