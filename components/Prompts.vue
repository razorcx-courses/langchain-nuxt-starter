<template>
  <ChatBox
    :response="response"
    :chatWindowTitle="chatWindowTitle"
    :chatWindowDesciption="chatWindowDesciption"
    v-model="modelValue"
    @getResponse="onGetResponse"
  >
    <div>
      <template v-if="jokes">
        <p v-for="joke in jokes">{{ joke }}</p>
      </template>
      <template v-if="response">
        <p class="text-bold text-pink-500">{{ response }}</p>
      </template>
    </div>
  </ChatBox>
</template>

<script setup>
const chatWindowTitle = ref("Simple Prompt Template Example");
const chatWindowDesciption = ref("Company Name from {productType}");
const response = ref();
const modelValue = ref("boxes");

const onGetResponse = async () => {
  const { data } = await useFetch("/api/prompts/simple/" + modelValue.value);

  response.value = data.value;
  console.log(response.value);
};

const { data: jokes, pending } = await useAsyncData("jokes", async () => {
  let template = "Tell me a joke about flying dogs.";
  let adjective = "dog";
  let adjective2 = "sarcastic";
  let noun = "lizard";

  const [noinput, oneinput, multiinput] = await Promise.all([
    $fetch("/api/prompts/noinput", {
      query: {
        template,
      },
    }),
    $fetch("/api/prompts/oneinput", {
      query: {
        template: "Tell me a {adjective} joke.",
        adjective: adjective,
      },
    }),
    $fetch("/api/prompts/multiinput", {
      query: {
        template: "Tell me a {adjective} joke about a {noun}.",
        adjective: adjective2,
        noun,
      },
    }),
  ]);

  return [noinput, oneinput, multiinput];
});

console.log(jokes.value);

// let template = "Tell me a joke about flying dogs.";
// const { data: noInput } = await useFetch("/api/prompts/noinput", {
//   query: {
//     template,
//   },
// });

// let adjective = "dog";
// const { data: oneInput } = await useFetch("/api/prompts/oneinput", {
//   query: {
//     template: "Tell me a {adjective} joke.",
//     adjective: adjective,
//   },
// });

// let adjective2 = "sarcastic";
// let noun = "lizard";
// const { data: multiInput } = await useFetch("/api/prompts/multiinput", {
//   query: {
//     template: "Tell me a {adjective} joke about a {noun}.",
//     adjective: adjective2,
//     noun,
//   },
// });

// console.log("No Input:", noInput.value);
// console.log("One Input:", oneInput.value);
// console.log("Multi Input:", multiInput.value);
</script>
