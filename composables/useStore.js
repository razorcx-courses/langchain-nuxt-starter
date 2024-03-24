import { pageInfo } from "./pageInfo";

export const useTitle = () => {
  return useState("chatWindowTitle", () => "Langchain | Nuxt | TailwindCSS");
};

export const useDescription = () => {
  return useState("chatWindowDesciption", () => "Chatbot Examples");
};

export const useHumanPrompt = () => {
  return useState("humanPrompt", () => "");
};

export const usePageMeta = () => {
  return useState("pageMeta", () => pageInfo);
};
