<template>
  <div>
    <component v-if="showPage(page)" :is="page"></component>
  </div>
</template>

<script setup>
const route = useRoute();

const page = computed(() => {
  return route.params.slug.toLowerCase();
});

const showPage = (index) => {
  return page.value === index.toLowerCase();
};
</script>
