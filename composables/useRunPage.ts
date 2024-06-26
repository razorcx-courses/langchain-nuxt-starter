export const useRunPage = async (page: string) => {
  const { endpoint, humanPrompt } = usePageInit(page);

  const { data: response, execute } = useAsyncData(
    page,
    () => $fetch(endpoint + humanPrompt.value),
    {
      immediate: false,
    }
  );

  return { response, execute };
};
