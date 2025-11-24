'use client'

import { useState } from 'react'
import { Sparkles, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

interface GeminiImageAssistantProps {
  onImageGenerated: (imageUrl: string, description: string) => void
  className?: string
}

interface GenerationResult {
  success: boolean
  imageUrl?: string
  description?: string
  error?: string
  usage?: {
    promptTokens: number
    responseTokens: number
  }
}

const GeminiImageAssistant = ({ onImageGenerated, className = '' }: GeminiImageAssistantProps) => {
  const [isGenerating, setIsGenerating] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [style, setStyle] = useState<'photographic' | 'illustration' | 'artistic' | 'minimalist'>('photographic')
  const [quality, setQuality] = useState<'low' | 'medium' | 'high'>('high')
  const [lastResult, setLastResult] = useState<GenerationResult | null>(null)

  const generateImage = async () => {
    if (!prompt.trim()) return
    
    setIsGenerating(true)
    setLastResult(null)
    
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          style,
          quality,
          aspectRatio: '16:9',
          userIdentifier: 'user-' + Date.now() // Simple user identification
        }),
      })

      const result: GenerationResult = await response.json()
      setLastResult(result)

      if (result.success && result.imageUrl) {
        onImageGenerated(result.imageUrl, result.description || prompt)
        setPrompt('')
      }
    } catch (error) {
      console.error('Error generating image:', error)
      setLastResult({
        success: false,
        error: 'Network error. Please try again.'
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className={`bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 ${className}`}>
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary-600" />
        <h3 className="text-lg font-semibold text-gray-900">AI Image Assistant</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Describe the image you need and our AI will help generate it for your website.
      </p>

      {/* Style and Quality Selectors */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Style</label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value as any)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            disabled={isGenerating}
          >
            <option value="photographic">Photographic</option>
            <option value="illustration">Illustration</option>
            <option value="artistic">Artistic</option>
            <option value="minimalist">Minimalist</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quality</label>
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value as any)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            disabled={isGenerating}
          >
            <option value="low">Low (Fast)</option>
            <option value="medium">Medium</option>
            <option value="high">High (Best)</option>
          </select>
        </div>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., 'modern office workspace with computers'"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          disabled={isGenerating}
          onKeyPress={(e) => e.key === 'Enter' && generateImage()}
        />
        <button
          onClick={generateImage}
          disabled={isGenerating || !prompt.trim()}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 text-sm"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              <span>Generate</span>
            </>
          )}
        </button>
      </div>

      {/* Result Status */}
      {lastResult && (
        <div className={`p-3 rounded-lg flex items-center space-x-2 text-sm ${
          lastResult.success 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {lastResult.success ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <span>
            {lastResult.success 
              ? 'Image generated successfully!' 
              : lastResult.error || 'Failed to generate image'
            }
          </span>
        </div>
      )}
      
      <div className="mt-3 text-xs text-gray-500">
        Powered by Google Gemini AI • Free tier available
        {lastResult?.usage && (
          <span className="block mt-1">
            Tokens used: {lastResult.usage.promptTokens + lastResult.usage.responseTokens}
          </span>
        )}
      </div>
    </div>
  )
}

export default GeminiImageAssistant
