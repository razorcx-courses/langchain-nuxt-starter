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
const chatWindowTitle = ref("Chat Prompt Template Example");
const chatWindowDesciption = ref("Convert text from English to French");
const response = ref();
const modelValue = ref("Hello my name is Chucky.");

const endpoint = "http://localhost:3000/api/chatprompts/convert?";
const input_language = "input_language=english";
const output_language = "output_language=french";

const onGetResponse = async () => {
  const text = "text=" + modelValue.value;

  const apiEndpoint =
    endpoint + input_language + "&" + output_language + "&" + text;

  const { data } = await useFetch(apiEndpoint);

  const { message, status } = data.value;
  response.value = message;

  if (status !== "success") {
    response.value = status;
  }
};
</script>
