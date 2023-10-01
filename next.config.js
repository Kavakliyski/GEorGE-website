/** @type {import('next').NextConfig} */

const path = require("path");
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "src", "styles")],
    },
    i18n,
    images: {
        domains: ["cms.george-cosmetic.com"],
    },
};

module.exports = nextConfig;
