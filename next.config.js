// next.config.js

const nextConfig = {
  reactStrictMode: true,

  // This maps requests for /scripts/ to the /public/scripts/ folder
  async rewrites() {
    return [
      {
        source: '/scripts/:path*',
        destination: '/public/scripts/:path*',
      },
    ];
  },
}

module.exports = nextConfig;
