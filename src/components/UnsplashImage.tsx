'use client'

import Image from 'next/image'
import { useState } from 'react'

interface UnsplashImageProps {
  query: string
  width?: number
  height?: number
  alt: string
  className?: string
  priority?: boolean
  fallback?: string
}

const UnsplashImage = ({ 
  query, 
  width = 800, 
  height = 600, 
  alt, 
  className = '',
  priority = false,
  fallback = '/api/placeholder/800/600'
}: UnsplashImageProps) => {
  const [imageError, setImageError] = useState(false)
  
  // Use specific Unsplash photo IDs for reliable images
  const getUnsplashUrl = () => {
    const dashboardImages = [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=' + width + '&h=' + height + '&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=' + width + '&h=' + height + '&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=' + width + '&h=' + height + '&fit=crop',
    ]
    
    const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return dashboardImages[queryHash % dashboardImages.length]
  }
  
  const unsplashUrl = getUnsplashUrl()
  
  if (imageError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <Image
      src={unsplashUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setImageError(true)}
      unoptimized // Unsplash images are already optimized
    />
  )
}

export default UnsplashImage
