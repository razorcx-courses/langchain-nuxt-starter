export interface IPageInfo {
  page: string;
  title: string;
  description: string;
  humanPrompt: string;
  endpoint: string;
}

export const pageInfos: IPageInfo[] = [
  {
    page: "joke",
    title: "Prompt Template Schema Example",
    description: "Tell a Joke about {thing}",
    humanPrompt: "pigeon",
    endpoint: "/api/joke/",
  },
  {
    page: "chatprompts",
    title: "Chat Prompt Template Example",
    description: "Convert text from English to Spanish",
    humanPrompt: "Hello my name is Chucky.",
    endpoint: "/api/chatprompts/convert",
  },
  {
    page: "prompts",
    title: "Simple Prompt Template Example",
    description: "Company Name from {productType}",
    humanPrompt: "toys",
    endpoint: "/api/prompts/simple/",
  },
  {
    page: "csvlist",
    title: "CSV List Output Parser Example",
    description: "Provide a comma seperated list.",
    humanPrompt: "volcanoes in washington state",
    endpoint: "/api/csv/",
  },
  {
    page: "fewshot",
    title: "Few Shot Message Prompt Template Example",
    description: "Rephase human query",
    humanPrompt: "Why do cats wear clothes?",
    endpoint: "/api/fewshot/rephrase",
  },
  {
    page: "jsonparser",
    title: "Json Output Parser Example",
    description: "Tell a Joke about {topic}",
    humanPrompt: "LLMs",
    endpoint: "/api/jsonoutput/",
  },
  {
    page: "pipeline",
    title: "Pipeline Prompt Template Example",
    description: "Ask a question",
    humanPrompt: "What's your favorite social media site?",
    endpoint: "/api/pipeline/ask",
  },
  {
    page: "promptingfunctions",
    title: "Prompting with Functions Example",
    description: "Tell a joke",
    humanPrompt: "funny",
    endpoint: "/api/promptfunctions/",
  },
  {
    page: "rag",
    title: "RAG - PDF Document Memory Vector Store",
    description: "Ask questions about the PDF document",
    humanPrompt: "Tell me about the document.",
    endpoint: "/api/rag/pdf",
  },
  {
    page: "simple",
    title: "Simple Prompt Template Example",
    description: "Various jokes",
    humanPrompt: "dogs",
    endpoint: "",
  },
];
