/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "server-fl4l.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;