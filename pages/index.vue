<template>
  <div>
    <section v-if="isSignUp">
      <AppSignUp />
    </section>
    <section v-else-if="!isLoggedIn">
      <AppLogin />
    </section>
    <section
      v-else-if="isLoggedIn"
      id="chat"
      class="pt-2 md:pt-4 px-4 pb-12 max-w-sm mx-auto"
    >
      <div
        id="chat-card"
        class="flex flex-col rounded-md overflow-hidden gap-6"
      >
        <ChatBoxTitle></ChatBoxTitle>
        <div class="flex flex-col gap-2 bg-black/80 p-6 rounded-lg grow">
          <template v-for="link in links" :key="link.name">
            <div class="flex items-center justify-center cursor-pointer">
              <NuxtLink class="text-white hover:text-pink-400" :to="link.to"
                >{{ link.name }}
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const isLoggedIn = useLoggedIn();
const isSignUp = useSignUp();

const title = useTitle();
const description = useDescription();

title.value = "Langchain | Nuxt | TailwindCSS";
description.value = "Chatbot Examples";

const links = ref(exampleLinks);
</script>
