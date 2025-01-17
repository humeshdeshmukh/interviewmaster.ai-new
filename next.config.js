/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  typescript: {
    ignoreBuildErrors: true,
  },

  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = `${__dirname}/src`;
    config.resolve.alias['@interview-types'] = `${__dirname}/src/app/products/interview-questions/types.ts`;

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    }
    return config;
  },

  // Production optimizations
  poweredByHeader: false,
  compress: true,
  
  // Handle redirects if needed
  async redirects() {
    return [];
  }
};
