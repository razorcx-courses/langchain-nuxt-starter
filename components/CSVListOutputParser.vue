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
useState('chatWindowTitle', () => "CSV List Output Parser Example");
useState('chatWindowDesciption', () =>"Provide a comma seperated list.");
const humanPrompt = useState("humanPrompt", () => "volcanoes in washington state");

const { data: response, execute } = await useAsyncData(
  "csvlist",
  () => $fetch("/api/csv/" + humanPrompt.value),
  {
    immediate: false,
  }
);
</script>
