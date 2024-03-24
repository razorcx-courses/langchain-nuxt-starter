<template>
  <ChatBox @getResponse="execute">
    <template v-if="response">
      <div>
        <p class="font-bold text-lg">useFetch Example</p>
        <p class="text-bold text-pink-500 ml-2">{{ response.input }}</p>
        <p class="text-xs ml-2">Last fetched: {{ response.fetchedAt }}</p>
      </div>
    </template>
  </ChatBox>
</template>

<script setup>
const props = defineProps({
  page: String,
});

const { endpoint, humanPrompt } = usePageInit(props.page);

const { data: response, execute } = await useAsyncData(
  props.page,
  () => $fetch(endpoint + humanPrompt.value),
  {
    immediate: false,
    watch: [humanPrompt],
    transform(input) {
      console.log(input);
      return {
        input,
        fetchedAt: new Date(),
      };
    },
    getCachedData(key, nuxtApp) {
      const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      if (!data) {
        return;
      }
      //just return for now and do refetch
      return;
    },
  }
);
</script>
