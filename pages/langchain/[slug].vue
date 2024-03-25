<template>
  <div>
    <component v-if="showPage(page)" :is="page"></component>
    <!-- <Joke v-if="showPage('joke')" page="joke"></Joke> -->
    <!-- <ChatPrompts v-else-if="showPage('chatprompts')" page="chatprompts"></ChatPrompts>
    <CSVListOutputParser v-else-if="showPage('csvlist')" page="csvlist"></CSVListOutputParser>
    <FewShotPrompts v-else-if="showPage('fewshot')" page="fewshot"></FewShotPrompts>
    <JsonOutputParser v-else-if="showPage('jsonparser')" page="jsonparser"></JsonOutputParser>
    <PipelinePrompts v-else-if="showPage('pipeline')" page="pipeline"></PipelinePrompts>
    <PromptingFunctions
      v-else-if="showPage('promptingfunctions')" page="promptingfunctions"
    ></PromptingFunctions>
    <RAGwithPDF v-else-if="showPage('rag')" page="rag"></RAGwithPDF> -->
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
