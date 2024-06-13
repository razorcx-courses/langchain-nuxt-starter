<template>
  <template v-for="item in items" :key="item.title">
    <a :href="item.to" v-if="item.to" target="_blank" rel="noopener">
      {{ item.title }}
    </a>
    <p v-else>{{ item.title }}</p>
  </template>
</template>

<script setup>
const items = ref(navItems);
</script>
