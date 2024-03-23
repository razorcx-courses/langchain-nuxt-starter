<template>
  <ChatBox
    v-model="modelValue"
    @getResponse="onGetResponse"
  >
    <template v-if="jokes">
      <div>
        <p class="font-bold text-lg">useAsyncData Example</p>
        <p v-for="joke in jokes" class="ml-2">{{ joke }}</p>
      </div>
    </template>
  </ChatBox>
</template>

<script setup>
useState('chatWindowTitle', () => "Simple Prompt Template Example");
useState('chatWindowDesciption', () =>"Various jokes");
const modelValue = ref("dogs");
const jokes = ref();

const onGetResponse = async () => {
  //https://nuxt.com/docs/api/composables/use-async-data
  const { data, pending } = await useAsyncData(
    //key
    "jokes",
    //handler
    async () => {
      let template = `Tell me a joke about flying ${modelValue.value}.`;
      let adjective = modelValue.value;
      let adjective2 = "hilarious";
      let noun = modelValue.value + "and a cat";

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
    },
    //options
    {
      immediate: true,
      watch: false,
      dedupe: "defer"
    }
  );

  console.log(data.value);

  jokes.value = data.value;
};
</script>
