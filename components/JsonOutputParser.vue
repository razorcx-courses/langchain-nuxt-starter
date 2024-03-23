<template>
  <ChatBox
    @getResponse="execute"
  >
    <template v-if="response">
      <p
        class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
      >
        Setup
      </p>
      <p class="ml-3 mb-3">{{ response.message.setup }}</p>
      <p
        class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
      >
        Punchline
      </p>
      <p class="ml-3">{{ response.message.punchline }}</p>
    </template>
  </ChatBox>
</template>

<script setup>
useState('chatWindowTitle', () => "Json Output Parser Example");
useState('chatWindowDesciption', () =>"Tell a Joke about {topic}");
const humanPrompt = useState("humanPrompt", () => "LLMs");

const { data: response, execute } = await useAsyncData(
  "jsonparser",
  () => $fetch('/api/jsonoutput/' + humanPrompt.value),
  {
    immediate: false,
  }
);
</script>