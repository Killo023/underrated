'use client'

import { useState } from 'react'
import { getDashboardImage, getWebDevImage, getMobileImage } from '@/lib/image-urls'

interface BasicImageProps {
  query: string
  width?: number
  height?: number
  alt: string
  className?: string
  category?: 'business' | 'technology' | 'automation' | 'team' | 'office'
}

const BasicImage = ({ 
  query, 
  width = 400, 
  height = 300, 
  alt, 
  className = '',
  category = 'business'
}: BasicImageProps) => {
  const [imageError, setImageError] = useState(false)
  
  // Use specific Unsplash photo IDs for reliable dashboard and tech images
  const getImageUrl = () => {
    // Determine image type based on query and category
    const queryLower = query.toLowerCase()
    const isDashboard = queryLower.includes('dashboard') || 
                       queryLower.includes('analytics') || 
                       queryLower.includes('data') ||
                       queryLower.includes('visualization') ||
                       queryLower.includes('metrics') ||
                       category === 'technology'
    
    const isMobile = queryLower.includes('mobile') || 
                    queryLower.includes('smartphone') ||
                    queryLower.includes('app')
    
    const isWebDev = queryLower.includes('web') || 
                    queryLower.includes('development') ||
                    queryLower.includes('coding') ||
                    queryLower.includes('programming')
    
    // Select appropriate image based on query type
    if (isMobile) {
      return getMobileImage(query, width, height)
    } else if (isWebDev) {
      return getWebDevImage(query, width, height)
    } else {
      return getDashboardImage(query, width, height)
    }
  }
  
  // Fallback gradient based on category
  const getFallbackGradient = () => {
    const gradients = {
      business: 'bg-gradient-to-br from-blue-100 to-indigo-200',
      technology: 'bg-gradient-to-br from-purple-100 to-pink-200',
      automation: 'bg-gradient-to-br from-green-100 to-emerald-200',
      team: 'bg-gradient-to-br from-orange-100 to-yellow-200',
      office: 'bg-gradient-to-br from-gray-100 to-slate-200'
    }
    return gradients[category] || 'bg-gradient-to-br from-gray-100 to-gray-200'
  }

  if (imageError) {
    return (
      <div className={`${getFallbackGradient()} flex items-center justify-center ${className}`} style={{ width, height }}>
        <div className="text-center p-4">
          <div className="w-12 h-12 mx-auto mb-2 bg-white/50 rounded-full flex items-center justify-center">
            <span className="text-xl">📷</span>
          </div>
          <span className="text-gray-600 text-xs font-medium">{alt}</span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={getImageUrl()}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      onError={() => setImageError(true)}
    />
  )
}

export default BasicImage


