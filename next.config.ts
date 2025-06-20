import type { NextConfig } from "next";

const prefix =
  process.env.NODE_ENV === 'production' ? 'https://layeredlabs.co.kr/' : ''
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/github-pages',
  assetPrefix: prefix,
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
