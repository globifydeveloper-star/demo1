/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true } // Standard hosting cannot run Next.js server-side image optimization
};

export default nextConfig;
