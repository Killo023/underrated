export default function DebugPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Debug Page</h1>
      
      <div className="space-y-8">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Hero Component</h2>
          <div className="h-64 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Hero Section Placeholder</span>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Services Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-32 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Service 1</span>
            </div>
            <div className="h-32 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Service 2</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Products Component</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-48 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Product 1</span>
            </div>
            <div className="h-48 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Product 2</span>
            </div>
            <div className="h-48 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Product 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


