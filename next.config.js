/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bound-hr-dashboard' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bound-hr-dashboard/' : '',
}

module.exports = nextConfig