'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react'
import SmartImage from './SmartImage'

interface ImageGalleryProps {
  images: Array<{
    id: string
    query: string
    alt: string
    category: 'business' | 'technology' | 'automation' | 'team' | 'office'
  }>
  className?: string
}

const ImageGallery = ({ images, className = '' }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setSelectedImage(images[index].id)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer rounded-lg overflow-hidden hover-lift"
            onClick={() => openModal(index)}
          >
            <SmartImage
              query={image.query}
              width={300}
              height={200}
              alt={image.alt}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              category={image.category}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Download className="h-4 w-4 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <SmartImage
                query={images[currentIndex].query}
                width={800}
                height={600}
                alt={images[currentIndex].alt}
                className="w-full h-auto max-h-[70vh] object-contain"
                category={images[currentIndex].category}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {images[currentIndex].alt}
                </h3>
                <p className="text-sm text-gray-600">
                  Image {currentIndex + 1} of {images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery
