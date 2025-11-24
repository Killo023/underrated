'use client'

import Image from 'next/image'
import { useState } from 'react'

interface TeamImageProps {
  name: string
  role: string
  company: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const TeamImage = ({ 
  name, 
  role, 
  company, 
  className = '',
  size = 'md'
}: TeamImageProps) => {
  const [imageError, setImageError] = useState(false)
  
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }
  
  // Generate a professional headshot query
  const query = `professional headshot ${role.toLowerCase()} business portrait`
  const unsplashUrl = `https://source.unsplash.com/200x200/?${encodeURIComponent(query)}`
  
  if (imageError) {
    return (
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center ${className}`}>
        <span className="text-primary-600 font-semibold text-lg">
          {name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
    )
  }

  return (
    <div className={`${sizeClasses[size]} relative ${className}`}>
      <Image
        src={unsplashUrl}
        alt={`${name} - ${role} at ${company}`}
        width={200}
        height={200}
        className="w-full h-full rounded-full object-cover"
        onError={() => setImageError(true)}
        unoptimized
      />
    </div>
  )
}

export default TeamImage
