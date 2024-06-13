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

const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

const readFile = async () => {
  const theFile = file.value.files[0];
  console.log(theFile);

  const reader = new FileReader();

  reader.onload = async (f) => {
    const arrayBuffer = f.target.result;
    const uint8Array = new Uint8Array(arrayBuffer);

    // Convert Uint8Array to Base64
    const base64String = arrayBufferToBase64(uint8Array);

    const body = await $fetch("/api/read-pdf", {
      method: "POST",
      body: { data: base64String },
    });

    const doc = body.join(" ")
    console.log(doc.substr(0, 200));

    docs.value = doc;
  };

  reader.readAsArrayBuffer(theFile);
};
</script>
