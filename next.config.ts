import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  output: 'standalone',
  trailingSlash: true,
  experimental: {
    forceSwcTransforms: true,
  }
}

export default nextConfig;
