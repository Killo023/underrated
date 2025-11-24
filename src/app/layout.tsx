import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Favicon from '@/components/Favicon'
import AnimatedBackground3D from '@/components/AnimatedBackground3D'
import ParticleSystem from '@/components/ParticleSystem'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Underrated Software Solutions - Automation Solutions',
  description: 'Bespoke automation solutions for business processes. Eliminate tedious, repetitive tasks through custom software, mobile apps, and SaaS platforms.',
  keywords: 'automation, business process, custom software, mobile apps, SaaS, efficiency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body className={inter.className}>
        <AnimatedBackground3D />
        <ParticleSystem />
        <div className="min-h-screen flex flex-col relative">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
