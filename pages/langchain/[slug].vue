<template>
  <div>
    <Joke v-if="showPage('joke')" :page="page"></Joke>
    <ChatPrompts v-else-if="showPage('chatprompts')" :page="page"></ChatPrompts>
    <CSVListOutputParser v-else-if="showPage('csvlist')" :page="page"></CSVListOutputParser>
    <FewShotPrompts v-else-if="showPage('fewshot')" :page="page"></FewShotPrompts>
    <JsonOutputParser v-else-if="showPage('jsonparser')" :page="page"></JsonOutputParser>
    <PipelinePrompts v-else-if="showPage('pipeline')" :page="page"></PipelinePrompts>
    <PromptingFunctions
      v-else-if="showPage('promptingfunctions')" :page="page"
    ></PromptingFunctions>
    <RAGwithPDF v-else-if="showPage('rag')" :page="page"></RAGwithPDF>
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
