/* @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bit.ly',
        },
      ],
    },
    experimental: {
      serverComponentsExternalPackages: [
          '@react-email/components',
          '@react-email/render',
          '@react-email/tailwind'
    ]}
}
  
  module.exports = nextConfig