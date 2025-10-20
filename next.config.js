/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['static.wixstatic.com', 'www.catalystfl.org'],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize images in public folder
  output: 'standalone',
}

module.exports = nextConfig
