'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface PlaceholderImageProps {
  query: string
  width?: number
  height?: number
  alt: string
  className?: string
  priority?: boolean
  category?: 'business' | 'technology' | 'automation' | 'team' | 'office'
}

const PlaceholderImage = ({ 
  query, 
  width = 800, 
  height = 600, 
  alt, 
  className = '',
  priority = false,
  category = 'business'
}: PlaceholderImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  
  // Generate random image URLs using different services
  const generateImageUrl = () => {
    const randomId = Math.floor(Math.random() * 10000)
    const services = [
      `https://picsum.photos/${width}/${height}?random=${randomId}`,
      `https://picsum.photos/seed/${query}/${width}/${height}`,
      `https://via.placeholder.com/${width}x${height}/22c55e/ffffff?text=${encodeURIComponent(query)}`,
      `https://picsum.photos/${width}/${height}?blur=2&random=${randomId}`
    ]
    
    return services[Math.floor(Math.random() * services.length)]
  }
  
  useEffect(() => {
    const url = generateImageUrl()
    setImageUrl(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, width, height])
  
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

  const handleError = () => {
    setImageError(true)
    // Try a different URL
    setImageUrl(generateImageUrl())
    setImageError(false)
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

  if (!imageUrl) {
    return (
      <div className={`${getFallbackGradient()} flex items-center justify-center ${className}`}>
        <div className="w-8 h-8 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
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
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        onError={handleError}
        unoptimized
      />
    </div>
  )
}

export default PlaceholderImage
