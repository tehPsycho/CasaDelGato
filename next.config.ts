import type { NextConfig } from 'next';

const repoName = 'CasaDelGato';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? `/${repoName}` : undefined,
  assetPrefix: isGitHubPagesBuild ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]
  }
};

export default nextConfig;
