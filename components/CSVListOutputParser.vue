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
useState('chatWindowTitle', () => "CSV List Output Parser Example");
useState('chatWindowDesciption', () =>"Provide a comma seperated list.");
const response = ref();
const modelValue = ref("volcanoes in washington state");

const onGetResponse = async () => {
  response.value = await $fetch("/api/csv/" + modelValue.value);

  console.log(response.value);
};
</script>
