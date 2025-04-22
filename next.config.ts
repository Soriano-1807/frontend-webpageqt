import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Comentamos temporalmente las redirecciones para solucionar el problema
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       has: [
  //         {
  //           type: "host",
  //           value: "www.quiropedistastamanaco.com",
  //         },
  //       ],
  //       destination: "https://quiropedistastamanaco.com/:path*",
  //       permanent: true,
  //     },
  //   ]
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
