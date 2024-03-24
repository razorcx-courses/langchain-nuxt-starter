<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response"></Response>
  </ChatBox>
</template>

<script setup>
useState("chatWindowTitle", () => "Prompting with Functions Example");
useState("chatWindowDesciption", () => "Tell a joke");
const humanPrompt = useState("humanPrompt", () => "funny");

const { data: response, execute } = await useAsyncData(
  "functions",
  () => $fetch("/api/promptfunctions/" + humanPrompt.value),
  {
    immediate: false,
  }
);
</script>
