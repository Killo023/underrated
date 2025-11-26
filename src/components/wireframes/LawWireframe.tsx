'use client'

import { WireframeLayout, WireframeBox, WireframeText, WireframeButton, WireframeImage } from '../Wireframe'

const LawWireframe = () => {
  return (
    <WireframeLayout 
      title="DMA Law" 
      url="dmalaw.co.za"
    >
      {/* Header/Navigation */}
      <div className="mb-6">
        <WireframeBox height="h-16" label="Header">
          <div className="flex items-center justify-between w-full px-4">
            <WireframeText lines={1} label="Logo" />
            <div className="flex gap-2">
              <WireframeText lines={1} label="Services" />
              <WireframeText lines={1} label="Team" />
              <WireframeText lines={1} label="News" />
              <WireframeText lines={1} label="FICA" />
              <WireframeText lines={1} label="Contact" />
            </div>
          </div>
        </WireframeBox>
      </div>

      {/* Hero Section */}
      <div className="mb-6">
        <WireframeBox height="h-64" label="Hero Section">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <WireframeText lines={3} />
            <WireframeButton label="Consultation" />
          </div>
        </WireframeBox>
      </div>

      {/* Mission/About Section */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WireframeBox height="h-48" label="Our Mission">
            <WireframeText lines={6} />
          </WireframeBox>
          <WireframeImage label="Office Image" />
        </div>
      </div>

      {/* Services */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Legal Services" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Corporate Law', 'Conveyancing', 'Notary Services', 'Commercial', 'Litigation', 'FICA'].map((service) => (
            <WireframeBox key={service} height="h-32" label={service}>
              <WireframeText lines={3} />
            </WireframeBox>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Our Team" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <WireframeBox key={i} height="h-40" label={`Team Member ${i}`}>
              <div className="flex flex-col items-center gap-2">
                <WireframeImage label="Photo" aspectRatio="aspect-square w-24" />
                <WireframeText lines={2} />
              </div>
            </WireframeBox>
          ))}
        </div>
      </div>

      {/* B-BBEE Information */}
      <div className="mb-6">
        <WireframeBox height="h-32" label="B-BBEE Information">
          <div className="flex items-center gap-4">
            <WireframeImage label="B-BBEE Badge" aspectRatio="aspect-square w-20" />
            <WireframeText lines={4} />
          </div>
        </WireframeBox>
      </div>

      {/* News/Updates Section */}
      <div className="mb-6">
        <div className="mb-2">
          <WireframeText lines={1} label="Latest News" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <WireframeBox key={i} height="h-40" label={`News Article ${i}`}>
              <div className="flex flex-col gap-2">
                <WireframeImage label="Article Image" aspectRatio="aspect-video" />
                <WireframeText lines={3} />
              </div>
            </WireframeBox>
          ))}
        </div>
      </div>

      {/* FICA Section */}
      <div className="mb-6">
        <WireframeBox height="h-48" label="FICA Compliance">
          <div className="space-y-4">
            <WireframeText lines={1} label="FICA Requirements" />
            <WireframeText lines={4} />
            <WireframeButton label="Download Forms" />
          </div>
        </WireframeBox>
      </div>

      {/* Contact Section */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WireframeBox height="h-48" label="Contact Form">
            <div className="grid grid-cols-2 gap-4">
              <WireframeText lines={1} label="Name" />
              <WireframeText lines={1} label="Email" />
              <WireframeText lines={1} label="Phone" />
              <WireframeText lines={1} label="Service" />
              <WireframeText lines={2} label="Message" className="col-span-2" />
              <div className="col-span-2">
                <WireframeButton label="Send" />
              </div>
            </div>
          </WireframeBox>
          <WireframeBox height="h-48" label="Contact Information">
            <div className="space-y-2">
              <WireframeText lines={1} label="Address" />
              <WireframeText lines={1} label="Phone" />
              <WireframeText lines={1} label="Email" />
              <WireframeText lines={1} label="Hours" />
            </div>
          </WireframeBox>
        </div>
      </div>

      {/* Footer */}
      <WireframeBox height="h-32" label="Footer">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <WireframeText lines={2} />
            <WireframeText lines={1} label="Quick Links" />
          </div>
          <div className="flex justify-between">
            <WireframeText lines={1} label="Copyright" />
            <WireframeText lines={1} label="Social Links" />
          </div>
        </div>
      </WireframeBox>
    </WireframeLayout>
  )
}

export default LawWireframe



