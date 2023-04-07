/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')(['tailwindcss']);

module.exports = nextConfig


module.exports = withTM({
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  future: {
    webpack5: true,
  },
});
