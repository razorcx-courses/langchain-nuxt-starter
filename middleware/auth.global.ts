export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = useLoggedIn();
  const isSignUp = useSignUp();

  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (!isLoggedIn.value) {
    if (to.path !== "/") {
      return navigateTo("/");
    }
  }
});
