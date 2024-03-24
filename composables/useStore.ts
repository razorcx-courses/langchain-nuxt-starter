export const useTitle = () => {
  return useState<string>("chatWindowTitle", () => "Langchain | Nuxt | TailwindCSS");
};

export const useDescription = () => {
  return useState<string>("chatWindowDesciption", () => "Chatbot Examples");
};

export const useHumanPrompt = () => {
  return useState<string>("humanPrompt", () => "");
};

export const usePageMeta = () => {
  return useState<IPageInfo[]>("pageMeta", () => pageInfos);
};
