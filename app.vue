<template>
  <div class="relative font-mono">
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
  //   class: "bg-red-200",
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
</script>
