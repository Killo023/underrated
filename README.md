# Underrated Security Landing Page

A modern, conversion-optimized landing page for a cybersecurity service that detects hidden cyber threats. Built with React, Tailwind CSS, and Supabase for data storage.

## 🚀 Features

- **Creative Cybersecurity Design**: Dark theme with cyberpunk aesthetics
- **Animated Matrix Background**: Dynamic code rain effect
- **Email Signup**: Free weekly security alerts
- **Waitlist System**: Premium dashboard ($30/month) waitlist
- **Responsive Design**: Mobile-first approach
- **Supabase Integration**: Real-time data storage
- **Form Validation**: React Hook Form with validation
- **Toast Notifications**: User feedback system
- **Smooth Animations**: Framer Motion animations

## 🎯 Landing Page Sections

1. **Hero Section**: Main headline "Are You Missing These Hidden Cyber Threats?"
2. **Threat Cards**: Showcase different types of hidden cyber threats
3. **Stats Section**: Social proof with impressive numbers
4. **Pricing Section**: Free alerts vs Premium dashboard
5. **Waitlist Signup**: Collect leads for the paid tier

## 🛠️ Tech Stack

- **Frontend**: React 18, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Database**: Supabase
- **Styling**: Custom CSS with cyberpunk theme

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd underrated-security-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project at [supabase.com](https://supabase.com)
   - Create two tables in your Supabase database:

   **email_signups table:**
   ```sql
   CREATE TABLE email_signups (
     id SERIAL PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

   **waitlist table:**
   ```sql
   CREATE TABLE waitlist (
     id SERIAL PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     name TEXT NOT NULL,
     company TEXT,
     joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

4. **Environment Variables**
   - Copy `env.example` to `.env.local`
   - Add your Supabase credentials:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_project_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

## 🎨 Customization

### Colors
The cyberpunk theme uses custom colors defined in `tailwind.config.js`:
- `cyber-dark`: #0a0a0a
- `cyber-blue`: #00d4ff
- `cyber-green`: #00ff88
- `cyber-red`: #ff0040
- `cyber-purple`: #8b5cf6

### Animations
Custom animations are defined in the Tailwind config:
- `pulse-slow`: Slow pulsing effect
- `glow`: Glowing border effect
- `float`: Floating animation
- `matrix`: Matrix code rain effect

## 📊 Database Schema

### Email Signups
Stores users who sign up for free weekly alerts:
- `id`: Primary key
- `email`: User's email address (unique)
- `subscribed_at`: Timestamp of subscription

### Waitlist
Stores users who join the premium dashboard waitlist:
- `id`: Primary key
- `email`: User's email address (unique)
- `name`: User's full name
- `company`: User's company (optional)
- `joined_at`: Timestamp of waitlist join

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Add environment variables in Netlify dashboard

## 📈 Conversion Optimization

The landing page is designed with conversion psychology in mind:

- **Urgency**: Limited spots, early access benefits
- **Social Proof**: Impressive statistics and testimonials
- **Risk Reversal**: 30-day money-back guarantee
- **Clear Value Props**: Specific benefits and features
- **Multiple CTAs**: Strategic placement throughout the page
- **Trust Indicators**: Security badges and guarantees

## 🔧 Development

### Available Scripts
- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

### Project Structure
```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Main hero section
│   ├── ThreatCard.jsx  # Threat showcase
│   ├── StatsSection.jsx # Social proof
│   ├── PricingSection.jsx # Pricing & waitlist
│   ├── Footer.jsx      # Footer
│   ├── EmailSignup.jsx # Free alerts signup
│   ├── WaitlistSignup.jsx # Premium waitlist
│   └── MatrixBackground.jsx # Animated background
├── App.jsx             # Main app component
├── index.js            # Entry point
├── index.css           # Global styles
└── supabase.js         # Supabase configuration
```

## 🎯 Marketing Features

- **Lead Generation**: Email capture for free alerts
- **Waitlist Building**: Premium dashboard waitlist
- **A/B Testing Ready**: Component structure supports testing
- **Analytics Ready**: Easy to integrate with Google Analytics
- **SEO Optimized**: Meta tags and semantic HTML

## 📱 Mobile Responsive

The landing page is fully responsive with:
- Mobile-first design approach
- Touch-friendly buttons and forms
- Optimized typography for all screen sizes
- Collapsible navigation menu

## 🔒 Security Features

- Form validation and sanitization
- Secure Supabase integration
- HTTPS ready
- No sensitive data in client-side code

## 📞 Support

For questions or issues:
1. Check the [Supabase documentation](https://supabase.com/docs)
2. Review the [React documentation](https://reactjs.org/docs)
3. Open an issue in this repository

---

**Built with ❤️ for the cybersecurity community** 