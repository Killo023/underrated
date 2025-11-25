'use client'

import { WireframeLayout, WireframeBox, WireframeText, WireframeButton, WireframeImage } from '../Wireframe'

const CleaningWireframe = () => {
  return (
    <WireframeLayout 
      title="Skainet Cleaning Services" 
      url="skainetcleaning.co.za"
    >
      {/* Header/Navigation */}
      <div className="mb-6">
        <WireframeBox height="h-16" label="Header">
          <div className="flex items-center justify-between w-full px-4">
            <WireframeText lines={1} label="Logo" />
            <div className="flex gap-2">
              <WireframeText lines={1} label="Services" />
              <WireframeText lines={1} label="About" />
              <WireframeText lines={1} label="Contact" />
              <WireframeButton label="Get Quote" />
            </div>
          </div>
        </WireframeBox>
      </div>

      {/* Hero Section */}
      <div className="mb-6">
        <WireframeBox height="h-64" label="Hero Section">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <WireframeText lines={2} />
            <WireframeButton label="Request Quote" />
          </div>
        </WireframeBox>
      </div>

      {/* Services Grid */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Our Services" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Residential', 'Commercial', 'Deep Clean', 'Window'].map((service) => (
            <WireframeBox key={service} height="h-32" label={service}>
              <div className="flex flex-col items-center gap-2">
                <WireframeImage label="Icon" aspectRatio="aspect-square w-16" />
                <WireframeText lines={2} />
              </div>
            </WireframeBox>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WireframeBox height="h-48" label="Service Areas">
            <div className="space-y-2">
              <WireframeText lines={1} label="Coverage Areas" />
              <WireframeText lines={4} />
            </div>
          </WireframeBox>
          <WireframeImage label="Map/Area Image" />
        </div>
      </div>

      {/* Portfolio/Gallery */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Our Work" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <WireframeImage key={i} label={`Before/After ${i}`} />
          ))}
        </div>
      </div>

      {/* Quote Request Form */}
      <div className="mb-6">
        <WireframeBox height="h-56" label="Quote Request Form">
          <div className="grid grid-cols-2 gap-4 w-full">
            <WireframeText lines={1} label="Name" />
            <WireframeText lines={1} label="Phone" />
            <WireframeText lines={1} label="Email" />
            <WireframeText lines={1} label="Service Type" />
            <WireframeText lines={1} label="Property Size" />
            <WireframeText lines={1} label="Frequency" />
            <WireframeText lines={2} label="Additional Info" className="col-span-2" />
            <div className="col-span-2">
              <WireframeButton label="Request Quote" />
            </div>
          </div>
        </WireframeBox>
      </div>

      {/* Testimonials */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Client Testimonials" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <WireframeBox key={i} height="h-32" label={`Testimonial ${i}`}>
              <WireframeText lines={4} />
            </WireframeBox>
          ))}
        </div>
      </div>

      {/* Footer */}
      <WireframeBox height="h-24" label="Footer">
        <div className="flex justify-between items-center w-full px-4">
          <WireframeText lines={2} />
          <WireframeText lines={1} label="Contact Info" />
        </div>
      </WireframeBox>
    </WireframeLayout>
  )
}

export default CleaningWireframe


