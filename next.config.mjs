// GitHub Pages serves this repo at https://diksha1009.github.io/garimadt/.
// Set to '' when moving to a custom domain or a host that serves from the root.
const basePath = '/garimadt';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — outputs plain HTML/CSS/JS to /out, no server needed
  output: 'export',
  basePath,
  // next/image does not prefix basePath when images are unoptimised, so
  // expose it for the few places that reference /public files directly.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
