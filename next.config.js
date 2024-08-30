/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.tr.plenexy.digital",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "**",
      },
    ],
  },
  // ...
};

module.exports = nextConfig;
