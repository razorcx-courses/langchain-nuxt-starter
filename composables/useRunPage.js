export const useRunPage = async (page) => {
  const { endpoint, humanPrompt } = usePageInit(page);

  const { data: response, execute } = await useAsyncData(
    page,
    () => $fetch(endpoint + humanPrompt.value),
    {
      immediate: false,
    }
  );

  return { response, execute };
};
