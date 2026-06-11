import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.140.1'],
  turbopack: {
    root: resolve(process.cwd()),
  },
};

export default nextConfig;
