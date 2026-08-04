/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — outputs plain HTML/CSS/JS to /out, no server needed
  output: 'export',
  // GitHub Pages serves this repo at https://diksha1009.github.io/garimadt/
  basePath: '/garimadt',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
