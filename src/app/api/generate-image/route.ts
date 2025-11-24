import { NextRequest, NextResponse } from 'next/server'
import { geminiImageService, ImageGenerationRequest } from '@/lib/gemini-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { prompt, style, quality, aspectRatio, userIdentifier } = body

    // Validate required fields
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      )
    }

    // Validate prompt length
    if (prompt.length > 500) {
      return NextResponse.json(
        { error: 'Prompt must be less than 500 characters' },
        { status: 400 }
      )
    }

    // Create request object
    const imageRequest: ImageGenerationRequest = {
      prompt: prompt.trim(),
      style: style || 'photographic',
      quality: quality || 'high',
      aspectRatio: aspectRatio || '16:9',
      userIdentifier: userIdentifier || 'anonymous'
    }

    // Generate image
    const result = await geminiImageService.generateImage(imageRequest)

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to generate image' },
        { status: 500 }
      )
    }

    // Log usage for monitoring
    console.log('Image generated:', {
      prompt: imageRequest.prompt,
      userIdentifier: imageRequest.userIdentifier,
      timestamp: new Date().toISOString(),
      usage: result.usage
    })

    return NextResponse.json({
      success: true,
      imageUrl: result.imageUrl,
      description: result.description,
      usage: result.usage
    })

  } catch (error: any) {
    console.error('Image generation API error:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}


