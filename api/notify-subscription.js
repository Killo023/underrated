// Vercel serverless function for email notifications
// This will be deployed to /api/notify-subscription

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { subscriberEmail, subscriberName, subscriberCompany, type, timestamp } = req.body;

    // For now, we'll just log the notification
    // In production, you would integrate with an email service like SendGrid, Mailgun, etc.
    console.log('New subscription notification:', {
      subscriberEmail,
      subscriberName,
      subscriberCompany,
      type,
      timestamp,
      adminEmail: 'cylehendricks@underratedsecurity.com'
    });

    // TODO: Integrate with email service
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to: 'cylehendricks@underratedsecurity.com',
    //   from: 'noreply@underratedsecurity.com',
    //   subject: `New ${type} Subscription`,
    //   text: `New subscription: ${subscriberEmail}`,
    //   html: `<p>New subscription: ${subscriberEmail}</p>`,
    // };
    // await sgMail.send(msg);

    res.status(200).json({ 
      message: 'Notification logged successfully',
      adminEmail: 'cylehendricks@underratedsecurity.com'
    });
  } catch (error) {
    console.error('Error handling notification:', error);
    res.status(500).json({ message: 'Failed to process notification' });
  }
} 