//https://stackoverflow.com/questions/77022535/how-to-fix-cors-error-on-3rd-party-api-call-in-nuxt-3
export const useApiEndpoints = () => {
  return {
    joke: (thing) => "api/joke/" + thing,
    prompts: {
      simple: (product) => "/api/prompts/simple/" + product,
      noInput: (template) => "/api/prompts/noinput?template=" + template,
      oneInput: (adjective) =>
        "/api/prompts/oneinput?template=" +
        `Tell+me+a+{adjective}+joke.&adjective=${adjective}`,
      multiInput: (adjective, noun) =>
        "/api/prompts/multiinput?template=" +
        `Tell me a {adjective} joke about a {noun}.&adjective=${adjective}&noun=${noun}`,
    },
  };
};
