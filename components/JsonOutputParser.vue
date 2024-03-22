<template>
  <ChatBox
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
const chatWindowTitle = ref("Json Output Parser Example");
const chatWindowDesciption = ref("Tell a Joke about {topic}");
const response = ref();
const modelValue = ref("LLMs");

const onGetResponse = async () => {
  const { message } = await $fetch('/api/jsonoutput/' + modelValue.value);
  response.value = message;

  console.log(response.value);
};
</script>