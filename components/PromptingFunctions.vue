<template>
  <ChatBox @getResponse="execute">
    <Response v-if="response" :response="response"></Response>
  </ChatBox>
</template>

<script setup>
const props = defineProps({
  page: String,
});

const { response, execute } = await useRunPage(props.page);
</script>