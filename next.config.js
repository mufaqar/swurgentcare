/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'admin.swurgentcare.net'],
  },

}

module.exports = nextConfig
