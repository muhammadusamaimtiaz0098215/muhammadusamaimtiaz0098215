const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    apiEndpoint: process.env.API_ENDPOINT,
    environment: process.env.ENVIRONMENT,
    baseDomain: process.env.BASE_DOMAIN,
  },
  publicRuntimeConfig: {
    apiEndpoint: process.env.API_ENDPOINT,
    environment: process.env.ENVIRONMENT,
    baseDomain: process.env.BASE_DOMAIN,
  },
  images: {
    domains: ["assets.example.com", "virtualforce-media.s3.amazonaws.com"],
  },
};
