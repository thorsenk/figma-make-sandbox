/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Ensure we're using App Router and not Pages Router
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig