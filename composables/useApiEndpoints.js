export const useApiEndpoints = () => {
  return {
    joke: (thing) => "/api/joke/" + thing,
    prompts: {
      simple: (product) => "/api/prompts/simple/" + product,
      noInput: (template) => "/api/prompts/noinput?template=" + template,
      oneInput: (adjective) =>
        "/api/prompts/oneinput?template=" +
        `Tell+me+a+{adjective}+joke.&${adjective}`,
      multiInput: (adjective, noun) =>
        "/api/prompts/multiinput?template=" +
        `Tell me a {adjective} joke about a {noun}.&${adjective}&${noun}`,
    },
  };
};
