'use client'

import Image from 'next/image'
import { useState } from 'react'
import { DASHBOARD_SHOWCASE_IMAGES } from '@/lib/image-urls'

interface DashboardShowcaseProps {
  dashboards?: Array<{
    title: string
    description: string
    image: string
  }>
}

const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({ 
  dashboards = [
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization and insights',
      image: DASHBOARD_SHOWCASE_IMAGES[0]
    },
    {
      title: 'Web Application Dashboard',
      description: 'Modern web interface with comprehensive features',
      image: DASHBOARD_SHOWCASE_IMAGES[1]
    },
    {
      title: 'Mobile Dashboard',
      description: 'Responsive mobile app interface',
      image: DASHBOARD_SHOWCASE_IMAGES[2]
    },
    {
      title: 'Admin Dashboard',
      description: 'Comprehensive admin control panel',
      image: DASHBOARD_SHOWCASE_IMAGES[3]
    }
  ]
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="space-y-6">
      {/* Main Dashboard Display */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-black">
        <div className="relative h-96 bg-gradient-to-br from-gray-900 to-black">
          <Image
            src={dashboards[currentIndex].image}
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
              src={dashboard.image}
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

