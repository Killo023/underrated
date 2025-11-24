'use client'

import { useState } from 'react'

interface SimpleImageProps {
  query: string
  width?: number
  height?: number
  alt: string
  className?: string
  category?: 'business' | 'technology' | 'automation' | 'team' | 'office'
}

const SimpleImage = ({ 
  query, 
  width = 800, 
  height = 600, 
  alt, 
  className = '',
  category = 'business'
}: SimpleImageProps) => {
  const [imageError, setImageError] = useState(false)
  
  // Generate a simple placeholder image URL
  const getImageUrl = () => {
    const randomId = Math.floor(Math.random() * 1000)
    return `https://picsum.photos/${width}/${height}?random=${randomId}`
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
    <div className={`relative ${className}`} style={{ width, height }}>
      <img
        src={getImageUrl()}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  )
}

export default SimpleImage
