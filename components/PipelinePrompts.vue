<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response.message"></Response>
  </ChatBox>
</template>

<script setup>
const route = useRoute();
const page = computed(() => {
  return route.params.slug.toLowerCase();
});
const { endpoint, humanPrompt } = usePageInit(page.value);

const { data: response, execute } = await useAsyncData(
  page.value,
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
