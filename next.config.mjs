// const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 使用静态导出
  basePath: '/nextjs-flash-news',
  images: {
    unoptimized: true, // 禁用图片优化
  },
};

export default nextConfig;
