'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/animations/ScrollReveal'
import StaggerChildren from '@/components/animations/StaggerChildren'
import ParallaxSection from '@/components/3D/ParallaxSection'
import Text3D from '@/components/3D/Text3D'
import EnhancedCard3D from '@/components/3D/EnhancedCard3D'
import MagneticButton from '@/components/3D/MagneticButton'
import ElegantBackground from '@/components/backgrounds/ElegantBackground'
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
      {/* Hero Section with Parallax */}
      <ParallaxSection speed={0.3} className="relative min-h-[70vh] flex items-center overflow-hidden">
        <ElegantBackground intensity="medium" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url(${BLOG_PAGE_HERO})`,
          }}
        />
        
        <div className="container-max relative z-10 section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal animation="elegantSlide">
              <div className="space-y-8">
                <Text3D
                  text="Our Blog"
                  size="xl"
                  gradient="gold"
                  delay={0}
                  className="block mb-6"
                />
                <p className="text-xl text-white/80 leading-relaxed">
                  Insights, tips, and best practices for web development, software development, and digital solutions. 
                  Stay updated with the latest trends and strategies.
                </p>
                <MagneticButton
                  variant="accent"
                  size="lg"
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center"
                >
                  Read Latest Posts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </MagneticButton>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slideLeft">
              <EnhancedCard3D glowColor="gold">
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={BLOG_PAGE_HERO}
                    alt="Business blog and content marketing for web development insights"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              </EnhancedCard3D>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Categories Filter */}
      <section className="relative py-8 border-b border-white/10">
        <ElegantBackground intensity="low" />
        <div className="container-max relative z-10">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === selectedCategory
                    ? 'bg-gradient-gold text-black shadow-glow-gold'
                    : 'glass-elegant text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
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
      <section id="blog" className="section-padding relative overflow-hidden">
        <ElegantBackground intensity="low" />
        <div className="container-max relative z-10">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white/80 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <>
              <StaggerChildren staggerDelay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayedPosts.map((post, index) => {
                    const color = index % 2 === 0 ? 'gold' : 'silver'
                    return (
                      <EnhancedCard3D
                        key={index}
                        glowColor={color as 'gold' | 'silver'}
                        className="h-full"
                      >
                        <article className="glass-elegant rounded-2xl overflow-hidden h-full flex flex-col">
                          {/* Post Image */}
                          <div className="h-48 relative overflow-hidden">
                            <img
                              src={BLOG_POST_IMAGES[index % BLOG_POST_IMAGES.length]}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                          </div>

                          {/* Post Content */}
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center space-x-4 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                                color === 'gold'
                                  ? 'bg-gold-500/20 text-gold-300 border-gold-400/30'
                                  : 'bg-silver-400/20 text-silver-300 border-silver-300/30'
                              }`}>
                                {post.category}
                              </span>
                              <span className="text-white/60 text-sm">{post.readTime}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                              {post.title}
                            </h3>

                            <p className="text-white/70 mb-4 line-clamp-3 flex-1">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                              <div className="flex items-center space-x-3 text-sm text-white/60">
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
                                className={`font-semibold text-sm flex items-center ${
                                  color === 'gold' ? 'text-gold-400 hover:text-gold-300' : 'text-silver-300 hover:text-silver-200'
                                } transition-colors`}
                              >
                                Read More
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      </EnhancedCard3D>
                    )
                  })}
                </div>
              </StaggerChildren>

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
