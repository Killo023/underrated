'use client'

import React from 'react'

interface WireframeBoxProps {
  label?: string
  height?: string
  className?: string
  children?: React.ReactNode
}

export const WireframeBox: React.FC<WireframeBoxProps> = ({ 
  label, 
  height = 'h-20', 
  className = '',
  children 
}) => {
  return (
    <div className={`border-2 border-dashed border-gray-400 bg-gray-50 rounded p-4 ${height} ${className} flex items-center justify-center relative hover:border-gray-500 transition-colors`}>
      {label && (
        <span className="absolute top-1 left-2 text-xs font-mono text-gray-600 bg-white px-2 py-0.5 rounded border border-gray-300 font-semibold">
          {label}
        </span>
      )}
      {children || <div className="text-gray-400 text-xs">Content</div>}
    </div>
  )
}

export const WireframeText: React.FC<{ lines?: number; label?: string; className?: string }> = ({ 
  lines = 1, 
  label,
  className = ''
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && <div className="text-xs font-mono text-gray-500 mb-1">{label}</div>}
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-3 bg-gray-200 rounded"
          style={{ width: i === lines - 1 ? '75%' : '100%' }}
        />
      ))}
    </div>
  )
}

export const WireframeButton: React.FC<{ label?: string; variant?: 'primary' | 'secondary' }> = ({ 
  label = 'Button', 
  variant = 'primary' 
}) => {
  const bgColor = variant === 'primary' ? 'bg-gray-600' : 'bg-gray-300'
  return (
    <div className={`${bgColor} text-white text-xs font-semibold px-4 py-2 rounded inline-block text-center min-w-[100px]`}>
      {label}
    </div>
  )
}

export const WireframeImage: React.FC<{ label?: string; aspectRatio?: string; className?: string }> = ({ 
  label = 'Image', 
  aspectRatio = 'aspect-video',
  className = ''
}) => {
  return (
    <div className={`${aspectRatio} border-2 border-dashed border-gray-400 bg-gray-100 rounded flex items-center justify-center relative ${className}`}>
      <span className="text-xs font-mono text-gray-400">{label}</span>
    </div>
  )
}

interface WireframeLayoutProps {
  title: string
  url?: string
  children: React.ReactNode
}

export const WireframeLayout: React.FC<WireframeLayoutProps> = ({ 
  title, 
  url, 
  children 
}) => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
      {/* Browser Bar */}
      <div className="bg-gray-200 border-b border-gray-300 px-4 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 font-mono">
          {url ? `www.${url}` : title}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 md:p-6">
        {children}
      </div>
    </div>
  )
}

