const createNextIntlPlugin = require('next-intl/plugin');

const SITE = require('./src/config.js').SITE;
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

  swcMinify: true,
  poweredByHeader: false,

  env: {
    URL: process.env.URL,
  },

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [],
  },
};

module.exports = withNextIntl(nextConfig);
