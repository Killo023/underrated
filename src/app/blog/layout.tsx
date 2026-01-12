import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Underrated Software Solutions',
  description: 'Insights, tips, and best practices for web development, software development, and digital solutions.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
