<template>
  <section
    id="chat"
    class="pt-2 md:pt-4 px-4 pb-12 md:max-w-3xl mx-auto"
  >
    <div id="chat-card" class="flex flex-col rounded-md overflow-hidden bg-black py-3">
      <ChatBoxTitle></ChatBoxTitle>

      <ChatBoxResponse><slot></slot></ChatBoxResponse>

      <ChatBoxPrompt></ChatBoxPrompt>

      <!-- <ChatBoxSubmit @getResponse="getResponse"></ChatBoxSubmit> -->
      <div class="flex justify-center items-center">
        <button
          @click="$emit('getResponse')"
          class="bg-pink-400 py-1 px-4 text-sm rounded-sm"
        >
          Submit Prompt
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(["getResponse"]);
</script>
