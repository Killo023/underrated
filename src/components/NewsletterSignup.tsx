'use client'

import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you for subscribing! Check your email for confirmation.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-r from-black to-gray-900">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get the latest insights on web development and software solutions delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
              disabled={isSubmitting}
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {status !== 'idle' && (
            <div className={`mt-4 flex items-center justify-center gap-2 ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}>
              {status === 'success' ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <XCircle className="h-5 w-5" />
              )}
              <p className="text-sm">{message}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup
