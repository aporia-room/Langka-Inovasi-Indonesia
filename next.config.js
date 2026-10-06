/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Semua alamat /studio/... diarahkan ke satu halaman Studio
  async rewrites() {
    return [{ source: '/studio/:path+', destination: '/studio' }]
  },
}

module.exports = nextConfig
