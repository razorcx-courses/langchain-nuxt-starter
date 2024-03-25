export const useTitle = () => {
  return useState<string>(
    "chatWindowTitle",
    () => "Langchain | Nuxt | TailwindCSS"
  );
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

export const useLoggedIn = () => {
  return useState<boolean>("isLoggedIn", () => false);
};

export const useSignUp = () => {
  return useState<boolean>("isSignUp", () => false);
};
