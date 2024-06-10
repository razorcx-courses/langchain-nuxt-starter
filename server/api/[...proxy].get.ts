import { getProxyUrl } from "../lib/proxyUrl";

export default defineEventHandler(async (event) => {
  console.log(getRouterParam(event, "proxy"));

  const { targetUrl } = getProxyUrl(event);

  const { apiKey } = useRuntimeConfig(event);

  //edited Sep 13, 2023
  //https://stackoverflow.com/questions/77068584/how-to-change-request-headers-with-server-middleware
  Object.assign(event.node.req.headers, { Authorization: apiKey });

  console.log(apiKey, targetUrl.toString());

  const res = await proxyRequest(event, targetUrl.toString());

  //const res = await $fetch(targetUrl.toString())
  return res;
});
