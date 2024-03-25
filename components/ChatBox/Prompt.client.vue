<template>
  <div id="prompt" class="text-sm p-3 flex flex-col rounded-b-sm">
    <div
      class="text-xs text-gray-800 flex justify-left items-center rounded-t-sm overflow-hidden"
    >
      <p class="bg-white py-2 px-3 rounded-t-sm">Human Prompt</p>
    </div>
    <textarea
      v-model="humanPrompt"
      class="text-gray-800 w-full overflow-y-auto p-3 rounded-b-sm"
      rows="3"
      style="resize: none"
    >
    </textarea>
  </div>
</template>

<script setup>
const humanPrompt = useState("humanPrompt");
</script>
