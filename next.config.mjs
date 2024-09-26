/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nextjs-flash-news',
    // assetPrefix: process.env.ASSET_PREFIX,
  images: {
    unoptimized: true,
  }, 
};

export default nextConfig;
