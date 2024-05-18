/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/lustrum",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
