import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  devIndicators: false,
  images: {
    domains: [
      'www.merokirana.com',
      'plus.unsplash.com',
      'images.unsplash.com',
      'upload.wikimedia.org',
      'media.istockphoto.com', // Add iStockPhoto domain
    ], // Add external image host
  },
};

export default nextConfig;
