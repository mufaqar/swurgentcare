/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['admin.swurgentcare.net'],
  },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/static/robots.txt',
      },
    ];
  },
};

module.exports = nextConfig;
