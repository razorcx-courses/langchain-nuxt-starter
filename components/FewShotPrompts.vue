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
useState('chatWindowTitle', () => "Few Shot Message Prompt Template Example");
useState('chatWindowDesciption', () =>"Rephase human query");
const response = ref();
const modelValue = ref("Why do cats wear clothes?");

const onGetResponse = async () => {
  const { message, status } = await $fetch(
    "/api/fewshot/rephrase?human=" + modelValue.value
  );

  response.value = message;

  if (status !== "success") {
    response.value = status;
  }
};
</script>
