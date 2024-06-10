export const usePageInit = (page: string) => {
  const title = useTitle();
  const description = useDescription();
  const humanPrompt = useHumanPrompt();
  const pageMeta = usePageMeta();

  const data = pageMeta.value.filter(
    (p) => p.page.toLowerCase() === page.toLowerCase()
  )[0];

  title.value = data.title ?? "Langchain | Nuxt | TailwindCSS";
  description.value = data.description ?? "Chatbot Examples";
  humanPrompt.value = data.humanPrompt ?? "";

  return { endpoint: data.endpoint, humanPrompt };
};
