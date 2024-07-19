/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/assets/:path*',
            destination: '/assets/:path*', // Path to your assets directory
          },
        ]
      },
};

export default nextConfig;
