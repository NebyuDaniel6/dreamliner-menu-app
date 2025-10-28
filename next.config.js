/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  serverExternalPackages: ['@tailwindcss/postcss']
}

module.exports = nextConfig
