import { getJokeResponse } from "../../lib/jokes";

// /api/joke/[thing]   /api/joke/goat
export default defineEventHandler(async (event) => {
  try {
    const thing = getRouterParam(event, "thing");
    const response = await getJokeResponse(thing);
    return response;
  } catch (error) {
    return { "error:": error.message };
  } 
});
