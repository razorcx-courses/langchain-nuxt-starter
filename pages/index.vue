<template>
  <section id="chat" class="pt-2 md:pt-4 px-4 pb-12 max-w-sm mx-auto">
    <div id="chat-card" class="flex flex-col rounded-md overflow-hidden gap-6">
      <ChatBoxTitle></ChatBoxTitle>
      <div class="flex flex-col gap-2 text-center bg-white/10 p-6 rounded-lg">
        <template v-for="link in links" :key="link.name">
          <NuxtLink class="text-white cursor-pointer hover:text-pink-400" :to="link.to"
            ><p>{{ link.name }}</p>
          </NuxtLink>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
const title = useTitle();
const description = useDescription();

title.value = "Langchain | Nuxt | TailwindCSS";
description.value = "Chatbot Examples";

const links = ref();

links.value = [
  { name: "Joke", to: "/langchain/joke" },
  { name: "Chat Prompts", to: "/langchain/chatprompts" },
  { name: "CSV List", to: "/langchain/csvlist" },
  { name: "Few Shot", to: "/langchain/fewshot" },
  { name: "JSON Parser", to: "/langchain/jsonparser" },
  { name: "Pipeline", to: "/langchain/pipeline" },
  { name: "Prompting Functions", to: "/langchain/promptingfunctions" },
  { name: "RAG", to: "/langchain/rag" },
  { name: "Prompts", to: "/langchain/prompts" },
  { name: "Simple Prompts", to: "/langchain/prompts/simple" },
];
</script>
