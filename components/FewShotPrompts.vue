<template>
  <ChatBox
    :response="response"
    :chatWindowTitle="chatWindowTitle"
    :chatWindowDesciption="chatWindowDesciption"
    v-model="modelValue"
    @getResponse="onGetResponse"
  >
    <template v-if="response">
      <p>{{ response }}</p>
    </template>
  </ChatBox>
</template>

<script setup>
const chatWindowTitle = ref("Few Shot Message Prompt Template Example");
const chatWindowDesciption = ref("Rephase human query");
const response = ref();
const modelValue = ref("Why do cats wear clothes?");

const onGetResponse = async () => {
  const { data } = await useFetch(
    "/api/fewshot/rephrase?human=" + modelValue.value
  );

  const { message, status } = data.value;

  console.log(data.value);

  response.value = message;

  if (status !== "success") {
    response.value = status;
  }
};
</script>
