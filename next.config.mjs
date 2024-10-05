/** @type {import('next').NextConfig} */
const config = {
  webpack: (config, { dev, isServer }) => {
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 1000,
      aggregateTimeout: 300,
    };

    if (dev) {
      config.devtool = 'cheap-module-source-map'; // Faster than the default
    }

    return config;
  },
  typescript: {
    ignoreBuildErrors: true, // Skips TypeScript build errors
  },
  eslint: {
    ignoreDuringBuilds: true, // Skips ESLint errors during the build
  },
};

export default config;
