<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response"></Response>
  </ChatBox>
</template>

<script setup>
const route = useRoute();
const { response, execute } = await useRunPage(route);
</script>
