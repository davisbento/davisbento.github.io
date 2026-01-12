import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/davisbento.dev' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/davisbento.dev/' : '',
};

export default nextConfig;
