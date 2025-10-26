import path from "path";
import type { NextConfig } from "next";

// Use process.cwd() to derive the project root at runtime. This ensures the
// value matches the working directory the dev server was started from.
const inferredRoot = path.resolve(process.cwd());

const nextConfig: NextConfig = {
  turbopack: {
    root: inferredRoot,
  },
};

export default nextConfig;
