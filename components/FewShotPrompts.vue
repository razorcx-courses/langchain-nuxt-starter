<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response"></Response>
  </ChatBox>
</template>

<script setup>
useState("chatWindowTitle", () => "Few Shot Message Prompt Template Example");
useState("chatWindowDesciption", () => "Rephase human query");
const humanPrompt = useState("humanPrompt", () => "Why do cats wear clothes?");

const { data: response, execute } = await useAsyncData(
  "fewshot",
  () =>
    $fetch("/api/fewshot/rephrase", {
      query: {
        human: humanPrompt.value,
      },
    }),
  {
    immediate: false,
  }
);
</script>
