'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface SmartImageProps {
  query: string
  width?: number
  height?: number
  alt: string
  className?: string
  priority?: boolean
  fallbackColor?: string
  category?: 'business' | 'technology' | 'automation' | 'team' | 'office'
}

const SmartImage = ({ 
  query, 
  width = 800, 
  height = 600, 
  alt, 
  className = '',
  priority = false,
  fallbackColor = 'bg-gradient-to-br from-primary-100 to-secondary-100',
  category = 'business'
}: SmartImageProps) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Enhanced Unsplash queries based on category
  const getEnhancedQuery = (baseQuery: string, cat: string) => {
    const categoryModifiers = {
      business: 'business professional office',
      technology: 'technology digital innovation',
      automation: 'automation robot process workflow',
      team: 'team people professional diversity',
      office: 'office workspace modern corporate'
    }
    
    return `${baseQuery} ${categoryModifiers[cat as keyof typeof categoryModifiers] || ''}`
  }
  
  // Use Unsplash Source API with enhanced query and randomization
  const randomSeed = Math.random().toString(36).substring(7)
  const enhancedQuery = getEnhancedQuery(query, category)
  const unsplashUrl = `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(enhancedQuery)}&sig=${randomSeed}`
  
  // Fallback gradient based on category
  const getFallbackGradient = () => {
    const gradients = {
      business: 'bg-gradient-to-br from-blue-100 to-indigo-200',
      technology: 'bg-gradient-to-br from-purple-100 to-pink-200',
      automation: 'bg-gradient-to-br from-green-100 to-emerald-200',
      team: 'bg-gradient-to-br from-orange-100 to-yellow-200',
      office: 'bg-gradient-to-br from-gray-100 to-slate-200'
    }
    return gradients[category] || fallbackColor
  }

  if (imageError) {
    return (
      <div className={`${getFallbackGradient()} flex items-center justify-center ${className}`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/50 rounded-full flex items-center justify-center">
            <span className="text-2xl">📷</span>
          </div>
          <span className="text-gray-600 text-sm font-medium">{alt}</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {!imageLoaded && (
        <div className={`absolute inset-0 ${getFallbackGradient()} flex items-center justify-center animate-pulse`}>
          <div className="w-8 h-8 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={unsplashUrl}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority={priority}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        unoptimized
      />
    </div>
  )
}

export default SmartImage
