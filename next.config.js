/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: "https",
        hostname: "ryazantourism.ru",
        port: "",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/region1/tur-kod.html",
        destination: "/region/nasledie-ryazani",
        permanent: true,
      },
      {
        source: "/region1/tur-kod-kasimov.html",
        destination: "/region/nasledie-kasimova",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
