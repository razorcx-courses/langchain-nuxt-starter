<template>
  <div>
    <component v-if="showPage(page)" :is="page"></component>
  </div>
</template>

<script setup>
const route = useRoute();

const page = computed(() => {
  console.log('page', route.params.slug.toLowerCase());
  return route.params.slug.toLowerCase();
});

const showPage = (index) => {
  console.log('show page', page.value);
  return page.value === index.toLowerCase();
};
</script>
