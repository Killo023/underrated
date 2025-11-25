'use client'

import { WireframeLayout, WireframeBox, WireframeText, WireframeButton, WireframeImage } from '../Wireframe'

const FurnitureWireframe = () => {
  return (
    <WireframeLayout 
      title="Skills To Furnish International" 
      url="skillstofurnish.co.za"
    >
      {/* Header/Navigation */}
      <div className="mb-6">
        <WireframeBox height="h-16" label="Header">
          <div className="flex items-center justify-between w-full px-4">
            <WireframeText lines={1} label="Logo" />
            <div className="flex gap-2">
              <WireframeText lines={1} label="Programs" />
              <WireframeText lines={1} label="Gallery" />
              <WireframeText lines={1} label="About" />
              <WireframeText lines={1} label="Contact" />
              <WireframeButton label="Apply" />
            </div>
          </div>
        </WireframeBox>
      </div>

      {/* Hero Section */}
      <div className="mb-6">
        <WireframeBox height="h-64" label="Hero Section">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <WireframeText lines={3} />
            <WireframeButton label="Enroll Now" />
          </div>
        </WireframeBox>
      </div>

      {/* About/Story Section */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WireframeBox height="h-48" label="Our Story">
            <WireframeText lines={6} />
          </WireframeBox>
          <WireframeImage label="Training Image" />
        </div>
      </div>

      {/* Training Programs */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Training Programs" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Wood Machining', 'Cabinet Making', 'Wood Finishing', 'Upholstery'].map((program) => (
            <WireframeBox key={program} height="h-40" label={program}>
              <div className="flex flex-col gap-2">
                <WireframeImage label="Program Icon" aspectRatio="aspect-square w-20" />
                <WireframeText lines={3} />
              </div>
            </WireframeBox>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Training Gallery" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <WireframeImage key={i} label={`Gallery ${i}`} />
          ))}
        </div>
      </div>

      {/* Accreditation */}
      <div className="mb-6">
        <WireframeBox height="h-32" label="Accreditation & Certification">
          <div className="flex items-center gap-4">
            <WireframeImage label="Accreditation Badge" aspectRatio="aspect-square w-24" />
            <WireframeText lines={4} />
          </div>
        </WireframeBox>
      </div>

      {/* Registration/Application Form */}
      <div className="mb-6">
        <WireframeBox height="h-64" label="Registration Form">
          <div className="grid grid-cols-2 gap-4 w-full">
            <WireframeText lines={1} label="Full Name" />
            <WireframeText lines={1} label="ID Number" />
            <WireframeText lines={1} label="Email" />
            <WireframeText lines={1} label="Phone" />
            <WireframeText lines={1} label="Program Interest" />
            <WireframeText lines={1} label="Previous Experience" />
            <WireframeText lines={2} label="Additional Info" className="col-span-2" />
            <div className="col-span-2">
              <WireframeButton label="Submit Application" />
            </div>
          </div>
        </WireframeBox>
      </div>

      {/* Contact Information */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WireframeBox height="h-40" label="Contact Details">
            <div className="space-y-2">
              <WireframeText lines={1} label="Address" />
              <WireframeText lines={1} label="Phone" />
              <WireframeText lines={1} label="Email" />
            </div>
          </WireframeBox>
          <WireframeImage label="Location Map" />
        </div>
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

export default FurnitureWireframe


