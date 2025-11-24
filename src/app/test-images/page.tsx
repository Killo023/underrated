import { Metadata } from 'next'
import PlaceholderImage from '@/components/PlaceholderImage'

export const metadata: Metadata = {
  title: 'Image Test - Underrated Software Solutions',
  description: 'Test page to verify image loading and randomization.',
}

const TestImagesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Image Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold mb-4">Business Images</h3>
            <PlaceholderImage
              query="business office professional"
              width={300}
              height={200}
              alt="Business office"
              className="w-full h-48 rounded-lg"
              category="business"
            />
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold mb-4">Technology Images</h3>
            <PlaceholderImage
              query="technology computer digital"
              width={300}
              height={200}
              alt="Technology"
              className="w-full h-48 rounded-lg"
              category="technology"
            />
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-lg font-semibold mb-4">Automation Images</h3>
            <PlaceholderImage
              query="automation robot process"
              width={300}
              height={200}
              alt="Automation"
              className="w-full h-48 rounded-lg"
              category="automation"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Refresh the page to see different images each time!
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestImagesPage
