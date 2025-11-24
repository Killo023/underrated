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
  
  // Unsplash Source API - Free tier allows 50 requests per hour
  const unsplashUrl = `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(query)}`
  
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
