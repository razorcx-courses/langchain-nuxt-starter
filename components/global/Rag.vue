<template>
  <div>
    <ChatBox @getResponse="execute">
      <Response v-if="response" :response="response"></Response>
    </ChatBox>

    <section class="pb-8">
      <div
        class="flex flex-col items-left max-w-sm md:max-w-xl mx-auto mb-16 bg-gray-200 p-6"
      >
        <label
          class="block mb-2 text-sm font-medium text-gray-900"
          for="file_input"
          >Upload file</label
        >
        <input
          class="text-sm text-gray-900 border rounded cursor-pointer bg-gray-50 focus:outline-none"
          id="file_input"
          type="file"
          accept=".pdf"
          @change="readFile()"
          ref="file"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const file = ref(null);
const docs = ref();
const page = "rag"

const { endpoint, humanPrompt } = usePageInit(page);

const { data: response, execute } = useAsyncData(
  page,
  () =>
    $fetch(endpoint, {
      method: "POST",
      body: { docs: docs.value, prompt: humanPrompt.value },
    }),
  {
    immediate: false,
  }
);

const readFile = async () => {
  // console.log("readfile", file.value.files)
  docs.value = await readPdfFile(file.value.files);
  // console.log(endpoint, docs.value)
};
</script>
