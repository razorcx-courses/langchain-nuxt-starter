<template>
  <ChatBox
    @getResponse="onGetResponse"
  >
    <div class="flex flex-col gap-2">
      <template v-if="response">
        <div>
          <p class="font-bold text-lg">useFetch Example</p>
          <p class="text-bold text-pink-500 ml-2">{{ response.input }}</p>
          <p class="text-xs ml-2">Last fetched: {{ response.fetchedAt }}</p>
        </div>
      </template>
    </div>
  </ChatBox>
</template>

<script setup>
useState('chatWindowTitle', () => "Simple Prompt Template Example");
useState('chatWindowDesciption', () =>"Company Name from {productType}");
const modelValue = useState("humanPrompt", () => "toys");

const { data: response, execute } = await useAsyncData(
  "company",
  () => $fetch("/api/prompts/simple/" + modelValue.value),
  {
    watch: [modelValue],
    transform(input) {
      console.log(input);
      return {
        input,
        fetchedAt: new Date(),
      };
    },
    getCachedData(key, nuxtApp) {
      console.log(key, nuxtApp.payload.data[key], nuxtApp.static.data[key]);
      const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
      if (!data) {
        return;
      }

      //just return for now and do refetch
      return;
    },
  }
);

const onGetResponse = async () => {
  await execute();
  console.log(response.value);
};
</script>
