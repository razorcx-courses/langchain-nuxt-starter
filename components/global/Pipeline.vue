<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response"></Response>
  </ChatBox>
</template>

<script setup>
const page = "pipeline"
const { endpoint, humanPrompt } = usePageInit(page);

const { data: response, execute } = useAsyncData(
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
