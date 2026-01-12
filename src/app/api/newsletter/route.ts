import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const getResend = () => {
  if (!process.env.RESEND_API_KEY) {
    return null
  }
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    const resend = getResend()
    if (!resend) {
      console.error('RESEND_API_KEY is not configured')
      // In development/build, just log and return success
      console.log('Newsletter subscription (dev mode):', email)
      return NextResponse.json(
        { message: 'Subscription received (dev mode)' },
        { status: 200 }
      )
    }

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: 'info@underratedsecurity.com',
        subject: 'New Newsletter Subscription',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>New Newsletter Subscription</h2>
            <p>A new subscriber has signed up for your newsletter:</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
        text: `New Newsletter Subscription\n\nEmail: ${email}\nDate: ${new Date().toLocaleString()}`,
      })
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError)
      // Don't fail the request if notification email fails
    }

    // Send confirmation email to subscriber
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: email,
        subject: 'Welcome to Underrated Software Solutions Newsletter',
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #000000; color: #ffffff; padding: 20px; text-align: center; margin-bottom: 20px;">
              <h1>Welcome!</h1>
            </div>
            <div style="background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb;">
              <p>Thank you for subscribing to the Underrated Software Solutions newsletter!</p>
              <p>You'll now receive:</p>
              <ul>
                <li>Latest insights on web development trends</li>
                <li>Best practices for software development</li>
                <li>Tips and strategies for digital solutions</li>
                <li>Updates on new services and offerings</li>
              </ul>
              <p>We're excited to share valuable content with you!</p>
              <p>Best regards,<br>The Underrated Software Solutions Team</p>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
              <p>If you didn't subscribe to this newsletter, please ignore this email.</p>
            </div>
          </div>
        `,
        text: `Welcome!\n\nThank you for subscribing to the Underrated Software Solutions newsletter!\n\nYou'll now receive:\n- Latest insights on web development trends\n- Best practices for software development\n- Tips and strategies for digital solutions\n- Updates on new services and offerings\n\nWe're excited to share valuable content with you!\n\nBest regards,\nThe Underrated Software Solutions Team`,
      })
    } catch (confirmationError) {
      console.error('Failed to send confirmation email:', confirmationError)
      // Don't fail the request if confirmation email fails
    }

    // In a real application, you would also:
    // - Store the email in a database
    // - Add to your email marketing service (Mailchimp, ConvertKit, etc.)
    // - Track subscription analytics

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing newsletter subscription:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
