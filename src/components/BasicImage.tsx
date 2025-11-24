'use client'

import { useState } from 'react'

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
  
  // Use Unsplash for free, high-quality images of dashboards and landing pages
  const getImageUrl = () => {
    // Determine image type based on query and category
    const queryLower = query.toLowerCase()
    const isDashboard = queryLower.includes('dashboard') || 
                       queryLower.includes('analytics') || 
                       queryLower.includes('data') ||
                       queryLower.includes('automation') ||
                       queryLower.includes('reporting') ||
                       queryLower.includes('metrics') ||
                       category === 'automation' ||
                       category === 'technology'
    
    const isLandingPage = queryLower.includes('landing') || 
                         queryLower.includes('website') || 
                         queryLower.includes('web') ||
                         queryLower.includes('saas') ||
                         queryLower.includes('platform') ||
                         queryLower.includes('interface')
    
    // Specific Unsplash queries optimized for dashboards and landing pages
    // These queries return actual photos of dashboards and landing pages
    let unsplashQuery = ''
    if (isDashboard) {
      // Dashboard-specific queries that return actual dashboard images
      const dashboardQueries = [
        'analytics dashboard',
        'business dashboard',
        'data visualization dashboard',
        'software dashboard interface',
        'analytics platform'
      ]
      const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
      unsplashQuery = dashboardQueries[queryHash % dashboardQueries.length]
    } else if (isLandingPage) {
      // Landing page-specific queries that return actual landing page images
      const landingQueries = [
        'website landing page',
        'landing page design',
        'SaaS website',
        'website homepage',
        'web design interface'
      ]
      const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
      unsplashQuery = landingQueries[queryHash % landingQueries.length]
    } else {
      // Default to dashboard for business/technology categories
      unsplashQuery = 'analytics dashboard'
    }
    
    // Use Unsplash Source API (free, no API key required)
    // This service searches Unsplash for images matching the query
    // Returns actual photos of dashboards and landing pages
    return `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(unsplashQuery)}`
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
    return gradients[category] || 'bg-gradient-to-br from-primary-100 to-secondary-100'
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


