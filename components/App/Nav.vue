<template>
  <nav
    class="sticky top-0 text-xs px-3 h-8 flex justify-between items-center bg-black text-white"
  >
    <AppLogo />

    <div class="hidden md:flex justify-between items-center gap-3 md:gap-3">
      <AppLinks></AppLinks>
    </div>

    <AppLoginButton />
  </nav>
</template>
