<template>
  <div>
    <ChatBox @getResponse="execute">
      <Response v-if="response" :response="response.message"></Response>
    </ChatBox>

    <section class="px-4 pb-8">
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
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";

const route = useRoute();
const page = computed(() => {
  return route.params.slug.toLowerCase();
});
const { endpoint, humanPrompt } = usePageInit(page.value);

const file = ref(null);

const docs = ref();

const { data: response, execute } = await useAsyncData(
  page.value,
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
  const files = file.value.files;
  console.log("Files", files);
  // Check if the user has selected a file
  if (files && files.length > 0) {
    console.log("Document loaded");
    // Access the file
    const blob = files[0];

    //https://github.com/mozilla/pdf.js/issues/17245
    const pdfjs = await import("pdfjs-dist/legacy/build/pdf.min.mjs");
    const pdfjsWorker = await import(
      "pdfjs-dist/legacy/build/pdf.worker.min.mjs"
    );
    pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    const pdfLoader = new WebPDFLoader(blob, {
      parsedItemSeparator: "",
      pdfjs: () => Promise.resolve(pdfjs),
    });

    docs.value = await pdfLoader.load();
    console.log(docs.value);
  }
};
</script>
