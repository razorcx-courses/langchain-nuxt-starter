<template>
  <ChatBox
    :response="response"
    :chatWindowTitle="chatWindowTitle"
    :chatWindowDesciption="chatWindowDesciption"
    v-model="modelValue"
    @getResponse="onGetResponse"
  >
    <template v-if="response">
      <p
        class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
      >
        Setup
      </p>
      <p class="ml-3 mb-3">{{ response.setup }}</p>
      <p
        class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
      >
        Punchline
      </p>
      <p class="ml-3">{{ response.punchline }}</p>
    </template>
  </ChatBox>
</template>

<script setup>
const chatWindowTitle = ref("Prompt Template Schema Example");
const chatWindowDesciption = ref("Tell a Joke about {thing}");
const response = ref();
const modelValue = ref("pigeon");

const endpoints = useApiEndpoints();

//https://stackoverflow.com/questions/77022535/how-to-fix-cors-error-on-3rd-party-api-call-in-nuxt-3
const onGetResponse = async () => {
  const { data, error } = await useFetch(endpoints.joke(modelValue.value));
  response.value = data.value;

  console.log(response.value);

  if (error.value) console.log(response.value, error.value?.message);
};
</script>
