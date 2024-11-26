/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['i.imghippo.com'],
    unoptimized: true,
  },
  basePath: '',
}

module.exports = nextConfig
