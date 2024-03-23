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
useState('chatWindowTitle', () => "CSV List Output Parser Example");
useState('chatWindowDesciption', () =>"Provide a comma seperated list.");
const modelValue = useState("humanPrompt", () => "volcanoes in washington state");

const response = ref();

const onGetResponse = async () => {
  response.value = await $fetch("/api/csv/" + modelValue.value);

  console.log(response.value);
};
</script>
