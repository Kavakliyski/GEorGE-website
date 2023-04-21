/** @type {import('next').NextConfig} */

const path = require("path");


const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  i18n: {
    locales: ['en', 'bg'],
    defaultLocale: 'en',
  },
}
 
module.exports = nextConfig
