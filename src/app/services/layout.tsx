import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Underrated Software Solutions',
  description: 'Professional web development and software services including custom websites, mobile apps, web applications, and custom software development.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
