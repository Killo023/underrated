import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'
import BasicImage from '@/components/BasicImage'
import AnimatedWrapper from '@/components/AnimatedWrapper'

export const metadata: Metadata = {
  title: 'Blog - Underrated Software Solutions',
  description: 'Insights, tips, and best practices for business automation and process optimization.',
}

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'The Future of Business Automation: Trends to Watch in 2024',
      excerpt: 'Discover the latest trends in business automation and how they can transform your organization.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Automation',
      readTime: '5 min read',
      imageQuery: 'business automation trends technology future 2024'
    },
    {
      title: 'How to Choose the Right Automation Tools for Your Business',
      excerpt: 'A comprehensive guide to selecting automation solutions that align with your business goals.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Guide',
      readTime: '7 min read',
      imageQuery: 'automation tools selection business software guide'
    },
    {
      title: '5 Signs Your Business Needs Process Automation',
      excerpt: 'Learn to identify when your business processes are ready for automation and optimization.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Process',
      readTime: '4 min read',
      imageQuery: 'business process automation workflow optimization'
    },
    {
      title: 'Mobile Workforce Management: Best Practices and Tools',
      excerpt: 'Essential strategies for managing and optimizing your mobile workforce with technology.',
      author: 'David Kim',
      date: '2023-12-28',
      category: 'Mobile',
      readTime: '6 min read',
      imageQuery: 'mobile workforce management smartphone app field workers'
    },
    {
      title: 'ROI of Business Automation: Measuring Success',
      excerpt: 'How to calculate and measure the return on investment of your automation initiatives.',
      author: 'Lisa Wang',
      date: '2023-12-20',
      category: 'Analytics',
      readTime: '8 min read',
      imageQuery: 'ROI analytics business metrics dashboard charts'
    },
    {
      title: 'Data Security in Automated Business Processes',
      excerpt: 'Best practices for maintaining security and compliance in automated workflows.',
      author: 'James Wilson',
      date: '2023-12-15',
      category: 'Security',
      readTime: '6 min read',
      imageQuery: 'data security cybersecurity business compliance automation'
    }
  ]

  const categories = ['All', 'Automation', 'Guide', 'Process', 'Mobile', 'Analytics', 'Security']

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedWrapper animation="slideUp">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Blog
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Insights, tips, and best practices for business automation and process optimization. 
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
                  <BasicImage
                    query="business blog writing content marketing automation insights"
                    width={600}
                    height={400}
                    alt="Business blog and content marketing for automation insights"
                    className="w-full h-80"
                    category="business"
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
                <span className="text-primary-100 text-sm">5 min read</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Future of Business Automation: Trends to Watch in 2024
              </h2>
              <p className="text-xl text-primary-100 mb-6 leading-relaxed">
                Discover the latest trends in business automation and how they can transform your organization. 
                From AI-powered workflows to no-code platforms, explore what's coming next.
              </p>
              <div className="flex items-center space-x-4 text-primary-100">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">Sarah Johnson</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">January 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Post Image */}
                <div className="h-48 relative overflow-hidden">
                  <BasicImage
                    query={post.imageQuery}
                    width={400}
                    height={192}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    category="business"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-xs font-semibold">
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
                      href="#"
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center"
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
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get the latest insights on business automation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
