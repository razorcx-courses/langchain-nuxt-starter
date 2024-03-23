<template>
  <ChatBox @getResponse="onGetResponse">
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
useState("humanPrompt", () => "pigeon");

const response = ref();

//https://stackoverflow.com/questions/77022535/how-to-fix-cors-error-on-3rd-party-api-call-in-nuxt-3
const onGetResponse = async () => {
  const prompt = useState("humanPrompt");
  response.value = await $fetch("api/joke/" + prompt.value);
};
</script>
