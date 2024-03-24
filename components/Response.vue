<template v-if="response">
  <p>{{ response }}</p>
</template>

<script setup>
defineProps(['response']);
</script>
