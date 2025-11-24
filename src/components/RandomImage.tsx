'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface RandomImageProps {
  query: string
  width?: number
  height?: number
  alt: string
  className?: string
  priority?: boolean
  fallbackColor?: string
  category?: 'business' | 'technology' | 'automation' | 'team' | 'office'
}

const RandomImage = ({ 
  query, 
  width = 800, 
  height = 600, 
  alt, 
  className = '',
  priority = false,
  fallbackColor = 'bg-gradient-to-br from-primary-100 to-secondary-100',
  category = 'business'
}: RandomImageProps) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  
  // Enhanced queries with randomization
  const getRandomQuery = (baseQuery: string, cat: string) => {
    const categoryModifiers = {
      business: ['professional', 'office', 'corporate', 'modern', 'workspace'],
      technology: ['technology', 'digital', 'innovation', 'computer', 'software'],
      automation: ['automation', 'robot', 'process', 'workflow', 'efficiency'],
      team: ['team', 'people', 'professional', 'diversity', 'collaboration'],
      office: ['office', 'workspace', 'modern', 'corporate', 'business']
    }
    
    const modifiers = categoryModifiers[cat as keyof typeof categoryModifiers] || categoryModifiers.business
    const randomModifier = modifiers[Math.floor(Math.random() * modifiers.length)]
    const randomNumber = Math.floor(Math.random() * 1000)
    
    return `${baseQuery} ${randomModifier} ${randomNumber}`
  }
  
  // Generate multiple fallback URLs for better reliability
  const generateImageUrls = () => {
    const baseQueries = [
      query,
      `${query} professional`,
      `${query} modern`,
      `${query} business`,
      `${query} technology`
    ]
    
    return baseQueries.map(q => {
      const randomQuery = getRandomQuery(q, category)
      const randomId = Math.floor(Math.random() * 10000)
      return `https://picsum.photos/${width}/${height}?random=${randomId}&text=${encodeURIComponent(randomQuery)}`
    })
  }
  
  useEffect(() => {
    const urls = generateImageUrls()
    setImageUrl(urls[0])
  }, [query, width, height, category])
  
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

  const handleError = () => {
    setImageError(true)
    // Try next fallback URL
    const urls = generateImageUrls()
    const currentIndex = urls.indexOf(imageUrl)
    if (currentIndex < urls.length - 1) {
      setImageUrl(urls[currentIndex + 1])
      setImageError(false)
    }
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
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority={priority}
        onLoad={() => setImageLoaded(true)}
        onError={handleError}
        unoptimized
      />
    </div>
  )
}

export default RandomImage
