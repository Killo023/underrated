'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import NewsletterSignup from '@/components/NewsletterSignup'
import { BLOG_PAGE_HERO, BLOG_POST_IMAGES } from '@/lib/image-urls'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [displayCount, setDisplayCount] = useState(5)
  
  const blogPosts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Discover the latest trends in web development and how they can transform your online presence.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Web Development',
      readTime: '5 min read'
    },
    {
      title: 'How to Choose the Right Web Development Framework',
      excerpt: 'A comprehensive guide to selecting web development frameworks that align with your project goals.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Guide',
      readTime: '7 min read'
    },
    {
      title: '5 Signs Your Business Needs a New Website',
      excerpt: 'Learn to identify when your business is ready for a website redesign or new web application.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Web Development',
      readTime: '4 min read'
    },
    {
      title: 'Mobile Workforce Management: Best Practices and Tools',
      excerpt: 'Essential strategies for managing and optimizing your mobile workforce with technology.',
      author: 'David Kim',
      date: '2023-12-28',
      category: 'Mobile',
      readTime: '6 min read'
    },
    {
      title: 'ROI of Web Development: Measuring Success',
      excerpt: 'How to calculate and measure the return on investment of your website and web application projects.',
      author: 'Lisa Wang',
      date: '2023-12-20',
      category: 'Analytics',
      readTime: '8 min read'
    },
    {
      title: 'Data Security in Web Applications',
      excerpt: 'Best practices for maintaining security and compliance in web applications and software.',
      author: 'James Wilson',
      date: '2023-12-15',
      category: 'Security',
      readTime: '6 min read'
    }
  ]

  const categories = ['All', 'Web Development', 'Guide', 'Mobile', 'Analytics', 'Security']

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  // Get posts to display (with pagination)
  const displayedPosts = filteredPosts.slice(1, displayCount + 1)
  const hasMorePosts = filteredPosts.length > displayCount + 1

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 3)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setDisplayCount(5) // Reset display count when category changes
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper animation="slideUp">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Blog
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Insights, tips, and best practices for web development, software development, and digital solutions. 
                  Stay updated with the latest trends and strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#blog" className="btn-primary inline-flex items-center justify-center">
                    Read Latest Posts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </AnimatedWrapper>
            
            <AnimatedWrapper animation="slideLeft">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={BLOG_PAGE_HERO}
                    alt="Business blog and content marketing for web development insights"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-max py-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === selectedCategory
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post - Only show when "All" category is selected */}
      {selectedCategory === 'All' && (
        <section className="section-padding bg-white">
          <div className="container-max">
            <Link href={`/blog/${generateSlug(blogPosts[0].title)}`}>
            <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 md:p-12 text-white mb-16 hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="max-w-3xl">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-gray-300 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{new Date(blogPosts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2 ml-auto">
                    <span className="text-sm">Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      )}

      {/* Blog Posts Grid */}
      <section id="blog" className="section-padding bg-gray-50">
        <div className="container-max">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Post Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={BLOG_POST_IMAGES[index % BLOG_POST_IMAGES.length]}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-semibold border border-black">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${generateSlug(post.title)}`}
                      className="text-black hover:text-gray-700 font-semibold text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
                ))}
              </div>

              {/* Load More Button */}
              {hasMorePosts && (
                <div className="text-center mt-12">
                  <button 
                    onClick={handleLoadMore}
                    className="btn-primary"
                  >
                    Load More Posts
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  )
}

export default BlogPage
