<template>
  <ChatBox @getResponse="execute">
    <template v-if="response">
      <p>{{ response.message }}</p>
    </template>
  </ChatBox>
</template>

<script setup>
useState("chatWindowTitle", () => "Pipeline Prompt Template Example");
useState("chatWindowDesciption", () => "Ask a question");
const humanPrompt = useState(
  "humanPrompt",
  () => "What's your favorite social media site?"
);

const { data: response, execute } = await useAsyncData(
  "pipeline",
  () =>
    $fetch("/api/pipeline/ask", {
      query: {
        human: humanPrompt.value,
      },
    }),
  {
    immediate: false,
  }
);
</script>
