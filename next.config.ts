import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  redirects: async () => [
    {
      source: "/guides/:path*",
      destination: "/blog/:path*",
      permanent: true,
    },
    {
      source: "/services/:path*",
      destination: "/blog/:path*",
      permanent: true,
    },
    {
      source: "/rules/states/:path*",
      destination: "/blog/:path*",
      permanent: true,
    },
    {
      source: "/codes",
      destination: "/states",
      permanent: true,
    },
    {
      source: "/cities",
      destination: "/states",
      permanent: true,
    },
  ],
};

export default nextConfig;
