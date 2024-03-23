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
useState('chatWindowTitle', () => "Chat Prompt Template Example");
useState('chatWindowDesciption', () =>"Convert text from English to Spanish");
const response = ref();
const modelValue = ref("Hello my name is Chucky.");

const endpoint = "/api/chatprompts/convert?";
const input_language = "input_language=english";
const output_language = "output_language=spanish";

const onGetResponse = async () => {
  const text = "text=" + modelValue.value;

  const apiEndpoint =
    endpoint + input_language + "&" + output_language + "&" + text;

  const { message, status } = await $fetch(apiEndpoint);

  response.value = message;

  if (status !== "success") {
    response.value = status;
  }
};
</script>
