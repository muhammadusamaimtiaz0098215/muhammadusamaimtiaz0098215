module.exports = {
  reactStrictMode: true,
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
}