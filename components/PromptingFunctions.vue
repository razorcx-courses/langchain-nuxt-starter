<template>
  <ChatBox
    @getResponse="execute"
  >
    <template v-if="response">
      <p>{{ response }}</p>
    </template>
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
