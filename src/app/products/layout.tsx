import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Projects - Underrated Software Solutions',
  description: 'Explore our portfolio of professional websites and digital solutions developed for previous clients across healthcare, fitness, services, education, and legal industries.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
