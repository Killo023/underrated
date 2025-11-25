'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

interface WebsiteShowcaseProps {
  title: string
  url: string
  imagePath: string
  description: string
  category: string
}

const WebsiteShowcase: React.FC<WebsiteShowcaseProps> = ({
  title,
  url,
  imagePath,
  description,
  category
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Browser Bar */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 border-b-2 border-gray-300 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
        </div>
        <div className="flex-1 bg-white rounded-md px-4 py-1.5 text-xs text-gray-600 font-mono border border-gray-300 shadow-inner">
          {url}
        </div>
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 transition-colors"
          title="Visit Website"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      {/* Website Screenshot */}
      <div className="relative bg-gray-50 p-2">
        <div className="relative w-full rounded-lg overflow-hidden shadow-inner border border-gray-200">
          <Image
            src={imagePath}
            alt={`${title} landing page`}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 bg-gradient-to-br from-white to-gray-50">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
              {category}
            </span>
          </div>
        </div>
        <p className="text-gray-600 mt-4 leading-relaxed">{description}</p>
        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
        >
          Visit Live Website
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

export default WebsiteShowcase


