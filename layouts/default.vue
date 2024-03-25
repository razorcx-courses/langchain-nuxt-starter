<template>
  <div class="min-h-screen"
    :class="{
      'bg-red-200': !isLoggedIn,
      'bg-green-300': isLoggedIn,
      'bg-yellow-200': isSignUp,
    }"
  >
    <AppNav></AppNav>
    <AppHero></AppHero>
    <AppAuth><slot></slot></AppAuth>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup>
const isLoggedIn = useLoggedIn();
const isSignUp = useSignUp();
</script>
