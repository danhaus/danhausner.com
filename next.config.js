/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.datocms-assets.com']
  },
  eslint: {
    dirs: ['pages', 'components', 'lib'], // Only run ESLint on the these dirs
  },
}
