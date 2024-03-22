<template>
  <ChatBox
    :chatWindowTitle="chatWindowTitle"
    :chatWindowDesciption="chatWindowDesciption"
    v-model="modelValue"
    @getResponse="onGetResponse"
  >
    <div class="flex flex-col gap-2">
      <template v-if="response">
        <div>
          <p class="font-bold text-lg">useFetch Example</p>
          <p class="text-bold text-pink-500 ml-2">{{ response }}</p>
        </div>
      </template>
    </div>
  </ChatBox>
</template>

<script setup>
const chatWindowTitle = ref("Simple Prompt Template Example");
const chatWindowDesciption = ref("Company Name from {productType}");
const response = ref();
const modelValue = ref("boxes");

const onGetResponse = async () => {
  //use $fetch because dont need a reactive response
  response.value = await $fetch("/api/prompts/simple/" + modelValue.value);

  console.log(response.value);
};
</script>
