/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEBSITE_NAME: process.env.WEBSITE_NAME,
  },
};

module.exports = nextConfig;
