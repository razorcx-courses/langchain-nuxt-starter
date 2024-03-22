<template>
  <ClientOnly>
    <section id="chat" class="pt-2 md:pt-4 px-4 pb-12 max-w-lg md:max-w-3xl mx-auto">
      <div
        id="chat-card"
        class="flex flex-col rounded-md overflow-hidden"
      >
        <div
          class="flex flex-col bg-black pt-3 pb-5 text-white text-center"
        >
          <h2 class="text-lg">{{ chatWindowTitle }}</h2>
          <p class=" text-pink-400">{{ chatWindowDesciption }}</p>
        </div>

        <!-- response -->
        <div
          id="response"
          class="bg-black text-sm p-3 flex flex-col rounded-b-sm"
        >
          <div
          class="text-xs text-gray-800 flex justify-left items-center rounded-t-sm overflow-hidden "
          >
            <p class="py-2 px-3 rounded-t-sm bg-gray-300">AI Response</p>
          </div>
          <div
            class="h-48 md:min-h-52 p-3 bg-gray-300 rounded-b-sm text-sm overflow-x-auto overflow-y-auto text-gray-800"
          >
            <slot></slot>
          </div>
        </div>

        <!-- prompt -->
        <div
          id="prompt"
          class="bg-black text-sm p-3 flex flex-col rounded-b-sm"
        >
          <div
            class="text-xs text-gray-800 flex justify-left items-center rounded-t-sm overflow-hidden"
          >
            <p class="bg-white py-2 px-3 rounded-t-sm">Human Prompt</p>
          </div>
          <textarea
            v-model="modelValue"
            class="text-gray-800 w-full overflow-y-auto p-3 rounded-b-sm"
            rows="3"
            style="resize: none"
          >
          </textarea>
        </div>
        <div class="flex justify-center items-center">
          <button
            @click="$emit('getResponse')"
            class="bg-pink-400 py-1 px-4 text-sm rounded-sm mt-2"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>

<script setup>
const props = defineProps({
  chatWindowTitle: String,
  chatWindowDesciption: String,
});
defineEmits(["getResponse"]);
const modelValue = defineModel();
</script>
