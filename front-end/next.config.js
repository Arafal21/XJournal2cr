/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000', // Na etapie deweloperskim
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com', // Domenę produkcyjną podmień na swoją
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
