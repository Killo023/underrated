import { HarmCategory, HarmBlockThreshold } from '@google/generative-ai'

// Gemini API Configuration
export const GEMINI_CONFIG = {
  // Get your API key from: https://makersuite.google.com/app/apikey
  API_KEY: process.env.GEMINI_API_KEY || '',
  
  // Rate limiting settings
  MAX_REQUESTS_PER_HOUR: parseInt(process.env.GEMINI_MAX_REQUESTS_PER_HOUR || '50'),
  MAX_REQUESTS_PER_DAY: parseInt(process.env.GEMINI_MAX_REQUESTS_PER_DAY || '1000'),
  
  // Image generation settings
  IMAGE_QUALITY: process.env.GEMINI_IMAGE_QUALITY || 'high',
  IMAGE_STYLE: process.env.GEMINI_IMAGE_STYLE || 'photographic',
  
  // Model settings
  MODEL_NAME: 'gemini-1.5-flash',
  SAFETY_SETTINGS: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
    }
  ]
}

// Rate limiting storage (in production, use Redis or database)
const requestCounts = new Map<string, { hourly: number; daily: number; lastReset: Date }>()

export const checkRateLimit = (identifier: string): boolean => {
  const now = new Date()
  const userRequests = requestCounts.get(identifier) || { hourly: 0, daily: 0, lastReset: now }
  
  // Reset counters if needed
  if (now.getTime() - userRequests.lastReset.getTime() > 24 * 60 * 60 * 1000) {
    userRequests.daily = 0
    userRequests.hourly = 0
    userRequests.lastReset = now
  } else if (now.getTime() - userRequests.lastReset.getTime() > 60 * 60 * 1000) {
    userRequests.hourly = 0
  }
  
  // Check limits
  if (userRequests.hourly >= GEMINI_CONFIG.MAX_REQUESTS_PER_HOUR) {
    return false
  }
  if (userRequests.daily >= GEMINI_CONFIG.MAX_REQUESTS_PER_DAY) {
    return false
  }
  
  // Increment counters
  userRequests.hourly++
  userRequests.daily++
  requestCounts.set(identifier, userRequests)
  
  return true
}


