/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'api.tr.plenexy.digital',
      port: '',
      pathname: '**'
    }]
  },
  // ...
};

module.exports = nextConfig;