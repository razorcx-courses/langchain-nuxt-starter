// https://nuxt.com/docs/api/configuration/nuxt-config
//https://www.npmjs.com/package/vite-plugin-top-level-await

import topLevelAwait from "vite-plugin-top-level-await";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  vite: {
    plugins: [
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: "__tla",
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`,
      }),
    ],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    openApiKey: '',  //NUXT_OPEN_API_KEY
    upstashRedisRestUrl: '',  //NUXT_UPSTASH_REDIS_REST_URL
    upstashRedisRestToken: '',  //NUXT_UPSTASH_REDIS_REST_TOKEN
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api'
    }
  }
});
