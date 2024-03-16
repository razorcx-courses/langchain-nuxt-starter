import { Redis } from "@upstash/redis";

//https://vitejs.dev/guide/env-and-mode
export const redisClient = () => {
  
  if (
    ! process.env.NUXT_UPSTASH_REDIS_REST_URL ||
    ! process.env.NUXT_UPSTASH_REDIS_REST_TOKEN
  ) {
    throw new Error(
      "UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN must be set in the environment"
    );
  }
  const client = new Redis({
    url: process.env.NUXT_UPSTASH_REDIS_REST_URL,
    token: process.env.NUXT_UPSTASH_REDIS_REST_TOKEN,
  });
  return client;
};




