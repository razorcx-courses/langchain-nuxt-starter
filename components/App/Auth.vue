<template>
  <div id="auth">
    <slot />
  </div>
</template>

<script setup>
const isLoggedIn = useLoggedIn();
const isSignUp = useSignUp();

watch([isLoggedIn, isSignUp], () => {
  // console.log("IsLoggedIn", isLoggedIn.value);
  // console.log("isSignUp", isSignUp.value);

  if (!isLoggedIn.value || !isSignUp.value) navigateTo("/");
});
</script>
