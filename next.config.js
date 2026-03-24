/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    // Disable server-side image optimization to avoid fetch errors
    // when the dev environment cannot reach images.unsplash.com.
    unoptimized: true,
  },
};

module.exports = nextConfig;
