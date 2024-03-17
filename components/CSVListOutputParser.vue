<template>
  <ChatBox
    :response="response"
    :chatWindowTitle="chatWindowTitle"
    :chatWindowDesciption="chatWindowDesciption"
    v-model="modelValue"
    @getResponse="onGetResponse"
  >
    <template v-if="response">
      <p>{{ response }}</p>
    </template>
  </ChatBox>
</template>

<script setup>
const chatWindowTitle = ref("CSV List Output Parser Example");
const chatWindowDesciption = ref("Provide a comma seperated list.");
const response = ref();
const modelValue = ref("volcanoes in washington state");

const onGetResponse = async () => {
  const { data } = await useFetch("/api/csv/" + modelValue.value);
  response.value = data.value;

  console.log(response.value);
};
</script>
