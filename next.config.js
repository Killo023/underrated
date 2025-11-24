/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by default in Next.js 13.4+
  eslint: {
    // Allow production builds to successfully complete even if your project has ESLint errors
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
