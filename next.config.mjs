/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/dubai", destination: "/get-a-jet-quote?destination=Dubai", permanent: true },
      { source: "/maldives", destination: "/get-a-jet-quote?destination=Maldives", permanent: true },
    ];
  },
};

export default nextConfig;
