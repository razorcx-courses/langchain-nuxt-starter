<template>
  <ChatBox
    v-model="modelValue"
    @getResponse="onGetResponse"
  >
    <template v-if="response">
      <p>{{ response }}</p>
    </template>
  </ChatBox>
</template>

<script setup>
useState('chatWindowTitle', () => "Pipeline Prompt Template Example");
useState('chatWindowDesciption', () =>"Ask a question");
const response = ref();
const modelValue = ref(`What's your favorite social media site?`);

const onGetResponse = async () => {
  const { message, status } = await $fetch("/api/pipeline", {
    query: {
      ask: modelValue.value,
    },
  });

  response.value = message;

  if (status !== "success") {
    response.value = status;
  }
};
</script>
