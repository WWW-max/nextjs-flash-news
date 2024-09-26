/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
//   basePath: '',
    assetPrefix: process.env.ASSET_PREFIX,
    basePath: process.env.BASE_PATH,
  images: {
    unoptimized: true,
  }, 
};

export default nextConfig;
