/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cms-ilvaite-is29.antikode.dev', 'cms-dashboard.wethefest.com', 'img.youtube.com'],
    remotePatterns: [
      {
        // The `src` property hostname must end with `.example.com`,
        // otherwise the API will respond with 400 Bad Request.
        protocol: 'https',
        hostname: '**.antikode.dev',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
}

module.exports = nextConfig
