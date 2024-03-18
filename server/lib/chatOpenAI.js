import { ChatOpenAI } from "@langchain/openai";

const config = useRuntimeConfig();

//https://platform.openai.com/docs/models/gpt-3-5-turbo
export const chatOpenAIModel = new ChatOpenAI({
  openAIApiKey: config.openApiKey,  //process.env.NUXT_OPEN_API_KEY,
  modelName: "gpt-3.5-turbo",
  temperature: 0,
});
