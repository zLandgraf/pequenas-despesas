/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/empenhos',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
