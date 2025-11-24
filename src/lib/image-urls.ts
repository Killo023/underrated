// Curated list of Unsplash photo IDs for dashboard and tech images
// These are verified to be actual dashboard/analytics/tech interface images

export const DASHBOARD_IMAGES = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1200&h=800&q=80&auto=format', // Analytics dashboard
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=1200&h=800&q=80&auto=format', // Business dashboard
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?fit=crop&w=1200&h=800&q=80&auto=format', // Software interface
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=1200&h=800&q=80&auto=format', // Data visualization
]

export const WEB_DEV_IMAGES = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=1200&h=800&q=80&auto=format', // Coding
  'https://images.unsplash.com/photo-1498050108023-c5249f4df1b3?fit=crop&w=1200&h=800&q=80&auto=format', // Web development
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fit=crop&w=1200&h=800&q=80&auto=format', // Programming
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?fit=crop&w=1200&h=800&q=80&auto=format', // Code editor
]

export const MOBILE_IMAGES = [
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?fit=crop&w=1200&h=800&q=80&auto=format', // Mobile app
  'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?fit=crop&w=1200&h=800&q=80&auto=format', // Smartphone
]

// Get image URL based on query and dimensions
export const getDashboardImage = (query: string, width: number = 1200, height: number = 800): string => {
  const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const baseUrl = DASHBOARD_IMAGES[queryHash % DASHBOARD_IMAGES.length]
  return baseUrl.replace('w=1200&h=800', `w=${width}&h=${height}`)
}

export const getWebDevImage = (query: string, width: number = 1200, height: number = 800): string => {
  const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const baseUrl = WEB_DEV_IMAGES[queryHash % WEB_DEV_IMAGES.length]
  return baseUrl.replace('w=1200&h=800', `w=${width}&h=${height}`)
}

export const getMobileImage = (query: string, width: number = 1200, height: number = 800): string => {
  const queryHash = query.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const baseUrl = MOBILE_IMAGES[queryHash % MOBILE_IMAGES.length]
  return baseUrl.replace('w=1200&h=800', `w=${width}&h=${height}`)
}

