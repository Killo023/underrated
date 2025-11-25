'use client'

import { WireframeLayout, WireframeBox, WireframeText, WireframeButton, WireframeImage } from '../Wireframe'

const FitGuideWireframe = () => {
  return (
    <WireframeLayout 
      title="FitGuide Pro" 
      url="fitguidepro.online"
    >
      {/* Header/Navigation */}
      <div className="mb-6">
        <WireframeBox height="h-16" label="Header">
          <div className="flex items-center justify-between w-full px-4">
            <WireframeText lines={1} label="Logo" />
            <div className="flex gap-2">
              <WireframeText lines={1} label="Features" />
              <WireframeText lines={1} label="Plans" />
              <WireframeButton label="Sign Up" />
            </div>
          </div>
        </WireframeBox>
      </div>

      {/* Hero Section */}
      <div className="mb-6">
        <WireframeBox height="h-80" label="Hero Section">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <WireframeText lines={3} />
            <div className="flex gap-2">
              <WireframeButton label="Get Started" />
              <WireframeButton label="Learn More" variant="secondary" />
            </div>
          </div>
        </WireframeBox>
      </div>

      {/* AI Features Section */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="AI-Powered Features" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WireframeBox height="h-40" label="AI Workout Plans">
            <div className="flex flex-col gap-2">
              <WireframeImage label="AI Icon" aspectRatio="aspect-square w-20" />
              <WireframeText lines={3} />
            </div>
          </WireframeBox>
          <WireframeBox height="h-40" label="AI Nutrition Plans">
            <div className="flex flex-col gap-2">
              <WireframeImage label="Nutrition Icon" aspectRatio="aspect-square w-20" />
              <WireframeText lines={3} />
            </div>
          </WireframeBox>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="How It Works" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <WireframeBox key={i} height="h-32" label={`Step ${i}`}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                  {i}
                </div>
                <WireframeText lines={2} />
              </div>
            </WireframeBox>
          ))}
        </div>
      </div>

      {/* Pricing/Plans */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Pricing Plans" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Basic', 'Pro', 'Premium'].map((plan) => (
            <WireframeBox key={plan} height="h-48" label={`${plan} Plan`}>
              <div className="flex flex-col gap-2">
                <WireframeText lines={1} />
                <WireframeText lines={1} />
                <WireframeText lines={3} />
                <WireframeButton label="Choose Plan" />
              </div>
            </WireframeBox>
          ))}
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="mb-6">
        <WireframeBox height="h-64" label="Dashboard Preview">
          <div className="grid grid-cols-3 gap-4 w-full">
            <WireframeBox height="h-20" label="Stats" />
            <WireframeBox height="h-20" label="Progress" />
            <WireframeBox height="h-20" label="Goals" />
            <WireframeImage label="Workout Chart" className="col-span-2" />
            <WireframeBox height="h-32" label="Today's Plan" />
          </div>
        </WireframeBox>
      </div>

      {/* Footer */}
      <WireframeBox height="h-24" label="Footer">
        <div className="flex justify-between items-center w-full px-4">
          <WireframeText lines={2} />
          <WireframeText lines={1} label="Social Links" />
        </div>
      </WireframeBox>
    </WireframeLayout>
  )
}

export default FitGuideWireframe


