<template>
  <div>
    <Joke v-if="showPage('joke')"></Joke>
    <ChatPrompts v-else-if="showPage('chatprompts')"></ChatPrompts>
    <CSVListOutputParser v-else-if="showPage('csvlist')"></CSVListOutputParser>
    <FewShotPrompts v-else-if="showPage('fewshot')"></FewShotPrompts>
    <JsonOutputParser v-else-if="showPage('jsonparser')"></JsonOutputParser>
    <PipelinePrompts v-else-if="showPage('pipeline')"></PipelinePrompts>
    <PromptingFunctions
      v-else-if="showPage('promptingfunctions')"
    ></PromptingFunctions>
    <RAGwithPDF v-else-if="showPage('rag')"></RAGwithPDF>
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
