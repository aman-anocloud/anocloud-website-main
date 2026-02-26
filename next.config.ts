import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Disable Next.js image optimization to avoid build-time issues on some platforms
    // (Vercel supports optimization but unoptimized can prevent loader errors while
    // filenames or environments differ). Remove or set to `false` if you prefer
    // the default optimization.
    unoptimized: true,
  },
};

export default nextConfig;
