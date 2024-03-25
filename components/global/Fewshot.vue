<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response"></Response>
  </ChatBox>
</template>

<script setup>
const page = "fewshot"

const { endpoint, humanPrompt } = usePageInit(page);

const { data: response, execute } = await useAsyncData(
  page,
  () =>
    $fetch(endpoint, {
      query: {
        human: humanPrompt.value,
      },
    }),
  {
    immediate: false,
  }
);
</script>
