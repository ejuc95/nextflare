/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'edge'
  },
  reactStrictMode: false,
  swcMinify: true
}

module.exports = nextConfig
