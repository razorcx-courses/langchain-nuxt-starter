import { redisClient } from "../lib/redisClient";

import { UpstashRedisStore } from "@langchain/community/storage/upstash_redis";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
// import { createClient } from "redis";
// import { OpenAIEmbeddings } from "@langchain/openai";
// import { RedisVectorStore } from "@langchain/redis";
import { Document } from "@langchain/core/documents";

export default defineEventHandler(async (event) => {
  const client = redisClient();
  if (client) console.log("Redis Client:", client?.client.baseUrl);

  const yieldedKeys = await upstashRedisStore(client);

  return {
    keys: yieldedKeys,
  };
});

const upstashRedisStore = async (client) => {
  const store = new UpstashRedisStore({
    client,
  });
  // Define our encoder/decoder for converting between strings and Uint8Arrays
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  /**
   * Here you would define your LLM and chat chain, call
   * the LLM and eventually get a list of messages.
   * For this example, we'll assume we already have a list.
   */
  const messages = Array.from({ length: 5 }).map((_, index) => {
    if (index % 2 === 0) {
      return new AIMessage("ai stuff...");
    }
    return new HumanMessage("human stuff...");
  });

  console.log(messages);

  // Set your messages in the store
  // The key will be prefixed with `message:id:` and end
  // with the index.
 await store.mset(
    messages.map((message, index) => [
      `message:id:${index}`,
      encoder.encode(JSON.stringify(message)),
    ])
  );

  // Now you can get your messages from the store
  const retrievedMessages = await store.mget(["message:id:0", "message:id:1"]);
  console.log("retrievedMessages", retrievedMessages);

  // Make sure to decode the values
  const decodedMessages = retrievedMessages.map((v) => decoder.decode(v));
  console.log(decodedMessages);
  /**
[
  '{"id":["langchain","AIMessage"],"kwargs":{"content":"ai stuff..."}}',
  '{"id":["langchain","HumanMessage"],"kwargs":{"content":"human stuff..."}}'
]
 */
  // Or, if you want to get back all the keys you can call
  // the `yieldKeys` method.
  // Optionally, you can pass a key prefix to only get back
  // keys which match that prefix.
  const yieldedKeys = [];
  for await (const key of store.yieldKeys("message:id")) {
    yieldedKeys.push(key);
  }
  // The keys are not encoded, so no decoding is necessary
  console.log(yieldedKeys);
  /**
[
  'message:id:2',
  'message:id:1',
  'message:id:3',
  'message:id:0',
  'message:id:4'
]
 */
  // Finally, let's delete the keys from the store
  //await store.mdelete(yieldedKeys);

  const docs = [
    new Document({
      metadata: { foo: "bar" },
      pageContent: "redis is fast",
    }),
    new Document({
      metadata: { foo: "bar" },
      pageContent: "the quick brown fox jumped over the lazy dog",
    }),
    new Document({
      metadata: { baz: "qux" },
      pageContent: "lorem ipsum dolor sit amet",
    }),
    new Document({
      metadata: { baz: "qux" },
      pageContent: "consectetur adipiscing elit",
    }),
  ];
  
  // const vectorStore = await RedisVectorStore.fromDocuments(
  //   docs,
  //   new OpenAIEmbeddings(),
  //   {
  //     redisClient: client,
  //     indexName: "docs",
  //   }
  // );

  // await client.disconnect();

  return yieldedKeys;
};
