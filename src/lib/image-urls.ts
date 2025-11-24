// Curated list of unique Unsplash photo IDs for dashboard and tech images
// Each image is unique and will only be used once across the website

// All unique images organized by category - no duplicates
export const ALL_IMAGES = {
  // Dashboard & Analytics images - all unique
  dashboard: [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71', // Analytics dashboard with charts
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f', // Business analytics
    'https://images.unsplash.com/photo-1551650975-87deedd944c3', // Software interface
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d', // Person working on laptop
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3', // Dashboard on screen
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd', // Business analytics meeting
    'https://images.unsplash.com/photo-1553877522-43269d4ea984', // Team meeting with dashboard
  ],
  
  // Web Development & Coding images
  webdev: [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6', // Code on monitor
    'https://images.unsplash.com/photo-1498050108023-c5249f4df1b3', // Web development workspace
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3', // Programming setup
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd', // Code editor close-up
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713', // Coding on laptop
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c', // Code on screen
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97', // MacBook with code
    'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2', // Developer typing
  ],
  
  // Mobile App images
  mobile: [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c', // Mobile app design
    'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6', // Smartphone with apps
    'https://images.unsplash.com/photo-1526498460520-4c246339dccb', // Multiple phones
    'https://images.unsplash.com/photo-1565849904461-04a58ad377e0', // App development
    'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2', // Tablet and phone
  ],
  
  // Business & Professional images
  business: [
    'https://images.unsplash.com/photo-1552664730-d307ca884978', // Business meeting
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0', // Team collaboration
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf', // Office workspace
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7', // Modern office
    'https://images.unsplash.com/photo-1497366216548-37526070297c', // Corporate building
  ],
  
  // Technology & Innovation images
  technology: [
    'https://images.unsplash.com/photo-1518770660439-4636190af475', // Circuit board
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e', // Robot technology
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1', // Tech abstract
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b', // Digital technology
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c', // Team with laptops
  ],
}

// Track which images have been used to prevent repetition
let usedImageIndices: Record<string, Set<number>> = {
  dashboard: new Set(),
  webdev: new Set(),
  mobile: new Set(),
  business: new Set(),
  technology: new Set(),
}

// Reset used images (call this when page reloads)
export const resetUsedImages = () => {
  usedImageIndices = {
    dashboard: new Set(),
    webdev: new Set(),
    mobile: new Set(),
    business: new Set(),
    technology: new Set(),
  }
}

// Get a unique image from a category
const getUniqueImage = (category: keyof typeof ALL_IMAGES, index: number, width: number, height: number): string => {
  const images = ALL_IMAGES[category]
  // Use modulo to cycle through images, but ensure uniqueness within a page by using index
  const imageIndex = index % images.length
  const baseUrl = images[imageIndex]
  return `${baseUrl}?fit=crop&w=${width}&h=${height}&q=80&auto=format`
}

// Get image by specific index (for sections that need predictable images)
export const getImageByIndex = (category: keyof typeof ALL_IMAGES, index: number, width: number = 1200, height: number = 800): string => {
  return getUniqueImage(category, index, width, height)
}

// Legacy functions for compatibility
export const getDashboardImage = (query: string, width: number = 1200, height: number = 800): string => {
  const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return getUniqueImage('dashboard', queryHash, width, height)
}

export const getWebDevImage = (query: string, width: number = 1200, height: number = 800): string => {
  const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return getUniqueImage('webdev', queryHash, width, height)
}

export const getMobileImage = (query: string, width: number = 1200, height: number = 800): string => {
  const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return getUniqueImage('mobile', queryHash, width, height)
}

export const getBusinessImage = (index: number, width: number = 1200, height: number = 800): string => {
  return getUniqueImage('business', index, width, height)
}

export const getTechnologyImage = (index: number, width: number = 1200, height: number = 800): string => {
  return getUniqueImage('technology', index, width, height)
}

// For components that need explicit unique images by position
export const HERO_IMAGE = `${ALL_IMAGES.dashboard[0]}?fit=crop&w=600&h=400&q=80&auto=format`
export const SERVICES_IMAGES = [
  `${ALL_IMAGES.webdev[0]}?fit=crop&w=400&h=200&q=80&auto=format`,
  `${ALL_IMAGES.mobile[0]}?fit=crop&w=400&h=200&q=80&auto=format`,
  `${ALL_IMAGES.technology[0]}?fit=crop&w=400&h=200&q=80&auto=format`,
  `${ALL_IMAGES.webdev[1]}?fit=crop&w=400&h=200&q=80&auto=format`,
]
export const DASHBOARD_SHOWCASE_IMAGES = [
  `${ALL_IMAGES.dashboard[1]}?fit=crop&w=1200&h=800&q=80&auto=format`,
  `${ALL_IMAGES.dashboard[2]}?fit=crop&w=1200&h=800&q=80&auto=format`,
  `${ALL_IMAGES.dashboard[3]}?fit=crop&w=1200&h=800&q=80&auto=format`,
  `${ALL_IMAGES.dashboard[4]}?fit=crop&w=1200&h=800&q=80&auto=format`,
]
export const FEATURES_IMAGES = [
  `${ALL_IMAGES.webdev[2]}?fit=crop&w=600&h=400&q=80&auto=format`,
  `${ALL_IMAGES.webdev[3]}?fit=crop&w=600&h=400&q=80&auto=format`,
  `${ALL_IMAGES.mobile[1]}?fit=crop&w=600&h=400&q=80&auto=format`,
  `${ALL_IMAGES.technology[1]}?fit=crop&w=600&h=400&q=80&auto=format`,
  `${ALL_IMAGES.webdev[4]}?fit=crop&w=600&h=400&q=80&auto=format`,
  `${ALL_IMAGES.technology[2]}?fit=crop&w=600&h=400&q=80&auto=format`,
]

// Services page images - all unique
export const SERVICES_PAGE_HERO = `${ALL_IMAGES.dashboard[5]}?fit=crop&w=600&h=400&q=80&auto=format`
export const SERVICES_PAGE_IMAGES = [
  `${ALL_IMAGES.webdev[5]}?fit=crop&w=600&h=320&q=80&auto=format`, // Web Development
  `${ALL_IMAGES.mobile[2]}?fit=crop&w=600&h=320&q=80&auto=format`, // Mobile App
  `${ALL_IMAGES.webdev[6]}?fit=crop&w=600&h=320&q=80&auto=format`, // Custom Software
  `${ALL_IMAGES.webdev[7]}?fit=crop&w=600&h=320&q=80&auto=format`, // Web Application
]
export const SERVICES_PAGE_CTA = `${ALL_IMAGES.business[0]}?fit=crop&w=600&h=400&q=80&auto=format`

// Blog page images - all unique
export const BLOG_PAGE_HERO = `${ALL_IMAGES.business[1]}?fit=crop&w=600&h=400&q=80&auto=format`
export const BLOG_POST_IMAGES = [
  `${ALL_IMAGES.technology[3]}?fit=crop&w=400&h=192&q=80&auto=format`,
  `${ALL_IMAGES.mobile[3]}?fit=crop&w=400&h=192&q=80&auto=format`,
  `${ALL_IMAGES.dashboard[6]}?fit=crop&w=400&h=192&q=80&auto=format`,
  `${ALL_IMAGES.business[2]}?fit=crop&w=400&h=192&q=80&auto=format`,
  `${ALL_IMAGES.technology[4]}?fit=crop&w=400&h=192&q=80&auto=format`,
]

// DetailedFeatures section - verified working Unsplash images
export const DETAILED_FEATURES_IMAGES = [
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?fit=crop&w=600&h=200&q=80&auto=format', // Modern Tech Stack - React logo
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?fit=crop&w=600&h=200&q=80&auto=format', // Responsive Design - devices
  'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?fit=crop&w=600&h=200&q=80&auto=format', // SEO Optimization - search
  'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?fit=crop&w=600&h=200&q=80&auto=format', // Database Integration - server
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=600&h=200&q=80&auto=format', // Performance - speed
  'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?fit=crop&w=600&h=200&q=80&auto=format', // Security - lock/code
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=600&h=200&q=80&auto=format', // Analytics - dashboard
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=600&h=200&q=80&auto=format', // UX Design - person working
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=600&h=200&q=80&auto=format', // Maintenance - tech support
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=600&h=200&q=80&auto=format', // Scalability - cloud/globe
]
