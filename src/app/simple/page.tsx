export default function SimplePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Simple Test Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Card 1</h2>
            <p className="text-gray-600">This is a simple test card to verify the layout is working.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Card 2</h2>
            <p className="text-gray-600">This is another test card to verify the layout is working.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Card 3</h2>
            <p className="text-gray-600">This is a third test card to verify the layout is working.</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">If you can see this text and the cards above, the basic layout is working.</p>
        </div>
      </div>
    </div>
  )
}


