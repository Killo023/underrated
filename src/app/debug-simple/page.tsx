'use client'

const DebugSimplePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Debug Simple Page</h1>
      
      <div className="bg-red-100 p-8 mb-8 rounded-lg">
        <h2 className="text-2xl font-bold text-red-800 mb-4">Test Section 1</h2>
        <p className="text-gray-700">This should be visible with a red background.</p>
      </div>

      <div className="bg-green-100 p-8 mb-8 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Test Section 2</h2>
        <p className="text-gray-700">This should be visible with a green background.</p>
      </div>

      <div className="bg-blue-100 p-8 mb-8 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Test Section 3</h2>
        <p className="text-gray-700">This should be visible with a blue background.</p>
      </div>

      <div className="text-center text-gray-600">
        If you can see all three colored sections above, the basic layout is working.
      </div>
    </div>
  )
}

export default DebugSimplePage


