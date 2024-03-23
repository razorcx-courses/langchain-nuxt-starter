<template>
  <ChatBox
    @getResponse="onGetResponse"
  >
    <template v-if="response">
      <p
        class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
      >
        Setup
      </p>
      <p class="ml-3 mb-3">{{ response.setup }}</p>
      <p
        class="inline-flex text-[9px] bg-gray-400 text-gray-200 px-2 rounded-sm"
      >
        Punchline
      </p>
      <p class="ml-3">{{ response.punchline }}</p>
    </template>
  </ChatBox>
</template>

<script setup>
useState('chatWindowTitle', () => "Json Output Parser Example");
useState('chatWindowDesciption', () =>"Tell a Joke about {topic}");
const modelValue = useState("humanPrompt", () => "LLMs");

const response = ref();

const onGetResponse = async () => {
  const { message } = await $fetch('/api/jsonoutput/' + modelValue.value);
  response.value = message;

  console.log(response.value);
};
</script>