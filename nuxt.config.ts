// https://nuxt.com/docs/api/configuration/nuxt-config
//https://www.npmjs.com/package/vite-plugin-top-level-await

import topLevelAwait from "vite-plugin-top-level-await";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  devtools: { enabled: true },
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
    upstashRedisRestUrl: process.env.NUXT_UPSTASH_REDIS_REST_URL,
    upstashRedisRestToken: process.env.NUXT_UPSTASH_REDIS_REST_TOKEN,
    apiKey: process.env.NUXT_API_KEY,
    apiProxyBase: process.env.NUXT_API_PROXY_BASE,

    // Keys within public, will be also exposed to the client-side
    public: {
      // apiProxyBase: process.env.NUXT_API_PROXY_BASE,  //this is the proxy url
      // apiBase: "https://langchain-nitro-backend.netlify.app/api"
    },
  },
  // routeRules: {
  //   '/api/**': {
  //     proxy: process.env.PROXY_URL // 'http://localhost:8080/api/**' //cannot use this for runtime config
  //   }
  // }
  nitro: {
    storage: {
      fs: {
        driver: "fs",
        base: "./uploads",
      },
    },
  },
  imports: {
    dirs: [
      './stores'
    ]
  }
});
