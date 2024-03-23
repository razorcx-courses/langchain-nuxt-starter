<template>
  <ChatBox @getResponse="execute">
    <template v-if="response">
      <p
        class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
      >
        Setup
      </p>
      <p class="ml-3 mb-3">{{ response.setup }}</p>
      <p
        class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
      >
        Punchline
      </p>
      <p class="ml-3">{{ response.punchline }}</p>
    </template>
  </ChatBox>
</template>

<script setup>
useState("chatWindowTitle", () => "Prompt Template Schema Example");
useState("chatWindowDesciption", () => "Tell a Joke about {thing}");
const humanPrompt = useState("humanPrompt", () => "pigeon");

const { data: response, execute } = await useAsyncData(
  "joke",
  () => $fetch("/api/joke/" + humanPrompt.value),
  {
    immediate: false,
  }
);
</script>
