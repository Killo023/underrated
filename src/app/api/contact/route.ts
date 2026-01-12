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
    const { name, email, company, phone, message, service } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
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
      // In development/build, log and return success to allow build to complete
      if (process.env.NODE_ENV === 'development' || !process.env.RESEND_API_KEY) {
        console.log('Contact form submission (dev mode):', {
          name,
          email,
          company,
          phone,
          message,
          service,
        })
        return NextResponse.json(
          { message: 'Form submitted successfully (dev mode - email not sent)' },
          { status: 200 }
        )
      }
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support directly.' },
        { status: 500 }
      )
    }

    // Prepare email content
    const serviceLabel = service 
      ? service.split('-').map((word: string) => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
      : 'Not specified'

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #000000; color: #ffffff; padding: 20px; text-align: center; }
            .content { background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #111827; margin-bottom: 5px; }
            .value { color: #374151; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Consultation Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Service Interest:</div>
                <div class="value">${serviceLabel}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              <div class="footer">
                <p>This email was sent from the contact form on your website.</p>
                <p>Submitted at: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
New Consultation Request

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
${phone ? `Phone: ${phone}` : ''}
Service Interest: ${serviceLabel}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
    `

    // Send email to business
    const { data, error } = await resend!.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: 'info@underratedsecurity.com',
      replyTo: email,
      subject: `New Consultation Request from ${name}${company ? ` - ${company}` : ''}`,
      html: emailHtml,
      text: emailText,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    // Send confirmation email to the user
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #000000; color: #ffffff; padding: 20px; text-align: center; }
            .content { background-color: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Your Interest!</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for reaching out to Underrated Software Solutions. We've received your consultation request and will get back to you within 24 hours.</p>
              <p>In the meantime, if you have any urgent questions, feel free to contact us directly at:</p>
              <ul>
                <li>Email: info@underratedsecurity.com</li>
                <li>Phone: 079 477 2031</li>
              </ul>
              <p>Best regards,<br>The Underrated Software Solutions Team</p>
              <div class="footer">
                <p>This is an automated confirmation email. Please do not reply to this message.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Send confirmation email (optional, don't fail if this fails)
    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: email,
        subject: 'Thank you for your consultation request - Underrated Software Solutions',
        html: confirmationHtml,
      })
    } catch (confirmationError) {
      // Log but don't fail the request if confirmation email fails
      console.error('Failed to send confirmation email:', confirmationError)
    }

    return NextResponse.json(
      { message: 'Form submitted successfully', emailId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
