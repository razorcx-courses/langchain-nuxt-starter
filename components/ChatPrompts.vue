<template>
  <ChatBox
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
const modelValue = useState("humanPrompt", () => "Hello my name is Chucky.");

const response = ref();

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
