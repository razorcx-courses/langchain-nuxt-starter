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
import { uploadBytes } from "firebase/storage";
import { ref as ref2 } from "firebase/storage";

const file = ref();
const docs = ref();
const page = "rag";

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
  response.value = "";
  humanPrompt.value = `Take notes on the following document. The goal is to be able to create a complete understanding of the document after reading all notes which includes a description for each major item.`;

  const theFile = file.value.files[0];
  console.log(theFile);

  const reader = new FileReader();

  reader.onload = async (f) => {
    const arrayBuffer = f.target.result;

    // Create a root reference
    const path = "pdfs/" + theFile.name;
    const storageRef = ref2(storage, path);

    // 'file' comes from the Blob or File API
    const snapshot = await uploadBytes(storageRef, arrayBuffer);

    console.log("Uploaded a blob or file!", snapshot.metadata.fullPath);

    const body = await $fetch("/api/read-pdf", {
      method: "POST",
      body: { path: path },
    });

    const doc = body.join(" ");
    console.log(doc.substr(0, 200));

    docs.value = doc;
  };

  reader.readAsArrayBuffer(theFile);
};
</script>
