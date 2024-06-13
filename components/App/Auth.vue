<template>
  <div id="auth">
    <slot />
  </div>
</template>

<script setup>
const isLoggedIn = useLoggedIn();
const isSignUp = useSignUp();

watch([isLoggedIn, isSignUp], () => {
  if (!isLoggedIn.value || !isSignUp.value) navigateTo("/");
});
</script>
