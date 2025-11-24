import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message, service } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the form submission (in production, you would send this to an email service)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      message,
      service,
      timestamp: new Date().toISOString()
    })

    // In a real application, you would:
    // 1. Send an email notification to your team
    // 2. Store the lead in your CRM
    // 3. Send a confirmation email to the user
    // 4. Integrate with services like Formspree, Resend, or SendGrid

    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
