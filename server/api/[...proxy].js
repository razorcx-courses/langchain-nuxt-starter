export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const path = getRouterParam(event, "proxy");
  const url = getRequestURL(event);

  // Concatenate the apiBase with the modified path, ensuring there's a "/" between them
  const target = `${config.public.apiProxyBase}/${path}${url.search}`;

  // Ensure there are no double slashes (other than the http:// part)
  const targetUrl = new URL(target.replace(/([^:]\/)\/+/g, "$1"));

  console.log({ url, params: event.context.params, path, target });

  return proxyRequest(event, targetUrl);
});
