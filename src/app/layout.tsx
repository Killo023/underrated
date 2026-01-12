import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedBackground3D from '@/components/AnimatedBackground3D'
import ParticleSystem from '@/components/ParticleSystem'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Underrated Software Solutions - Web & Software Development',
  description: 'Professional web development and custom software solutions. We create modern websites, web applications, and software tailored to your business needs.',
  keywords: 'web development, software development, custom websites, web applications, software solutions, mobile apps, SaaS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
