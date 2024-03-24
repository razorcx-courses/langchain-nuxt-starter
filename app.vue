<template>
  <div class="relative font-mono bg-black min-h-screen">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "LangChain chatterBox Tutorials",
  meta: [{ name: "description", content: "LangChain chatterBox Tutorials" }],
  // bodyAttrs: {
  //   class: "test",
  // },
  // script: [{ innerHTML: "console.log('Hello world')" }],
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});

useState("pages", () => [
  {
    name: "chatprompts",
    chatWindowTitle: "Chat Prompt Template Example",
    chatWindowDesciption: "Convert text from English to Spanish",
    humanPrompt: "Hello my name is Chucky.",
    apiEndpoint: "/api/chatprompts/convert",
    query: {
      input_language: "english",
      output_language: "spanish",
      text: "",
    },
    immediate: false,
  },
]);
</script>
