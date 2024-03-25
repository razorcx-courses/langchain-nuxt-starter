<template>
  <div class="flex items-center justify-center mt-12 mx-6">
    <div class="bg-gray-100 p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
      <form>
        <div class="mb-4">
          <label
            for="username"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Username</label
          >
          <input
            type="text"
            id="username"
            name="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password</label
          >
          <input
            type="password"
            id="password"
            name="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="isLoggedIn = true"
            class="bg-black  text-white hover:text-pink-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <p @click="isSignUp = true" class="hover:text-pink-400 cursor-pointer">Sign up here</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const isLoggedIn = useState("isLoggedIn");
const isSignUp = useSignUp();
</script>
