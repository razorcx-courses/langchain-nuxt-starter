export const useRunPage = async (route) => {
  const page = computed(() => {
    return route.params.slug.toLowerCase();
  });

  const { endpoint, humanPrompt } = usePageInit(page.value);

  const { data: response, execute } = await useAsyncData(
    page.value,
    () => $fetch(endpoint + humanPrompt.value),
    {
      immediate: false,
    }
  );

  return { response, execute };
};
