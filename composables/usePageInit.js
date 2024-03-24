export const usePageInit = (page) => {
  const title = useTitle();
  const description = useDescription();
  const humanPrompt = useHumanPrompt();
  const pageMeta = usePageMeta();

  const data = pageMeta.value.filter(
    (p) => p.page.toLowerCase() === page.toLowerCase()
  )[0];

  title.value = data.title;
  description.value = data.description;
  humanPrompt.value = data.humanPrompt;

  return { endpoint: data.endpoint, humanPrompt };
};
