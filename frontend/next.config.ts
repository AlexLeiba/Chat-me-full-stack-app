import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  middleware: true,
  images: {
    domains: ['res.cloudinary.com', 'randomuser.me'], // Add the hostname here
  },
  reactStrictMode: true,
  outputFileTracing: true, // Enable output tracing for serverless functions

  async redirects() {
    return [
      {
        source: '/', // Path to match
        destination: '/signin', // Path to redirect to
        permanent: true, // Indicates if it's a permanent redirect (status 308)
      },
    ];
  },
};

export default nextConfig;
