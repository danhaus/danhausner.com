/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'lib'], // Only run ESLint on the these dirs
  },
}
