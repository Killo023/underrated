import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import NewsletterSignup from '@/components/NewsletterSignup'

// Blog posts data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Discover the latest trends in web development and how they can transform your online presence.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Web Development',
    readTime: '5 min read',
    content: `
      <p>The web development landscape continues to evolve at a rapid pace, with new technologies and methodologies emerging regularly. As we navigate through 2024, several key trends are shaping the future of how we build and interact with web applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial intelligence is revolutionizing the way developers write code. Tools like GitHub Copilot and ChatGPT are becoming essential parts of the development workflow, helping developers write code faster and with fewer errors. These AI assistants can generate boilerplate code, suggest optimizations, and even help debug complex issues.</p>
      
      <h2>Serverless Architecture</h2>
      <p>Serverless computing continues to gain traction as businesses seek more scalable and cost-effective solutions. Platforms like Vercel, Netlify, and AWS Lambda make it easier than ever to deploy applications without managing servers. This approach reduces operational overhead and allows teams to focus on building features rather than infrastructure.</p>
      
      <h2>Progressive Web Apps (PWAs)</h2>
      <p>PWAs are bridging the gap between web and mobile applications, offering native app-like experiences through web browsers. With improved offline capabilities, push notifications, and app-like interfaces, PWAs provide a compelling alternative to traditional mobile apps for many use cases.</p>
      
      <h2>WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance applications to run in browsers at near-native speeds. This technology is particularly valuable for applications requiring intensive computations, such as image processing, video editing, or complex data visualizations.</p>
      
      <h2>No-Code and Low-Code Platforms</h2>
      <p>The rise of no-code and low-code platforms is democratizing web development, allowing non-technical users to create functional web applications. While these platforms won't replace traditional development for complex applications, they're opening new possibilities for rapid prototyping and simple application development.</p>
      
      <h2>Conclusion</h2>
      <p>As we look ahead, the future of web development is exciting and full of possibilities. By staying current with these trends and continuously learning, developers can build more efficient, scalable, and user-friendly applications. The key is to embrace change while maintaining a focus on creating value for end users.</p>
    `
  },
  {
    title: 'How to Choose the Right Web Development Framework',
    excerpt: 'A comprehensive guide to selecting web development frameworks that align with your project goals.',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Guide',
    readTime: '7 min read',
    content: `
      <p>Choosing the right web development framework is one of the most critical decisions you'll make when starting a new project. The framework you select will impact your development speed, application performance, team productivity, and long-term maintainability.</p>
      
      <h2>Consider Your Project Requirements</h2>
      <p>Before selecting a framework, clearly define your project requirements. Consider factors such as:</p>
      <ul>
        <li>Project size and complexity</li>
        <li>Performance requirements</li>
        <li>Team expertise and learning curve</li>
        <li>Community support and ecosystem</li>
        <li>Long-term maintenance needs</li>
      </ul>
      
      <h2>Popular Framework Options</h2>
      <p><strong>React:</strong> Ideal for interactive user interfaces and component-based architectures. Excellent ecosystem and community support.</p>
      <p><strong>Next.js:</strong> Perfect for full-stack React applications with built-in SEO optimization and server-side rendering.</p>
      <p><strong>Vue.js:</strong> Great for developers who want a progressive framework that's easy to learn and integrate.</p>
      <p><strong>Angular:</strong> Best for large-scale enterprise applications requiring robust structure and TypeScript support.</p>
      
      <h2>Making the Decision</h2>
      <p>There's no one-size-fits-all solution. The best framework for your project depends on your specific needs, team capabilities, and project goals. Consider starting with a framework your team is familiar with, or invest in training if a particular framework better suits your requirements.</p>
    `
  },
  {
    title: '5 Signs Your Business Needs a New Website',
    excerpt: 'Learn to identify when your business is ready for a website redesign or new web application.',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    category: 'Web Development',
    readTime: '4 min read',
    content: `
      <p>Your website is often the first impression potential customers have of your business. If it's outdated, slow, or difficult to use, you could be losing valuable leads and customers. Here are five clear signs it's time for a website refresh.</p>
      
      <h2>1. Poor Mobile Experience</h2>
      <p>With over 60% of web traffic coming from mobile devices, a mobile-friendly website is no longer optional. If your site doesn't work well on smartphones and tablets, you're likely losing customers to competitors with better mobile experiences.</p>
      
      <h2>2. Slow Loading Times</h2>
      <p>Users expect websites to load quickly. If your site takes more than 3 seconds to load, you're likely losing visitors. Slow sites also hurt your search engine rankings, making it harder for potential customers to find you.</p>
      
      <h2>3. Outdated Design</h2>
      <p>Design trends evolve, and an outdated website can make your business appear unprofessional or behind the times. Modern design not only looks better but also improves user experience and conversion rates.</p>
      
      <h2>4. Low Conversion Rates</h2>
      <p>If your website isn't converting visitors into customers or leads, there's likely a problem with the user experience, design, or functionality. A well-designed website should guide visitors toward taking action.</p>
      
      <h2>5. Difficult to Update</h2>
      <p>If updating your website content requires technical expertise or takes too long, you need a modern content management system. Your website should be easy to update so you can keep content fresh and relevant.</p>
      
      <h2>Next Steps</h2>
      <p>If you recognize any of these signs, it's time to consider a website redesign. A modern, well-designed website is an investment that pays dividends through increased traffic, better user engagement, and higher conversion rates.</p>
    `
  },
  {
    title: 'Mobile Workforce Management: Best Practices and Tools',
    excerpt: 'Essential strategies for managing and optimizing your mobile workforce with technology.',
    author: 'David Kim',
    date: '2023-12-28',
    category: 'Mobile',
    readTime: '6 min read',
    content: `
      <p>Managing a mobile workforce presents unique challenges and opportunities. With the right strategies and tools, you can improve productivity, communication, and job satisfaction for your field teams.</p>
      
      <h2>Key Challenges</h2>
      <p>Mobile workforce management involves coordinating teams that work outside traditional office environments. Common challenges include communication, task tracking, data collection, and ensuring consistent service quality.</p>
      
      <h2>Best Practices</h2>
      <p><strong>Real-time Communication:</strong> Implement tools that enable instant communication between field workers and office staff.</p>
      <p><strong>Task Management:</strong> Use mobile apps that allow workers to receive, update, and complete tasks in real-time.</p>
      <p><strong>Data Collection:</strong> Digitize data collection processes to reduce errors and improve efficiency.</p>
      <p><strong>Performance Tracking:</strong> Monitor key metrics to identify areas for improvement and recognize top performers.</p>
      
      <h2>Recommended Tools</h2>
      <p>Modern mobile workforce management solutions offer features like GPS tracking, digital forms, photo capture, and real-time reporting. These tools help streamline operations and provide valuable insights into field operations.</p>
    `
  },
  {
    title: 'ROI of Web Development: Measuring Success',
    excerpt: 'How to calculate and measure the return on investment of your website and web application projects.',
    author: 'Lisa Wang',
    date: '2023-12-20',
    category: 'Analytics',
    readTime: '8 min read',
    content: `
      <p>Understanding the return on investment (ROI) of web development projects is crucial for making informed business decisions and demonstrating value to stakeholders.</p>
      
      <h2>Key Metrics to Track</h2>
      <p>To measure ROI effectively, track metrics such as:</p>
      <ul>
        <li>Website traffic and user engagement</li>
        <li>Lead generation and conversion rates</li>
        <li>Sales and revenue attributed to the website</li>
        <li>Cost savings from automation</li>
        <li>Customer satisfaction scores</li>
      </ul>
      
      <h2>Calculating ROI</h2>
      <p>ROI = (Gain from Investment - Cost of Investment) / Cost of Investment × 100</p>
      <p>Consider both direct financial gains and indirect benefits like improved brand perception, customer satisfaction, and operational efficiency.</p>
      
      <h2>Long-term Value</h2>
      <p>A well-developed website provides ongoing value through increased visibility, lead generation, and customer engagement. The initial investment pays dividends over time as your online presence grows.</p>
    `
  },
  {
    title: 'Data Security in Web Applications',
    excerpt: 'Best practices for maintaining security and compliance in web applications and software.',
    author: 'James Wilson',
    date: '2023-12-15',
    category: 'Security',
    readTime: '6 min read',
    content: `
      <p>Data security is paramount in today's digital landscape. Protecting user data and ensuring compliance with regulations is not just a legal requirement but also essential for maintaining customer trust.</p>
      
      <h2>Essential Security Practices</h2>
      <p><strong>Encryption:</strong> Always use HTTPS and encrypt sensitive data both in transit and at rest.</p>
      <p><strong>Authentication:</strong> Implement strong authentication mechanisms, including multi-factor authentication for sensitive operations.</p>
      <p><strong>Input Validation:</strong> Validate and sanitize all user inputs to prevent injection attacks.</p>
      <p><strong>Regular Updates:</strong> Keep all dependencies and frameworks updated to patch security vulnerabilities.</p>
      
      <h2>Compliance Considerations</h2>
      <p>Depending on your location and industry, you may need to comply with regulations like GDPR, CCPA, or HIPAA. Ensure your application handles data according to these requirements.</p>
      
      <h2>Security Monitoring</h2>
      <p>Implement monitoring and logging to detect suspicious activities and potential security breaches. Regular security audits help identify vulnerabilities before they're exploited.</p>
    `
  }
]

// Generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Find post by slug
function getPostBySlug(slug: string) {
  return blogPosts.find(post => generateSlug(post.title) === slug)
}

// Generate metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Underrated Software Solutions',
    }
  }

  return {
    title: `${post.title} - Underrated Software Solutions`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding border-b border-gray-200">
        <div className="container-max">
          <Link 
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-black mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <AnimatedWrapper animation="fadeIn">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-semibold border border-black">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </AnimatedWrapper>
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
                color: '#374151',
              }}
            />
          </div>
        </div>
      </article>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  )
}
