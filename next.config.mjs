/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — outputs plain HTML/CSS/JS to /out, no server needed
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
