<template>
  <div class="flex flex-col pt-3 pb-5 text-white text-center bg-black">
    <h2 class="text-lg">{{ chatWindowTitle }}</h2>
    <p class="text-pink-400">{{ chatWindowDesciption }}</p>
  </div>
</template>

<script setup>
const chatWindowTitle = useState("chatWindowTitle");
const chatWindowDesciption = useState("chatWindowDesciption");
</script>
