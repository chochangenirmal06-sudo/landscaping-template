/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable webpack's persistent filesystem cache in development.
      // This prevents the stale-chunk errors ("Cannot find module './682.js'")
      // that appear after hot-reload rebuilds overwrite cached chunk IDs.
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
