# My Main Business - Automation Solutions Website

A modern, responsive business website built with Next.js 14, TypeScript, and Tailwind CSS for an automation solutions company.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI across all devices
- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Lead Generation**: Contact form with API integration for lead capture
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized for speed and Core Web Vitals
- **Accessibility**: WCAG compliant with proper ARIA labels

## Pages

- **Home**: Hero section, services overview, product showcase, testimonials
- **Services**: Detailed service offerings with features and benefits
- **Products**: Product catalog with pricing and comparison table
- **Blog**: Blog listing with categories and newsletter signup
- **Contact**: Contact form with validation and success states

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── products/          # Products page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── CTA.tsx           # Call-to-action component
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section
│   ├── Navbar.tsx        # Navigation component
│   ├── Products.tsx      # Products showcase
│   ├── Services.tsx      # Services section
│   └── Testimonials.tsx  # Testimonials section
└── lib/                  # Utility functions
```

## Customization

### Branding
- Update company name in `src/components/Navbar.tsx` and `src/components/Footer.tsx`
- Modify colors in `tailwind.config.ts`
- Replace placeholder content with your actual business information

### Contact Form
- The contact form currently logs submissions to the console
- To integrate with email services, modify `src/app/api/contact/route.ts`
- Consider using services like Formspree, Resend, or SendGrid

### Content
- Update all placeholder text with your actual business content
- Replace placeholder images with real product screenshots
- Add your actual testimonials and case studies

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Vercel**: Deployment platform

## License

This project is proprietary and confidential.
