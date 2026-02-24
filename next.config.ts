import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["rickandmortyapi.com"],
  },
  reactCompiler: true,
};

export default nextConfig;
