import { getProxyUrl } from "../lib/proxyUrl";

export default defineEventHandler(async (event) => {
  const { docs, prompt } = await readBody(event);
  if(!docs) return;

  const { targetUrl } = getProxyUrl(event);
  const { apiKey } = useRuntimeConfig(event);

  //edited Sep 13, 2023
  //https://stackoverflow.com/questions/77068584/how-to-change-request-headers-with-server-middleware
  Object.assign(event.node.req.headers, { Authorization: apiKey });

  //const NUXT_API_PROXY_BASE = "http://localhost:8080/api/rag/pdf";

  const res = await $fetch(targetUrl.toString(), {
    method: "POST",
    body: { docs: docs, prompt: prompt },
  });

  return res;
});
