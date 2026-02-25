import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lead/elite-diesel-4wd",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
