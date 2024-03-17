import { simplePromptTemplateExample } from "../../../lib/prompts";

export default defineEventHandler(async (event) => {
  try {
    const product = getRouterParam(event, "product");
    const reponse = await simplePromptTemplateExample(product);
    return reponse;
  } catch (error) {
    return { "error:": error.message };
  }
});
