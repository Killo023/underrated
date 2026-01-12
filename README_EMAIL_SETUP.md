# Email Setup Instructions

This guide will help you set up email functionality so that consultation requests are sent to **info@underratedsecurity.com**.

## Step 1: Sign up for Resend

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (free tier includes 3,000 emails/month)
3. Verify your email address

## Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Go to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "Website Contact Form")
5. Copy the API key (it starts with `re_`)

## Step 3: Add Domain (Recommended)

For production use, you should add and verify your domain:

1. Go to **Domains** in Resend dashboard
2. Click **Add Domain**
3. Enter your domain (e.g., `underratedsecurity.com`)
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for verification (usually takes a few minutes)

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=noreply@underratedsecurity.com
```

**Important Notes:**
- Replace `re_your_actual_api_key_here` with your actual Resend API key
- For `RESEND_FROM_EMAIL`, use:
  - If you've verified your domain: `noreply@underratedsecurity.com` (or any email @yourdomain.com)
  - If you haven't verified a domain yet: Use the default Resend email (check Resend dashboard)

## Step 5: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the contact form
4. Check that you receive an email at **info@underratedsecurity.com**
5. Check that the user receives a confirmation email

## Troubleshooting

### Emails not sending?

1. **Check your API key**: Make sure `RESEND_API_KEY` is set correctly in `.env.local`
2. **Check the from email**: Make sure `RESEND_FROM_EMAIL` is verified in Resend
3. **Check server logs**: Look for error messages in your terminal/console
4. **Check Resend dashboard**: Go to Resend dashboard → Logs to see email delivery status

### "Email service not configured" error?

- Make sure `.env.local` file exists and contains `RESEND_API_KEY`
- Restart your development server after adding environment variables
- For production (Vercel), add environment variables in Vercel dashboard

### Production Deployment (Vercel)

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add:
   - `RESEND_API_KEY` = your Resend API key
   - `RESEND_FROM_EMAIL` = your verified email address
4. Redeploy your application

## Alternative Email Services

If you prefer not to use Resend, you can modify `src/app/api/contact/route.ts` to use:

- **SendGrid**: Popular email service with good free tier
- **Mailgun**: Reliable email API service
- **AWS SES**: Amazon's email service (cost-effective for high volume)
- **Nodemailer**: Direct SMTP sending (requires SMTP server)

## Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- Keep your API keys secret
- Use environment variables for all sensitive configuration
- Consider rate limiting for production to prevent spam
