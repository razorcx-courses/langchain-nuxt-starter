<template>
  <template v-for="item in items" :key="item.title">
    <NuxtLink :to="item.to" v-if="item.to">
      {{ item.title }}
    </NuxtLink>
    <p v-else>{{ item.title }}</p>
  </template>
</template>

<script setup>
import { navItems } from "../../stores/navItems";
const items = ref(navItems);
</script>
