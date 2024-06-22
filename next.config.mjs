import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(
        new ForkTsCheckerWebpackPlugin({
          async: false,
          typescript: {
            configFile: "./tsconfig.json",
          },
        })
      );
    }

    return config;
  },
};

export default nextConfig;
