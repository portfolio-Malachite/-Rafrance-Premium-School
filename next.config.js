/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = "/-Rafrance-Premium-School";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }
    ]
  },
  basePath: isGithubActions ? repoName : "",
  assetPrefix: isGithubActions ? `${repoName}/` : ""
};

module.exports = nextConfig;
