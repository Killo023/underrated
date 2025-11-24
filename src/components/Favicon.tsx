import React from 'react'

const Favicon = () => {
  return (
    <>
      {/* Favicon SVG */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden"
      >
        {/* White circle with green border */}
        <circle cx="16" cy="16" r="14" fill="white" stroke="#15803d" strokeWidth="2"/>
        
        {/* Hexagon outline */}
        <polygon
          points="16,8 24,12 24,20 16,24 8,20 8,12"
          fill="none"
          stroke="#15803d"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        
        {/* Bar chart inside hexagon */}
        <g transform="translate(12, 14)">
          {/* Left bar - shortest, lightest red */}
          <rect x="0" y="4" width="2" height="3" fill="#f87171" rx="0.5"/>
          {/* Middle bar - medium height, medium red */}
          <rect x="3" y="2" width="2" height="5" fill="#ef4444" rx="0.5"/>
          {/* Right bar - tallest, darkest red */}
          <rect x="6" y="0" width="2" height="7" fill="#dc2626" rx="0.5"/>
        </g>
        
        {/* Small star in bottom right */}
        <g transform="translate(24, 24)">
          <path
            d="M4 2l1.2 2.4L7.6 3.6l1.2 2.4L12 2l-3.2 1.2L7.6 6.4 4 2z"
            fill="white"
          />
        </g>
      </svg>
    </>
  )
}

export default Favicon


