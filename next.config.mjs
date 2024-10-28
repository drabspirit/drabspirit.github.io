/** @type {import('next').NextConfig} */
const nextConfig = {

  output: "export",

  basePath: "/drabspirit.github.io",
  assetPrefix: '/drabspirit.github.io/',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
