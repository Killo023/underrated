import React from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
}

const Logo = ({ className = '', size = 'md', showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* White circle with green border */}
        <div className="w-full h-full bg-white rounded-full border-2 border-primary-600 flex items-center justify-center shadow-lg">
          {/* Hexagonal container */}
          <div className="w-3/4 h-3/4 relative">
            {/* Hexagon outline */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              >
                <polygon
                  points="50,10 85,30 85,70 50,90 15,70 15,30"
                  fill="none"
                  stroke="#15803d"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            {/* Bar chart inside hexagon */}
            <div className="absolute inset-0 flex items-end justify-center space-x-1 pb-2">
              {/* Left bar - shortest, lightest red */}
              <div 
                className="bg-gradient-to-t from-red-400 to-red-500 rounded-sm"
                style={{ width: '8px', height: '20px' }}
              />
              {/* Middle bar - medium height, medium red */}
              <div 
                className="bg-gradient-to-t from-red-500 to-red-600 rounded-sm"
                style={{ width: '8px', height: '35px' }}
              />
              {/* Right bar - tallest, darkest red */}
              <div 
                className="bg-gradient-to-t from-red-600 to-red-700 rounded-sm"
                style={{ width: '8px', height: '50px' }}
              />
            </div>
          </div>
        </div>
        
        {/* Small star in bottom right */}
        <div className="absolute -bottom-1 -right-1 w-3 h-3">
          <svg viewBox="0 0 24 24" className="w-full h-full text-white drop-shadow-sm">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-bold text-primary-800 leading-tight`}>
            UNDERRATED
          </span>
          <span className={`${textSizes[size]} font-bold text-red-600 leading-tight`}>
            SOFTWARE SOLUTIONS
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo


