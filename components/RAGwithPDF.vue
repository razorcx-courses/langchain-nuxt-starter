<template>
  <div>
    <ChatBox
      :response="response"
      :chatWindowTitle="chatWindowTitle"
      :chatWindowDesciption="chatWindowDesciption"
      v-model="modelValue"
      @getResponse="onGetResponse"
    >
      <template v-if="response">
        <p>{{ response }}</p>
      </template>
    </ChatBox>

    <section class="px-4">
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

const chatWindowTitle = ref("RAG - PDF Document Memory Vector Store");
const chatWindowDesciption = ref("Ask questions about the PDF document");
const response = ref();
const modelValue = ref("Tell me about the document.");
const file = ref(null);

let docs;

const onGetResponse = async () => {
  if (!docs) {
    console.log("Load document and try again.");
    return;
  }

  const { data } = await useFetch("/api/rag/pdf", {
    method: "POST",
    body: docs,
  });

  const { message, status } = data.value;
  response.value = message;

  if (status !== "success") {
    response.value = status;
  }
};

// const readFile = async () => {
//   console.log("File loaded.");
// };

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

    docs = await pdfLoader.load();
    console.log(docs);
  }
};

// const readFile = async () => {
//   const files = file.value.files;
//   console.log("Files", files);
//   // Check if the user has selected a file
//   if (files && files.length > 0) {
//     console.log("Document loaded");
//     // Access the file
//     const blob = files[0];

//     //https://github.com/mozilla/pdf.js/issues/17245
//     const pdfjs = await import("pdfjs-dist/legacy/build/pdf.min.mjs");
//     const pdfjsWorker = await import(
//       "pdfjs-dist/legacy/build/pdf.worker.min.mjs"
//     );
//     pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

//     const pdfLoader = new WebPDFLoader(blob, {
//       parsedItemSeparator: "",
//       pdfjs: () => Promise.resolve(pdfjs),
//     });

//     docs = await pdfLoader.load();
//   }
// };
</script>
