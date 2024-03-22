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
const chatWindowTitle = ref("Simple Prompt Window Example");
const chatWindowDesciption = ref("Company Name from {productType}");
const response = ref();
const modelValue = ref("boxes");

const endpoints = useApiEndpoints();

const onGetResponse = async () => {
  const { data } = await useFetch(endpoints.prompts.simple(modelValue.value));
  response.value = data.value;
  console.log(response.value);
};

let template = "Tell me a joke.";
const { data: noInput } = await useFetch(endpoints.prompts.noInput(template));

let adjective = "dog";
const { data: oneInput } = await useFetch(
  endpoints.prompts.oneInput(adjective)
);

let adjective2 = "sarcastic";
let noun = "lizard";
const { data: multiInput } = await useFetch(
  endpoints.prompts.multiInput(adjective2, noun)
);

console.log("No Input:", noInput.value);
console.log("One Input:", oneInput.value);
console.log("Multi Input:", multiInput.value);
</script>
