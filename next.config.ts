import type { NextConfig } from 'next'

const basePath = process.env.GITHUB_PAGES === 'true' ? '/portfolio' : ''

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  // Metadata icon URLs don't get basePath applied, so expose it to the app.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

export default nextConfig
