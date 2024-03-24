<template>
  <template v-for="item in items" :key="item.title">
    <NuxtLink :to="item.to" v-if="item.to">
      {{ item.title }}
    </NuxtLink>
    <p v-else>{{ item.title }}</p>
  </template>
</template>

<script setup>
const items = ref(navItems);
</script>
