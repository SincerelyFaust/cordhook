/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  transpilePackages: ["@cordhook/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/downloads",
        destination: "/download",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/sincerelyfaust/cordhook",
        permanent: true,
      },
      {
        source: "/developer",
        destination: "https://marinhedes.com",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://github.com/sponsors/SincerelyFaust",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
