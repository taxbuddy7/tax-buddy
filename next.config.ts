import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  serverExternalPackages: ["@nodelib/fs.scandir"],
};

export default nextConfig;