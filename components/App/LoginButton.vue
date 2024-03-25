<template>
  <div>
    <button
      v-if="isLoggedIn && !isSignUp"
      class="flex justify-center items-center bg-pink-400 py-1 px-3 rounded-sm"
      @click="isLoggedIn = false"
    >
      <span>LOGOUT</span>
    </button>
    <button
      v-if="isSignUp"
      class="flex justify-center items-center bg-pink-400 py-1 px-3 rounded-sm"
      @click="(isLoggedIn = true) && (isSignUp = false)"
    >
      <span>LOGIN</span>
    </button>
    <button
      v-else-if="!isLoggedIn"
      class="flex justify-center items-center bg-pink-400 py-1 px-3 rounded-sm"
      @click="isSignUp = true"
    >
      <span>SIGN UP</span>
    </button>
  </div>
</template>

<script setup>
const isLoggedIn = useLoggedIn();
const isSignUp = useSignUp();
</script>
