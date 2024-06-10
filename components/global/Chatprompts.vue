<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response"></Response>
  </ChatBox>
</template>

<script setup>
const page = "chatprompts"
const { endpoint, humanPrompt } = usePageInit(page);

const { data: response, execute } = useAsyncData(
  page,
  () =>
    $fetch(endpoint, {
      query: {
        input_language: "english",
        output_language: "spanish",
        text: humanPrompt.value,
      },
    }),
  {
    immediate: false,
  }
);
</script>
