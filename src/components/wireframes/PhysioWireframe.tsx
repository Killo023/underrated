'use client'

import { WireframeLayout, WireframeBox, WireframeText, WireframeButton, WireframeImage } from '../Wireframe'

const PhysioWireframe = () => {
  return (
    <WireframeLayout 
      title="Cherné Langeveldt Physiotherapy" 
      url="chernelangphysio.co.za"
    >
      {/* Header/Navigation */}
      <div className="mb-6">
        <WireframeBox height="h-16" label="Header">
          <div className="flex items-center justify-between w-full px-4">
            <WireframeText lines={1} label="Logo" />
            <div className="flex gap-2">
              <WireframeText lines={1} label="Nav" />
              <WireframeText lines={1} label="Nav" />
              <WireframeText lines={1} label="Nav" />
              <WireframeButton label="Book" />
            </div>
          </div>
        </WireframeBox>
      </div>

      {/* Hero Section */}
      <div className="mb-6">
        <WireframeBox height="h-64" label="Hero Section">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <WireframeText lines={2} />
            <WireframeButton label="Book Appointment" />
          </div>
        </WireframeBox>
      </div>

      {/* Services Grid */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Section Title" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <WireframeBox key={i} height="h-32" label={`Service ${i}`}>
              <div className="flex flex-col items-center gap-2">
                <WireframeImage label="Icon" aspectRatio="aspect-square w-16" />
                <WireframeText lines={2} />
              </div>
            </WireframeBox>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WireframeBox height="h-48" label="About Content">
            <WireframeText lines={5} />
          </WireframeBox>
          <WireframeImage label="About Image" />
        </div>
      </div>

      {/* Contact/Booking Section */}
      <div className="mb-6">
        <WireframeBox height="h-48" label="Contact Form">
          <div className="grid grid-cols-2 gap-4 w-full">
            <WireframeText lines={1} label="Name Field" />
            <WireframeText lines={1} label="Email Field" />
            <WireframeText lines={1} label="Phone Field" />
            <WireframeText lines={1} label="Date Field" />
            <WireframeText lines={2} label="Message Field" className="col-span-2" />
            <div className="col-span-2">
              <WireframeButton label="Submit" />
            </div>
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

export default PhysioWireframe

