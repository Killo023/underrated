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
    
    // Use specific Unsplash photo IDs that are known to work
    // These are actual photos from Unsplash with specific IDs
    const dashboardImages = [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=' + width + '&h=' + height + '&fit=crop', // Analytics dashboard
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=' + width + '&h=' + height + '&fit=crop', // Business dashboard
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=' + width + '&h=' + height + '&fit=crop', // Data visualization
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=' + width + '&h=' + height + '&fit=crop', // Software interface
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=' + width + '&h=' + height + '&fit=crop', // Analytics platform
    ]
    
    const webDevImages = [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=' + width + '&h=' + height + '&fit=crop', // Coding
      'https://images.unsplash.com/photo-1498050108023-c5249f4df1b3?w=' + width + '&h=' + height + '&fit=crop', // Web development
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=' + width + '&h=' + height + '&fit=crop', // Programming
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=' + width + '&h=' + height + '&fit=crop', // Code editor
    ]
    
    const mobileImages = [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=' + width + '&h=' + height + '&fit=crop', // Mobile app
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=' + width + '&h=' + height + '&fit=crop', // Smartphone
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=' + width + '&h=' + height + '&fit=crop', // App interface
    ]
    
    // Select image based on query
    let imageArray = dashboardImages
    if (isMobile) {
      imageArray = mobileImages
    } else if (isWebDev) {
      imageArray = webDevImages
    }
    
    // Use hash of query to consistently select same image for same query
    const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return imageArray[queryHash % imageArray.length]
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


