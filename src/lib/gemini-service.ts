import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
import { GEMINI_CONFIG, checkRateLimit } from './gemini-config'

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(GEMINI_CONFIG.API_KEY)

export interface ImageGenerationRequest {
  prompt: string
  style?: 'photographic' | 'illustration' | 'artistic' | 'minimalist'
  quality?: 'low' | 'medium' | 'high'
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2'
  userIdentifier?: string
}

export interface ImageGenerationResponse {
  success: boolean
  imageUrl?: string
  description?: string
  error?: string
  usage?: {
    promptTokens: number
    responseTokens: number
  }
}

export class GeminiImageService {
  private model: any

  constructor() {
    if (!GEMINI_CONFIG.API_KEY) {
      console.warn('Gemini API key not found. Image generation will use fallback.')
    } else {
      this.model = genAI.getGenerativeModel({ 
        model: GEMINI_CONFIG.MODEL_NAME,
        safetySettings: GEMINI_CONFIG.SAFETY_SETTINGS
      })
    }
  }

  async generateImage(request: ImageGenerationRequest): Promise<ImageGenerationResponse> {
    try {
      // Check rate limiting
      if (request.userIdentifier && !checkRateLimit(request.userIdentifier)) {
        return {
          success: false,
          error: 'Rate limit exceeded. Please try again later.'
        }
      }

      // If no API key, use fallback
      if (!this.model) {
        return this.getFallbackImage(request)
      }

      // Enhanced prompt for better results
      const enhancedPrompt = this.enhancePrompt(request.prompt, request.style)
      
      // Generate image using Gemini
      const result = await this.model.generateContent(enhancedPrompt)
      const response = await result.response
      
      // For now, Gemini doesn't directly generate images, so we'll use it to enhance our Unsplash search
      const enhancedQuery = this.extractImageQuery(response.text())
      
      return {
        success: true,
        imageUrl: `https://source.unsplash.com/800x600/?${encodeURIComponent(enhancedQuery)}`,
        description: response.text(),
        usage: {
          promptTokens: enhancedPrompt.length,
          responseTokens: response.text().length
        }
      }

    } catch (error: any) {
      console.error('Gemini API Error:', error)
      
      // Fallback to Unsplash on error
      return this.getFallbackImage(request)
    }
  }

  private enhancePrompt(prompt: string, style?: 'photographic' | 'illustration' | 'artistic' | 'minimalist'): string {
    const styleModifiers: Record<'photographic' | 'illustration' | 'artistic' | 'minimalist', string> = {
      photographic: 'professional photography, high quality, realistic',
      illustration: 'digital illustration, clean design, modern',
      artistic: 'artistic interpretation, creative, visually appealing',
      minimalist: 'minimalist design, clean, simple, modern'
    }

    const basePrompt = `Generate a detailed description for an image search query based on: "${prompt}". 
    The image should be suitable for a business automation website. 
    Focus on professional, modern, and technology-related themes.
    ${style && style in styleModifiers ? `Style: ${styleModifiers[style]}` : style ? `Style: ${styleModifiers.photographic}` : ''}
    
    Return only the enhanced search query, no additional text.`

    return basePrompt
  }

  private extractImageQuery(geminiResponse: string): string {
    // Extract the most relevant search terms from Gemini's response
    const words = geminiResponse.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 2)
      .slice(0, 5) // Take first 5 relevant words
    
    return words.join(' ')
  }

  private getFallbackImage(request: ImageGenerationRequest): ImageGenerationResponse {
    // Fallback to Unsplash with enhanced query
    const enhancedQuery = this.enhancePromptForUnsplash(request.prompt, request.style)
    
    return {
      success: true,
      imageUrl: `https://source.unsplash.com/800x600/?${encodeURIComponent(enhancedQuery)}`,
      description: `Generated image for: ${request.prompt}`,
      usage: {
        promptTokens: 0,
        responseTokens: 0
      }
    }
  }

  private enhancePromptForUnsplash(prompt: string, style?: 'photographic' | 'illustration' | 'artistic' | 'minimalist'): string {
    const businessKeywords = ['business', 'professional', 'office', 'technology', 'modern']
    const styleKeywords: Record<'photographic' | 'illustration' | 'artistic' | 'minimalist', string> = {
      photographic: 'photography professional',
      illustration: 'illustration design',
      artistic: 'art creative',
      minimalist: 'minimal clean'
    }

    const enhanced = [
      prompt,
      ...businessKeywords,
      style && style in styleKeywords ? styleKeywords[style] : 'photography'
    ].join(' ')

    return enhanced
  }

  async generateImageVariations(basePrompt: string, count: number = 3): Promise<ImageGenerationResponse[]> {
    const variations = []
    
    for (let i = 0; i < count; i++) {
      const variationPrompt = `${basePrompt} ${['modern', 'professional', 'innovative'][i] || ''}`
      const result = await this.generateImage({
        prompt: variationPrompt,
        userIdentifier: 'variation'
      })
      variations.push(result)
    }
    
    return variations
  }

  async analyzeImage(imageUrl: string): Promise<{ description: string; tags: string[] }> {
    if (!this.model) {
      return {
        description: 'Image analysis not available without API key',
        tags: []
      }
    }

    try {
      const prompt = `Analyze this image and provide a brief description and relevant tags for a business website. 
      Focus on professional, technology, and automation themes.`
      
      const result = await this.model.generateContent([prompt, { inlineData: { data: imageUrl, mimeType: 'image/jpeg' } }])
      const response = await result.response
      
      return {
        description: response.text(),
        tags: this.extractTags(response.text())
      }
    } catch (error) {
      console.error('Image analysis error:', error)
      return {
        description: 'Unable to analyze image',
        tags: []
      }
    }
  }

  private extractTags(text: string): string[] {
    const commonTags = ['business', 'technology', 'professional', 'modern', 'office', 'automation', 'digital', 'innovation']
    const words = text.toLowerCase().split(/\s+/)
    
    return commonTags.filter(tag => words.some(word => word.includes(tag)))
  }
}

// Export singleton instance
export const geminiImageService = new GeminiImageService()


