<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response"></Response>
  </ChatBox>
</template>

<script setup>
const props = defineProps({
  page: String,
});

const { endpoint, humanPrompt } = usePageInit(props.page);

const { data: response, execute } = await useAsyncData(
  props.page,
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
