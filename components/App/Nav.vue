<template>
  <nav
    class="sticky top-0 text-xs px-3 h-8 flex justify-between items-center bg-black text-white"
  >
    <a href="/"
      ><h2 class="text-md font-medium text-pink-400">
        chatter<span class="text-white font-bold">Box</span>
      </h2></a
    >

    <div class="hidden md:flex justify-between items-center gap-3 md:gap-3">
      <AppLinks></AppLinks>
    </div>

    <button
      class="flex justify-center items-center bg-pink-400 py-1 px-3 rounded-sm"
    >
      LOGIN
    </button>
  </nav>
</template>
