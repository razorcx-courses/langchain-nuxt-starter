<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response"></Response>
  </ChatBox>
</template>

<script setup>
const page = "promptingfunctions"
const { response, execute } = await useRunPage(page);
</script>