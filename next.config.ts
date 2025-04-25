

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.quiropedistastamanaco.com' }],
        destination: 'https://quiropedistastamanaco.com/:path*',
        permanent: true,
      },
    ];
  },
}

export default nextConfig;
