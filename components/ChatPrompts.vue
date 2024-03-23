<template>
  <ChatBox
    @getResponse="execute"
  >
    <template v-if="response">
      <p>{{ response.message }}</p>
    </template>
  </ChatBox>
</template>

<script setup>
useState('chatWindowTitle', () => "Chat Prompt Template Example");
useState('chatWindowDesciption', () =>"Convert text from English to Spanish");
const humanPrompt = useState("humanPrompt", () => "Hello my name is Chucky.");

const { data: response, execute } = await useAsyncData(
  "chatprompts",
  () =>
    $fetch("/api/chatprompts/convert", {
      query: {
        input_language: "english",
        output_language: "spanish",
        text: humanPrompt.value
      },
    }),
  {
    immediate: false,
  }
);

</script>
