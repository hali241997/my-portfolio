/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new (require("webpack").IgnorePlugin)(/__admin\.tsx$/)
      );
    }

    return config;
  },
};

module.exports = nextConfig;
