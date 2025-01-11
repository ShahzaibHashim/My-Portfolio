/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Optional: Enable or disable React strict mode
    eslint: {
      // Warning: Ignoring ESLint errors can lead to code quality issues
      ignoreDuringBuilds: true,
    },
    };
  
  export default nextConfig;
  