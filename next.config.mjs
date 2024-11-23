/** @type {import('next').NextConfig} */
const nextConfig = {
  // next.config.js
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
